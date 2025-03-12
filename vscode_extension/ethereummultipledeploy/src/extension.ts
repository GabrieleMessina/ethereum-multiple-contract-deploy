import * as vscode from "vscode";
const solc = require("solc") as any;
import * as fs from "fs";
import * as path from "path";
const Web3 = require("web3").Web3 as any;

/**
 * Compile Solidity files in workspace
 */
async function compileSolidityFiles(): Promise<void> {
    const files = await vscode.workspace.findFiles("**/*.sol", "**/node_modules/**");
    
    if (files.length === 0) {
        vscode.window.showWarningMessage("No Solidity files found in the workspace.");
        return;
    }

    const sources: { [key: string]: { content: string } } = {};
    const fileNameToFilePath: { [key: string]: string } = {};
    for (const fileUri of files) {
        const filePath = fileUri.fsPath;
        const source = fs.readFileSync(filePath, "utf8");
        sources[path.basename(filePath)] = { content: source };
        fileNameToFilePath[path.basename(filePath)] = filePath;
    }

    const input = {
        language: "Solidity",
        sources: sources,
        settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } }
    };

    try{
        const output = JSON.parse(solc.compile(JSON.stringify(input)));
        
        if (output.errors) {
            vscode.window.showErrorMessage("Compilation failed: " + output.errors[0].formattedMessage);
            return;
        }

        for (const fileName in output.contracts) {
            for (const contractName in output.contracts[fileName]) {
                const contract = output.contracts[fileName][contractName];
                
                // Save compiled files
                const outputDir = path.join(path.dirname(fileNameToFilePath[fileName]), "build");
                if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
                
                fs.writeFileSync(
                    path.join(outputDir, `${contractName}.abi`),
                    JSON.stringify(contract.abi, null, 2),
                    { flag: 'w' }
                );
                fs.writeFileSync(
                    path.join(outputDir, `${contractName}.bin`),
                    contract.evm.bytecode.object,
                    { flag: 'w' }
                );
            }
        }
    }
    catch (error) {
        vscode.window.showErrorMessage("Compilation failed: " + error);
    }
    
    vscode.window.showInformationMessage("Solidity files compiled successfully.");
}

/**
 * Deploy compiled Solidity contract
 */
async function deployContract(contractName: string = "CalculatorAgent", artifactsPath: string = "build"): Promise<string|undefined> {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545"); // Connect to local Hardhat or similar
    const accounts = await web3.eth.getAccounts();
    const deployerAccount = accounts[0]; // Use the first account from local node

    const abiPath = path.join(artifactsPath, `${contractName}.abi`);
    const binPath = path.join(artifactsPath, `${contractName}.bin`);

    if (!fs.existsSync(abiPath) || !fs.existsSync(binPath)) {
        vscode.window.showErrorMessage(`Compiled contract ${contractName} not found.`);
        return;
    }
    
    const abi = JSON.parse(fs.readFileSync(abiPath, "utf8"));
    const bytecode = fs.readFileSync(binPath, "utf8");
    
    const contract = new web3.eth.Contract(abi);
    
    try {
        const deployedContract = await contract.deploy({ data: "0x" + bytecode })
            .send({ from: deployerAccount, gas: "5000000" });
        
        vscode.window.showInformationMessage(`${contractName}: ${deployedContract.options.address}`);

        try{//test if source code has been correctly modified with dependent contract address
            let calculatorAddress = await deployedContract.methods.getCalculatorAddress().call({ from: deployerAccount });
            vscode.window.showInformationMessage(`GetAddress: ${calculatorAddress}`);
        }
        finally{
            return deployedContract.options.address
        }
    } catch (error) {
        vscode.window.showErrorMessage("Deployment failed: " + error);
    }
}

async function DeployMultipleContracts(): Promise<{[path:string]: string}> {
    const vscodeWorkspaceFolder = vscode.workspace.workspaceFolders?.at(0)?.uri.fsPath ?? "";
    const artifactsFolder = path.join(vscodeWorkspaceFolder, "build")

    const files = await vscode.workspace.findFiles("**/*.sol", "**/node_modules/**");

    if (files.length === 0) {
        vscode.window.showWarningMessage("No Solidity files found in the workspace.");
        return {};
    }

    const sources: { [key: string]: { content: string } } = {};
    const fileNameToFilePath: { [key: string]: string } = {};
    for (const fileUri of files) {
        const filePath = fileUri.fsPath;
        const source = fs.readFileSync(filePath, "utf8");
        sources[path.basename(filePath)] = { content: source };
        fileNameToFilePath[path.basename(filePath)] = filePath;
    }

    let interfaceUsageRegex = (iterfaceName: string) => new RegExp(String.raw`${iterfaceName} (?<visibility>public|private|internal|constant|immutable|transient)*\s?(?<name>\w+)(.*);`, "gm");
    let retrieveInterfaceUsageStatementWithAddress = (iterfaceName: string, address: string, visibility?:string, variableName?:string) => {
        if(!!visibility)return `${iterfaceName} ${visibility} ${variableName} = ${iterfaceName}(${address});`;
        else return `${iterfaceName} ${variableName} = ${iterfaceName}(${address});`;
    }
    let interfaceDeclarationRegex = /interface (?<name>\w+)/gm;

    //Support data structures
    let InterfaceDefinedByFile: { [path: string]: string[] } = {} //{pathWhereDefined: [interfaceDefined]}
    let InterfaceUsedByFile: { [path: string]: string[] } = {} //{pathsWhereUsed: [interfaceUsed]}
    let InterfaceToSourceDefinition: { [name: string]: string } = {} //{interfaceDefined: pathWhereDefined}
    let InterfaceToUsages: { [name: string]: string[] } = {} //{interfaceUsed: [pathsWhereUsed]}

    let markedContracts:string[] = []
    let publishedContractNames:{[path:string]: string} = {} //{sourceFilePath: address}
    let publishedContractSource:{[path:string]: string} = {} //{sourceFilePath: sourceCode}

    // Read source code to create list of declared interfaces.
    for (let sourceFilePath of Object.values(fileNameToFilePath)) { //for each source file
        InterfaceUsedByFile[sourceFilePath] = []
        InterfaceDefinedByFile[sourceFilePath] = []

        let source:string = fs.readFileSync(sourceFilePath, {encoding: 'utf8'});
        publishedContractSource[sourceFilePath] = source;
        let matches = source.matchAll(interfaceDeclarationRegex)
        for (let match of matches) {
            let interfaceName = match.groups ? match.groups["name"] : undefined;
            if (!interfaceName) {
                continue;
            }
            if ((interfaceName in InterfaceToSourceDefinition)) {
                throw new Error("Interface " + interfaceName + " defined multiple times.")
            }
            InterfaceToSourceDefinition[interfaceName] = sourceFilePath
            InterfaceDefinedByFile[sourceFilePath].push(interfaceName)
        }
    }

    // Read source code to create dependency graph
    for (let [interfaceName, path] of Object.entries(InterfaceToSourceDefinition)) { //search for usage of this interface in all source files
        if (!(interfaceName in InterfaceToUsages)) {
            InterfaceToUsages[interfaceName] = []
        }
        for (let path of Object.values(fileNameToFilePath)) { // for each source file
            let source = publishedContractSource[path];
            let matches = source.matchAll(interfaceUsageRegex(interfaceName))
            for (let match of matches) { // for each interface usage found
                InterfaceToUsages[interfaceName].push(path)
                InterfaceUsedByFile[path].push(interfaceName)
            }
        }
    }

    console.log("{pathWhereDefined: [interfaceDefined]}", InterfaceDefinedByFile)
    console.log("{interfaceDefined: pathWhereDefined}", InterfaceToSourceDefinition)
    console.log("{pathsWhereUsed: [interfaceUsed]}", InterfaceUsedByFile)
    console.log("{interfaceUsed: [pathsWhereUsed]}", InterfaceToUsages)
    console.log("[markedContracts]", markedContracts)

    // Publish contracts in the righ order based on dependency and alter source code with new addresses
    for (let path of Object.values(fileNameToFilePath)) { // for each source file
        await publishContractAndDependencies(path)
    }

    return publishedContractNames;

    //Utility functions
    async function publishContractAndDependencies(pathToSourceFile: string): Promise<void> {
        console.log(`deploying with dependencies ${pathToSourceFile}`)
        if (pathToSourceFile in publishedContractNames){
            return;
        }
        if (markedContracts.includes(pathToSourceFile)) {
            console.log("[markedContracts]", markedContracts)
            throw Error("Circular Dependency Detected.")
        }
        markedContracts.push(pathToSourceFile)
        for (let interfaceName of InterfaceUsedByFile[pathToSourceFile]) {
            let interfaceSource = InterfaceToSourceDefinition[interfaceName]
            if(interfaceSource != pathToSourceFile){
                await publishContractAndDependencies(interfaceSource)
            }
        }

        await compileSolidityFiles();
        let newContractAddress = await deployContract(path.basename(pathToSourceFile, ".sol"), artifactsFolder)
        if (!newContractAddress) {
            throw Error("Failed to deploy contract.")
        }
        publishedContractNames[pathToSourceFile] = newContractAddress;
        alterSourceFilesWithDependencyOn(pathToSourceFile);
    }

    async function alterSourceFilesWithDependencyOn(pathToSourceFile: string): Promise<void> {
        let newAddress = publishedContractNames[pathToSourceFile]
        let interfaceWithNewAddresses = InterfaceDefinedByFile[pathToSourceFile]
        for(let interfaceName of interfaceWithNewAddresses){
            let filesToUpdate = InterfaceToUsages[interfaceName]
            // Alter source code to insert newly created contract addresses
            for (let dependentSourceFile of filesToUpdate){
                if(dependentSourceFile == pathToSourceFile){
                    continue;
                }
                //put this address in source code.
                let source = publishedContractSource[dependentSourceFile];
                let matches = source.matchAll(interfaceUsageRegex(interfaceName));
                for (let match of matches){
                    if (match.groups) {
                        let finalDeclaration = retrieveInterfaceUsageStatementWithAddress(interfaceName, newAddress, match.groups["visibility"], match.groups["name"]);
                        source = source.replace(interfaceUsageRegex(interfaceName), finalDeclaration);
                    }
                }
                publishedContractSource[dependentSourceFile] = source;
                fs.writeFileSync(dependentSourceFile, source);
            }
        }
    }
}

/**
 * Register VS Code commands
 */
export function activate(context: vscode.ExtensionContext): void {
    context.subscriptions.push(
        vscode.commands.registerCommand('ethereummultipledeploy.helloWorld', () => {vscode.window.showInformationMessage('Hello World from EthereumMultipleDeploy!');}),
        vscode.commands.registerCommand("ethereummultipledeploy.compile", compileSolidityFiles),
        vscode.commands.registerCommand("ethereummultipledeploy.deployToRemix", deployContract),
        vscode.commands.registerCommand("ethereummultipledeploy.deployMultipleContracts", DeployMultipleContracts),
        // vscode.commands.registerCommand("ethereummultipledeploy.deployToRemix", deployToRemixCancun),
        // vscode.commands.registerCommand("ethereummultipledeploy.deployToRemix", async () => {
        //     const contractName = await vscode.window.showInputBox({ prompt: "Enter contract name to deploy" });
        //     if (contractName) {
        //         const contractPath = path.join(vscode.workspace.rootPath ?? "", "build");
        //         await deployContract(contractName, contractPath);
        //     }
        // })
    );
}

export function deactivate(): void {}
import * as vscode from "vscode";
const solc = require("solc") as any;
import * as fs from "fs";
import * as path from "path";
import { DeployView } from "./views/DeployWebView";
import { InterfaceDefinition } from "./antlr/InterfaceDefinition";
import { InterfaceUsage } from "./antlr/InterfaceUsage";
const Web3 = require("web3").Web3 as any;
const SolidityParserListener = import("./antlr/SolidityParserListener.mjs");

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

    try {
        const output = JSON.parse(solc.compile(JSON.stringify(input)));
        
        if (output.errors) {
            vscode.window.showErrorMessage("Compilation failed: " + output.errors[0].formattedMessage);
            return;
        }

        saveCompiledContracts(output, fileNameToFilePath);
    } catch (error) {
        vscode.window.showErrorMessage("Compilation failed: " + error);
    }
}

function saveCompiledContracts(output: any, fileNameToFilePath: { [key: string]: string }) {
    for (const fileName in output.contracts) {
        for (const contractName in output.contracts[fileName]) {
            const contract = output.contracts[fileName][contractName];
            
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

/**
 * Deploy compiled Solidity contract
 */
async function deployContract(contractName: string = "CalculatorAgent", artifactsPath: string = "build", web3ProviderUrl: string = "ws://localhost:8545", accountIndex: number = 0): Promise<string | undefined> {
    const web3 = new Web3(Web3.givenProvider || web3ProviderUrl);
    const accounts = await web3.eth.getAccounts();
    const deployerAccount = accounts[accountIndex];

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

        await testDeployedContract(deployedContract, deployerAccount);
        return deployedContract.options.address;
    } catch (error) {
        vscode.window.showErrorMessage("Deployment failed: " + error);
    }
}

async function testDeployedContract(deployedContract: any, deployerAccount: string) {
    try {
        let response = await deployedContract.methods.getFirstAddress().call({ from: deployerAccount });
        vscode.window.showInformationMessage(`GetFirst: ${response}`);
    } catch {
    }

    try {
        let response = await deployedContract.methods.getSecondAddress().call({ from: deployerAccount });
        vscode.window.showInformationMessage(`GetSecond: ${response}`);
    } catch {
    }
}

/**
 * Deploy compiled Solidity contracts in bulk
 */
async function DeployMultipleContracts(web3ProviderUrl: string = "ws://localhost:8545", accountIndex: number = 0): Promise<void> {
    try {
        const vscodeWorkspaceFolder = vscode.workspace.workspaceFolders?.at(0)?.uri.fsPath ?? "";
        const artifactsFolder = path.join(vscodeWorkspaceFolder, "build");
        const filePaths = (await vscode.workspace.findFiles("**/*.sol", "**/node_modules/**")).map(file => file.fsPath);

        if (filePaths.length === 0) {
            vscode.window.showWarningMessage("No Solidity files found in the workspace.");
            return;
        }

        const markedContracts = [] as string[];
        const publishedContracts = {} as { [path: string]: string }; // Map of source file path to contract address
        const contractPathToSource = readContractSources(filePaths);
        const interfaceDefinitions = {} as { [path: string]: InterfaceDefinition[] };
        const interfaceUsages = {} as { [path: string]: InterfaceUsage[] };
        
        for (const sourceFilePath of filePaths) {
            interfaceDefinitions[sourceFilePath] = await extractInterfaceDefinitionInfo(contractPathToSource[sourceFilePath]);
            interfaceUsages[sourceFilePath] = await collectInterfaceUsageData(contractPathToSource[sourceFilePath]);
        }
        
        for (const sourceFilePath of filePaths) {
            await publishContractAndDependencies(
                sourceFilePath,
                markedContracts,
                publishedContracts, 
                interfaceDefinitions, 
                interfaceUsages, 
                contractPathToSource,
                artifactsFolder, 
                web3ProviderUrl, 
                accountIndex
            );
        }

        vscode.window.showInformationMessage("Multiple Deployment succeded: " + JSON.stringify(publishedContracts));
    } catch (e) {
        vscode.window.showErrorMessage("Multiple Deployment failed: " + e);
    }
}

function readContractSources(filePaths: string[]): { [path: string]: string; }
{
    const sources = {} as { [path: string]: string };
    for (let filePath of filePaths) {
        sources[filePath] = fs.readFileSync(filePath, "utf8");
    }
    return sources;
}

async function publishContractAndDependencies(
    pathToSourceFile: string, 
    markedContracts: string[],
    publishedContracts: { [path: string]: string },
    interfaceDefinitions: { [path: string]: InterfaceDefinition[] },
    interfaceUsages: { [path: string]: InterfaceUsage[] },
    contractPathToSource: { [path: string]: string },
    artifactsFolder: string, 
    web3ProviderUrl: string, 
    accountIndex: number
): Promise<void> {
    if (publishedContracts[pathToSourceFile]) {
        return;
    }
    if (markedContracts.includes(pathToSourceFile)) {
        console.log("[markedContracts]", markedContracts);
        throw Error("Circular Dependency Detected.");
    }
    markedContracts.push(pathToSourceFile);
    for (const iface of interfaceUsages[pathToSourceFile]) {
        const interfaceDefPath = Object.entries(interfaceDefinitions).filter(dict => dict[1].filter(i => i.name === iface.interfaceName))?.map(dict => dict[0])[0];
        if (interfaceDefPath != pathToSourceFile) {
            await publishContractAndDependencies(
                interfaceDefPath, 
                markedContracts, 
                publishedContracts,
                interfaceDefinitions, 
                interfaceUsages, 
                contractPathToSource,
                artifactsFolder, 
                web3ProviderUrl, 
                accountIndex
            );
        }
    }

    await compileSolidityFiles();
    let newContractAddress = await deployContract(path.basename(pathToSourceFile, ".sol"), artifactsFolder, web3ProviderUrl, accountIndex);
    if (!newContractAddress) {
        throw Error("Failed to deploy contract.");
    }
    publishedContracts[pathToSourceFile] = newContractAddress;
    await alterSourceFilesWithDependencyOn(pathToSourceFile, newContractAddress, interfaceDefinitions, interfaceUsages, contractPathToSource);
}

async function alterSourceFilesWithDependencyOn(
    pathToSourceFile: string, 
    newContractAddress:string,
    interfaceDefinitions: { [path: string]: InterfaceDefinition[] },
    interfaceUsages: { [path: string]: InterfaceUsage[] },
    contractPathToSource: { [path: string]: string },
): Promise<void> {
    let newAddress = newContractAddress;
    let interfaceWithNewAddresses = interfaceDefinitions[pathToSourceFile];
    for (let iface of interfaceWithNewAddresses) {
        let filesToUpdate = Object.entries(interfaceUsages).filter(dict => dict[1].filter(i => i.interfaceName === iface.name)).map(dict => dict[0]);
        for (let dependentSourceFile of filesToUpdate) {
            if (dependentSourceFile == pathToSourceFile) {
                continue;
            }
            let source = contractPathToSource[dependentSourceFile];
            let matches = (await SolidityParserListener).SolidityParserListener.GetInterfaceUsageInSource(source);
            for (let match of matches) {
                if (match.interfaceName === iface.name) {
                    source = (await SolidityParserListener).SolidityParserListener.AlterInterfaceUsageWithAddress(source, match, newAddress);
                }
            }
            fs.writeFileSync(dependentSourceFile, source);
            contractPathToSource[dependentSourceFile] = source;
        }
    }
}

async function collectInterfaceUsageData(source: string) {
    return (await SolidityParserListener).SolidityParserListener.GetInterfaceUsageInSource(source);
}

async function extractInterfaceDefinitionInfo(source: string) {
    return (await SolidityParserListener).SolidityParserListener.GetInterfaceDefinitionsInSource(source);
}

/**
 * Register VS Code commands
 */
export function activate(context: vscode.ExtensionContext): void {
    const provider = new DeployView(context.extensionUri);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(DeployView.viewType, provider)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("ethereummultipledeploy.deployMultipleContracts", DeployMultipleContracts)
    );
}

export function deactivate(): void {}
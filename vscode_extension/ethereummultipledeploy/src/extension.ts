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
                
                await fs.writeFileSync(
                    path.join(outputDir, `${contractName}.abi`),
                    JSON.stringify(contract.abi, null, 2)
                );
                await fs.writeFileSync(
                    path.join(outputDir, `${contractName}.bin`),
                    contract.evm.bytecode.object
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
async function deployContract(): Promise<void> {
    const contractName: string = "CalculatorAgent";
    const contractPath: string = "build";

    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545"); // Connect to local Hardhat or similar
    const accounts = await web3.eth.getAccounts();
    const deployerAccount = accounts[0]; // Use the first account from local node

    const abiPath = path.join(contractPath, `${contractName}.abi`);
    const binPath = path.join(contractPath, `${contractName}.bin`);

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

        const calculatorAddress = await deployedContract.methods.getCalculatorAddress().call({ from: deployerAccount });

        vscode.window.showInformationMessage(`GetAddress: ${calculatorAddress}`);
    } catch (error) {
        vscode.window.showErrorMessage("Deployment failed: " + error);
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
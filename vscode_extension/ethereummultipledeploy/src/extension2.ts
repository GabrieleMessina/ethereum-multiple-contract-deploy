// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// // This method is called when your extension is activated
// // Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "ethereummultipledeploy" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	const disposable = vscode.commands.registerCommand('ethereummultipledeploy.helloWorld', () => {
// 		// The code you place here will be executed every time your command is executed
// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello World from EthereumMultipleDeploy!');
// 	});

// 	context.subscriptions.push(disposable);
// }

// // This method is called when your extension is deactivated
// export function deactivate() {}

// Import necessary modules
// const vscode = require("vscode");
const solc = require("solc");
const fs = require("fs");
const path = require("path");
const Web3 = require("web3");

// Web3 setup (change provider URL as needed)
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
const deployerAccount = web3.eth.accounts.wallet.add("YOUR_PRIVATE_KEY");

/**
 * Compile Solidity files in workspace
 */
async function compileSolidityFiles() {
    const files = await vscode.workspace.findFiles("**/*.sol", "**/node_modules/**");
    
    files.forEach(async (fileUri) => {
        const filePath = fileUri.fsPath;
        const source = fs.readFileSync(filePath, "utf8");
        
        const input = {
            language: "Solidity",
            sources: {
                [path.basename(filePath)]: { content: source }
            },
            settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } }
        };
        
        const output = JSON.parse(solc.compile(JSON.stringify(input)));
        
        for (let contractName in output.contracts[path.basename(filePath)]) {
            const contract = output.contracts[path.basename(filePath)][contractName];
            
            // Save compiled files
            const outputDir = path.join(path.dirname(filePath), "build");
            if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
            
            fs.writeFileSync(
                path.join(outputDir, `${contractName}.abi`),
                JSON.stringify(contract.abi, null, 2)
            );
            fs.writeFileSync(
                path.join(outputDir, `${contractName}.bin`),
                contract.evm.bytecode.object
            );
        }
    });
    vscode.window.showInformationMessage("Solidity files compiled successfully.");
}

/**
 * Deploy compiled Solidity contract
 */
async function deployContract(contractName: string, contractPath: string) {
    const abi = JSON.parse(fs.readFileSync(path.join(contractPath, `${contractName}.abi`), "utf8"));
    const bytecode = fs.readFileSync(path.join(contractPath, `${contractName}.bin`), "utf8");
    
    const contract = new web3.eth.Contract(abi);
    
    const deployedContract = await contract.deploy({ data: "0x" + bytecode })
        .send({ from: deployerAccount.address, gas: 5000000 });
    
    vscode.window.showInformationMessage(`Contract ${contractName} deployed at: ${deployedContract.options.address}`);
}

/**
 * Register VS Code commands
 */
function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand("solidityCompiler.compile", compileSolidityFiles),
        vscode.commands.registerCommand("solidityCompiler.deploy", async () => {
            const contractName = await vscode.window.showInputBox({ prompt: "Enter contract name to deploy" });
            if (contractName) {
                const contractPath = path.join(vscode.workspace.rootPath, "build");
                await deployContract(contractName, contractPath);
            }
        })
    );
}

function deactivate() {}

module.exports = { activate, deactivate };


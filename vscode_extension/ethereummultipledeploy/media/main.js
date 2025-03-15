// @ts-nocheck

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();

    const currentState = { web3ProviderUrl: 'ws://localhost:8545', accountIndex: 0 };

    const prevState = vscode.getState();
    if(prevState){
        currentState.web3ProviderUrl = prevState.web3ProviderUrl;
        currentState.accountIndex = prevState.accountIndex;
    }

    vscode.postMessage({ type: 'init', web3ProviderUrl: currentState.web3ProviderUrl, accountIndex: currentState.accountIndex });

    document.querySelector('#deployButton').addEventListener('click', () => {
        vscode.postMessage({ type: 'deploy', web3ProviderUrl: currentState.web3ProviderUrl, accountIndex: currentState.accountIndex });
    });
    
    document.querySelector('#web3ProviderUrl').addEventListener('input', () => {
        currentState.web3ProviderUrl = document.querySelector('#web3ProviderUrl')?.value;
        vscode.setState(currentState);
    });
    
    document.querySelector('#accountIndex').addEventListener('input', () => {
        currentState.accountIndex = Number(document.querySelector('#accountIndex')?.value);
        vscode.setState(currentState);
    });
}());


import { ethers } from 'ethers'
/**
 * Deploy all the contracts in workspace
 * @param {Number} accountIndex account index from the exposed account
 * @return {Contracts} deployed contracts
 */
export const deploy = async (accountIndex?: number): Promise<ethers.Contract[]> => { //TODO: add contract names that you actually want to deploy (is not obvious that you want to publish always all of them).

    // Note that the script needs the ABI which is generated from the compilation artifact.
    // Make sure contract is compiled and artifacts are generated
    let contractsFolder = `browser/contracts`
    let artifactsFolder = `browser/contracts/artifacts`

    let _sourceCodePaths = await remix.call('fileManager', 'readdir', contractsFolder); // {path: {'isDirectory':bool}}
    let sourceCodePaths = Object.entries(_sourceCodePaths).filter(([path, __], _) => path.endsWith('.sol') && !path.endsWith('.sol.sol')).map(([path, __], _) => path)
    console.log(`Analyzing ${sourceCodePaths.length} contracts`)
    console.log("[sourceCodePaths]", sourceCodePaths)
    
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
    let publishedContractNames:{[path:string]: ethers.Contract} = {} //{sourceFilePath: contract}
    let publishedContractSource:{[path:string]: string} = {} //{sourceFilePath: sourceCode}

    // Read source code to create list of declared interfaces.
    for (let path of sourceCodePaths) { //for each source file
        InterfaceUsedByFile[path] = []
        InterfaceDefinedByFile[path] = []

        let source = await remix.call('fileManager', 'readFile', path);
        publishedContractSource[path] = source;
        let matches = source.matchAll(interfaceDeclarationRegex)
        for (let match of matches) {
            let interfaceName = match.groups["name"]
            if ((interfaceName in InterfaceToSourceDefinition)) {
                throw new Error("Interface " + interfaceName + " defined multiple times.")
            }
            InterfaceToSourceDefinition[interfaceName] = path
            InterfaceDefinedByFile[path].push(match.groups["name"])
        }
    }

    // Read source code to create dependency graph
    for (let [interfaceName, path] of Object.entries(InterfaceToSourceDefinition)) { //search for usage of this interface in all source files
        if (!(interfaceName in InterfaceToUsages)) {
            InterfaceToUsages[interfaceName] = []
        }
        for (let path of sourceCodePaths) { // for each source file
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
    for (let path of sourceCodePaths) { // for each source file
        await publishContractAndDependencies(path, accountIndex)
    }

    async function publishContractAndDependencies(pathToSourceFile: string): Promise<{[path:string]: ethers.Contract}> {
        console.log(`deploying with dependencies ${pathToSourceFile}`)
        if (pathToSourceFile in publishedContractNames){
            return publishedContractNames[pathToSourceFile];
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
        let source = publishedContractSource[pathToSourceFile]
        publishedContractNames[pathToSourceFile] = (await publishContract(pathToSourceFile, source))
        alterSourceFilesWithDependencyOn(pathToSourceFile);

        return publishedContractNames
    }

    async function alterSourceFilesWithDependencyOn(pathToSourceFile: string){
        let newAddress = publishedContractNames[pathToSourceFile].address
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
                    let finalDeclaration = retrieveInterfaceUsageStatementWithAddress(interfaceName, newAddress, match.groups["visibility"], match.groups["name"])
                    source = source.replace(interfaceUsageRegex(interfaceName), finalDeclaration);
                }
                publishedContractSource[dependentSourceFile] = source;
                await remix.call('fileManager', 'writeFile', dependentSourceFile, source);
            }
        }
    }

    return Object.values(publishedContractNames)
}

let publishContract = async (contractSourcePath: string, source:string, accountIndex?: number): Promise<ethers.Contract> => {
    console.log(`deploying ${contractSourcePath}`)
    let signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(accountIndex)
    let metadata = await buildContract(contractSourcePath, source)
    let contractName = `${contractSourcePath}`.split('/').pop().replace(".sol", "")
    metadata = metadata[contractName]
    let factory = new ethers.ContractFactory(metadata.abi, metadata.evm.bytecode.object, signer)
    let contract = await factory.deploy()
    contract = await contract.deployed()
    // let contracts = []
    // for (let contractName of Object.keys(metadata)){
    //     let factory = new ethers.ContractFactory(metadata[contractName].abi, metadata[contractName].data.bytecode.object, signer)
    //     let contract = await factory.deploy()
    //     await contract.deployed()
    //     contracts.push(contract)
    // }
    return contract
}

let buildContract = async (contractSourcePath: string, source: string): Promise<Object> => {

    let source2 = await remix.call('fileManager', 'readFile', contractSourcePath);
    // console.log(`building ${contractSourcePath}`, source, source2)

    await remix.call('manager', 'activatePlugin', 'solidity');
    await remix.call('editor', 'open', contractSourcePath);
    // contractSourcePath = contractSourcePath+".sol"
    let options:any = { language: 'Solidity', sources: { contractSourcePath: { content: source } }, settings: { optimizer:{enabled:true, runs:200}, outputSelection: { '*': { '': ['ast'], "*": ["abi", "metadata", "devdoc", "userdoc", "storageLayout", "evm.legacyAssembly", "evm.bytecode", "evm.deployedBytecode", "evm.methodIdentifiers", "evm.gasEstimates", "evm.assembly"] } } } }
    // let options:any = { language: 'Solidity', sources: { contractSourcePath: { ulrs: [contractSourcePath] } }, settings: { optimizer:{enabled:true, runs:200}, outputSelection: { '*': { '': ['ast'], "*": ["abi", "metadata", "devdoc", "userdoc", "storageLayout", "evm.legacyAssembly", "evm.bytecode", "evm.deployedBytecode", "evm.methodIdentifiers", "evm.gasEstimates", "evm.assembly"] } } } }
    await remix.call('solidity', 'compile', options);
    let compiledData = await remix.call('solidity', 'getCompilationResult');
    console.log(Object.keys(compiledData.data.contracts))
    let metadata = compiledData.data.contracts[contractSourcePath]
    return metadata; //could be many contracts
}

// function artifactPathFromSourcePath(sourcePath:string):string{
//     let pathCopy = `${sourcePath}`.split('/')
//     let contractName = pathCopy.pop()
//     let basePath = pathCopy.join('/')
//     let pathToArtifactFile = basePath+"/artifacts/"+contractName
//     return pathToArtifactFile.replace(".sol", ".json")
// }
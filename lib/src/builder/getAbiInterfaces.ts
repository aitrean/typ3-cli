import { getPath, getName, getAbiSignature } from './utils'
import { Output } from '../io';
import { interfaces } from '../builder'
import { parseTypings } from './typingsParser'

export const getAbiInterfaces = (abi, interfaceName, outputFile): string => {
 let abiTypings = '';
 let connectedAbiTypings = '';
 let parameterCount = 0;
 abi.forEach(functionDefinition => {
	if(functionDefinition.type !== 'event' && functionDefinition.type !== 'fallback') {
		abiTypings += `${getFunctionName(functionDefinition, interfaceName)}: ${getAbiSignature(functionDefinition)}${parseTypings(functionDefinition)};\n`;
		connectedAbiTypings += `${getFunctionName(functionDefinition, interfaceName)}: ${getAbiSignature(functionDefinition)}Connected${parseTypings(functionDefinition)};\n`;
	}
})

	const contractInterface = `export interface I${interfaceName} {\n${abiTypings}}`
	const connectedContractInterface = `export interface I${interfaceName}Connected {\n${connectedAbiTypings}}`

	const combinedContractInterface = `${contractInterface}\n${connectedContractInterface}`
	return combinedContractInterface;
}

//TODO enable no-implicit-any
const getFunctionName = (functionDefinition, interfaceName) => {
	if(functionDefinition.name){
		return functionDefinition.name
	} else {
		return interfaceName.charAt(0).toLowerCase() + interfaceName.slice(1)
	}
}

import { getPath, getName, getAbiSignature } from './utils'
import { Output } from '../io';
import { interfaces } from '../builder'
import { parseTypings } from './typingsParser'

export const getAbiInterfaces = (abi, interfaceName, outputFile): string => {
 let abiTypings = '';
 let parameterCount = 0;
 abi.forEach(functionDefinition => {
	abiTypings += `${functionDefinition.name ? `${functionDefinition.name}` : `${interfaceName.charAt(0).toLowerCase() + interfaceName.slice(1)}`}: ${getAbiSignature(functionDefinition)}<${parseTypings(functionDefinition)}>;\n`;
})

	const contractInterface = `export interface I${interfaceName} {\n${abiTypings}}`
	const connectedContractInterface = `export interface I${interfaceName}Connected {\n${abiTypings}}`

	const combinedContractInterface = `${contractInterface}\n${connectedContractInterface}`
	return combinedContractInterface;
}

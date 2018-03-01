import { functionDefinition } from './types';
import { getPath, getName, getDetails } from './utils'
import { Output } from '../io';
import { interfaces } from '../builder'

export const getAbiInterfaces = (abi: any, interfaceName: string, outputFile: string): string => {
 let abiTypings = '';
 let parameterCount = 0;
 abi.forEach((functionDefinition: functionDefinition) => {
	abiTypings += `${functionDefinition.name ? `${functionDefinition.name}` : `${interfaceName.charAt(0).toLowerCase() + interfaceName.slice(1)}`}: ${getDetails(functionDefinition)};\n`;
})

	const contractInterface = `export interface I${interfaceName} {\n${abiTypings}}`
	const connectedContractInterface = `export interface I${interfaceName}Connected {\n${abiTypings}}`

	const combinedContractInterface = `${contractInterface}\n${connectedContractInterface}`
	return combinedContractInterface;
}
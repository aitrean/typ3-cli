import { functionDefinition } from '../Types/AbiTypes';
import { getPath, getName, getDetails } from './utils'
import { Output } from '../io';

export const getAbiDeclaration = (abi: any, interfaceName: string, outputFile: string): string => {
 let abiTypings = '';
 let connectedAbiTypings = '';
 let parameterCount = 0;
 abi.forEach((functionDefinition: functionDefinition) => {
	if(functionDefinition.type !== 'event' && functionDefinition.type !== 'fallback'){
		abiTypings += `${functionDefinition.name ? `${functionDefinition.name}` : `${interfaceName.charAt(0).toLowerCase() + interfaceName.slice(1)}`}: ${getDetails(functionDefinition)};\n`;
	}
})

	const contractInterface = `export interface I${interfaceName} {\n${abiTypings}}`
	const connectedContractInterface = `export interface I${interfaceName}Connected {\n${connectedAbiTypings}}`

	const combinedContractInterface = `${contractInterface}\n${connectedContractInterface}`
	return combinedContractInterface;
}

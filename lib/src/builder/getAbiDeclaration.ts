import { defaultProperties } from './staticContent';
import { FunctionDefinition } from '../Types/AbiTypes';
import { getPath, getName, getDetails, parseOverloadedFunctions } from './utils'
import { parseAbi } from './parseAbi'
import { Output } from '../io';

export const getAbiDeclaration = (abi: any, interfaceName: string): string => {
 let abiTypings = '';
 let connectedAbiTypings = '';
 let constructorTypings = '';
 const abiObject = parseAbi(abi);
 if(abiObject.constructorFunction && abiObject.constructorFunction.inputs) {
	 constructorTypings += `${getDetails(abiObject.constructorFunction, true)}\n`
 } else {
	 constructorTypings += `never\n`
 }

 if(abiObject.overloadedFunctions){
	Object.keys(abiObject.overloadedFunctions).forEach((name: string) => {
		abiTypings += `${name}: ${parseOverloadedFunctions(abiObject.overloadedFunctions[name])}\n`
		connectedAbiTypings += `${name}: ${parseOverloadedFunctions(abiObject.overloadedFunctions[name], true)}\n`
	 })
 }
 if(abiObject.regularFunctions){
	Object.keys(abiObject.regularFunctions).forEach((name: string) => {
		const func = abiObject.regularFunctions[name]
		abiTypings += `${name}: ${getDetails(func)}\n`
		connectedAbiTypings += `${name}: ${getDetails(func, true)};\n`
	})
 }

	const contractInterface = `export interface I${interfaceName}{\n${abiTypings}}`
	const connectedContractInterface = `export interface I${interfaceName}Connected {\n${defaultProperties}${connectedAbiTypings}}\n`
	const connectedContractConstructor = `export type I${interfaceName}Constructor = ${constructorTypings}`

	const combinedContractInterface = `${contractInterface}\n${connectedContractInterface}${connectedContractConstructor}`
	return combinedContractInterface;
}
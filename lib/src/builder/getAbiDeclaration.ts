import { defaultProperties } from './staticContent';
import { FunctionDefinition } from '../Types/AbiTypes';
import { getPath, getName, getDetails } from './utils'
import { Output } from '../io';

declare interface AbiObject {
	constructorFunction: FunctionDefinition
	overloadedFunctions: {
		[func: string]: FunctionDefinition[]
	}
	regularFunctions: {
		[func: string]: FunctionDefinition
	}
}

export const getAbiDeclaration = (abi: any, interfaceName: string): string => {
 let abiTypings = '';
 let connectedAbiTypings = '';
 let constructorTypings = '';
 const abiObject = parseAbi(abi);
 if(abiObject.constructor && abiObject.constructorFunction.inputs) {
	 constructorTypings += `${getDetails(abiObject.constructor, true)}\n`
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

export const parseAbi = (abi: any[]): AbiObject => {
	const abiObject: AbiObject = {overloadedFunctions: {}, regularFunctions: {}, constructorFunction: {}}
	//extract all functions
	abi = abi.filter(functionObject => {
		const {name, type, ...rest} = functionObject;
		return (type === 'function' || type === 'constructor') ? true : false
	})
	//sort sort function types into their respective categories (functions, overloaded functions, constructor)
	//TODO add support for events and fallback later
	abi.map(functionObject => {
		const { type } = functionObject
		if(type === 'constructor'){
			abiObject.constructorFunction = functionObject;
			return abiObject;
		} else {
			const { name, ...values } = functionObject
			if(abiObject.overloadedFunctions[name]){
				abiObject.overloadedFunctions[name].push({...values})
			} else if(abiObject.regularFunctions[name]){
				abiObject.overloadedFunctions[name] = [{...values}]
				abiObject.overloadedFunctions[name].push(abiObject.regularFunctions[name])
				delete abiObject.regularFunctions[name]
			} else {
				abiObject.regularFunctions[name] = {...values}
			}
		}
	})
	return abiObject;
}

const parseOverloadedFunctions = (overloadedFunctions: FunctionDefinition[], connected?: boolean) => {
	let details = overloadedFunctions.map(func => {
		return getDetails(func, connected)
	})
	details = [...new Set(details)] //remove duplicates, since multiple Solidity typings may sometimes convert 
	return details.join(' | ')
}
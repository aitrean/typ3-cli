import { FunctionDefinition, AbiObject } from './../types/AbiTypes';

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
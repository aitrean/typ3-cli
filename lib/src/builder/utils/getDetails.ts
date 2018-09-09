import { EventDefinition } from './../../types/AbiTypes';
import convert from './convertTypings';
import { SolidityVariable, FunctionDefinition } from '../../Types/abiTypes';
import { getAbiSignature } from './getAbiSignature'

//TODO add linting
export const getDetails = (functionDef: FunctionDefinition, connected?: boolean) => {
	const {name, inputs, outputs} = functionDef
	const signature = getAbiSignature(functionDef, connected)
	const inputsPresent = inputs && (inputs.length > 0)
	const outputsPresent = outputs && (outputs.length > 0) && functionDef.constant
	const inputParams = inputsPresent ? `{${getParameters(inputs)}}` : null
	const outputParams = outputsPresent ? `{${getParameters(outputs)}}` : null
	if(inputsPresent || outputsPresent){
		return `${signature}<${inputParams ? inputParams : ''}${inputParams && outputParams ? ',' : ''}${outputParams ? outputParams : ''}>`
	}
	return `${signature}`
}

export const getEventDetails = (eventDef: EventDefinition) => {
	const {name, inputs} = eventDef
	const inputsPresent = inputs && (inputs.length > 0)
	const inputParams = inputsPresent ? `{${getParameters(inputs)}}` : null
	if(inputsPresent){
		return `ABIEvent<${inputParams ? inputParams : ''}>`
	} 
	return 'ABIEvent'
}

const getParameters = (parametersDefinition: SolidityVariable[] | undefined, outputNames?: string[]) => {
	let count = 0;
	let paramContents;
	if(parametersDefinition){
		paramContents = parametersDefinition.map(param => {
			return `${param.name ? `${param.name}` : `${count++}`}: ${convert(param.type)}`
		})
		paramContents = paramContents.join(',')
	}
	return paramContents;
}
import convert from './convertTypings';
import { SolidityVariable, functionDefinition } from '../../Types/abiTypes';
import { getAbiSignature } from './getAbiSignature'

export const getDetails = (functionDef: functionDefinition, connected?: boolean) => {
	const {name, inputs, outputs} = functionDef
	const signature = getAbiSignature(functionDef);
	const inputsPresent = inputs && (inputs.length > 0);
	const outputsPresent = outputs && (outputs.length > 0) && functionDef.constant;
	const inputParams = inputsPresent ? `{${getParameters(inputs)}}` : null
	const outputParams = outputsPresent ? `{${getParameters(outputs)}}` : null
	if(inputsPresent || outputsPresent){
		return `${getAbiSignature(functionDef, connected)}<${inputParams ? inputParams : ''}${inputParams && outputParams ? ',' : ''}${outputParams ? outputParams : ''}>`
	}
	return `${getAbiSignature(functionDef)}`
}

const getParameters = (parametersDefinition: SolidityVariable[] | undefined, outputNames?: string[]) => {
	let count = 0;
	let paramContents = ''
	if(parametersDefinition){
		parametersDefinition.map(param => {
			paramContents += `,${param.name ? `${param.name}` : `${count++}`}: ${convert(param.type)}`
		})
		paramContents = paramContents.length > 0 ? paramContents.substr(1) : paramContents; //remove the leading comma
	}
	return paramContents;
}
import { convert } from './utils/convertSolidityTypings'

export const parseTypings = (functionDef) => {
	let contents = ''
	if(functionDef.inputs) {
		let inputContents = ''
		let count = 0;
		functionDef.inputs.forEach(input => {
			inputContents += `,${input.name ? `${input.name}` : `${count++}`}: ${convert(input.type)}`
		})
		if(inputContents.length > 0) {
			contents += `{${inputContents.slice(1)}}`
		}
	}
	if(functionDef.outputs) {
		let outputContents = ''
		let count = 0;
		functionDef.outputs.forEach(output => {
			outputContents += `,${output.name ? `${output.name}` : `${count++}`}: ${convert(output.type)}`
		})
		if(outputContents.length > 0) {
			contents += `{${outputContents.slice(1)}}`
		}
	}
	return contents.replace("}{", "},{") //TODO tidier parsing of objects relative to commas
}
export const convert  = (typing: string): string => {
	//TODO change this function to something less-hacky
	//TODO account for fixed-point numbers
	let conversion = ''
	conversion += isUint(typing);
	conversion += isBytes(typing);
	conversion += isBoolean(typing)
	conversion += isAddress(typing)
	conversion += isArray(typing)
	return conversion
}

const isArray = (input: string) => {
	return ~input.indexOf('[]') ? '[]' : ''
}

const isUint = (input) => {
	return ~input.indexOf('uint') ? 'number' : ''
}

const isBytes = (input) => {
	return ~input.indexOf('bytes') ? 'any' : ''
}

const isAddress = (input) => {
	return ~input.indexOf('address') ? 'string' : ''
}

const isBoolean = (input) => {
	return ~input.indexOf('bool') ? 'boolean' : ''
}

export const convert  = (typing: string): string => {
	//TODO account for arbitrary-size uints, bytes, and account for arrays
	switch (typing) {
		case('uint256'): 
			return 'number'
		case('uint32'): 
			return 'number'
		case('uint8'): 
			return 'number'
		case('address'):
			return 'string'
		case('bytes32'): 
			return 'string'
		case('bytes32[]'):
			return 'string[]'
		case('bool'):
			return 'boolean'
		default:
			return typing;
	}
}

const isArray = (input) => {
	return input.contains('[]')
}

const isUint = (input) => {
	return input.contains('uint')
}

const isBytes = (input) => {
	return (input.contains('bytes') && input !== 'bytes1')
}

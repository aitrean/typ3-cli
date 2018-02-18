export const convert  = (typing: string): string => {
	//TODO account for arbitrary-size uints, bytes, and account for arrays
	switch (typing) {
		case('uint256'): //TODO account for arbitrary-size uint types
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
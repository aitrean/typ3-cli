const convert = (type: string) => {
	const bytesExp = new RegExp(/^byte(s)?(\d+)?(\[])?$/, 'mg')
	const intExp = new RegExp(/^u?int(\d+)?(\[])?$/, 'mg')
	const addressExp = new RegExp(/^address(\[])?$/, 'mg')
	const boolExp = new RegExp(/^bool(\[])?$/)

	if(boolExp.test(type)) {
		return type.match(/\[]/) ? 'boolean[]' : 'boolean'
	} else if(addressExp.test(type)){
		return type.match(/\[]/) ? 'string[]' : 'string'
	} else if(bytesExp.test(type)){
		return type.match(/\[]/) ? 'string[]' : 'string | Buffer'
	} else if(intExp.test(type)) {
		let returnType = 'BN | Buffer'
		returnType += type.match('\[]') ? '[]' : ''
		return returnType;
	}
	return type;
}

export default convert
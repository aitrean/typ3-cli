export const convert = (type: string) => {
	const bytesExp = new RegExp(/^byte(s)?(\d+)?(\[])?$/, 'mg')
	const uintExp = new RegExp(/^uint(\d+)?(\[])?$/, 'mg')
	const addressExp = new RegExp(/^address(\[])?$/, 'mg')
	const boolExp = new RegExp(/^bool(\[])?$/)

	if(boolExp.test(type)) {
		return type.match(/\[]/) ? 'boolean[]' : 'boolean'
	} else if(addressExp.test(type)){
		return type.match(/\[]/) ? 'string[]' : 'string'
	} else if(bytesExp.test(type)){
		return type.match(/\[]/) ? 'string[]' : 'string'
	} else if(uintExp.test(type)) {
		let returnType = 'BN'
		if(type.match('\d+')){
			const byteLength = Number(type.match('\d+'));
			returnType = byteLength > 64 ? 'BN' : 'number'
		}
		returnType += type.match('\[]') ? '[]' : ''
		return returnType;
	}
	return type;
}
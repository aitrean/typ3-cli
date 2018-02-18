export const getAbiSignature = (functionDefinition) => {
	if (functionDefinition.constant) {
		if (functionDefinition.inputs.length > 0) {
			return 'ABIFuncCall'
		} else {
			return 'ABIFuncParamlessCall'
		}
	} else {
		if (functionDefinition.inputs.length > 0) {
			return 'ABIFuncSend'
		} else {
			return 'ABIFuncParamlessSend'
		}
	}
}

export const getAbiSignature = (functionDefinition) => {
	if (functionDefinition.constant) {
		if (functionDefinition.inputs) {
			return 'ABIFuncCall'
		} else {
			return 'ABIFuncParamlessCall'
		}
	} else {
		if (functionDefinition.inputs) {
			return 'ABIFuncSend'
		} else {
			return 'ABIFuncParamlessSend'
		}
	}
}

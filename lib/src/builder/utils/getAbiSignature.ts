import { functionDefinition } from '../../Types/AbiTypes'
 
export const getAbiSignature = (functionDefinition: functionDefinition) => {
	if (functionDefinition.constant) {
		if (functionDefinition.inputs && functionDefinition.inputs.length > 0) {
			return 'ABIFuncCall'
		} else {
			return 'ABIFuncParamlessCall'
		}
	} else {
		if (functionDefinition.inputs && functionDefinition.inputs.length > 0) {
			return 'ABIFuncSend'
		} else {
			return 'ABIFuncParamlessSend'
		}
	}
}

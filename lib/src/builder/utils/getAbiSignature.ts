import { functionDefinition } from '../../Types/AbiTypes'
 
export const getAbiSignature = (functionDefinition: functionDefinition, connected?: boolean) => {
	if (functionDefinition.constant) {
		if (functionDefinition.inputs && functionDefinition.inputs.length > 0) {
			return connected ? 'ABIFuncCallConnected' : 'ABIFuncCall'
		} else {
			return connected ? 'ABIFuncParamlessCallConnected' : 'ABIFuncParamlessCall'
		}
	} else {
		if (functionDefinition.inputs && functionDefinition.inputs.length > 0) {
			return connected ? 'ABIFuncSendConnected' : 'ABIFuncSend'
		} else {
			return connected ? 'ABIFuncParamlessSendConnected' : 'ABIFuncParamlessSend'
		}
	}
}

import { FunctionDefinition } from '../../Types/AbiTypes'
 
export const getAbiSignature = (functionDef: FunctionDefinition, connected?: boolean) => {
	if (functionDef.constant) {
		if (functionDef.inputs && functionDef.inputs.length > 0) {
			return connected ? 'ABIFuncCallConnected' : 'ABIFuncCall'
		} else {
			return connected ? 'ABIFuncParamlessCallConnected' : 'ABIFuncParamlessCall'
		}
	} else {
		if (functionDef.inputs && functionDef.inputs.length > 0) {
			return connected ? 'ABIFuncSendConnected' : 'ABIFuncSend'
		} else {
			return connected ? 'ABIFuncParamlessSendConnected' : 'ABIFuncParamlessSend'
		}
	}
}

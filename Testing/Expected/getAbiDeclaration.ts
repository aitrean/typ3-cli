export const getAbiDecTest0 = `export interface ITest0{
}
export interface ITest0Connected {
address: string
balance: ABIFuncParamlessCallConnected
}
export type ITest0Constructor = ABIFuncParamlessSendConnected
`

export const getAbiDecTest1 = `export interface ITest1{
}
export interface ITest1Connected {
address: string
balance: ABIFuncParamlessCallConnected
}
export type ITest1Constructor = ABIFuncParamlessSendConnected
`

export const getAbiDecTest2 = `export interface ITest2{
function1: ABIFuncSend<{a: string}>
function2: ABIFuncSend<{a: string,b: BN}>
function3: ABIFuncSend<{a: string,b: BN}>
function0: ABIFuncParamlessSend
}
export interface ITest2Connected {
address: string
balance: ABIFuncParamlessCallConnected
function1: ABIFuncSendConnected<{a: string}>;
function2: ABIFuncSendConnected<{a: string,b: BN}>;
function3: ABIFuncSendConnected<{a: string,b: BN}>;
function0: ABIFuncParamlessSendConnected;
}
export type ITest2Constructor = ABIFuncParamlessSendConnected
`

export const getAbiDecTest3 = `export interface ITest3{
overloaded: ABIFuncSend<{a: string}> | ABIFuncSend<{a: BN}>
Test1: ABIFuncParamlessSend
}
export interface ITest3Connected {
address: string
balance: ABIFuncParamlessCallConnected
overloaded: ABIFuncSendConnected<{a: string}> | ABIFuncSendConnected<{a: BN}>
Test1: ABIFuncParamlessSendConnected;
}
export type ITest3Constructor = never
`
export interface FunctionDefinition {
  name?: string
  inputs?: SolidityVariable[]
  outputs?: SolidityVariable[]
	constant?: boolean
  type?: string
  payable?: boolean
  stateMutability?: string
}

export interface SolidityVariable {
  name: string
  type: string
}

export interface AbiObject {
	constructorFunction: FunctionDefinition
	overloadedFunctions: {
		[func: string]: FunctionDefinition[]
	}
	regularFunctions: {
		[func: string]: FunctionDefinition
	}
}
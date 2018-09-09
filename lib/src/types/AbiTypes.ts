export interface FunctionDefinition {
  name?: string
  inputs?: SolidityVariable[]
  outputs?: SolidityVariable[]
	constant?: boolean
  payable?: boolean
	stateMutability?: string
	type?: string //type is optional because constructors don't have a type field
}

//TODO check optionality of names in EventDefinition
export interface EventDefinition {
	name?: string
	anonymous?: boolean
	inputs?: SolidityVariable[]
	type: string
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
	events: {
		[func: string]: EventDefinition
	}
}
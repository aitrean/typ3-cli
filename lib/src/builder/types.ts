export interface functionDefinition {
  name?: string
  inputs?: SolidityVariable[]
  outputs?: SolidityVariable[]
  constant?: boolean
}

export interface SolidityVariable {
  name: string
  type: string
}
import { getAbiDeclaration } from '../../lib/src/builder/getAbiDeclaration';
import { getAbiDecTest0, getAbiDecTest1, getAbiDecTest2 , getAbiDecTest3} from '../Expected';

const test0File = require('../abis/test0.json')
const test1File = require('../abis/test1.json')
const test2File = require('../abis/test2.json')
const test3File = require('../abis/test3.json')

describe('getAbiDeclaration', () => {
	it('should compile a blank constructor to a correct declaration', () => { //(abi: any, interfaceName: string, outputFile: string)
		expect(getAbiDeclaration(test0File, 'Test0')).toEqual(getAbiDecTest0)
	})

	it('should compule a constructor with parameters to a correct declaration', () => {
		expect(getAbiDeclaration(test1File, 'Test1')).toEqual(getAbiDecTest1)
	})

	it('should compile a contract with functions to a correct declaration', () => {
		expect(getAbiDeclaration(test2File, 'Test2')).toEqual(getAbiDecTest2)
	})

	it('should compile a contract with overloaded functions to a correct declaration', () => {
		expect(getAbiDeclaration(test3File, 'Test3')).toEqual(getAbiDecTest3)
	})
})
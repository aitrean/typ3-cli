import { parseAbi } from './../../lib/src/builder/getAbiDeclaration'; //TODO resolve pathing
import { getAbiDeclaration } from '../../lib/src/builder/getAbiDeclaration';
import { parseAbiTest0, parseAbiTest1, parseAbiTest2, parseAbiTest3 } from '../Expected';

const test0File = require('../abis/test0.json')
const test1File = require('../abis/test1.json')
const test2File = require('../abis/test2.json')
const test3File = require('../abis/test3.json')

describe('parseAbi', () => {
	it('should parse an abi with a blank constructor into an appropriate object', () => {
		expect(parseAbi(test0File)).toEqual(parseAbiTest0)
	})

	it('should parse an abi with a constructor (that takes arguments) into an appropriate object', () => {
		expect(parseAbi(test1File)).toEqual(parseAbiTest1)
	})

	it('should parse an abi with functions into an appropriate object', () => {
		expect(parseAbi(test2File)).toEqual(parseAbiTest2)
	})

	it('should parse an abi with overloaded functions into an appropriate object', () => {
		expect(parseAbi(test3File)).toEqual(parseAbiTest3)
	})
})
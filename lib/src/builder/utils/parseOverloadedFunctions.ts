import { getDetails } from './getDetails';
import { FunctionDefinition } from './../../types/AbiTypes';

export const parseOverloadedFunctions = (overloadedFunctions: FunctionDefinition[], connected?: boolean) => {
	let details = overloadedFunctions.map(func => {
		return getDetails(func, connected)
	})
	details = [...new Set(details)] //remove duplicates, since multiple Solidity typings may sometimes convert 
	return details.join(' | ')
}
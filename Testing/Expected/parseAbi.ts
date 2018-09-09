import { EventDefinition } from './../../lib/src/types/AbiTypes';
export const parseAbiTest0 = {
  constructorFunction: {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  events: {},
  overloadedFunctions: {},
  regularFunctions: {}
};

export const parseAbiTest1 = {
  constructorFunction: {
    inputs: [{ name: 'a', type: 'uint256' }, { name: 'b', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  events: {},
  overloadedFunctions: {},
  regularFunctions: {}
};

export const parseAbiTest2 = {
  constructorFunction: {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  events: {},
  regularFunctions: {
    function0: {
      constant: false,
      inputs: [],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    function1: {
      constant: false,
      inputs: [
        {
          name: 'a',
          type: 'bytes32'
        }
      ],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    function2: {
      constant: false,
      inputs: [
        {
          name: 'a',
          type: 'bytes32'
        },
        {
          name: 'b',
          type: 'uint256'
        }
      ],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    function3: {
      constant: false,
      inputs: [
        {
          name: 'a',
          type: 'bytes32'
        },
        {
          name: 'b',
          type: 'uint256'
        }
      ],
      outputs: [
        {
          name: '',
          type: 'int256'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  },
  overloadedFunctions: {}
};

export const parseAbiTest3 = {
  constructorFunction: {},
  events: {},
  overloadedFunctions: {
    overloaded: [
      {
        constant: false,
        inputs: [
          {
            name: 'a',
            type: 'bytes32'
          }
        ],
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          {
            name: 'a',
            type: 'uint256'
          }
        ],
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ]
  },
  regularFunctions: {
    Test3: {
      constant: false,
      inputs: [],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  }
};

export const parseAbiTest4 = {
  constructorFunction: {},
  events: {
    bar: {
      anonymous: false,
      inputs: [{
        indexed: false, 
        name: '', 
        type: 'uint256'
      },
      {
        indexed: false, 
        name: '',
        type: 'address'
      } 
    ], 
    type: 'event'
    },
    baz: {
      anonymous: false,
      inputs: [{
        indexed: false, 
        name: 'a',
        type: 'uint256'
      },
      {
        indexed: false, 
        name: 'b',
        type: 'address'
      },
      {
        indexed: false,
        name: 'c',
        type: 'string'
      }
    ],
    type: 'event' 
    },
    foo: {
      anonymous: false,
      inputs: [],
      type: 'event'
    }
  },
  overloadedFunctions: {},
  regularFunctions: {}
}

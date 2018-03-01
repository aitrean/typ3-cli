import { getAbiInterfaces, interfaces } from './builder';
import { options, usage } from './cli';
import { Output } from './io';
import { getPath, getName } from './builder/utils'
const relative = require('require-relative')

export const buildTypedABIs = () => {
  const opts = options;
  const contractFiles = opts.files;
  const abiOutputFiles = opts.outputSpecifications;
  const outputFile = opts.outputFile ? opts.outputFile : './abiTypes.ts';
  const printer = new Output(outputFile);
  
  try {
    const outputSpecs = {}
    if(abiOutputFiles){
      abiOutputFiles.forEach(file => {
        const filePath = getPath(file);
        const specName = getName(file);
        const outputSpec = require(filePath)
        outputSpecs[specName] = outputSpec;
      })
    }
    if(contractFiles){
      contractFiles.forEach(file => {
        const filePath = getPath(file);
        const interfaceName = getName(file);
        let abi = require(filePath)
        if(outputSpecs[interfaceName]){
          abi = modifyOutputNames(abi, outputSpecs[interfaceName]);
        }
        printer.print(getAbiInterfaces(abi, interfaceName, outputFile))
      })
      printer.print(interfaces);
    }
  } catch (e) {
    console.log(e)
  }

  if (!contractFiles || opts.help) {
    return console.log(usage);
  }
}

const modifyOutputNames= (abi, outputSpec): any => {
  abi.forEach(func => {
    if(func.outputs && func.outputs.length > 0 && outputSpec[func.name]){
      const functionSpec = outputSpec[func.name]
      if(func.outputs.length === functionSpec.length){
        for(var i in func.outputs){
          func.outputs[i].name = functionSpec[i]
        }
      } else {
        console.warn(`Output mappings for function ${func.name} are not equivalent between the output file and the abi. Defaulting to abi output names for ${func.name}`)
      }
    }
  })
  console.log(abi)
  return abi;
}
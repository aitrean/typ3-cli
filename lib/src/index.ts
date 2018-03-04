import { getAbiDeclaration, interfaces, imports } from './builder';
import { options, usage } from './cli';
import { Output } from './io';
import { getPath, getName } from './builder/utils'
const relative = require('require-relative')

export const buildTypedABIs = () => {
  const opts = options;
  const contractFiles = opts.files;
  const abiOutputFiles = opts.outputConfigurations;
  const outputFile = opts.outputFile ? opts.outputFile : './abiTypes.ts';
  const printer = new Output(outputFile);
  
  try {
    const outputConfigs = {}
    if(abiOutputFiles){
      abiOutputFiles.forEach(file => {
        const filePath = getPath(file);
        const configName = getName(file);
        const outputConfig = require(filePath)
        outputConfigs[configName] = outputConfig;
      })
    }
    if(contractFiles){
      printer.print(imports)
      contractFiles.forEach(file => {
        const filePath = getPath(file);
        const interfaceName = getName(file);
        let abi = require(filePath)
        if(outputConfigs[interfaceName]){
          abi = modifyOutputNames(abi, outputConfigs[interfaceName]);
        }
        printer.print(getAbiDeclaration(abi, interfaceName, outputFile))
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

const modifyOutputNames= (abi, outputConfig): any => {
  abi.forEach(func => {
    if(func.outputs && func.outputs.length > 0 && outputConfig[func.name]){
      const functionConfig = outputConfig[func.name]
      if(func.outputs.length === functionConfig.length){
        for(var i in func.outputs){
          func.outputs[i].name = functionConfig[i]
        }
      } else {
        console.warn(`Output mappings for function ${func.name} are not equivalent between the output file and the abi. Defaulting to abi output names for ${func.name}`)
      }
    }
  })
  return abi;
}
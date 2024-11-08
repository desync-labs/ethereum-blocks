// AS compiler does not like interface
export class Addresses {
    ConverterRegistryContract: string
    blockNumber: string
    network: string
  }
  
  // AS compiler does not like const
  export let addresses: Addresses = {
    ConverterRegistryContract: '{{ConverterRegistryContract}}',
    blockNumber: '{{blockNumber}}',
    network: '{{network}}'
  }
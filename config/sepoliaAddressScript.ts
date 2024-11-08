import * as fs from 'fs'
import * as mustache from 'mustache'
import * as networkAddresses from '../networks/addresses.json'
import { Addresses } from './addresses.template'

const SepoliaChainID = '11155111'
const SepoliaEnvironment = process.argv[2]

// mustache doesn't like numbered object keys
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let renameAddresses: any = networkAddresses
renameAddresses['sepolia'] = networkAddresses[SepoliaChainID][SepoliaEnvironment]["addresses"]


export let addresses: Addresses = {
  ConverterRegistryContract: '{{sepolia.ConverterRegistryContract}}',
  blockNumber: networkAddresses[SepoliaChainID][SepoliaEnvironment]["blockNumber"],
  network: networkAddresses[SepoliaChainID]["network"],
}

const main = (): void => {
  try {
    let output = JSON.parse(mustache.render(JSON.stringify(addresses), renameAddresses))
    fs.writeFileSync(__dirname + '/generatedAddresses.json', JSON.stringify(output, null, 2))
  } catch (e) {
    console.log(`Error saving artifacts: ${e.message}`)
  }
}

main()
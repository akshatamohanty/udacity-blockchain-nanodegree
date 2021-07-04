# DApps


## Ethereum Development Tools

- backend runs on ethreum network, not centralized servers.

evm, turing complete logic
ethos and neo

smart contract - users to code  on network is smart contract
dapp radar
cryptokitties
how is eth network making it possible
trust wallet
https://dappradar.com/
https://www.stateofthedapps.com/
https://remix.ethereum.org/#optimize=true&version=soljson-v0.4.24+commit.e67f0147.js&runs=200&evmVersion=null
https://etherscan.io/

top ethereum holders
binance
see the contract on binance
what are the test nets on eth?
existing contracts on eth

metamask - connection between eth and dapp
metamask is a chrome extension
web3 js api
how does metamask work?
get eth test net coins from faucet
different

metamask - on refresh, doesn't show updated account information
- fix

steps to deploy contract with remix
- get testnet coins
- go to remix
- select the contract
- compile the contract in the compile tab
- in the deploy tab, select web3 env
- hit deploy

deploying a contract
sending a transaction

web3 - js api
allows you to interact with an local or remote eth node

ether denominations
have to convert to a lower denomination

web3 is just the library
tool to connct to the network is "infura"

infura - access to ipfs and ethereum
ipfs - decentralized storage

who is developing infura?

accounts:
- identity
- EOA and contracts (cas)

EOA
- acount bal
- txn count

CA
- account bal
-

account state variables
- nonce
- patricia tree
-

connection between different accounts?

ganache
- test accounts preloaded with ether

txn
- message calls
- contract creation
how do they affect the world state ^

gas price
gas limit

convert key into `hex` when signing
serialize the transaction first

https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/tx
ethereum transaction is not a constructor
import { Transaction } from '@ethereumjs/tx'


every transaction costs:
- gas cost and fees

smart contract
- total gas cost = number of operations
gas accounts
gas price / gas limit
price per unit of gas / max amout of gas

ethereum metrics

https://ethstats.net/

go implementation - geth

what is a contract ABI (application binary interface)

connecting to ganache gui with metamask
chain id - https://ethereum.stackexchange.com/questions/91072/setup-ganache-with-metamask-what-and-where-is-a-chain-id

## Smart Contract and Solidity

What are smart contracts and token contracts?
Solidity Docs: https://docs.soliditylang.org/en/v0.4.24/

What is smart contract?
code on the blockchain; sometimes like escrow
- account address
- wallet
- own storage
other languages: serpent, lisp-like languages

lifecycle of a contract
- develop contract
- deployed
- invoke
- destroy

solidity - strongly typed language

contract definition - solidity compiler -
classes: contract

contract can emit events

memory management in solidity


## Introduction to DApps
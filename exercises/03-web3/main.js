const Web3 = require('web3')
const TransactionUtils = require('./transactionUtils')
const ETH_URL = 'HTTP://127.0.0.1:7545'

function main() {
  const web3 = new Web3(ETH_URL)
  if (web3) {
    console.log('Connected to ethereum network...')
    web3.eth.getAccounts().then((accounts) => {
      console.log(accounts)
      console.log('Running transaction...')
      setupTransaction()
    })
  } else {
    console.log('Failed to connect to network.')
  }
}

function setupTransaction() {
  const sendingAddress = '0xF4467da0FF5f99AF6E5CaDC5D4b00eD0108BeFB6'
  const receivingAddress = '0x7aA9Cd1ac8E0C42D7701e0BcFB1d5d8c106F0A92'
  const privateKey = 'd4faa7aa32a85219027c2968f54d44a2a91b61698296098a5e8e51047ce1bb15'

  const tx = TransactionUtils.createTransaction(sendingAddress, receivingAddress, 1)
  const signedTx = TransactionUtils.signTransaction(privateKey, tx)
  TransactionUtils.sendTransaction(signedTx)
}


main()
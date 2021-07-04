const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx').Transaction

const URL = 'HTTP://127.0.0.1:7545'
const web3 = new Web3(URL)

/**
 *
 * @param {string} privateKey
 * @param {object} transaction
 * @returns {EthereumTransaction}
 */
function signTransaction(privateKey, transaction) {
  try {
    const privateKeyHex = Buffer.from(privateKey, 'hex')
    const tx = new EthereumTx(transaction)
    tx.sign(privateKeyHex)
    return tx
  } catch (ex) {
    console.log(ex)
    throw new Error('unable to sign transaction')
  }
}

/**
 *
 * @param {string} sendingAddress
 * @param {string} receivingAddress
 * @returns {object}
 */
function createTransaction(sendingAddress, receivingAddress, value) {
  // print address balance
  web3.eth.getBalance(sendingAddress).then(console.log)
  web3.eth.getBalance(receivingAddress).then(console.log)

  const nonce = 0
  const rawTransaction = {
    nonce,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value,
    data: "0x"
  }

  return rawTransaction
}

/**
 *
 * @param {EthereumTransaction} transaction
 * @returns {void}
 */
function sendTransaction(transaction) {
  const serializedTransaction = transaction.serialize()
  web3.eth.sendSignedTransaction(serializedTransaction)
}

module.exports = { createTransaction, sendTransaction, signTransaction}
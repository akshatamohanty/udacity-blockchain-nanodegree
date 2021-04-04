const SHA256 = require("crypto-js/sha256")

const data1 = "Blockchain Rock!"
function generateHashing() {
  const value = data1 // process.argv.slice(2)[0]
  var data = JSON.stringify(value);
  const hashDigest = SHA256(data)
  console.log( hashDigest.toString())
}

generateHashing()
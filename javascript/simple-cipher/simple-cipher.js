var randomString = require("randomstring")

class Cipher {
  constructor(
    key = randomString.generate({
      length: 100,
      charset: 'abcdefghijklmnopqrstuvwxyz'})) {
    this.key = key
  }
encode(input) {
  let outputArray = []
  for (let i = 0; i < input.length; i++) {
    outputArray.push(this.key.charAt(i))
  }
  let outputString = outputArray.join('')
  return outputString
}
}

module.exports = Cipher

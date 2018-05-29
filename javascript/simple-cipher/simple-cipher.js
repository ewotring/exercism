var randomString = require("randomstring")

class Cipher {
  constructor(
    key = randomString.generate({
      length: 100,
      charset: 'abcdefghijklmnopqrstuvwxyz'})) {
    this.key = key
    this.shiftString = 'abcdefghijklmnopqrstuvwxyz'
  }
  encode(input) {
    let encodeOutputArray = []
    for (let i = 0; i < input.length; i++) {
      let keyAdd = this.shiftString.indexOf(input.charAt(i))
      encodeOutputArray.push(this.key.charAt(i + keyAdd))
    }
    let encodeOutputString = encodeOutputArray.join('')
    return encodeOutputString
  }
  decode(input) {
    let decodeOutputArray = []
    for (let i = 0; i < input.length; i++) {
      decodeOutputArray.push('a')
    }
    let decodeOutputString = decodeOutputArray.join('')
    return decodeOutputString
  }
}

module.exports = Cipher

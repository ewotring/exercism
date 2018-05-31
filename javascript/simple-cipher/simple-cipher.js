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
    for (let i = 0; i <= input.length; i++) {
      let keyAdd = this.shiftString.indexOf((input.charAt(i)) % 26)
      encodeOutputArray.push(this.key.charAt(i + keyAdd))
    }
    let encodeOutputString = encodeOutputArray.join('')
    console.log(`encodeOutputString is ${encodeOutputString}`)
    return encodeOutputString
  }
  decode(input) {
    let decodeOutputArray = []
    console.log(`input is ${input}`)
    for (let i = 0; i < input.length; i++) {
      // experiment with modulus
      let keyAdd = 26 % this.shiftString.indexOf(input.charAt(i))
      console.log(`input[i] is ${input.charAt(i)}`)
      console.log(`keyAdd is ${keyAdd}`)
      console.log(`${this.key.charAt(keyAdd)}`)
      decodeOutputArray.push('a')
      // decodeOutputArray.push(this.key.charAt(i - keyAdd))
    }
    let decodeOutputString = decodeOutputArray.join('')
    console.log(`decodeOutputString is ${decodeOutputString}`)
    return decodeOutputString
  }
}

module.exports = Cipher

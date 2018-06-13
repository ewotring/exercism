var randomString = require("randomstring")

class Cipher {
  constructor(
    // Consider making the length random, with a length of at least 100.
    key = randomString.generate({
      length: 100,
      charset: 'abcdefghijklmnopqrstuvwxyz'})) {
    this.key = key
    this.shiftString = 'abcdefghijklmnopqrstuvwxyz'
  }
  encode(input) {
    let encodeOutputArray = []
    for (let i = 0; i < input.length; i++) {
      let keyAdd = this.shiftString.indexOf(input.charAt(i)) % 26
      console.log(`encode keyAdd is ${keyAdd}`)
      console.log(`${this.key.charAt((i + keyAdd) % 26)}`)
      encodeOutputArray.push(this.key.charAt((i + keyAdd) % 26))
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
      let keyAddDecode = this.shiftString.indexOf(input.charAt(i)) % 26
      console.log(`input[i] is ${input.charAt(i)}`)
      console.log(`${this.shiftString.charAt(i)}`)
      console.log(`${this.key.charAt(i)}`)
      console.log(`next thing is ${this.key.charAt(keyAddDecode)}`)
      console.log(`next next thing is ${this.key.charAt(i - keyAddDecode)}`)
      console.log(`and another thing is ${this.key.charAt((keyAddDecode - i) % 26)}`)
      console.log(`and another thing is ${this.key.charAt((keyAddDecode - i) % 26)}`)
      console.log(`keyAddDecode is ${keyAddDecode}`)
      // decodeOutputArray.push(this.key.charAt((keyAddDecode - i) % 26))
      decodeOutputArray.push(this.key.charAt((keyAddDecode - this.shiftString.charAt(i)) % 26))
    }
    let decodeOutputString = decodeOutputArray.join('')
    console.log(`decodeOutputString is ${decodeOutputString}`)
    return decodeOutputString
  }
}

module.exports = Cipher

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
      let keyAddShiftString = this.shiftString.indexOf(input.charAt(i)) % 26
      // let keyAddKey = this.key.indexOf(input.charAt(i)) % 26
      // let keyAdd = input.indexOf(this.shiftString.charAt(i))
      console.log(`input[i] is ${input.charAt(i)}`)
      // console.log(`${input.charAt(i)}`)
      console.log(`keyAddShiftString is ${keyAddShiftString}`)
      console.log(`${this.shiftString.charAt(0)}`)
      // console.log(`keyAddKey is ${keyAddKey}`)
      // console.log(`keyAdd is ${keyAdd}`)
      // console.log(`${this.shiftString.charAt(keyAdd)}`)
      // console.log(`${this.shiftString.charAt(keyAdd % 26)}`)
      // console.log(`${this.shiftString.charAt(26 - keyAdd)}`)
      // console.log(`${this.shiftString.charAt(i - keyAdd)}`)
      // console.log(`${this.key.charAt(keyAdd)}`)
      // decodeOutputArray.push('a')
      // decodeOutputArray.push(this.shiftString.charAt(0))
      // decodeOutputArray.push(this.shiftString.charAt(keyAddShiftString - i))
      decodeOutputArray.push(this.key.charAt(keyAddShiftString - i))
      // decodeOutputArray.push(this.shiftString.charAt((0)))
      // decodeOutputArray.push(this.key.charAt( keyAdd % 26))
      // decodeOutputArray.push(this.shiftString.charAt( keyAdd ))
      // decodeOutputArray.push(this.key.charAt(keyAdd))
    }
    let decodeOutputString = decodeOutputArray.join('')
    console.log(`decodeOutputString is ${decodeOutputString}`)
    return decodeOutputString
  }
}

module.exports = Cipher

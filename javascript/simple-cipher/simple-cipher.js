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
      // let keyAdd = this.shiftString.indexOf(input.charAt(i))
      let inputNumber = this.shiftString.indexOf(input.charAt(i))
      let keyNumber = this.shiftString.indexOf(this.key.charAt(i))
      let outputNumber = (inputNumber + keyNumber) % 26
      let outputLetter = this.shiftString.charAt(outputNumber)
      // console.log(`encode keyAdd is ${keyAdd}`)
      // console.log(`${this.key.charAt((i + keyAdd) % 26)}`)
      // encodeOutputArray.push(this.key.charAt((i + keyAdd) % 26))
      encodeOutputArray.push(outputLetter)
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
      // let keyAddDecode = this.shiftString.indexOf(input.charAt(i))
      let inputNumber = this.shiftString.indexOf(input.charAt(i))
      let keyNumber = this.shiftString.indexOf(this.key.charAt(i))
      let outputNumber = (inputNumber - keyNumber) % 26
      let outputLetter = this.shiftString.charAt(outputNumber)
      // console.log(`input[i] is ${input.charAt(i)}`)
      // console.log(`shiftstring ${this.shiftString.charAt(i)}`)
      // console.log(`key ${this.key.charAt(i)}`)
      // console.log(`next thing is ${this.key.charAt(keyAddDecode)}`)
      // console.log(`next next thing is ${this.key.charAt(i - keyAddDecode)}`)
      // console.log(`and another thing is ${this.key.charAt((keyAddDecode - i) % 26)}`)
      // console.log(`and another thing is ${this.key.charAt((keyAddDecode - i) % 26)}`)
      // console.log(`and another thing is ${(keyAddDecode - this.shiftString.charAt(i))}`)
      // console.log(`${NaN % 26}`)
      // console.log(`${this.key.charAt(NaN % 26)}`)
      // console.log(`keyAddDecode is ${keyAddDecode}`)
      // console.log(`keyAddDecode is ${keyAddDecode}`)
      // console.log(`i is ${i}`)
      // console.log(`shiftString value is ${}`)
      // decodeOutputArray.push(this.key.charAt((keyAddDecode - i) % 26))
      decodeOutputArray.push(outputLetter)
      // decodeOutputArray.push(this.key.charAt((keyAddDecode - this.shiftString.charAt(i)) % 26))
    }
    let decodeOutputString = decodeOutputArray.join('')
    console.log(`decodeOutputString is ${decodeOutputString}`)
    return decodeOutputString
  }
}

module.exports = Cipher

/*
Had to really break my steps down. I was trying to do way too much on each line, so I
couldn't really debug. After reviewing the cipher, I was able to get the code working.
*/
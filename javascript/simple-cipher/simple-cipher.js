var randomString = require("randomstring")

export class Cipher {
  constructor(
    // Consider making the length random, with a length of at least 100.
    key = randomString.generate({
      length: 100,
      charset: 'abcdefghijklmnopqrstuvwxyz'})
      ) {
    this.key = key
    this.shiftString = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < key.length; i++) {
      console.log(!!!this.key)
      console.log(this.key.length)
      if (!this.shiftString.includes(key.charAt(i)) || this.key.length == 0) {
        throw Error('Bad key')
      }
    }
  }

  encode(input) {
    let encodeOutputArray = []
    for (let i = 0; i < input.length; i++) {
      let inputNumber = this.shiftString.indexOf(input.charAt(i))
      let keyNumber = this.shiftString.indexOf(this.key.charAt(i))
      let outputNumber = (inputNumber + keyNumber) % 26
      let outputLetter = this.shiftString.charAt(outputNumber)
      encodeOutputArray.push(outputLetter)
    }
    let encodeOutputString = encodeOutputArray.join('')
    return encodeOutputString
  }

  decode(input) {
    let decodeOutputArray = []
    for (let i = 0; i < input.length; i++) {
      let inputNumber = this.shiftString.indexOf(input.charAt(i))
      let keyNumber = this.shiftString.indexOf(this.key.charAt(i))
      let outputNumber = (inputNumber - keyNumber) % 26
      if (outputNumber < 0) {
        outputNumber = 26 + outputNumber
      }
      let outputLetter = this.shiftString.charAt(outputNumber)
      decodeOutputArray.push(outputLetter)
    }
    let decodeOutputString = decodeOutputArray.join('')
    return decodeOutputString
  }
}

/*
Had to really break my steps down. I was trying to do way too much on each line, so I
couldn't really debug. After reviewing the cipher, I was able to get the code working.
*/
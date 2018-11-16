var randomString = require("randomstring")

export class Cipher {
  constructor(
    // Consider making the length random, with a length of at least 100.
    key = randomString.generate({
      length: 100,
      charset: 'abcdefghijklmnopqrstuvwxyz'})
      ) {
    this.key = key
    this.alphabetLength = 26
    this.shiftString = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < key.length; i++) {
      // console.log(!!!this.key)
      // console.log(this.key.length)
      if (!this.shiftString.includes(key.charAt(i))) {
        throw Error('Bad key')
      }
    }
    if (key.length == 0) {
      throw Error('Bad key')
    }
  }

  encode(input) {
    let encodeOutputArray = []
    let encodedKey = ''
    let keyArray = this.key.split('')
    if (input.length > keyArray.length) {
      let keyMultiplier = 1 + (input.length / keyArray.length)
      let encodedKeyArray = []
      for (let i = 0; i < keyMultiplier; i++) {
        Array.prototype.push.apply(encodedKeyArray, keyArray)
      }
      encodedKey = encodedKeyArray.join('')
    }
    encodedKey = encodedKey || this.key
    for (let i = 0; i < input.length; i++) {
      let inputNumber = this.shiftString.indexOf(input.charAt(i))
      let keyNumber = this.shiftString.indexOf(encodedKey.charAt(i))
      let outputNumber = (inputNumber + keyNumber) % this.shiftString.length
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
      let outputNumber = (inputNumber - keyNumber) % this.shiftString.length
      if (outputNumber < 0) {
        outputNumber = this.shiftString.length + outputNumber
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
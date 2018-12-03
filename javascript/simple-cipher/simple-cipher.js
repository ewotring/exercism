// var randomString = require("randomstring")

export class Cipher {
  constructor(
    key,
    // Consider making the length random, with a length of at least 100.
    // key = this.generateRandomKey(),
    // key = randomString.generate({
    //   length: 100,
    //   charset: 'abcdefghijklmnopqrstuvwxyz',
    // }),
  ) {
    // this.key = key;
    this.shiftString = 'abcdefghijklmnopqrstuvwxyz';
    this.keyLength = 100;
    this.key = typeof key !== 'undefined' ? key : this.generateRandomKey(
      // this.shiftString,
      // this.keyLength,
    );
    for (let i = 0; i < this.shiftString.length; i += 1) {
      // console.log(`shiftString character is ${this.shiftString[i]}`);
      // console.log(this.shiftString.charCodeAt(i));
    }
    // console.log(`constructor this.keyLength is ${this.keyLength}`);
    for (let i = 0; i < this.key.length; i += 1) {
      // console.log(!!!this.key)
      // console.log(this.key.length)
      // console.log(this.shiftString.charCodeAt(this.key.charAt(i)));
      // console.log(this.key.charAt(i));
      // console.log(this.key.charCodeAt(i));
      // console.log(this.shiftString.charCodeAt(this.key.charAt(i)));
      // console.log(Number.isNaN(this.shiftString.charCodeAt(this.key.charAt(i))));
      // let isItNaN = Number.isNaN(this.shiftString.charCodeAt(this.key.charAt(i)));
      // console.log(`is it a NaN? ${isItNaN}`);
      // if (!this.shiftString.includes(this.key.charAt(i))) {
      const lowerCaseAUniCode = 97;
      const lowerCaseZUniCode = 122;
      if (
        this.key.charCodeAt(i) < lowerCaseAUniCode
        || this.key.charCodeAt(i) > lowerCaseZUniCode
      ) {
        throw Error('Bad key');
      }
    }
    if (this.key.length === 0) {
      throw Error('Bad key');
    }
  }

  generateRandomKey(shiftString = this.shiftString, keyLength = this.keyLength) {
    // console.log('generate random key!!!!!!!');
    let outputString = '';
    // console.log(`keyLength is ${keyLength}`);
    // console.log(`shiftString is ${shiftString}`);
    // const charSet = shiftString;
    for (let i = 0; i < keyLength; i += 1) {
      // console.log(`i is ${i}`);
      outputString += shiftString.charAt(Math.floor(Math.random() * shiftString.length));
      // console.log(`character to enter is ${shiftString.charAt(Math.floor(Math.random() * shiftString.length))}`);
    }
    // console.log(`Random key is: ${outputString}`);
    return outputString;
  }

  encode(input) {
    const encodeOutputArray = []
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
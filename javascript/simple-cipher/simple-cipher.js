
export class Cipher {
  constructor(
    key,
    // Consider making the length random, with a length of at least 100.
  ) {
    this.shiftString = 'abcdefghijklmnopqrstuvwxyz';
    this.keyLength = 100;
    this.key = typeof key !== 'undefined' ? key : this.generateRandomKey();
    for (let i = 0; i < this.key.length; i += 1) {
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
    let outputString = '';
    for (let i = 0; i < keyLength; i += 1) {
      outputString += shiftString.charAt(Math.floor(Math.random() * shiftString.length));
    }
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
      let inputVsKey = inputNumber + keyNumber;
      let outputNumber = (inputVsKey + this.shiftString.length) % this.shiftString.length
      let outputLetter = this.shiftString.charAt(outputNumber)
      encodeOutputArray.push(outputLetter)
    }
    let encodeOutputString = encodeOutputArray.join('')
    return encodeOutputString
  }

  decode(input) {
    let decodeOutputArray = []
    let encodedKey = this.key;
    for (let i = 0; i < input.length; i++) {
      let inputNumber = this.shiftString.indexOf(input.charAt(i))
      let keyNumber = this.shiftString.indexOf(encodedKey.charAt(i))
      let inputVsKey = inputNumber - keyNumber;
      let outputNumber = (inputVsKey + this.shiftString.length) % this.shiftString.length
      let outputLetter = this.shiftString.charAt(outputNumber)
      decodeOutputArray.push(outputLetter)
    }
    let decodeOutputString = decodeOutputArray.join('')
    return decodeOutputString
  }
}

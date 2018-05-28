var randomString = require("randomstring")

class Cipher {
  constructor( key = randomString.generate({ length: 100, charset: 'abcdefghijklmnopqrstuvwxyz'})) {
    this.key = key
  }
}

module.exports = Cipher

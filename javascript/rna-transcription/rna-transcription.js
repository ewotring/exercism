class DnaTranscriber {}

DnaTranscriber.prototype.toRna = function(dnaStringInput) {
  dnaArrayInput = this.dnaSplitter(dnaStringInput)
  return this.transcriber(dnaArrayInput)
}

DnaTranscriber.prototype.dnaSplitter = function(dnaString) {
  return dnaString.split('')
}

DnaTranscriber.prototype.transcriber = function(dnaArray) {
  let rnaArray = []
  for (let i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i] === 'C') {
      rnaArray.push('G')
    }
    else if (dnaArray[i] === 'G') {
      rnaArray.push('C')
    }
    else if (dnaArray[i] === 'A') {
      rnaArray.push('U')
    }
    else if (dnaArray[i] === 'T') {
      rnaArray.push('A')
    }
    else {
      throw Error('Invalid input')
    }
  }
  return rnaArray.join('')
}

module.exports = DnaTranscriber;

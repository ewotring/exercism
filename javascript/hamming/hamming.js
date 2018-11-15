export const compute = (strand1, strand2) => {
  let hamming = 0;
  if (strand1.length !== strand2.length) {
    throw Error('left and right strands must be of equal length');
  }
  if (strand1 === strand2) {
    hamming = 0;
  } else {
    const arrayStrand1 = strand1.split('');
    const arrayStrand2 = strand2.split('');
    for (let i = 0; i < arrayStrand1.length; i += 1) {
      if (arrayStrand1[i] !== arrayStrand2[i]) {
        hamming += 1;
      }
    }
  }
  return hamming;
};

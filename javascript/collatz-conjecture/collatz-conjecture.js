export const steps = (number) => {
  let currentNumber = number;
  let counter = 0;

  if (currentNumber < 1) {
    throw Error('Only positive numbers are allowed');
  }

  while (currentNumber > 1) {
    if (currentNumber % 2 === 0) {
      currentNumber /= 2;
      counter += 1;
    } else {
      currentNumber = (currentNumber * 3) + 1;
      counter += 1;
    }
  }
  return counter;
};

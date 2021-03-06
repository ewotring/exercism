export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

  }

  kind() {
    let result = '';
    if (this.side1 === 0 || this.side2 === 0 || this.side3 === 0) {
      throw new Error('Zero side length found; please enter nonzero side lengths.');
    } else if (this.side1 < 0 || this.side2 < 0 || this.side3 < 0) {
      throw new Error('Negative side length found; please enter positive side lengths.');
    } else if (
      this.side1 + this.side2 < this.side3
      || this.side1 + this.side3 < this.side2
      || this.side3 + this.side2 < this.side1
    ) {
      throw new Error('This triangle violates the triangle inequality');
    }
    if (this.side1 === this.side2 && this.side2 === this.side3 && this.side1 === this.side3) {
      result = 'equilateral';
    } else if (
      this.side1 === this.side2
      || this.side2 === this.side3
      || this.side1 === this.side3
    ) {
      result = 'isosceles';
    } else {
      result = 'scalene';
    }
    return result;
  }
}

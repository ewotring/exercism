//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
    this.input = input;
};

Year.prototype.isLeap = function () {
    if (this.input % 4 === 0 && this.input % 100 != 0) {
        return true;
    } else if (this.input % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = Year;

function reverseString(inputString) {
    const inputArray = inputString.split('');
    let reverseArray = [];
    for(let i = 0; i < inputString.length; i++) {
        reverseArray.push(inputArray.pop());
    }
    return reverseArray.join('');
}

module.exports = reverseString
const numberToReversedDigits = number => {
    let str = number.toString();
    let reversedDigits = [];

    for (num of str) {
        reversedDigits.unshift(Number(num));
    }
    return reversedDigits;
};

module.exports = numberToReversedDigits;

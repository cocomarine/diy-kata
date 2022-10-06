const reachDestination = (distance, speed) => {
    let etA = distance / speed;
    let intDigit = Math.trunc(etA);
    let fracDigit = etA - intDigit;

    if (fracDigit < 0.5) {
        etA = intDigit + 0.5;
    } else if (fracDigit > 0.5) {
        eta = intDigit + 1;
    }
    return `I should be there in ${etA} hours.`;
};

module.exports = reachDestination;

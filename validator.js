function _sumDivisibleByTen(sin) {
    let sum = 0;
    let sinArray = Array.from(String(sin), Number);
    // Multiply every second element of array by 2
    for (let i = 1; i < sinArray.length; i += 2) {
        sinArray[i] *= 2;
    };
    // Sum all digits in the array
    sum = sinArray.reduce((partialSum, num) => {
        if (num > 9) {
            const firstDigit = Math.floor (num / 10);
            const secondDigit = num % 10;
            return partialSum + firstDigit + secondDigit;
        }
        return partialSum + num;
    }, 0);
    return sum % 10 === 0
}

export function validateSin(sin) {
    // Remove any spaces from the sin entered.
    let isValidSin = true;
    let sanitizedSin = sin.replace(/\s/g, '');

    // Check the length of the sin
    if (!sin || sanitizedSin.length !== 9) {
        isValidSin = false;
        return isValidSin;
    }
    // Multiple sum of every 2nd digit Check
    if (!_sumDivisibleByTen(sanitizedSin)) {
        isValidSin = false;
    }
    return isValidSin;
}

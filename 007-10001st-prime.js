const isPrime = number => {
    /** Edge case */
    if (number === 1) {
        return false;
    }

    const root = Math.ceil(Math.sqrt(number));
    /**
     * A number is always a factor of itself
     */
    let factorsFound = 1;
    let i = 1;

    while (i <= root) {

        if (number % i === 0 && i != number) {
            factorsFound++;
        }
        if (factorsFound > 2) {
            return false;
        }
        i++;
    }

    return true;
}

/**
 * Find the prime
 */
let primePosition = 0;
let primeNumber = null;
let number = 1;

while (primePosition !== 10001) {
    if (isPrime(number)) {
        primeNumber = number;
        primePosition++;
    }
    number++;
}

console.log(`10001st prime is ${primeNumber}`);
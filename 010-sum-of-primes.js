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

const limit = 2000000;
let i = 1;
let sum = 0;
while(i <= limit){
    if(isPrime(i)){
        sum += i;
    }
    i++;
}

console.log(`Sum of primes till ${limit} is ${sum}`);
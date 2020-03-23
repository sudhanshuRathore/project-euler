/**
 * Objective: Find the sum of all the
 * multiples of 3 or 5 below 1000.
 */

const isDivisibleBy = (divisor) => {
    return (dividend) => dividend % divisor === 0;
}

const isDivisibleBy5 = isDivisibleBy(5);
const isDivisibleBy3 = isDivisibleBy(3);

let sum = 0;

for (let i = 0; i < 1000; i++) {
    if (isDivisibleBy5(i) || isDivisibleBy3(i)) {
        sum += i;
    }
}

console.log(`Sum: ${sum}`);
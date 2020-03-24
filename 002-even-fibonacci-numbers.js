/**
 * Problem: https://projecteuler.net/problem=2
 * Objective: Find sum of even fibonacci number until
 * 4 million.
 */

const divisibilityTest = (divisor) => {
    return (dividend) => dividend % divisor === 0;
}

const isEven = divisibilityTest(2);

const limit = 4000000;

let sum = 0;
let term = {
    'previous': 1,
    'current': 2
}

while (term['current'] <= limit) {

    if ( isEven(term['current']) ) {
        sum += term['current'];
    }

    const nextTerm = term['previous'] + term['current'];
    /**
     * Swap terms
     */
    term['previous'] = term['current'];
    term['current'] = nextTerm;
}

console.log(`Sum of even Fibonacci numbers till ${limit} is ${sum}`);
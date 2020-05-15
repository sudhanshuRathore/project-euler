/**
 * Returns an array containing terms of an arithmetic progression
 * @param {int} start Starting number
 * @param {int} difference Difference between two cosecuetive numbers
 * @param {int} termLimit Number of terms to return
 * @returns {Array}
 */
const arithmeticProgression = (start, difference, termLimit) => {
    const terms = [];
    let currentTerm = 1;
    while(currentTerm <= termLimit){
        const termValue = start + difference * (currentTerm - 1);
        terms.push(termValue);
        currentTerm++;
    }
    return terms;
}

const sumOfSquares = arithmeticProgression(1, 1, 100).reduce((carry, current)=> {
    return carry + Math.pow(current, 2);
}, 0);

const squareOfSum = Math.pow(arithmeticProgression(1, 1, 100).reduce((carry, current) => carry + current, 0), 2);
const difference = squareOfSum - sumOfSquares;
console.log(`Difference is : ${difference}`);
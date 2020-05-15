/**
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit
 * numbers is 9009 = 91 × 99.
 * -------------------
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * -------------------
 */

/**
 * Checks if a number is Palindromic
 * @param {int} number 
 * @returns {boolean}
 */
const isPalindromic = (number) => {
    const string = number.toString();
    const numDigits = string.length;
    if(numDigits == 1){
        return true;
    }
    if(numDigits % 2 === 0){
        const firstHalf = string.substr(0, numDigits / 2);
        const secondHalf = string.substr(numDigits / 2, numDigits).split('').reverse().join('');
        return firstHalf === secondHalf;
    }
    const firstHalf = string.substr(0, (numDigits - 1) / 2);
    const secondHalf = string.substr((numDigits + 1) / 2, numDigits).split('').reverse().join('');
    return firstHalf === secondHalf;
}

const number = 999;
const squareRoot = Math.ceil(Math.sqrt(number));

let i = 100;
const palindromes = [];
while(i <=  number){
    let j = squareRoot;
    while(j <=  number){
        if(isPalindromic(i * j)){
            palindromes.push(i * j);
            // console.log(`Palindromic number ${i} * ${j} = ${i * j}`);
        }
        j++;
    }
    i++;
}
const largestPalindrome = palindromes.reduce( (carry, current) => {
    if(carry < current){
        return current;
    }
    return carry;
}, 0)
console.log(`Largest Palindrome is ${largestPalindrome}`);
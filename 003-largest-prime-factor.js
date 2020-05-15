/**------------
 ** Warming up
 **------------
 **/
const isPrime = (int) =>{
    let isPrime = true;
    if(int === 1){
        isPrime = false;
    } 


    for(let i = 2; i <= int;i++){
        if(int % i === 0 && int !== i){
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

/**
 * -----------
 * Solution 
 * -----------
 */
const theNumber = 600851475143;
const half = theNumber/2;
let largestPrimeFactor = 2;
let counter = 2;
while(counter <= half ){
    if(theNumber % counter === 0 ){
        console.log(`Divisible by ${counter}`);
        // if(isPrime(counter)){
        //     largestPrimeFactor = counter
        //     console.log(`Factor found ${counter}`);

        // }
    }
    counter++;
}

console.log(largestPrimeFactor);


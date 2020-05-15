let i = 1;
/**
 * Remove obvious multiples later on
 */
const divisibleArray = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let number = 0;
while(true){
    number = 20 * i;
    const isLCM = divisibleArray.reduce((carry, divisor)=>{
        return carry && number % divisor == 0;
    }, true);
    if(isLCM){
        break;
    }
    i++;
}

console.log(`LCM is ${number}`);
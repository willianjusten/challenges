/**
 * Question: How would you find the greatest common divisor of two numbers?
 */

function greatestCommonDivisor(a,b) {
    var divisor = 2;
    var greatestDivisor = 1;

    while(a >= divisor && b >= divisor){
        if( a % divisor === 0 && b % divisor === 0){
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}

console.log(greatestCommonDivisor(20,30)); //returns 10
console.log(greatestCommonDivisor(2,5)); // returns 1
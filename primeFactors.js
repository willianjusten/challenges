/**
 * Question: How could you find all prime factors of a number?
 */

function primeFactors(n) {
    var primes = [];
    var divisor = 2;

    while(n > 2){
        if(n % divisor === 0){
            primes.push(divisor);
            n = n/divisor;
        }
        else
            divisor++
    }
    return primes;
}

console.log(primeFactors(69));
console.log(primeFactors(16));
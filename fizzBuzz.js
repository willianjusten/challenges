/**
 write a function that prints to the standard output (stdout) the numbers from 1 to N (one per line) with the following restrictions
for multiples of three print “Fizz” instead of the number
for the multiples of five print “Buzz” instead of the number
for numbers which are multiples of both three and five print “FizzBuzz”

 */

function fizzbuzz(n) {
    if(n > 1000)
        return console.log("Can't use number higher than 1000");
    for (var i = 0; i <= n; i++) {
        console.log(
            (i%3 ? '': 'Fizz')+(i%5 ? '' : 'Buzz') || i
        );
    };
}

fizzbuzz(100);
/**
 * Question: How do get nth Fibonacci number?
 * f = 1,1,2,3,5,8
 * f[3] = f[3-1] + f[3-2]
 * f[3] = 1 + 1
 * f[3] = 2
 */

function fibonnaci(n) {
    if(n <= 1)
        return n;
    else
        return fibonnaci(n-1) + fibonnaci(n-2);
}

console.log(fibonnaci(12));
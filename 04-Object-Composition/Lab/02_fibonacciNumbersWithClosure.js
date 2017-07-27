//You are given a number n, return an array containing the 1st to nth Fibonacci number.


function fibonacciNumbersWithClosure(n){
    let fibArray = [];

    for (let i = 0; i < n; i++) {
        fibArray.push(fib());
    }
    return fibArray;
}

let fib = (() => {
    let fib1 = 0;
    let fib2 = 1;

    return () => {
        let oldf1 = fib1;
        let oldf2 = fib2;
        fib1 = oldf2;
        fib2 = oldf1 + oldf2;
        return fib1;
    }
})();

console.log(fibonacciNumbersWithClosure(8));
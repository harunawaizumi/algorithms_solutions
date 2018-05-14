// without memory
// O(2^n)
let cache = {};
function fibonacci(number) {
    if (number < 1)
        return 0;
    if (number <= 2)
        return 1;
    if (number in cache)
        return cache[number];

    let value = fibonacci(number- 1) + fibonacci(number - 2);

    cache[number] = value;
    return value;
}
let ans1 = fibonacci(11)
console.log('ans:', ans1)

// with memory
// O(n)
function fib(num, memo) {
    if (num <= 0) return 0
    else if (num === 1) {
        return 1
    } else {
        memo[num] = fib(num - 1, memo)  +  fib(num - 2, memo)
        return memo[num]
    }
}

function make_fib(num) {
    let memo = {}
    fib(num, memo)
    return memo[num]
}




let list = 'abcaeij'
console.log(make_fib(10));

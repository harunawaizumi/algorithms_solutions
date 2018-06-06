// Author's answer :Solution #3

// This answer is not optimized
// https://www.geeksforgeeks.org/multiply-two-numbers-without-using-multiply-division-bitwise-operators-and-no-loops/
// (1) Decide bigger/smaller - if smaller is 1, bigger is the return
function RecursiveMultiply(a, b) {
    let bigger = a < b ? b : a
    let smaller = a < b ? a : b
    let memo = new Array(smaller + 1)
    return minProduct(smaller, bigger, memo)
}

function minProduct(smaller, bigger, memo) {
    // (2) Base case
    if (smaller === 0) {
        return 0
    } else if (smaller === 1) {
        return bigger;
    }


    // (3) Recursive Case
    let s = Math.floor(smaller / 2)
    let side1 = minProduct(s, bigger, memo)  // for odd
    let side2 = side1
    if (s % 2 === 1) {  // for event
        side2 = minProduct(smaller - s, bigger, memo)
    }

    // (4) Return the answer
    memo[smaller] = side1 + side2
    return memo[smaller]
}




let ans = RecursiveMultiply(3, 5)
console.log(ans)
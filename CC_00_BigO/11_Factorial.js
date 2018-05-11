// O(n)
function factorial(num){
    if (num < 0) return -1
    if (num === 0) return 1
    else if (num > 0) {
        return num * factorial(num - 1)
    }
}
let ans1 = factorial(5)
let ans2 = factorial(10)
console.log('ans:', ans1, 'ans:', ans2,)
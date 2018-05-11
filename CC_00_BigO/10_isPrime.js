// O(n)
function isPrime(num){
    if(!num) return null
    else {
        for(let i = 2; i * i< num; i++) {  // num = 25, 5 * 5 = 25　この場合、５以上は確認する必要がない。
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}
let ans1 = isPrime(29)
let ans2 = isPrime(30)
console.log('ans:', ans1, 'ans:', ans2,)
function sum(x) {
    if (x.length === 1) {
        return x[0]  // base case
    } else {
        return x.pop() + sum(x)  // non-base case
    }
}
console.log(sum([1,2,3,1,2,3]))
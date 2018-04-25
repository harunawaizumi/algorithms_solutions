function count(x) {
    if (x <= 0) {
        return 0
    } else {
        console.log(x)
        return count(x - 1)
    }
}
console.log(count(10))
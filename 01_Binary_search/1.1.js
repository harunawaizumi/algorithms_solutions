function binary_search(num, item) {
    let low = 0
    let high = num
    let count = 0

    while(low < high) {
        let mid = Math.floor((low + high) / 2)
        if (mid < item) {
            low = mid + 1
            count++;
        } else if (mid === item) {
            return count
        } else {
            high = mid - 1
            count++;
        }
    }
    return count

}

const ans = binary_search(128, 128)
console.log(ans)
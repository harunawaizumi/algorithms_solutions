// list should be array so it's a bit different.
function binary_search(list, item) {
    let low = 0
    let high = list * 2 - 1
    let count = 0
    while( low < high ) {
        let mid = Math.floor((low + high)/2)
        if (item < mid) {
            high = mid - 1
            count++;
        } else if (item > mid) {
            low = mid + 1
            count++;
        } else {
            return count
        }
    }
    return count

}

let ans = binary_search(128, 256)
console.log(ans)

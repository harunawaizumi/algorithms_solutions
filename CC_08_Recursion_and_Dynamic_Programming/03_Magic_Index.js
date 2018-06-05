// My Answer O(n)
/**
 * @return {boolean}
 */
function MagicIndex(arr) {
    arr.map((item, index) => {
        if (item === index) return true
    })
    return false
}

// Author's answer O(logN) <- Binary Search
function MagicIndex(arr, start, end) {
    if (end < start) {
        return -1
    }
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === mid) {
        return mid
    } else if (arr[mid] > mid) {
        return MagicIndex(arr, start, mid - 1)
    } else if (arr[mid] < mid) {
        return MagicIndex(arr, mid + 1, end)
    }
}

let data = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]
let ans = MagicIndex(data, 0, data.length)
console.log(ans)

// Count occurrences of a number in a sorted array with duplicates using Binary Search
// https://www.youtube.com/watch?v=pLT_9jwaPLs
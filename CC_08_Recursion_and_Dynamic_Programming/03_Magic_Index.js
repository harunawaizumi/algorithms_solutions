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
// NOT WORKING

function magicFact(arr) {
    return checkArr(arr, 0, arr.length - 1)
}

function checkArr(arr, start, end) {
    if (start > end) {
        return -1
    }

    let midIndex = Math.floor(start + end) / 2
    let midValue = arr[midIndex]

    if (midValue === midIndex){
        return midIndex
    }
    let leftIndex = Math.min(midIndex - 1, midValue)
    let left = checkArr(arr, start, leftIndex)
    if (left >= 0) {
        return left
    }

    let rightIndex = Math.min(midIndex + 1, midValue)
    let right = checkArr(arr, rightIndex, end)
    return right
}

let ans = magicFact([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13])
console.log(ans)
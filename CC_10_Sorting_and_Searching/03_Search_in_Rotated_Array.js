// GeeksForGeeks:
// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/


let mid;
let low;
let high;
let guess;
let target = 5
function find_pivot(arr, start, end) {
    mid = Math.floor(arr.length / 2)
    high = arr.length - 1
    guess = arr[mid]

    if (arr[mid] === target) return mid
    if (arr[mid] < arr[mid + 1]) {
        find_pivot(arr, 0, mid)
    }
    if (arr[mid] > arr[mid + 1]) {
        find_pivot(arr, mid + 1, end)
    }
}
let list = [15, 16, 19, 20, 25, 1, 4, 5, 7, 9, 11]
let item = find_pivot(list, 0, 10)
console.log(item)

// author's answer
// not understand
let mid;
let low;
let high;
let guess;
let target = 5
function find_pivot(arr, left, right) {
    mid = Math.floor((left + right) / 2)
    if (arr[left] < arr[mid]) {  // left normally order
        if (arr[left] < target < arr[mid]) {
            return find_pivot(arr, left, mid-1)
        } else {
            return find_pivot(arr, mid+1, right)
        }
    }
    else if (arr[left] > arr[mid]) {  // right normally order
        if (arr[mid] < target < arr[right]) {
            return find_pivot(arr, mid+1, right)
        } else {
            return find_pivot(arr, left, mid-1)
        }
    }
    else if (arr[mid] === arr[left]) {
        let result = find_pivot(arr, right, mid-1)
        if (result === -1) {
            return find_pivot(arr, mid+1, right)
        }
    }
    return -1
}
let list = [15, 16, 19, 20, 25, 1, 4, 5, 7, 9, 11]
let item = find_pivot(list, 0, list.length)
console.log(item)
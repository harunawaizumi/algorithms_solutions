// GeeksForGeeks
// https://www.geeksforgeeks.org/sparse-search/
// time complexityがlinearになるのはありえない。
// GeeksForGeeks
// https://www.geeksforgeeks.org/sparse-search/


function sparse_search(arr, item) {
    let low = 0
    let high = arr.length - 1
    let mid;
    let guess;
    while (low <= high) {
        mid =  Math.floor((low + high) / 2)
        if (arr[mid] === '') {  // NG: guess
            let ans = true
            let left = mid - 1
            let right = mid + 1
            while(ans) {
                if ((arr[right] !== '') && (right < high)) {
                    mid = right
                    ans = false
                    break
                } else if ((arr[left] !== '') && (left > low)) {
                    mid = left
                    ans = false
                    break;
                } else if (left < low && right > high) {
                    return -1
                }
                right++;
                left--;
            }
        }
        guess =  arr[mid]
        if (arr[mid] === item) {
            return mid
        } else if (item < guess) {
            high = mid - 1
        } else if (item > guess) {
            low = mid + 1
        }
    }
    return -1
}

let list2 =  ['at', 'ball', 'car', 'dad', 'eat']
let list = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '']
console.log(sparse_search(list, 'ball'))
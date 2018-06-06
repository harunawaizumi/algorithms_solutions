// https://www.geeksforgeeks.org/finding-all-subsets-of-a-given-set-in-java/
// This is more direct
// https://www.youtube.com/watch?v=bGC2fNALbNU


function all_subsets(arr) {
    let subset = new Array(arr.length)
    helper(arr, subset, 0)
}

function helper(arr, subset, i) {
    // base case
    if (i === arr.length) {
        console.log(subset)
    }
    //
    else {
        subset[i] = null
        helper(arr, subset, i+1)
        subset[i] = arr[i]
        helper(arr, subset, i+1)
    }
}

let ans = all_subsets([1, 2, 3, 4])
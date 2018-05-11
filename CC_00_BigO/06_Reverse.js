// O(n/2)
function reverse(arr){
    let temp;
    if (arr.length === 0) return null
    else {
        for(let i = 0; i < arr.length/2 - 1; i++) {
            temp = arr[i]
            arr[i] = arr[arr.length - i - 1]
            arr[arr.length - i - 1] = temp
        }
        return arr
    }
}
let ans1 = reverse([1, 2, 3, 4, 5, 6, 7, 8])
console.log('ans:', ans1)
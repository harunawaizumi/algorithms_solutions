function binary_search(arr, item) {

    // array should be sorted before you calculate
    let lowest = 0
    let highest = arr.length - 1
    let count = 0
    let mid = Math.floor((lowest + highest) / 2)
    let guess = arr[mid]
    while(lowest <= highest) {
        mid = Math.floor((lowest + highest) / 2)
        guess = arr[mid]
        if (guess === item) {
            count++;
            return mid

        } else if (guess < item) {

            lowest = mid + 1
            count++
        } else {
            highest = mid - 1
            count++;
        }
    }
    return -1


}

let ans = binary_search([0, 1, 2, 3, 4, 5], 9)
console.log(ans)
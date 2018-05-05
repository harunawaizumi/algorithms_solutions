function binary_search(num, item) {
    let array = create_array(num)
    let lowest = 0
    let highest = num - 1
    let mid = 0
    let guess = array[mid]
    let count = 0
    while(lowest <= highest) {
        mid = Math.floor((lowest + highest) / 2)
        guess = array[mid]
        console.log(array, mid, guess)
        if (item === guess) {
            count++
            return count
        } else if (item < guess) {
            count++;
            highest = mid - 1
        } else {
            count++;
            lowest = mid + 1
        }
    }
    return count
}

function create_array(num) {
    let arr = []
    for(let i = 1; i < num; i++) {
        arr.push(i)
    }
    return arr
}


const ans = binary_search(128, 128)
console.log(ans)
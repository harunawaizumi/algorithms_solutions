// java: https://www.youtube.com/watch?v=6Gv8vg0kcHc

// O(n^2)

// compare the next each other
// if the array is already sorted, swapping doesn't occur in one loop.

function bubble_sort(array) {
    let swapped = true
    let lastUnsorted = array.length - 1
    while (swapped) {
        swapped = false
        for(let i = 0; i < lastUnsorted; i++) {
            if (array[i] > array[i+1]) {
                swap(array, i, i+1)
                swapped = true
            }
        }
        lastUnsorted--;
    }
    return array
}

function swap(array, i , j) {
    let temp = array[i]
    array[i] = array[i+1]
    array[j] = temp
}

let data = [6, 0, 5, 3, 2, 1, 4]
console.log(bubble_sort(data))
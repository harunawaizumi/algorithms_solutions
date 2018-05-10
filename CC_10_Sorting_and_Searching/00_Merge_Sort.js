// https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0

function merge_sort(array) {
    if (array.length === 1) return array  // do not forget!
    let mid = Math.floor((array.length)/ 2)
    let first = array.slice(0, mid)
    let second = array.slice(mid)

    return merge(merge_sort(first), merge_sort(second))
}

// leftとrightはsortされている前提
// どんどん細かくして、length = 1から始めるから、最初にsortされていなくても問題ない。
function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0


    while (indexLeft < left.length && indexRight < right.length){
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++;
        }else{
            result.push(right[indexRight])
            indexRight++;
        }
    }
    console.log('result', result, 'left', left.slice(indexLeft), 'right', right.slice(indexRight))
    return result.concat(right.slice(indexRight)).concat(left.slice(indexLeft))
}

let data = [6, 0, 5, 3, 2, 1, 4, 7]
console.log(merge_sort(data))

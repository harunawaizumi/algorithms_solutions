function findSmallest(arr) {
    let smallest = arr[0]
    let smallest_index = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest_index = i
            smallest = arr[i]
        }
    }

    return smallest_index
}

function selectionSort(arr) {

    let curr = arr.slice(0);  // to make a new array
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let smallest_index = findSmallest(curr)
        newArr.push(curr[smallest_index])
        curr.splice(smallest_index, 1)
    }
    return newArr
}
let ans = selectionSort([5, 3, 1, 10])
console.log('ans', ans)
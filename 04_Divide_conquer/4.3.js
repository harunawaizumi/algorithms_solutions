// better answer
function max(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.shift(), max(array))
    }
}
console.log(max([2, 20, 5, 18, 7, 5]))



// my answer : not good
function find_maximum(list) {
    if(list.length > 1) {
        if (list[0] >= list[list.length - 1]) {
            list.pop()
            return find_maximum(list)
        } else {
            list.shift()
            return find_maximum(list)
        }
    } else {
        return list[0]
    }
}
console.log(find_maximum([2, 20, 5, 18, 7, 5]))


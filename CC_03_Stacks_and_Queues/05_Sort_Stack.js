function sort(array) {
    let stack = array
    let curr = array[array.length - 1]
    let temp = []
    while (stack.length > 0) {
        if ((curr >= temp[temp.length  - 1]) || (temp.length === 0)) {
            temp.push(curr)
            curr = stack.pop()
        } else {
            stack.push(temp.pop())
        }
    }
    while(temp.length > 0){
        stack.push(temp.pop())
    }
    return stack
}

let ans = sort([5,8,2,6,4,1,7,3])
console.log(ans)
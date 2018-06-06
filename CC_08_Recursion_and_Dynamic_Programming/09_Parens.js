function addParent(list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) {
        return;
    }
    if (leftRem === 0 && rightRem === 0) {
        console.log('list', list, 'str', str)
        list.push(str)
    } else {
        str[index] = '('
        addParent(list, leftRem - 1, rightRem, str, index + 1)
        str[index] = ')'
        addParent(list, leftRem, rightRem - 1, str, index + 1)
    }
}

function generateParents(count) {
    let str = new Array(count * 2)
    let list = []
    addParent(list, count, count, str, 0)
    return list
}

let ans = generateParents(3)
console.log(ans)
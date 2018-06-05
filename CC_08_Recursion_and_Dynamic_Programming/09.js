let list = []
function addParent(list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) {
        return null;
    }
    if (leftRem === 0 && rightRem === 0) {
        return list.add(str)
    } else {
        str[index] = '('
        addParent(list, leftRem - 1, rigthRem, str, index + 1)
        str[index] = ')'
        addParent(list, leftRem, rightRem - 1, str, index + 1)
    }
}

function generateParents(count) {
    let str = new Array(count * 2)
    let list = new Array();
    addParent(list, count, count, str, 0)
    return list
}

let ans = generateParents(5)
console.log(ans)
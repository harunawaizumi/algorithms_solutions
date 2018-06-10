function addParens(list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) {
        return;
    }
    if (leftRem === 0 && rightRem === 0) {
        list.push(str.join(''))
    } else {
        str[index] = '('
        addParens(list, leftRem - 1, rightRem, str, index + 1)
        str[index] = ')'
        addParens(list, leftRem, rightRem - 1, str, index + 1)
    }
}

function generateParens(count) {
    let str = new Array(count * 2)
    let list = []
    addParens(list, count, count, str, 0)
    return list
}

let ans = generateParens(3)
console.log(ans)

let answer = []
let haruna = ["(", "(", ")", ")"]
console.log("Pushing: " + haruna.join(''))
answer.push(haruna)
haruna[0] = "x"
console.log("Pushing: " + haruna.join(''))
answer.push(haruna)
haruna[1] = "y"
console.log("Pushing: " + haruna.join(''))
answer.push(haruna)
haruna[2] = "z"
console.log("Pushing: " + haruna.join(''))
answer.push(haruna)
haruna[3] = "-"
console.log(answer)

// [pointer to haruna, pointer to haruna, pointer to haruna, pointer haruna]

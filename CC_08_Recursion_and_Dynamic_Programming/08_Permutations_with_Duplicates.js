

let after;
let before;
let words;
let result = []
let c;
let temp;
function getPerms(prefix, remainder, result) {
    if (remainder === null) {
        return null
    }
    if (remainder.length === 0) {
        if (!result.includes(prefix)) {
            result.push(prefix)
        }
    }

    for(let i = 0; i < remainder.length; i++) {
        before = remainder.substring(0 , i)
        after = remainder.substring(i + 1)
        c = remainder.charAt(i)
        getPerms(prefix + c, before + after, result)
    }
    return result
}


let ans = getPerms('', 'abcda', result)
// 60 = (5 * 4 / 2) * 3 * 2 = 10 * 3 * 2
console.log(ans)
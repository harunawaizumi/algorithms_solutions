// My answer: O(n)
// O(n) + extra space
// https://www.geeksforgeeks.org/permutations-of-a-given-string-using-stl/

function PermutationsWithoutDups(str) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        if (result.length === 0 || result.indexOf(str.charAt(i)) === -1) {
            result.push(str.charAt(i))
        }
    }
    return result
}

// Author's answer:
// without duplicatesは、始めにいれるワードにダブりがないよっていう意味。

let before;
let after;
let words;
let result = []
let c;
function getPerms(prefix, remainder, result) {
    if (remainder === null) return null
    if (remainder.length === 0) {
        result.push(prefix)
    }


    for(let i = 0; i < remainder.length; i++) {
        before = remainder.substring(0, i) // beforeとafterは使い回しをするから定義はfunctionの外で行う
        after = remainder.substring(i + 1)
        c = remainder.charAt(i)
        getPerms(prefix + c, before + after, result) // ここにreturnを書いてしまうと次のターンに行かずに終わってしまうので注意
    }
    return result
}



let ans = getPerms('', 'abcde', result)
ans.forEach(l => {
    console.log(l)
})
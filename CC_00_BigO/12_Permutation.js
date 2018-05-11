// print all permutation of a string
// O(n)
function list_permutation(str) {
    let result = []
    permutation('', str, result)
    return result
}
function permutation(prefix, suffix, result){
    if (suffix.length === 0) {
        result.push(prefix)
    } else {
        for(let i = 0; i < suffix.length; i++) {
            permutation(prefix + suffix.charAt(i), suffix.substring(0, i) + suffix.substring(i + 1), result)
        }
    }
    return console.log(result)
}

let ans1 = list_permutation('hello')
console.log('ans:', ans1)
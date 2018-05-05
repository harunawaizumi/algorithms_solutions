// Solution#1 O(2n)
function palindrome_permutation(str) {
    let table = build_char_frequency(str)
    return check_odd(table)
}

function build_char_frequency(str) {
    let table = {}
    for(let i = 0; i < str.length; i++) {
        if (table[str[i]]) {
            table[str[i]] += 1
        } else {
            table[str[i]] = 1
        }
    }
    return table
}

function check_odd(obj) {
    let result = true
    Object.values(obj).map(count => {
        if (count % 2 === 1) {
            result  = false
        }
    })
    return result
}





let ans = palindrome_permutation("taco  ocat")
console.log(ans)
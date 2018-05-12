// Case Sensitive: STR.toLowerCase()
// Permutation: 意味のある言葉を並べ替えたもの
// Anagram: 文字を並べ替えたもの（意味がないランダムな言葉である可能性もある）
// Anagram includes permutation

// my answer O(2n)
function count_str(str) {
    let obj = {}
    for(let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
    }
    return obj
}



function withdraw_str(str, obj) {
    for(let i = 0; i < str.length; i++) {
        if (!obj[str[i]] || (obj[str[i]] === 0)) {
            return false
        }
        else {
            obj[str[i]] -= 1
        }
    }
    return true
}

function check_two(first, second) {
    let object = count_str(first)
    return withdraw_str(second, object)
}

let ans = check_two('hello', 'helol')
console.log(ans)


// author's answer O(3n)
function sort_str(str) {
    //if it's not case sensitive
    return str.toLowerCase().split("").sort()
}

function compare_two_string(w1, w2) {
    if (w1.length !== w2.length) {
        return false
    }
    for(let i = 0; i < w1.length; i++) {
        if (w1[i] !== w2[i]) {
            return false
        }
    }
    return true
}

function permutation(first, second) {
    let sorted1 = sort_str(first)
    let sorted2 = sort_str(second)
    return compare_two_string(sorted1, sorted2)
}
let ans2 = permutation('hello', 'helol')
console.log(ans2)

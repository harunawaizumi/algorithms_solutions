// 1st answer: I don't understand
function FindAllPermutation(str, index, buffer) {
    if (typeof str === 'string'){
        str = str.split("")
    }
    if (typeof  index === 'undefined') {
        index = 0
    }
    if (typeof buffer === 'undefined') {
        buffer = []
    }
    if (index >= str.length) return buffer
    for(let i = index; i < str.length; i++) {
        buffer.push(ToggleLetters(str, index + 1, buffer))
    }
    return FindAllPermutation(str, index + 1, buffer)
}

/**
 * @return {string}
 */
// ['a', 'b', 'c'] -> ['c', 'b', 'a']
function ToggleLetters(str, index1, index2) {
    if (index1 !== index2) {
        let temp = str[index1]
        str[index1] = str[index2]
        str[index2] = temp
    }
    return str.join('')
}

// 2nd answer: I understand
// prefix: 接頭語 suffix: 接尾語
// ASK: What are we making permutation of
// 新しいstringを作っていく。
// prefix: 接頭語　fixedされたletter
// suffix: 接尾語　need to fix later
// https://www.youtube.com/watch?v=IPWmrjE1_MU
// O(n^2)
function list_permutation(s) {
    let results = []
    permutation("", s, results)
    return results
}

function permutation(prefix, suffix, results) {
    if (suffix.length === 0){
        results.push(prefix)
    } else {
        for(let i = 0; i < suffix.length; i++) {
            permutation(prefix + suffix.charAt(i), suffix.substring(0, i) + suffix.substring(i + 1, suffix.length), results)
        }
    }
    return console.log(results)
}
console.log(list_permutation("the"))

// 3rd answer:
// swapを使うパターンは理解できなかった。
// 動画の後半
// https://www.youtube.com/watch?v=IPWmrjE1_MU
// 要素が３つの場合：３つのうち２つの要素を順番にswapさせれば、６パターンを出すことができる。
// 要素が４つの場合：始めの１個を選ぶ　×　３つの場合のパターン

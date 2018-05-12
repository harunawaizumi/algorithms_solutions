// !Important
// 1. ASCIIかUnicodeのことをさしているのか質問する
// ASCII: 128しか種類がないから、str>128の場合は必然的にfalseになる。
// Unicode: 130,000以上あるから、長さでフィルターをかけられない。

// 1. No another data structure
// functionの中に新しいオブジェクトを作ることはdata structureとしては見られない（らしい）

// 2. How to calculate
//新しいletter だったらtrueを入れる。２度めの場合はreturn false
function isUniqueChars(str) {
    if (str.length > 128) {
        return false
    }
    let checked = {}
    for(let i = 0; i < str.length; i++) {
        let elm = str.charAt(i)
        if (checked[elm]) return false
        checked[elm] = true
    }
    return true
}

let ans = isUniqueChars("hello")
console.log(ans)
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
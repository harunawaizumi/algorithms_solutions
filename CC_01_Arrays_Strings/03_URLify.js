// author's answer O(2n)
function URLify(str) {
    let removed = remove_space_at_end(str)
    for(let i = 0; i <= removed.length - 1; i++) {
        if (removed.charAt(i) === ' ') {
            removed = removed.replace(removed.charAt(i), '%20')
            console.log(removed)
        }
    }
    return removed
}

function remove_space_at_end(str) {
    if (str === null) return str
    return str.replace(/\s+$/g, '')
}

let ans = URLify("  he he         ")
console.log(ans)
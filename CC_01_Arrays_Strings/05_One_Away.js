// author's answer O(n)

function one_way(w1, w2) {
    if ((w1.length === w2.length) && (w1 !== w2)) {
        return do_replace(w1, w2)
    } else if (w1.length === w2.length + 1) {
        return do_remove_or_insert(w1, w2)
    } else if (w2.length === w1.length + 1) {
        return do_remove_or_insert(w2, w1)
    }
    return false
}

function do_remove_or_insert(longer, shorter) {
    let foundDifference = false
    for(let i =0; i < shorter.length; i++) {
        if(longer[i] !== shorter[i]) {
            if (foundDifference) {
                return false
            }
            foundDifference = true
            longer= longer.replace(longer.charAt(i), "")
        }
    }
    return foundDifference
}

function do_replace(first, second) {
    let foundDifference = false
    for(let i =0; i < first.length; i++) {
        if(first[i] !== second[i]) {
            if (foundDifference) {
                return false
            }
            foundDifference = true
        }
    }
    return foundDifference
}




let ans = one_way('pale', 'pble')
console.log(ans)
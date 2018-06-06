// "length is not defined"はhelper functionを使うと解決できた。
// almost but can't finish yet
let after;
let before;
let words;
let result = []
let c;
let temp;
let checked = []
let curr;

function printPerms(s) {
    let result = new Array()
    let map = buildFreqTable(s)
    printPerms(map, '', s, result)
    return result;
}

function buildFreqTable(s) {
    let map = {}
    let curr;
    for(let i = 0; i < s.length; i++) {
        curr = s.charAt(i)
        if (!map.hasOwnProperty(curr)) {
            map[curr] = 1
        }
        else {
            map[curr]++;
        }
    }
    return map
}

function printPerms(map, prefix, remaining, result){
    if (remaining === null) {
        return null
    }
    if (remaining.length === 0) {
        result.push(prefix)
        return
    }

    let count;
    let curr;
    for(let i = 0; i < remaining.length; i++) {
        curr = remaining.charAt(i)
        count = map[curr]
        before = remaining.substring(0, i)
        after = remaining.substirng(i + 1)
        if (count > 0) {
            map[remaining.charAt(i)]--;
            return printPerms(map, prefix, before + after, result)
        }
        return getPerms(map, prefix + c, before + after, result)
    }
    return result
}



let ans = printPerms('abcda')
// 60 = (5 * 4 / 2) * 3 * 2 = 10 * 3 * 2
console.log(ans)
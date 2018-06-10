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

function getPerms(s) {
    let result = []
    let map = buildFreqTable(s)
    printPerms(map, '', s.length, result)
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
    if (remaining === 0) {
        result.push(prefix)
        return
    }

    Object.entries(map).forEach(([ch, count]) => {
        if (count !== 0) {
            const newMap = {
                ...map,
                [ch]: count - 1
            }
            printPerms(newMap, prefix + ch, remaining - 1, result)
        }
    })
}


let ans = getPerms('abbccc')
// 60 = (5 * 4 / 2) * 3 * 2 = 10 * 3 * 2
ans.forEach(l => {
    console.log(l)
})
function sorted_merge(a, b) {
    if (b.length === 0) return a
    let aIndex = 0;
    let bIndex = 0
    let result = []

    while (aIndex < a.length && bIndex < b.length) {
        if (a[aIndex] < b[bIndex]) {
            result.push(a[aIndex])
            aIndex++;
        }
        else {
            result.push(b[bIndex])
            bIndex++;
        }
    }
    return result.concat(a.slice(aIndex)).concat(b.slice(bIndex))
}


let data1 = [0, 3, 6, 8]
let data2 = [1, 2, 4, 7]
console.log(sorted_merge(data1, data2))
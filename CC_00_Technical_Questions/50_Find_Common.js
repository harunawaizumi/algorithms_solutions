function check_same(a, b) {
    let iA = 0
    let iB = 0
    let result = []
    while (iA < a.length && iB < b.length) {
        if (a[iA] === b[iB]) {
            result.push(a[iA])
            iA++;
            iB++;
        } else if (a[iA] < b[iB]) {
            iA++;
        }else if (a[iA] > b[iB]) {
            iB++;
        }
    }
    return result
}


let arr1 = [13, 27, 35, 40, 49, 55, 59]
let arr2 = [17, 35, 39, 40, 55, 58, 60]
console.log(check_same(arr1, arr2))

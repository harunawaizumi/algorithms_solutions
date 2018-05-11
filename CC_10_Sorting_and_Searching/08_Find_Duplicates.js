// GeeksForGeeks



function dups(arr){
    let obj = {}
    let ans = []
    if (arr.length === 0) return null
    else {
        arr.map(item => {
            if (obj.hasOwnProperty(item)) {
                if (obj[item] === 1) {
                    ans.push(item)
                }
                obj[item]++;
            } else {
                obj[item] = 1
            }
        })
        return ans
    }
}
let ans1 = dups([1,2,3])
let ans2 = dups([1,2,2])
let ans3 = dups([3,3,3])
let ans4 = dups([2,1,2,1])
console.log('ans:', ans1,'ans:', ans2, 'ans:', ans3,'ans:', ans4)
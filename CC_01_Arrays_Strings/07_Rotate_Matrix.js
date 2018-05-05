// ??? from youtube not not sure
function swap(x, y) {
    let temp = x
    x = y
    y = temp
}

let level = 0
let toNumOfLevels = N
let last = N
while(level < toNumOfLevels) {
    for(let i = level; i < last; i+2) {
        swap([level, i], [i, last])
        swap([level, i], [last, last - i])
        swap([level, i], [last - i, i])
    }
    level += 2;
    last -= 2;
}


function create_matrix(N) {

}
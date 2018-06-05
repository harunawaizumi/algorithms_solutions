//https://www.youtube.com/watch?v=GO5QHC_BmvM
// GeeksForGeeks
// https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/


// not recursive way
function create_table(row,col) {
    let result = new Array(row)
    for(let i = 0; i < row; i++) {
        result[i] = new Array(col)
    }
    return result
}

function numberOfPaths(r, c) {
    let count = create_table(r, c)
    for(let i = 0; i < c; i++) {
        count[i][0] = 1
    }
    for(let j = 0; j < r; j++) {
        count[0][j] = 1
    }
    for(let i = 1; i < c; i++) {
        for(let j = 1; j < r; j++) {
            count[i][j] = count[i-1][j] + count[i][j-1]
        }
    }
    return count[c-1][r-1]
}



numberOfPaths(5,3)


// recursive way
function RobotInaGrid(c, r) {
    if (c === 1 || r === 1) {
        return 1
    } else {
        return RobotInaGrid(c-1, r) + RobotInaGrid(c, r-1)
    }
}

let ans = RobotInaGrid(3, 3)
console.log(ans)
// Too Difficult but found many articles and videos
// https://www.youtube.com/watch?v=xouin83ebxE

let GRID_SIZE = 8

function EightQueens(row, columns, results) {
    if (row === GRID_SIZE) {
        console.log(columns)
    }
    else {
        for(let col = 0; col < GRID_SIZE; col++) {
            if (checkValid(columns, row, col)) {
                columns[row] = col;
                placeQueens(row + 1, columns, results)
            }
        }
    }
}

function checkValid(columns, row, column) {
    for(let r = 0; r < row; r++) {
        let c = columns[r]
        if (column === c) {
            return false
        }
        let columnDistance = Math.abs(c - column);
        let rowDistance = row - r
        if (columnDistance === rowDistance) {
            return false;
        }
    }
    return true;
}

console.log(EightQueens(5, 5, []));
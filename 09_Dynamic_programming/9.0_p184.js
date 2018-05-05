let word1 = 'fort'
let word2 = 'fosh'

function check_subsequence(a, b) {
    let C = []
    for (let i = 0; i <= a.length; i++) C.push([0]);
    for (let j = 0; j < b.length; j++) C[0].push(0);

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++)
            C[i+1][j+1] = a[i] === b[j] ? C[i][j]+1 : Math.max(C[i+1][j], C[i][j+1]);
    }
    console.log(C)
    return C
}


check_subsequence(word1, word2)
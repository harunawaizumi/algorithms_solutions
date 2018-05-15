function Insertion(n, m, i, j) {
    // i  = 2, j = 4
    let allOnes = ~0
    let left = allOnes << (j + 1)
    let right = ((1 << j) -1)
    let mask = left || right
    let editN = n && mask
    let editM = m << i
    return editN || editM
}

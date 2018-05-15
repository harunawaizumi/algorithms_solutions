//https://www.youtube.com/watch?v=nOcFiGl5Vy4&t=180s


function Node(value) {
    this.value = value
    this.right = right
    this.left = left
}

function isBalanced(n) {
    return balancedHeight(n) > -1
}
// 各ノードで左右を比較。falseが発覚した場合は−１にしておく。
function balancedHeight(n) {
    // base case
    if (n = null) return -1

    // recursive case
    let h1 = balancedHeight(n.right)
    let h2 = balancedHeihgt(n.left)
    // These are the cases that that return -1
    // whether their child is -1 or not
    if (h1 === -1 || h1 === -1) {return -1}
    if (Math.abs(h1 - h2) > 1) {return -1}

    // return the final answer
    if (h1 > h2) return h1 + 1
    if (h2 > h1) return h2 + 1
}
//The way of logic about Inorder Successor : https://www.youtube.com/watch?v=5cPbNCrdotA&t=7s
// Recommended: https://www.youtube.com/watch?v=JdmAYw5h3G8
function inOrderSuccessor(node) {
    if (n === null) return null;
    if (n.right != null) {
        return leftMostChild(n.right)
    } else {
        let q = n;
        x = q.parent;
        while(x !== null && x.left !== q) {
            q = x
            x = x.parent
        }
        return x
    }
}

function leftMostChild(n) {
    if (n === null) {
        return null;
    }
    while(n.left !== null) {
        n = n.left;
    }
    return n;
}
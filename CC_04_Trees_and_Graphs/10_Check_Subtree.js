// 00_Check_Identical is important to understand before solving this problem
// https://www.youtube.com/watch?v=73PQ9raLEVs

function Tree() {
    this.root = null
}

function Node(value) {
    this.value = value
    this.right = null
    this.left = null
}

Tree.prototype.addValue = function(val) {
    let n = new Node(val)
    if (this.root === null) {
        this.root = n
    } else {
        this.root.addNode(n)
    }
}
let n;
Node.prototype.addNode = function(node) {
    if (node.value < this.value) {
        if (this.left === null) {
            this.left = node
        } else {
            this.left.addNode(node)
        }
    } else if (node.value > this.value) {
        if (this.right === null) {
            this.right = node
        } else {
            this.right.addNode(node)
        }
    }
}

let tree1 = new Tree()
tree1.addValue(20)
tree1.addValue(10)
tree1.addValue(5)
tree1.addValue(3)
tree1.addValue(7)
tree1.addValue(30)
tree1.addValue(15)
tree1.addValue(17)
let tree2 = new Tree()
tree2.addValue(10)
tree2.addValue(15)
tree2.addValue(17)
tree2.addValue(5)
tree2.addValue(3)
tree2.addValue(7)


function check_identical(p1, p2) {
    if (p1 === null && p2 === null) return true
    if ((p1 !== null && p2 === null) || (p1 === null && p2 !== null)) return false
    if (p1.value === p2.value) {
        let left = check_identical(p1.left, p2.left)
        let right = check_identical(p1.right, p2.right)
        return left && right
    }
}

function check_subtree(main, sub) {
    if (main === null && sub === null) return true
    if (main !== null && sub === null) return true
    if (main === null && sub !== null) return false
    if (check_identical(main, sub)) return true
    else {
        return (check_subtree(main.left, sub) || check_subtree(main.right, sub))
    }
}
console.log(tree1, tree2)
console.log(check_subtree(tree1.root, tree2.root))
 // to check two trees are identical or not
 // https://www.youtube.com/watch?v=kL5Gs1YTwMM
 // important to remember

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
tree2.addValue(20)
tree2.addValue(10)
tree2.addValue(5)
tree2.addValue(3)
tree2.addValue(7)
tree2.addValue(30)
tree2.addValue(15)
tree2.addValue(17)

function check_identical(p1, p2) {
    if (p1 === null && p2 === null) return true
    if ((p1 !== null && p2 === null) || (p1 === null && p2 !== null)) return false
    if (p1.value === p2.value) {
        let left = check_identical(p1.left, p2.left)
        let right = check_identical(p1.right, p2.right)
        return right === true && left === true
    }
}
console.log(tree1, tree2)
console.log(check_identical(tree1.root, tree2.root))


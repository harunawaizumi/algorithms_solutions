// https://www.youtube.com/watch?v=13m9ZCB8gjw&t=577


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

let tree = new Tree()
tree.addValue(20)
tree.addValue(10)
tree.addValue(5)
tree.addValue(3)
tree.addValue(7)
tree.addValue(30)
tree.addValue(15)
tree.addValue(17)


function first_common_ancestor(node, n1, n2) {
    // (1) leaf case
    if (node === null) {return null}
    if (n1 === node.value || n2 === node.value) {
        return node
    }

    // (2) NOT leaf case
    let left = first_common_ancestor(node.left, n1, n2)
    let right = first_common_ancestor(node.right, n1, n2)

    // (3) To return the item
    // 1:両方から値が返ってきた場合、そのノードがcommon ancestorになる
    if (left !== null && right !== null) return node;
    // 2:両方からnullが返ってきた場合、その上に応えがあるからnullを返してもっｔ上を探す必要がある。
    if (left === null && right === null) return null;
    // 3:片方から値が返ってきた場合、受け取った値をさらに親に渡す必要あり。
    return left !== null ? left : right
}
console.log(first_common_ancestor(tree.root, 3, 17))
console.log(tree)

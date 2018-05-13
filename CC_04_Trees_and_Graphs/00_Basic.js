// めちゃくちゃ大事！かけるように！
// https://www.youtube.com/watch?v=ZNH0MuQ51m4
// Delete a node from a binary tree

function Tree() {
    this.root = null
}

let n
// add
Tree.prototype.addValue = function(val) {
    n = new Node(val)
    if (this.root === null) {
        this.root = n
    } else {
        this.root.addNode(n) // NG: this.root.addNode = n
    }
}

function Node(val){
    this.value = val
    this.right = null
    this.left = null
}

Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
        if (this.left === null) {
            this.left = n
        } else {
            this.left.addNode(n)
        }
    } else if (n.value > this.value) {
        if (this.right === null) {
            this.right = n
        } else {
            this.right.addNode(n)
        }
    }
}

// print
Tree.prototype.traverse = function() {
    this.root.visit()
}

Node.prototype.visit = function() {
    if(this.left !== null) {
        this.left.visit()
    }
    console.log(this.value)
    if (this.right !== null) {
        this.right.visit()
    }
}
let tree =new Tree()
for(let i = 0; i < 100; i++) {
    let item = Math.floor(Math.random() * 100)
    tree.addValue(item)
}

console.log(tree.traverse())
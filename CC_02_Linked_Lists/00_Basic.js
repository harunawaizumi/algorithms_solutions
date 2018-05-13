// 大切！かけるように！
// doubly
function LinkedList() {
    this.head = null
    this.length = 0　　 // Treeの時はlengthはいらない
}


LinkedList.prototype.add = function(element) {
    // 1. Nodeを作る。
    let node = {
        element: element,
        next: null
    }

    // 2. Depends on whether the head exists ot not
    let currentNode = this.head
    if(!this.head) {
        this.head = node
        this.length++;
    } else {

        // 3. Move to the currNode unless the next node exists, and then add the node
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = node
        this.length++;
    }
}

LinkedList.prototype.remove = function(index) {
    // 1. curr, prev, nextが必要
    let currentNode = this.head
    let prevNode;
    let currentIndex = 0

    // 2. 長さによって対応を分ける
    if (this.length === 0) {
        return false
    } else if (this.length === 1 || index === 0) {
        return null
    } else if (index > this.length) {
        return false
    } else {

        while(currentIndex < index) {
            currentIndex++;
            prevNode = currentNode
            currentNode = currentNode.next
        }
        prevNode.next = currentNode.next
        this.length--;
    }
}


function check_duplicate(node) {
    let currentIndex = 0
    let currentNode = node.head
    let prevNode;
    let checked = []

    while(currentNode) {
        let elm = currentNode.element
        if (checked.indexOf(elm) !== -1) {
            prevNode.next = currentNode.next
            node.length--
        }
        checked.push(currentNode.element)

    }
}

let data = new LinkedList()
data.add('a')
data.add('b')
data.add('c')
data.add('d')
data.remove(2)
console.log('data', data)
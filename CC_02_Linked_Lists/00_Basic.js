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



LinkedList.prototype.add = function(elem) {
    let node = {
        element: elem,
        next: null
    }

    let currNode = this.head

    if (this.head === null) {
        this.head = node
    } else {
        while (currNode.next) {
            currNode = currNode.next
        }
        currNode.next = node
    }
}


let data = new LinkedList()
data.add('a')
data.add('b')
data.add('c')
data.add('d')
data.remove(2)
console.log('data', data)
// https://www.geeksforgeeks.org/delete-middle-of-linked-list/

function LinkedList() {
    this.head = null
    this.length = 0

}

LinkedList.prototype.add = function (element) {
    let currIndex = 0
    let currNode = this.head
    let prevNode;
    let node = {
        element: element,
        next: null
    }

    if (!this.head) {
        this.head = node
        this.length++;
    } else {
        while(currNode.next) {
            prevNode = currNode
            currNode = currNode.next
            currIndex++;
        }

        currNode.next = node
        this.length++;

    }
    return node
}

LinkedList.prototype.remove = function(index) {
    let currNode = this.head
    let currIndex = 0

    if (!this.head || this.length === 1) {
        return false
    } else {
        while(currIndex < index - 1){
            currNode = currNode.next
            currIndex++;
        }
        currNode.next = currNode.next.next
        this.length--;
    }
}


function deleteMiddleNode(node){
    if (node === nulll || node.next === null) {
        return null
    }
    let prev;
    let curr = node
    let runner = node
    while (runner.next && runner.next.next) {
        prev = curr
        curr = curr.next
        runner = runner.next.next
    }
    prev.next = curr.next
    return node
}


let node = new LinkedList()
node.add("a")
node.add("b")
node.add("c")
node.add("d")
node.add("e")
node.add("f")
node.add("g")
deleteMiddleNode(node)
console.log(node)
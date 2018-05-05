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


function get_middle (node) {
    if (node.head === null) {
        return null
    }
    if (node.head.next === null) {
        return false
    } else {

        let currNode = node.head
        let middNode = node.head
        let index = 0


        while(currNode !== null && currNode.next !== null) {
            currNode = currNode.next.next
            middNode = middNode.next
            index++;
        }
        return node.remove(index)
    }
}



let node = new LinkedList()
node.add("a")
node.add("b")
node.add("c")
node.add("d")
node.add("e")
node.add("f")
node.add("g")
get_middle(node)
console.log(node)
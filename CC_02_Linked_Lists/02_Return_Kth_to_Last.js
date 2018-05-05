// http://www.growingwiththeweb.com/2015/08/find-the-kth-last-element-in-a-linked-list.html


function LinkedList () {
    this.head = null
    this.length = 0
}


LinkedList.prototype.add = function(element) {
    let currNode = this.head
    let currIndex = 0
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
        node.next = null
        this.length++;
        return node.element;
    }
}

let Node = new LinkedList()
Node.add('a')
Node.add('b')
Node.add('c')
Node.add('d')
console.log(Node)


// Author's answer
LinkedList.prototype.kth_to_last = function(k) {
    if (!this.head || k < 1) {
        return undefined;
    }
    let current = this.head
    let nBehindCurrent = this.head;
    for(let i = 0; i < k - 1; i++) {
        if (!current) {
            return undefined
        }
        current = current.next
    }

    while(current.next !== null) {
        nBehindCurrent = nBehindCurrent.next;
        current = current.next;
    }

    return nBehindCurrent
}



let ans = Node.kth_to_last(3)
console.log(ans)



// NG: Solution!! You don't know how many elements it has
LinkedList.prototype.kth_to_last = function(k) {
    let targetIndex = this.length - k
    let currIndex = 0
    let currNode = this.head
    let prevNode;

    if (!this.head || k < 1) {
        return undefined
    }
    while(currIndex < targetIndex) {
        currNode = currNode.next
        prevNode = currNode
        currIndex++;
    }
    console.log('kth_to', currNode.element)
    return currNode.element


}

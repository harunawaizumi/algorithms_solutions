function check_palindrome(node){
    let curr = node
    let runner = node
    let stack = []
    while(runner.next !== null && runner.next.next !== null) {
        stack.push(curr.element)
        curr = curr.next
        runner = runner.next.next
    }
    if (runner !== null) {
        curr = curr.next
    }
    stack.push(curr.element)
    while(curr !== null) {
        console.log('stack', stack, 'curr', curr)
        if (stack.pop() !== curr.element) {
            return false
        }
        curr = curr.next
    }
    return true
}



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


let node1 = new LinkedList()
node1.add(0)
node1.add(1)
node1.add(2)
node1.add(3)
node1.add(4)
node1.add(4)
node1.add(3)
node1.add(2)
node1.add(1)
node1.add(0)


console.log('node1', check_palindrome(node1.head))
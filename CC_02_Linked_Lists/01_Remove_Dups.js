// Linked List

// Singly ? Doubly ?
// linear data structure similar to array


// read slower
// - each node knows only the next element
// - the only want to get to a value in the list is to start at the beginning.

// insert/remove faster



function remove_dups(node) {
    let current;
    while(current) {
        current = node.head
        let runner = current
        while(runner.next) {
            if (current.value === runner.value) {
                let nextNode = runner.next
                let prevNode = runner.prev
                prevNode.next = nextNode
            }
            runner = runner.next
        }
        current = current.next
    }
    return node
}


console.log(remove_dups(Node))


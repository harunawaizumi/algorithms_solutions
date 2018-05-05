// author's answer O(n)
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

let data = ''  // it should be outside of the function below to avoid to create a new variable for each loop
let result = new LinkedList()
function sum_lists(curr1, curr2, carry) {
    if (curr1 === null && curr2 === null && carry === 0) {
        return null
    }
    let first = 0
    let second = 0
    if (curr1.element !== null) {
        first = curr1.element
    }
    if (curr2.element !== null) {
        second = curr2.element
    }

    if (first  !== null || second !== null) {
        let total = first + second + carry
        data = (total % 10) + data
        console.log('data', data)
        sum_lists(curr1.next === null ? null : curr1.next, curr2.next === null ? null : curr2.next, total >= 10 ? 1: 0 )
        result.add(total % 10)
    }
    return result
}



let node1 = new LinkedList()
node1.add(7)
node1.add(1)
node1.add(6)

let node2 = new LinkedList()
node2.add(5)
node2.add(9)
node2.add(2)

console.log(node1)
console.log(node2)
let ans = sum_lists(node1.head, node2.head, 0)
console.log('ans', ans)
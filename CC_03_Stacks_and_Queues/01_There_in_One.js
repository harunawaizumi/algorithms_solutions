function Queue() {
    let numberOfStacks = 3
    let stackCapacity;
    let values;
    let sizes;

    // make multiple stacks with specific size
    this.fixedMultiStack = function(stackSize) {
        stackCapacity = stackSize
        values = new Array(numberOfStacks * stackCapacity)
        sizes = new Array(numberOfStacks).fill(0)  // to initialize array with 0
        return values
    }


    this.push = function(stackNum, value) {
        if (this.isFull(stackNum)) {
            console.log('Stack is already full')
        } else {
            sizes[stackNum]++;  // この下のコードを上に書くと、変になる。数を数えてからvaluesを変更する。
            values[this.indexOfTop(stackNum)] = value
        }
    }

    this.pop = function(stackNum) {
        if (this.isEmpty(stackNum)) {
            console.log('it is empty')
        } else {
            let topIndex = this.indexOfTop(stackNum)
            values[topIndex] = 0
            sizes[stackNum]--;
            return value
        }
    }

    // return top element
    this.peek = function(stackNum) {
        let indexOfTop = indesOfTop(stackNum)
        return values[indexOfTop(stackNum)]
    }

    // to check the stack is empty or not
    this.isEmpty = function(stackNum) {
        return sizes[stackNum] === 0
    }

    // to check the stack is full or not
    this.isFull = function(stackNum) {
        return sizes[stackNum] === stackCapacity
    }

    // to return index of the top of the stack
    // if there is 13 items in total, it returns 2 (stackSize = 5)
    this.indexOfTop = function(stackNum) {
        let offset = stackNum * stackCapacity // 2 * 5 = 10
        let size = sizes[stackNum] // 3
        return offset + size - 1
    }

    this.print = function() {
        return console.log('sizes', sizes, 'valus', values)
    }
}



let q1 = new Queue()
q1.fixedMultiStack(5)
q1.push(0, 1)
q1.push(0, 2)
q1.push(0, 3)
q1.print()
q1.push(1, 1)
q1.push(1, 2)
q1.push(1, 3)
q1.print()


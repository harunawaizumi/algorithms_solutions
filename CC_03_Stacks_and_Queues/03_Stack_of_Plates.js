
function Stack () {
    let capacity;
    let size;
    let Node;

    // ここにセットされる時にsizeとcapacityがinitializeされる。this.sizeとかthis.capacityとかで変化させることができるようになる。
    this.setCapacity = function(capacity) {
        this.capacity = capacity
        this.size = 0
        this.Node = []
    }

    this.isEmpty = function() {
        return this.size === 0
    }

    this.isFull = function() {
        return this.capacity === this.size
    }

    this.pop = function() {
        if (this.size === 0) return null
        else {
            size--;
            return Node.pop()
        }
    }

    this.push = function(elem) {
        if (this.isFull()) {
            return console.log('it is already full')
        } else {
            this.size++;
            this.Node.push(elem)
            return this.Node
        }
    }
}


function SetOfStacks() {
    let stacks = []
    let capacity;
    this.setOfStacks = function(capacity) {
        this.capacity = capacity
    }

    this.getLastStack = function() {
        if (stacks.length === 0) return null
        return stacks[stacks.length - 1]
    }

    this.push = function(value) {
        let last = this.getLastStack()
        if(last !== null && !last.isFull()){
            last.push(value)
        } else {
            let stack = new Stack()
            stack.setCapacity(5)
            stack.push(value)
            stacks.push(stack)
            return console.log('stacks', stacks)
        }
    }

    this.pop = function() {
        let last = this.getLastStack()
        if (last === null) return console.log('empty')
        last.Node.pop()
        last.size--;
        if (last.size === 0) {
            stacks.pop()
        }
        return console.log(stacks[0] ? stacks[0].Node: '', stacks[1] ? stacks[1].Node: null)
    }
    this.isEmpty = function() {
        let last = this.getLastStack()
        return last.length === 0 || last.isEmpty()
    }

    this.popAt= function(index) {
        return console.log('popAt', stacks[index] ? stacks[index].Node : 'empty')
    }
}

let s1 = new SetOfStacks()
s1.push(1)
s1.push(3)
s1.push(5)
s1.push(7)
s1.push(9)
s1.push(11)
s1.push(13)
s1.push(15)
s1.push(17)
s1.push(19)
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
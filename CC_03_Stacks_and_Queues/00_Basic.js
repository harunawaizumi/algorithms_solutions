// Queue
function Queue() {
    let collection = []
    this.print = function() {
        console.log(collection)
    }
    this.enqueue = function(element) {
        collection.push(element)
    };
    this.dequeue = function() {
        return collection.shift()
    }
    this.front = function() {
        return collection[0]
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

let q1 = new Queue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(4)
q1.print()



function PriorityQueue() {
    let collection = []
    this.printCollection = function() {
        return collection
    }

    this.enqueue = function(element) {
        if (collection.length === 0) {
            collection.push(element)
        } else {
            let added = false
            for(let i = 0; i < collection.length - 1; i++) {
                if (element[1] < collection[i][1]) {
                    added = true
                    collection.splice(i, 0, element)
                    console.log('enqueue', collection)
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
        return console.log(collection)
    }


    this.dequeue = function() {
        if (collection.length === 0) {
            return false
        } else {
            collection.shift()
        }
        return collection
    }

}


let q1 = new PriorityQueue()
q1.enqueue(['a', 1])
console.log(q1)
q1.enqueue(['b', 2])
console.log(q1)
q1.enqueue(['c', 3])
console.log(q1)
q1.enqueue(['d', 3])
console.log(q1)

// Stack
function Stack() {
    let collection = []
    this.print = function() {
        console.log(collection)
    }
    this.enqueue = function(element) {
        collection.push(element)
    };
    this.dequeue = function() {
        return collection.pop()
    }
    this.front = function() {
        return collection[0]
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

let s1 = new Stack()
s1.enqueue(1)
s1.enqueue(2)
s1.enqueue(3)
s1.enqueue(4)
s1.enqueue(5)
s1.dequeue()
// Google Answer: https://www.youtube.com/watch?v=71kEvXsEKYQ&t=513s


function MyQueue() {
    let eq;
    let dq;
    let capacity;
    let size;

    this.setCapacity = function(capNum) {
        eq = []
        dq = []
        this.capacity = capNum
        this.size = 0
    }

    this.push = function(elem) {
        if (this.isFull()) {
            return console.log('is full')
        } else {
            eq.push(elem)
            this.size++;
        }
        return console.log('eq', eq, 'dq', dq)
    }

    this.pop = function() {
        if (this.size === 0) {
            return console.log('is empty')
        }
        if (dq.length === 0) {
            for(let i = 0; i < this.size; i++) {
                dq.push(eq.pop())
            }
        }
        this.size--;
        dq.pop()
        return console.log('dq', dq)
    }

    this.isFull = function() {
        return  this.capacity === this.size
    }
}

let s1 = new MyQueue()
s1.setCapacity(8)
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
s1.push(5)
s1.push(6)
s1.pop()
s1.pop()
s1.pop()
s1.pop()
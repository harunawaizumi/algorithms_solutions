// Solution Youtube: https://www.youtube.com/watch?v=8Ub73n4ySYk
function Min_Stack() {
    let stack = []
    let minStack = []

    this.isEmpty = function(){
        return stack.length === 0
    }

    this.push = function (elem) {
        if(this.isEmpty()) {
            stack.push(elem)
            minStack.push(elem)
        } else {
            if (minStack[minStack.length - 1] > elem) {
                minStack.push(elem)
            }
            stack.push(elem)
        }
        return console.log(stack)
    }

    this.pop = function() {
        if(this.isEmpty()) {
            return null
        } else {
            if (minStack[minStack.length - 1] === stack[stack.length - 1]) {
                stack.pop()
                minStack.pop()
            } else {
                stack.pop()
            }
            return console.log('min', minStack, 'stack', stack)
        }
    }
}


let s1 = new Min_Stack()
s1.push(5)
s1.push(3)
s1.push(8)
s1.push(2)
s1.push(5)
s1.pop()
s1.pop()
s1.pop()
s1.pop()

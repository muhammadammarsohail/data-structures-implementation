class Stack {
    stack = []

    push = function(data) {
        this.stack.push(data)
    }

    pop = function() {
        return this.stack.pop()
    }
}

let myStack = new Stack()
console.log(myStack.stack);
myStack.push(54)
console.log(myStack.stack);
myStack.push(4)
console.log(myStack.stack);
myStack.pop()
myStack.push(5)
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())

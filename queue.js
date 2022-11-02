class Queue {
    queue = []

    enqueue = function(data) {
        this.queue.push(data)
    }

    dequeue = function() {
        return this.queue.splice(0, 1)[0]
    }
}

let myQueue = new Queue()
// myQueue.enqueue(5)
// myQueue.enqueue(10)
console.log(myQueue.queue);
let dequeued = myQueue.dequeue()
console.log(myQueue.queue);
console.log(dequeued);


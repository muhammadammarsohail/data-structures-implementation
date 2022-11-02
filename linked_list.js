class Node {
    constructor(data) {
        this.data = data
    }

    data
    next = null
}

class LinkedList {
    head = null
    tail = null

    add(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    removeFirstNode() {
        if (this.head != null) {
            this.head = this.head.next
        }
    }

    removeLastNode() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            this.tail = null
            return
        }
        let current = this.head
        while (current?.next?.next) {
            current = current.next
        }
        this.tail = current
        this.tail.next = null
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

let myLinkedList = new LinkedList()
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.add(5)
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.add(8)
myLinkedList.add(3)
myLinkedList.add(34)
myLinkedList.add(7)
myLinkedList.add(6)
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.removeFirstNode()
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.removeLastNode()
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.removeLastNode()
myLinkedList.removeLastNode()
myLinkedList.removeLastNode()
myLinkedList.removeLastNode()
myLinkedList.removeLastNode()
myLinkedList.removeLastNode()
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.add(8)
myLinkedList.add(3)
myLinkedList.add(34)
myLinkedList.add(7)
myLinkedList.add(6)
myLinkedList.traverse()
console.log("----------------------");
myLinkedList.removeFirstNode()
myLinkedList.removeFirstNode()
myLinkedList.removeFirstNode()
myLinkedList.removeFirstNode()
myLinkedList.removeFirstNode()
myLinkedList.removeFirstNode()
myLinkedList.removeFirstNode()
myLinkedList.traverse()
console.log("----------------------");


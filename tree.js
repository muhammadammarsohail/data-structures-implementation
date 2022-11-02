class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor(rootData) {
        this.root = new Node(rootData)
    }

    preOrderTraversal(root) {
        let current = root
        if (current == null) {
            return
        }
        console.log(current.data)
        this.preOrderTraversal(current.left)
        this.preOrderTraversal(current.right)
    }

    inOrderTraversal(root) {
        let current = root
        if (current == null) {
            return
        }
        this.inOrderTraversal(current.left)
        console.log(current.data)
        this.inOrderTraversal(current.right)
    }

    postOrderTraversal(root) {
        let current = root
        if (current == null) {
            return
        }
        this.postOrderTraversal(current.left)
        this.postOrderTraversal(current.right)
        console.log(current.data)
    }

    bfs(key) {
        let queue = [this.root]
        while (queue.length > 0) {
            console.log(queue[0].data)
            if (queue[0].data === key) {
                return true
            }
            if (queue[0].left != null) {
                queue.push(queue[0].left)
            }
            if (queue[0].right != null) {
                queue.push(queue[0].right)
            }
            queue.shift()
        }
        return false
    }

    dfs(key, current) {
        if (current == null) {
            return false
        }
        console.log(current.data)
        if (key === current.data) {
            return true
        }
        if (this.dfs(key, current.left)) {
            return true
        }
        if (this.dfs(key, current.right)) {
            return true
        }






        // let stack = [this.root]

        // while (stack.length > 0) {
        //     console.log(stack[stack.length - 1].data)
        //     if (stack[stack.length - 1].data === key) {
        //         return true
        //     }
        //     if (stack[stack.length - 1].left != null) {
        //         stack.push(stack[stack.length - 1].left)
        //     }
        //     if (stack[stack.length - 1].right != null) {
        //         stack.push(stack[stack.length - 1].right)
        //     }
        //     stack.pop()
        
        return false
    }


}


let myBinaryTree = new BinaryTree(8)
myBinaryTree.root.left = new Node(3)
myBinaryTree.root.right = new Node(10)
myBinaryTree.root.left.left = new Node(1)
myBinaryTree.root.left.right = new Node(6)
myBinaryTree.root.left.right.left = new Node(4)
myBinaryTree.root.left.right.right = new Node(7)
myBinaryTree.root.right.right = new Node(14)
myBinaryTree.root.right.right.left = new Node(13)


// myBinaryTree.preOrderTraversal(myBinaryTree.root)
// myBinaryTree.inOrderTraversal(myBinaryTree.root)
// myBinaryTree.postOrderTraversal(myBinaryTree.root)
// console.log(myBinaryTree.dfs(14, myBinaryTree.root))

// console.log(myBinaryTree);


class BinarySearchTree {
    constructor (data) {
        this.root = new Node(data)
    }

    insert(current, key) {
        if (this.root == null) {
            this.root = new Node(key)
            return
        }
        if (key <= current.data) {
            if (current.left == null) {
                current.left = new Node(key)
                return
            } else {
                this.insert(current.left, key)
            }
        } else {
            if (current.right == null) {
                current.right = new Node(key)
                return
            } else {
                this.insert(current.right, key)
            }
        }
        // if (current == null) {
        //     current = new Node(key)
        //     return
        // }
        // if (key < current.data) {
        //     this.insert(current.left, key)
        // }
    }

    preOrderTraversal(root) {
        let current = root
        if (current == null) {
            return
        }
        console.log(current.data)
        this.preOrderTraversal(current.left)
        this.preOrderTraversal(current.right)
    }

    inOrderTraversal(root) {
        let current = root
        if (current == null) {
            return
        }
        this.inOrderTraversal(current.left)
        console.log(current.data)
        this.inOrderTraversal(current.right)
    }

    postOrderTraversal(root) {
        let current = root
        if (current == null) {
            return
        }
        this.postOrderTraversal(current.left)
        this.postOrderTraversal(current.right)
        console.log(current.data)
    }

    binarySearch(key, current) {
        console.log("recurse")
        if (current == null) {
            return false
        }
        if (current.data === key) {
            return true
        } else if (current.data > key) {
            if (this.binarySearch(key, current.left)) {
                return true
            }
        } else {
            if (this.binarySearch(key, current.right)) {
                return true
            }
        }
        return false
    }
}

let myBinarySearchTree = new BinarySearchTree(8)
const keys = [3, 10, 1, 6, 4, 7, 14, 13]
// myBinarySearchTree.insert(myBinarySearchTree.root, keys[0])
// myBinarySearchTree.insert(myBinarySearchTree.root, keys[1])
// myBinarySearchTree.insert(myBinarySearchTree.root, keys[2])
// myBinarySearchTree.insert(myBinarySearchTree.root, keys[3])

for (let key of keys) {
    myBinarySearchTree.insert(myBinarySearchTree.root, key)
    // console.log('insert')
}
// console.log(myBinarySearchTree.root.data)
// console.log(myBinarySearchTree.root.left.data)
// console.log(myBinarySearchTree.root.right.data)
myBinarySearchTree.inOrderTraversal(myBinarySearchTree.root)
// console.log('-----------')
// myBinarySearchTree.preOrderTraversal(myBinarySearchTree.root)
// console.log('-----------')

// myBinarySearchTree.postOrderTraversal(myBinarySearchTree.root)
// console.log(myBinarySearchTree.root)
console.log(myBinarySearchTree.binarySearch(12, myBinarySearchTree.root))
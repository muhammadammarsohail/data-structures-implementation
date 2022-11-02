class DirectedGraph {
    constructor() {
        this.neighbourMap = {}
    }

    addVertex(key) {
        if (this.neighbourMap[key]) {
            console.log('vertex already exists')
            return
        }
        this.neighbourMap[key] = []
    }

    addEdge(source, destination) {
        if (!this.neighbourMap[source] || !this.neighbourMap[destination]) {
            console.log('source or destination doesnt exist')
            return
        }
        if (!this.neighbourMap[source].includes(destination)) {
            this.neighbourMap[source].push(destination)
        } else {
            console.log('edge already exists')
        }
    }

    bfTraversal(root) {
        const visited = {}
        const myQueue = []
        // const vertices = Object.keys(this.neighbourMap)
        myQueue.push(root)
        visited[myQueue[0]] = true
        while (myQueue.length) {
            console.log(myQueue[0])
            for (let neighbour of this.neighbourMap[myQueue[0]]) {
                if (!visited[neighbour]) {
                    myQueue.push(neighbour)
                    visited[neighbour] = true
                }
            }
            myQueue.shift()
        }
        // console.log(visited);
    }

    bfs(root, key) {
        if (root === key) {
            return true
        }
        const visited = {}
        const myQueue = []
        // const vertices = Object.keys(this.neighbourMap)
        myQueue.push(root)
        visited[myQueue[0]] = true
        while (myQueue.length) {
            // console.log(myQueue[0])
            for (let neighbour of this.neighbourMap[myQueue[0]]) {
                if (!visited[neighbour]) {
                    if (neighbour === key) {
                        return true
                    }
                    myQueue.push(neighbour)
                    visited[neighbour] = true
                }
            }
            myQueue.shift()
        }
        return false
        // console.log(visited);
    }

    dfTraversal(root, visited = {}) {
        // const visited = {}
        visited[root] = true
        console.log(root)
        for (let neighbour of this.neighbourMap[root]) {
            if (!visited[neighbour]) {
                this.dfTraversal(neighbour, visited)
            }
        }
    }

    dfs(root, key, visited = {}) {
        // const visited = {}
        if (root === key) {
            return true
        }
        visited[root] = true
        // console.log(root)
        for (let neighbour of this.neighbourMap[root]) {
            if (!visited[neighbour]) {
                if (this.dfs(neighbour, key, visited)) {
                    return true
                }
            }
        }
        return false
    }
}

let myDirectedGraph = new DirectedGraph()
console.log(myDirectedGraph.neighbourMap);
myDirectedGraph.addVertex(5)
myDirectedGraph.addVertex(6)
myDirectedGraph.addVertex(7)
myDirectedGraph.addVertex(8)
myDirectedGraph.addVertex(1)
myDirectedGraph.addVertex(2)
myDirectedGraph.addVertex(3)
myDirectedGraph.addVertex(4)
myDirectedGraph.addVertex(9)
myDirectedGraph.addVertex(10)
myDirectedGraph.addVertex(11)
myDirectedGraph.addVertex(12)
console.log(myDirectedGraph.neighbourMap);
myDirectedGraph.addEdge(5, 8)
myDirectedGraph.addEdge(5, 6)
myDirectedGraph.addEdge(5, 1)
myDirectedGraph.addEdge(1, 3)
myDirectedGraph.addEdge(1, 2)
myDirectedGraph.addEdge(6, 4)
myDirectedGraph.addEdge(5, 11)
myDirectedGraph.addEdge(11, 8)
myDirectedGraph.addEdge(11, 9)
myDirectedGraph.addEdge(11, 12)
myDirectedGraph.addEdge(5, 8)

myDirectedGraph.addEdge(8, 5)
myDirectedGraph.addEdge(7, 5)
myDirectedGraph.addEdge(8, 6)

console.log(myDirectedGraph.neighbourMap);
myDirectedGraph.bfTraversal(7)
console.log(myDirectedGraph.bfs(7, 12))
myDirectedGraph.dfTraversal(7)
console.log('----------');
console.log(myDirectedGraph.dfs(7, 8))
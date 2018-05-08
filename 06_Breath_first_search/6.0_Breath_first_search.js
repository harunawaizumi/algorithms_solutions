// ???
// Infinity: ポインターがそっちを向いてないからありえない
// ０：直接はつながっていないが、遠回りをすればアクセス可能

function bfs(graph, root) {
    let nodesLen = {}
    for(let i = 0; i < graph.length; i++){
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0
    let queue = [root]
    let current;

    while (queue.length !== 0) {
        current = queue.shift() // queueの中で１つのelement
        let currentConnected = graph[current]
        let neighborIdx = []
        let idx = currentConnected.indexOf(1)


        while(idx !== -1) {
            neighborIdx.push(idx);
            idx = currentConnected.indexOf(1, idx + 1)
        }

        for(let j = 0; j < neighborIdx.length; j++) {
            if(nodesLen[neighborIdx[j]] === Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                console.log('queue', queue)
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}


let data = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
]

console.log(bfs(data, 1))
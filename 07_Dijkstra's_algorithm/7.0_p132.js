// graph
let graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"]['fin'] = 1
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = null

// costs
let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

// parents
let parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null

// processed
let processed = []

// hasn't done yet
function find_lowest_cost_node(costs) {
    let lowest_cost = Math.min(...Object.values(costs))
    let lowest_cost_node = null
    Object.keys(data).map(item => {
        if (costs[item] === lowest_cost) {
            lowest_cost_node = item
        }
    })
    return lowest_cost_node
}

while(node !== null) {
    let cost = costs[node]
    let neighbors = graph[node]
    for(let item in Object.keys(neighbors)) {
        let new_cost = cost + neighbors[item]
        if (costs[n] > new_cost) {
            costs[n] = new_cost
            parents[n] = node
        }
    }
    processed.push(node)
    node = find_lowest_cost_node(costs)
}






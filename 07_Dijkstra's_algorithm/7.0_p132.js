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





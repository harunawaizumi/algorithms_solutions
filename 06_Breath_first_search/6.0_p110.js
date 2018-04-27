function search(name) {
    let search_queue = name
    search_queue = [search_queue, ...graph[name]]

    let searched = []

    while(search_queue.length > 0) {
        let person = search_queue.shift()
        if (person.slice(-1) === 'm') {
            // person_is_seller function doesn't work
            return person + ' is a mango seller!'
        }
        else {
            search_queue = graph[person] === undefined ? search_queue : [...search_queue, ...graph[person]]
            searched.push(person)
        }
    }
    return false
}





let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['claire'] = ['peggy']
graph['alice'] = ['the', 'jonny']
graph['anuj'] = []
graph['peggy'] = ['tom']
graph['thom'] = []
graph['jonny'] = []


search('you')


// not finished


let spots = {
    a: 15,
    b: 3,
    c: 5,
    d: 7,
    e: 10,
    f: 1,
    g: 24,
    h: 20
}

let total = 0
let arraySpots = Object.values(spots)
let smallest = Math.min(...arraySpots)
let smallest_node = null
let id = 0
let procceed = []
let entrySpots = Object.entries(spots)

console.log(entrySpots)
for(let i = 0; i  < arraySpots.length; i++) {
    entrySpots.map((item, index) => {
        if (item[1] === smallest) {
            id = index
            smallest_node = item
        }
    })
    procceed.push(entrySpots.splice(id, 1))
}

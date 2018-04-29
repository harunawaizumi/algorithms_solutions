let states_needed = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']
let stations = {}
let states_covered = []
stations['kone'] = ['id', 'nv', 'ut']
stations['ktwo'] = ['wa', 'id', 'mt']
stations['kthree'] = ['or', 'uv', 'ca']
stations['kfour'] = ['nv', 'ut']
stations['kfive'] = ['ca', 'az']

let count = []
let best_station = null
for(let i = 0; i < Object.keys(stations).length; i++) {
    let num_covered = 0
    let key = Object.keys(stations)[i]
}

function check_covered(index) {
    let key = Object.keys(stations)[index]
    let num_covered = 0
    for(let j = 0; j < stations[key].length; j++) {
        if (states_needed.indexOf(stations[key][j]) !== -1) {
            num_covered++;
            let spot = states_needed.indexOf(stations[key][j])
            let removed = states_needed.splice(spot, 1)
            states_covered.push(removed)
        }
    }
    count[index] = num_covered
    return num_covered
}


let data = [
    'item',
    'item',
    'item',
    'item',
    'key',
    'item',
]
let count = 0
function look_for_key(box) {
    if (box.shift() !== 'key') {
        count++;
        return look_for_key(box);
    } else {
        box.shift()
        count++;
        return `${count} times, I fount key!`
    }
}

const ans = look_for_key(data)
console.log(ans)
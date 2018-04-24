let data = {
    'haruna': '090-7901-0573',
    'ryusei': '091-32459-34905',
    'caven': '02934-234-2354',
    'boaz': '1043-2345-2345',
    'person': '20349-9204'
}

function binary_search(list, item) {
    let arr = Object.entries(list).sort()
    let low = 0
    let high = arr.length - 1
    let itemA = item.charAt(0)
    let count = 0

    while(low <= high) {
        let mid = Math.floor((low + high)/2)
        let midA = arr[mid][0].charAt(0)

        if ( itemA === midA) {
            count++;
            return count
        } else if (itemA < midA ) {
            count++;
            high = mid - 1
        } else {
            count++;
            low = mid + 1
        }
    }
    return count  // don't write 'return' inside of this loop. It will make it stop looping in one time.
}
let ans = binary_search(data, 'caven')
console.log('ans', ans)

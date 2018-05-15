// 高さができるだけ低くなるようなBINARYTREEを作る。
// そのためには、sorted さえたarrayの真ん中の値がrootに来る必要がある。

function minimal_tree(array){
    return createMinimalBST(array, 0, array.length -1)
}

function Node (val) {
    this.value = val
    this.right = null
    this.left = null
}

function createMinimalBST(arr, start, end) {
    if (end < start) {
        return null
    }

    let mid = Math.floor((start + end ) / 2)
    let n = new Node(arr[mid])
    n.left = createMinimalBST(arr, start, mid - 1)
    n.right = createMinimalBST(arr, mid + 1, end)
    return n  // do not forget to return n
}
// given a sorted array
let array = [1,2,3,4,5,6,7,8,9]
let ans = minimal_tree(array)
console.log(ans)



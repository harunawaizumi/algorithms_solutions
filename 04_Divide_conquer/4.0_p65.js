function qsort(list) {
    if (list.length < 2) {
        return list
    } else {
        let pivot = list[0]
        let less = list.slice(1).filter(item => item <= pivot)
        let greater = list.slice(1).filter(item => item > pivot)
        console.log(less + [pivot] + greater)
        return qsort(less) + pivot + qsort(greater)
    }
}

qsort([2, 4, 2, 8, 1, 7, 3])
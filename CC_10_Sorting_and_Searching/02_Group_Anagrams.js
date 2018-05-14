// CC_01_Arrays_String - 04_Check_Permutation <-- to check whether they are anagrams or not


// 1: anagramのグループ化
// OBJ.hasOwnProperty('KEY')
// 1: listをmapする
// 2: チェックする際に一度abc順にsortする。もしsortしたワードがOBJにあった場合は、unshiftで追加。
// 3: もしOBJにそのデータがない場合は、新しいpropertyを作成する必要がある。
// O(n)
function getAnagram(list) {
    let anagrams = {}
    let sortedString;

    list.map(str => {
        sortedString = sortString(str)
        if (anagrams.hasOwnProperty(sortedString)) {
            anagrams[sortedString].unshift(str)
        } else {
            anagrams[sortedString] = [str]
        }
        console.log(sortedString)
    })
    return anagrams
}

function sortString(str) {
    return str.split("").sort().join("")
}


let list = ['abc', 'hyf', 'bca', 'fyh', 'd', 'efg', 'd'];
console.log(getAnagram(list));


//（特別例題）
// 2: anagramの全パターンを列挙
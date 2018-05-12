// Stringでもstr[i]でOK,　str.charAt(i)しなくてOK

function string_compression(str) {
    let elm = str[0]
    let count = 0
    let result = ''
    for(let i = 1; i <= str.length; i++) {
        if (i === 1){
            count++;
        } else if (i > 0) {
            if (str[i] !== str[i - 1]) {
                result += elm + count
                elm = str[i]
                count = 1
            }else {
                count++
            }
        }
    }
    return result
}

let ans = string_compression('aabccccaa')
console.log(ans)
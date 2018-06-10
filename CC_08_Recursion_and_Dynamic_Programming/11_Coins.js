// https://www.youtube.com/watch?v=sn0DWI-JdNA
// http://www.yujinc.com/8-11-coins-cci/

function makeChange (total, coins) {
    let tail = coins.slice(0); // clone coins, because we're about to modify it
    let head = tail.shift(); // grab the first coin out of the purse

    // If total is less than zero, or there are no coins left, this isn't a match
    if (total < 0 || !head) {
        return 0;
    }
    // If the total reached 0, this is a match
    else if (total === 0 ) {
        return 1;
    }
    // Otherwise, branch
    else {
        // The first branch sends the total and a subset of `coins`
        // The second branch send a reduced total, and all the `coins`
        return makeChange(total, tail) + makeChange(total - head, coins);
    }
}

console.log(makeChange(100, [25, 10, 5, 1]));


// my answer
function Coins(total) {
    let list = []
    helper(total, 0, 0, 0, 0, list)
    return list
}

function helper(remains, twentyFive, ten, five, one, list) {
    if (remains <= 0) {
        list.push([twentyFive, ten, five, one])
    }
    if (twentyFive < ten || ten < five || five < one) {
        return
    }

    helper(remains - 25, twentyFive + 1, ten, five, one, list)
    helper(remains - 10, twentyFive, ten + 1, five, one, list)
    helper(remains - 5, twentyFive, ten, five + 1, one, list)
    helper(remains - 1, twentyFive, ten, five, one+ 1, list)
}


// Boaz's answer

function makeChange1(amount, denoms = [25, 10, 5, 1]) {
    if (denoms.length <= 1) return 1
    const denomAmount = denoms[0]
    const nextDenoms = denoms.slice(1)
    let ways = 0
    for (let i = 0; i * denomAmount <= amount; i++) {
        const remaining = amount - i * denomAmount
        ways += makeChange(remaining, nextDenoms)
    }
    return ways
}

let ans = makeChange1(100)
console.log(ans)

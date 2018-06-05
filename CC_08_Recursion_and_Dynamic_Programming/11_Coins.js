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
        return makeChange(total, tail) + makeChange(total-head, coins);
    }
}

console.log(makeChange(100, [25, 10, 5, 1]));
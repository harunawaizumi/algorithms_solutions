// O(3^n)
// without memory
function TripStep(n) {
    if (n < 0) return 0
    else if (n === 0) return 1
    else {
        return TripStep(n-1) + TripStep(n-2) + TripStep(n-3)
    }
}

TripStep(10)


// O(n)
// with memory
function TripStep1(n) {
    if (n < 0) return 0  // n = 1 , n = 2の時にnがマイナスになってしまうからn<0と設定する必要がある。
    else if (n === 0) return 1
    else {
        return TripStep1(n-1) + TripStep1(n-2) + TripStep1(n-3)
    }
}

TripStep1(3)
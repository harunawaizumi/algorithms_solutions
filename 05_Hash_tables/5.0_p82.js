let voted = {}

function check_voter(name) {
    console.log(voted['tom'])
    if (voted[name] === undefined) {
        voted[name] = {}
        return 'let them vote'
    } else {
        return 'kick them out'
    }
}

check_voter('tom')
check_voter('tom')
check_voter('mike')
check_voter('mike')

function greet2(name) {
    return console.log('2-hello! ' + name)
}

function bye() {
    console.log('ok bye!')
}

function greet(name) {
    console.log('hello,  ' + name + '!')
    greet2(name)
    console.log('getting ready to say bye...!')
    bye()
}

greet('maggie')
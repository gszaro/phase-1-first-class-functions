function receivesAFunction(action) {
action()
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log('Hi')
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Yo!');
    }
}
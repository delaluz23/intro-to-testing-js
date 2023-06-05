// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(x){
    if(typeof(x) !== 'string'){
        return "Hello, World!"
    } else {
        return (`Hello, ${x}!`);
    }
}

function isFive(x){
    if(typeof x !== 'number'){
        return false
    }else{
        if(x === 5){
            return `${x} is 5`
        }
        else {
            return `${x} isn't 5`
        }
    }
}
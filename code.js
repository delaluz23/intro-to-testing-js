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
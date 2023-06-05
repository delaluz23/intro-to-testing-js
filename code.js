// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }
// function sayHello(x){
//     if(typeof(x) !== 'string'){
//         return "Hello, World!"
//     } else {
//         return (`Hello, ${x}!`);
//     }
// }
//
// function isFive(x){
//     if(typeof x !== 'number'){
//         return false
//     }else{
//         if(x === 5){
//             return `${x} is 5`
//         }
//         else {
//             return `${x} isn't 5`
//         }
//     }
// }

// function isEven(x){
//     if(typeof x == 'boolean'){
//         return false
//     }
//     else if(x % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
//    }


function isVowel(x){
    if(typeof x != 'string'){
        return false;
    }else {
        let a = x.toLowerCase();
        if(a == 'a' ||a == 'e' || a == 'i' || a == 'o' || a == 'u'){
            return true;
        } else{
            return false;
        }
    }
}

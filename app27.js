//lexical scope
//function outer() {
//    let movie = 'Amadeus'

//   function inner() {
 //       console.log(movie.toUpperCase())
    
 //   function extraInner() {
//        let movie = 'the shining'
//        console.log(movie.toUpperCase());
//    }
//    extraInner();
//}
///    inner()
//}
//outer()

//lexical scope simply is a nested function within a function
//and the relationship between the parent function and inner function
//the inner is always bound to outer function

//now function expressions

function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
const subtract = function (x, y) {
    return x - y;
}
const divide = function (x, y) {
    return x / y;
}


const operations = [add, multiply, subtract, divide];

for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
}
const thing = {
    doSomething: multiply
}
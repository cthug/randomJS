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

//function add(x, y) {
//    return x + y;
//}
//function multiply(x, y) {
//    return x * y;
//}
//const subtract = function (x, y) {
//    return x - y;
//}
//const divide = function (x, y) {
//    return x / y;
//}


//const operations = [add, multiply, subtract, divide];

//for (let func of operations) {
//    let result = func(30, 5);
//    console.log(result);
//}
//const thing = {
//    doSomething: multiply
//}

//functions as arguements
function callThreeTimes(f) {
    f();
    f();
    f();
}
function cry() {
    console.log('boo hoo im sad!');
}
function rage() {
    console.log('I am mad!');
}

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++)
        action();
}

//repeatNTimes(rage, 2);
//three total function as arguement examples

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5){
        f1();
    } else {
        f2();
    }
}
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

//functions as arguments
//callThreeTimes(f) {
//    f();
//    f();
//    f();
//
//cry() {
//le.log('boo hoo im sad!');
//
//rage() {
//le.log('I am mad!');
//
//
//repeatNTimes(action, num) {
//let i = 0; i < num; i++)
//ction();
//
//
//Times(rage, 2);
//otal function as argument examples
//
//pickOne(f1, f2) {
//rand = Math.random();
//let console.log(rand);
//and < 0.5){
//1();
//e {
//2();

//return functions as arguments 

//function multiplyBy(num) {
//    return function (x) {
//        return x * num;
//    }
//}
//
//const triple = multiplyBy(3);
//const double = multiplyBy(2);
//const halve = multiplyBy(0.5);

//next
function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    }
}
//makeBetweenFunc(0, 18);

//const isKid = function (num) {
//    return num >= 0 && num <= 18;
//}
//isKid(num);

const isKid = makeBetweenFunc(0, 18);
const isINnineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60 - 79);
//made a factory that returns a type of function or pattern
//but they are all different



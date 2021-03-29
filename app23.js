//functions
//functions are reusable procedures
//defines a chunk of code we can later reuse
//below is the syntax structure

//function functionName(){
// do something   
//}

//example of format
//function grumpus() {
//    console.log('uhg..you again..');
//    console.log('For the last time..');
//    console.log('Leave me alone!');
//}
//grumpus();

//for (let i = 0; i < 20; i++) {
//    grumpus()
//}

//function rollDie() {
//    let roll = Math.floor(Math.random() * 6) + 1;
//    console.log(`Rolled: ${roll}`);
//}

//function throwDice(numRolls) {
//    for (let i = 0; i < numRolls; i++){
//        rollDie();
//    }
//}


//function greet(nickName) {
//   let name = 'Paul'
//    console.log(`Hi, ${name}!`);
//}
 
//functons with multiple args

//simple concept of function syntax

//function square(num) {
//    console.log(num * num);
//}
//function sum(x, y) {
//    console.log(x + y);
//}
//function divide(a, b) {
//    console.log(a / b);
//}

//const scream = 'hello'.toUpperCase();
//console log is not the same as a value being returned 

//understanding return value 
//function add(x, y) {
//    return x + y;
//}
//there is only one return for one value
//although multiple return statements can be made
//idealy there should be one return for one value
//return statements end function execution so dont place in the middle

//for example

//function square(x) {
//    return x * x;
    //anything after this return will not run
    //it will finish exection of this function
//}

function isPurple(color) {
    if (color === 'purple') {
        return true;
    }
    else {
        return false;
    }
}
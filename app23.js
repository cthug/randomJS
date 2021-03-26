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

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}
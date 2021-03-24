//the while loop

//syntax structure: while(someCondition){run this code}

//for (let i = 0; i <= 5; i++) {
////    console.log(i);
//}

//let j = 0;
//while (j <= 5) {
//    console.log(j);
//    j++;
//}
//in this example we can see the for loop 0-5
// and the while loop essentially recreated the for loop
//this is not typical use for while loop
//while loop is typically used when the end result is unknown
//it will continue until the specified value is reached

//for ex

const targetNumber = Math.floor(Math.random() * 10);

let guess = Math.floor(Math.random() * 10);

while (guess !== targetNumber) {
    //console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
console.log(`targetNumber: ${targetNumber} Guess: ${targetNumber}`);
console.log('Congrats!');

//while(somecondition)
//in the loop, update or attempt to make that condition false

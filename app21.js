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

//const targetNumber = Math.floor(Math.random() * 10);

//let guess = Math.floor(Math.random() * 10);

//while (guess !== targetNumber) {
    //console.log(guess);
//    guess = Math.floor(Math.random() * 10);
//}
//console.log(`targetNumber: ${targetNumber} Guess: ${targetNumber}`);
//console.log('Congrats!');

//while(somecondition)
//in the loop, update or attempt to make that condition false
//

//while (true) {
//    if (targetNumber === guess) break;
//    guess = Math.floor(Math.random() * 10);
//}
//console.log(`targetNumber: ${targetNumber} Guess: ${targetNumber}`);
//console.log('Congrats!');

//for of loop

//let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

//for (i = 0; i < subreddits.length; i++){
//    console.log(subreddits[i]);
//}

//for (let sub of subreddits) {
//    console.log(sub)
//}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
];

//for (let i = 0; i < magicSquare.length; i++){
//    let row = magicSquare[i];
//    let sum = 0;
//    for (let j = 0 ; j < row.length; j++){
//        sum += row[j];
//    }
//    console.log(`${row} summed to ${sum}`);
//}

// for (of) version

//for (let row of magicSquare) {
//    let sum = 0;
//    for (let num of row) {
//        sum += num;
//    }
//    console.log(`${row} summed to ${sum}`);
//}

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++){
    console.log(`${words1[i]}${words2[i]}`);
};
//the above example is one where for of is less useful and more time consuming 
 
//js loops
//for loop
//initial value//when to run loop//how to change value
//for (let i = 1; i <= 10; i++) {
//    console.log('hello:' , i);
//}

//for (let i = 1; i <= 10; i+= 3) {
//    console.log('hello:', i);
//}

//for (let num = 1; num <= 20; num++) {
//    console.log(`${num}x${num} = ${num * num}`);
//}

//for (let i = 200; i >= 0; i -= 25) {
//    console.log(i);
//}

//infinte loop
//for (let i = 1; i !== 20; i += 2) {
//console.log(i);
//}
//always avoid infinite loops. 

//loops + arrays

//const animals = ['lions', 'tigers', 'bears'];
//for (let i = 0; i < animals.length; i++){
//    console.log(i, animals[i]);
//}

//const examScores = [98, 77, 84, 91, 57, 66];
//for (let i = 0; i < examScores.length; i++){
//    console.log(i, examScores[i]);
//}
const myStudents = [
    {
        firstName: 'Artemis',
        grade: 86
    },
    {
        firstName: 'Zues',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    },
];
//for (let i = 0; i < myStudents.length; i++) {
//    let student = myStudents[i];
//    console.log(`${student.firstName} scored ${student.grade}`);
//}
let total = 0;
for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade;
}
console.log(total/myStudents.length);
//printing in reverse
//const word = 'stressed';
//for (let i = word.length - 1; i >= 0; i--){
//    console.log(word[i]);
//}

//const word = 'stressed';
//let reversedWord = '';
//for (let i = word.length - 1; i >= 0; i--){
//    reversedWord += word[i];
//    console.log(reversedWord);
//}

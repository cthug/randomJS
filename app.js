//Performance review
//3 - superstar
//2 - meets expectations
//1 -needs improvement
//anything else - wtf?
let rating = 213;

if (rating === 3) {
    console.log('You are a superstar!')
}

else if (rating === 2) {
    console.log('this meets expectations');
}

else if (rating === 1) {
    console.log('needs improvement');
}

else {
    console.log('invalid rating!');
}

//example 2

let highscore = 1430;
let userscore = 1200;

if (userscore >= highscore) {
    console.log(`Congrats, you have the new highscore of ${userscore}`);
    highscore = userscore;
}
else {
    console.log(`Good game. Your score of 
    ${userscore} did not beat the highscore of ${highscore}`);
}
//final logical operator
//using not
let loggedInUser;
//if there is not a logged in user

if (!loggedInUser) {
    console.log('get out of here!');
}

let flavor = 'watermelon';

//if (flavor !== 'grape' && flavor !== 'cherry') {
//  console.log('we dont have that flavor!'); 
//}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('We only offer grape and cherry!');
}
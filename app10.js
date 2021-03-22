//Ternary Operator

//traditional
//let num = 7;

//if (num === 7) {
//    console.log('Lucky!');
//}
//else {
//    console.log('Bad!');
//}

//ternary operator

//let num = 7

//num === 7 ? console.log('Lucky!') : console.log('Bad!');

let status = 'online';
//traditional
//let color;
//if (status === 'offline') {
//    color = 'red'
//}
//else {
//    color = 'green'
//}
//ternary operator next

let color = status === 'offline' ? 'red' : 'green';
console.log(color);
//this way writes the previous code in one line 

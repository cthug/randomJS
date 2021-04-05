//arrow functions

// const square = function(x){
//return x * x;
//}
//examples
//const square = (x) => {
//    return x * x;
//}
//
//const isEven = (num)  => {
//    return num % 2 === 0;
//}
//const multiply = (x, y) => {
//    return x * y;
//}
//const greet = () => {
//    console.log("Hi!")
// }

//implicit return

//const square = (n) => {
//    return n * n;
//}

//const square = n => (
//    n * n
//);
 
//const square = n => n * n;

//const nums = [1, 2, 3, 4, 5, 6, 7, 8];
//
//const doubles1 = nums.map(function (n){
//    return n * 2;
//})
//
//const doubles2 = nums.map(n => {
//    return n * 2;
//})
//
//const doubles3 = nums.map(n => n * 2);
//
//const parityList = nums.map(function (n) {
//    if (n % 2 === 0) return "even";
//    return "odd";
//});
//const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

 //array find

let movies = [
    "The Fantastic four",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]
 const movie = movies.find(movie => {
    return movie.includes('Mrs');
 })
const movie2 = movies.find(m => (
    m.indexOf("Mrs") === 0
))
 
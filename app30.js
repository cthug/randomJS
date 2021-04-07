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

//let movies = [
//    "The Fantastic four",
//    "Mr. and Mrs. Smith",
//    "Mrs. Doubtfire",
//    "Mr. Deeds"
//]
// const movie = movies.find(movie => {
//    return movie.includes('Mrs');
// })
//const movie2 = movies.find(m => (
//    m.indexOf("Mrs") === 0
//))
const books = [{
    title: 'Good Omens',
    authors:['Terry Pratchett, Neil Gaiman'],
    rating: 4.25,
    genres:['fiction','fantasy']
},
{
        Title: 'Changing my mind',
        authors: ['Zadie Smith'],
        rating: 4.25,
        genres: ['nonfiction, essays']
},
{  
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
        title:'American Gods',
        authors:['Neil Gaiman'],
        rating: 4.11,
        genres:['fiction','fantasy']
},
{
        title:'A Gentleman In Moscow',
        authors:['Amor Towles'],
        rating: 4.36,
        genres:['fiction','historical fiction']
},
{
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.36,
        genres: ['fantasy','fiction']
},
{
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres:['fiction','short stories']
},
{
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 3.67,
        genres:['fantasy','epic']
},
{
        title: 'Lord of the Flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
}]
//const goodBook = books.find(b => b.rating >= 4.3);
//const neilBook = books.find(b => (
//    b.authors.includes('Neil Gaiman')
//))
 
//filter example

//const nums = [34, 35, 67, 54, 109, 102, 32, 9];

//const odds = nums.filter(n => n % 2 === 1);
//const evens = nums.filter(n => n % 2 === 0);
//const bigNums = nums.filter(n => n > 50);

const goodBooks = books.filter(b => b.rating > 4.3)

const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
))

const shortForm = books.filter(book => (
        books.genres.includes('short stories') 
))
//const query = 'The Way of Kings';
//const results = books.filter(books => (
//    books.title.toLowerCase().includes(query.toLowerCase())
//)
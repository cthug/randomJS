//for of with objects

//const movieReviews = {
//    Arrival: 9.5,
//    Alien: 9,
//    Amelie: 8,
//    'In Bruges': 9,
//    Amedeus: 10,
//    'Kill Bill': 8,
//    'Little Miss Sunshine': 8.5,
//    Coraline: 7.5
//};

//for (let movie of Object.keys(movieReviews)) {
//    console.log(movie, movieReviews[movie]);
//}

//const ratings = Object.values(movieReviews);
//let total = 0
//for (let r of ratings) {
//    total += r;
//}
//let avg = total / ratings.length;
//console.log('average:',avg);//

//now the for(in) loop

const jeopardyWinnigs = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tounamentOfChampions: 500000,
    battleOfTheDecades: 100000,

};
let total = 0;
for (let prop in jeopardyWinnigs) {
    console.log(prop);
    total += (jeopardyWinnigs[prop]);
}
console.log(`ken Jennings Total Earnings: ${total}`);

//although fo in an be used with arrays 
//the order is not set in stone therfore
//it makes less sense to use for in for an array where order of index matters

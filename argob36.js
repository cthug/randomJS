//arguments object


//function sum() {
//    const argsArr =[...arguments]
//    return argsArr.reduce((total, currVal) => {
//        return total + currVal
//    })
//}

//its not real array
//so turn into one if you want array methods
//no functionality for remaining arguements
//does not exist in arrow functions

//rest parameters


//function sum(...nums) {
//    return nums.reduce((total, currVal) => {
//        return total + currVal
//    })
//}
//
////collects remaining args.
//const first = ('Tom');
//const last = ('Cruise');
//const titles = ('actor', 'stuntman');
//
//function fullName(first, last,...titles) {
//    console.log('first',first)
//    console.log('last',  last)
//    console.log('titles',titles)
//}
////the order matters ...rest parameter has to be last
//
//const multiply = (...nums) => (
//    nums.reduce((total, currVal) =>total * currVal) 
//)

//destructuring
//nice way to unpack values from arrays
//and properties from objects into distinct variables

//marathon results from mens 2016 olympics
//const raceResults = [
//    'Eliud Kipchoge',
//    'Feyisa Lelis',
//    'Galen Rupp',
//    'Ghirmay Ghebreslassie',
//    'Alphonce Simbu',
//    'Jared Ward'
//];
//older syntax
//const gold = raceResults[0]
//const silver = raceResults[1]
//const bronze = raceResults[2]

//shorter syntax
//const [gold, silver, bronze] = raceResults;
// this is a basic example of destructuring
//const [first, , , fourth] = raceResults;
//i can add comas to continue down the array list and get the desired information
//const [winner, ...others] = raceResults;
//i can use rest to create an array of the remaining elements

//destructuring Objects

//const runner = {
//    first: 'Eluid',
//    last: 'Kipchoge',
//    country: 'Kenya',
//    title: "elder of the Order of the Golden Heart of Kenya"
//}
//const { first, last } = runner;
//const { country: nation, title: honor } = runner;
//rest works with this object destructure as well
//const { first, last, ...other } = runner;

//nested destructuring

const results = [{
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country:'Ethiopia'
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country:'United States',
    }
]
const [{ first }, { country }] = results;
//not always best but destructuring can be nested
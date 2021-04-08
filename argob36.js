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


function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

//collects remaining args.
const first = ('Tom');
const last = ('Cruise');
const titles = ('actor', 'stuntman');

function fullName(first, last,...titles) {
    console.log('first',first)
    console.log('last',  last)
    console.log('titles',titles)
}
//the order matters ...rest parameter has to be last

const multiply = (...nums) => (
    nums.reduce((total, currVal) =>total * currVal) 
)
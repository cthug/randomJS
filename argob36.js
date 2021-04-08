//arguments object


function sum() {
    const argsArr =[...arguments]
    return argsArr.reduce((total, currVal) => {
        return total + currVal
    })
}

//its not real array
//so turn into one if you want array methods
//no functionality for remaining arguements
//does not exist in arrow functions


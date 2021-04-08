//Default Parameters

//older method 
//function multiply(x, y) {
//    if(typeof y === 'undefined'){
//    y = 1; 
//  }
//return x * y;
//}

// or something like this
//function multiple(x,y) {
//    y = typeof y === 'undefined' ? 1 : y
//    return x * y;
//}

//new default perameter syntax

function multiply(x, y = 1) {
    return x * y;
}

//or

const greet = (person, greeting = 'hi',punctuation = '!') => {
    console.log(`${greeting},${person},${punctuation}`)
}


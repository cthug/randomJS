//.concat

//let fruits = ['apple', 'banana'];
//let veggies = ['asparagus', 'brussel sprouts'];
//let meats =['steak','chicken breast']

//console.log(fruits.concat(veggies));
//console.log(veggies.concat(fruits));

//let allFood = fruits.concat(veggies, meats);

//.indexof with arrays
let ingredients = [
    'water',
    'corn startch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
];
//ingredients.includes('fish')
//returns false
//.includes looks for true or false it is a boolean
//can also be used with index
//ingredients.includes('fish', 0) for example

if (ingredients.includes('flour')) {
    console.log('I am gluten free , I cannot eat that!');

}
//ingredients.indexOf('flour') !== -1 
//ingredients.indexOf will locate where the value is
//ingredients.includes confirms if the value exists
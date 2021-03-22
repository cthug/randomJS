//slice
let animals = ['shark', 'salmon', 'whale',
    'bear', 'lizard', 'tortoise'];

//let swimmers = animals.slice(0, 3);

//let mammals = animals.slice(2, 4);

//let reptiles =animals.slice(4, 6);
//let reptiles = animals.slice(4);

//let quadruped = animals.slice(-3);

//let copy = animals.slice()

//splice
//animals.splice(1, 0, 'octopus');
//animals.splice(3, 2)
//animals.splice(3,0,'Snake','frog')
//animals.splice(0, 2, 'Shark', 'Octopus')

//.splice(startIndex,deleteCount,itemsToInsert);
//above is how splice works and is the pattern that needs to be followed

//sort method
let people = [
    'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie may', 'Roxanne'
];
people.sort()

let numbers = [
    34, 10, 10000, 67, 99
];
numbers.sort()
//compare function is needed to get result desired with numbers.
//due to .sort converting everything to a string in this language specifically 
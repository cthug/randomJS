//function scope

//function lol() {
//   let person = 'Tom';
//    const age = 45;
//    var color = 'Teal';
//    console.log(age)
//}
//lol();
//console.log(person);
//you get an error because 'person' is within the scope
//of the specific function

//function changeColor() {
//    let color = 'purple';
//    const age = 19;
//    console.log(age);
//}
//lol();
//changeColor();

//let bird = 'mandarin duck'

//function birdWatch() {
//    let bird = 'golden pheasant'
//    console.log(bird);
//}
//birdWatch();
//console.log(bird);

//block scope
//if (true) {
//    let animal = 'eel';
//    console.log(animal); //will work
//}
////console.log(animal);
 //but outside this block of code above it will not work

//if (true) {
//    const animal = 'eel';
//    console.log(animal);//will work also
//}
//console.log(animal);
//this wont work outside the block
//if (true) {
//    var animal = 'eel';
//    console.log(animal); //will work
//}
//console.log(animal);
//var works outside the block unlike const and let
//this can create issues for example

//let animals = ['bear', 'goat', 'horse', 'dog']
//for (var i = 0; i < animals.length; i++){
//    console.log(i, animals[i]);
//}
//console.log(i);
//printing the console.log outside the block will print 3 because  the for loop
//, i++)  even if i made a var variable outide the block
//it would treat it differently
//let and const are block scoped var is not

//block scope 
function doubleArr(arr) {
    const result = [];
    for (let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    return result;
}
//put any numbers into calling this function
//for example
//doubleArr([1, 2, 3])
//let is within the for loop block scope

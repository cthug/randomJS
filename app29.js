//Hoisting
var animal = 'Tapir';
console.log(animal);
//hoisting happens when var is declared after
//var will always act first but will give msg of undefined
//for example

//console.log(animal);
//var animal = 'Tapir';
//undefined

//let and const will just react as reference error
//so var behaves differently and hoists however this is not good
//but good to know  

//function name(params) {}//or function declaration
//this will always run first and be hoisted no matter order
//call();
//answer();
//speak();

function call() {
    console.log(`homeowner:ring..ring..ring`);
}

function answer() {
    console.log(`dispatch:hello? 911`)
}
function speak() {
    console.log(`homeowner:uhh yes theres a tapir here in my yard...`)
}
function chill() {
    console.log(`dispatch:wow! okay sir? ill get a car out right away!`)
}

function no() {
    console.log(`homeowner:no sir no cops at all needed, i just need legal advice...`)
}
function ok() {
    console.log(`dispatch:uuhhhh`)
}
function bombshell() {
    console.log(`homeowner:yeah hold your mouth shut i want to double check on the legal aspect of a tapir kickin kegger?`)
}
//bombshell();
//well();
//yes();
//nice();

function well() {
    console.log(`dispatch:well sir..`)
}
function yes() {
    console.log(`homeowner:no laws?Thats what i thought so listen son keep it on the hush but your invited to a tapir kickin kegger`)    
}
function nice() {
    console.log(`dispatch:okay sir...ill be there sounds fun.`)
}

function total() {
        return (call(), answer(), speak(),chill(), bombshell(), well(), yes(), nice());
}
total();

//function scope

function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'Teal';
    console.log(age)
}
//lol();
//console.log(person);
//you get an error because 'person' is within the scope
//of the specific function

function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
}
lol();
changeColor();
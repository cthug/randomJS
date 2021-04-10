//Beginning to use this
function sayHI() {
    console.log("HI")
    console.log(this);
}

//'this' inside a function refers to the window

const greet = function () {
    console.log(this);
}
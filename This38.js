//Beginning to use this
function sayHI() {
    console.log("HI")
    console.log(this);
}

//'this' refers to the window global scope object in the browser in example above

//const greet = function () {
//    console.log(this);
//}

//const person = {
//    first: 'joey',
//    last: 'donuts',
//    nickName: 'Joey bag of donuts',
//    fullName() {
//        console.log(this);
//    }
//}
//the value of 'this' in above example
//has been set to the object this method is inside.

//'this' can be used inside the object like this example as below
//const person = {
//    first: 'joey',
//    last: 'donuts',
//    nickName: 'Joey bag of donuts',
//    fullName() {
//        console.log(`${this.first} ${this.last} AKA ${this.nickName}`)
//    }
//}

//or we could write this way using destructuring
//const person = {
//    first: 'joey',
//    last: 'donuts',
//    nickName: 'Joey bag of donuts',
//    fullName() {
//        const {
//            first,
//            last,
//            nickName
//        } = this;
//        console.log(`${first} ${last} AKA ${nickName}`)
//    }
//}

//you could even add a method for ex

const person = {
    first: 'joey',
    last: 'donuts',
    nickName: 'Joey bag of donuts',
    fullName() {
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last} AKA ${nickName}`
    },
    printBio() { 
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    }
}
//so you could call person.printBio() and it will display the bio in addition

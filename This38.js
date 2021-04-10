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
//        return `${first} ${last} AKA ${nickName}`
//    },
//    printBio() { 
//        const fullName = this.fullName();
//        console.log(`${fullName} is a person!`)
//    }
//}
//so you could call person.printBio() and it will display the bio in addition

//THIS: invoction context
//the value will change with this depending on how you execute the function
//for example

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
//        return `${first} ${last} AKA ${nickName}`
//    },
//    printBio() { 
//        const fullName = this.fullName();
//        console.log(`${fullName} is a person!`)
//    }
//}

//const printBio = person.printBio()

//this will return as an error
//because it is now referencing the window
//if there is something to the left and then a . then a function 
//this will be set to the thing to the left
//if there is nothing to the left 
//then this will be set to the global execution window
//so this depends entirely on the invocation context

//here is a small demo showing sometimes arrow functions are great
//because they dont get their own this.

const annoyer = {
    phrases: [
        "literally",
        "cray cray",
        "I Can't even",
        "Totes!",
        "YOLO",
        "Can't stop,wont stop"
    ],
    pickphrase() {
        const { phrases }
            = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickphrase())
        }, 3000)
    },
    stop() {
    clearInterval(this.timerId);
    console.log('wow glad its over')
    }
}

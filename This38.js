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

//const annoyer = {
//    phrases: [
//        "literally",
//        "cray cray",
//        "I Can't even",
//        "Totes!",
//        "YOLO",
//        "Can't stop,wont stop"
//    ],
//    pickphrase() {
//        const { phrases }
//            = this;
//        const idx = Math.floor(Math.random() * phrases.length);
//        return phrases[idx]
//    },
//    start() {
//        this.timerId = setInterval(() => {
//            console.log(this.pickphrase())
//        }, 3000)
//    },
//    stop() {
//    clearInterval(this.timerId);
//    console.log('wow glad its over')
//    }
//}

//first example below is an example without using this which limits you to one deck
const mainDeck = makeDeck();

function makeDeck() {
    const deck = [];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
    for (let val of values.split(',')) {
        for (let suit of suits) {
            deck.push ({
                val,
                suit
            })
        }
    }
    return deck;
}
function drawCard(deck) {
    return deck.pop()
}
//const myDeck = makeDeck();
//const card1 = drawCard(myDeck);

//here below i didnt have to pass an arguement around like the above example 
// instead i grouped the method with the values using 'this'
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['clubs', 'diamonds', 'spades', 'hearts'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    intitilizeDeck() {
        const {
            suits,
            values,
            deck
        } = this;
        for (let val of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    val,
                    suit
                })
            }
        }
        //return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = []
        for (let i = 0; i < numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const { deck } = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], [deck[i]]];
        }
    }
}

//adding simple shuffle implementation

//function shuffle(arr) {
//    //loop over arr backwards
//    for (let i = arr.length - 1; i > 0; i--){
//        //pickrandom element before current element
//        let j = Math.floor(Math.random() * (i + 1));
//        //swap
//        [arr[i], arr[j]] = [arr[j], [arr[i]]];
//        console.log(arr);
//    }
//}

myDeck.intitilizeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(2);

//using objects is a great way of grouping values with functionality

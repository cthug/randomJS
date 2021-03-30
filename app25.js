//A pangram is a sentence that contains every letter
//of the alphabet, Like :
//"the quick brown fox jumps over the lazy dog"

//write a function called isPangram

//function isPangram(sentence) {
//    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//        if (sentence.indexOf (char) === -1) {
//            return false;
//        } 
//    }
//    return true;
//}

//function getcard() example

//function getCard() {
//    const values = [
//        '2', '3', '4', '5', '6', '7',
//        '8', '9', '10', 'j', 'q', 'k', 'A'
//    ];
//    const valIdx = Math.floor(Math.random() * values.length);
//    const value = values[valIdx];
//    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//    const suitIdx = Math.floor(Math.random() * suits.length);
//    const suit = suits[suitIdx];
//    return { value: value, suit: suit };
//}

//shorter example
//function pick to recall the same code

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = [
        '2', '3', '4', '5', '6', '7',
        '8', '9', '10', 'j', 'q', 'k', 'A'
    ];
   const value = pick(values);
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suit = pick(suits);
    return { value: value, suit: suit };
}
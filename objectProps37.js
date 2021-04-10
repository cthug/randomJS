//const getStats = (arr) => {
//    const max = Math.max(...arr);
//    const min = Math.min(...arr);
//    const sum = arr.reduce((sum, r) => sum + r);
//    const avg = sum / arr.length;
//    return {
//        max: max,
//        min: min,
//        sum: sum,
//        avg: avg,
//    }
//} this is the older method

//const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

//const stats = getStats(reviews);

//syntax will accept this as well
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg,
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

//more object properties
function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];

    const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
    const value = pick(values);
    const suit = pick(suits);
    return {
        value,
        suit,
    };
}
//does not work in internet explorer 
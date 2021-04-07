//reduce

const nums = [3, 4, 5, 6, 7];
const product =
    nums.reduce((total, currentVal) => {
    return total * currentVal;
})

//total         currentVal
//  3               4
//  12              5
//  60              6
// 360              7
//2520 

//const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
//
//const maxGrade = grades.reduce((max, currentVal) => {
//    if (currentVal > max) return currentVal;
//    return max;
//})

//another way

//const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
//
//const maxGrade = grades.reduce((max, currentVal) => {
//    return Math.max(max, currentVal)
//});
//const minGrade = grades.reduce((min, currentVal) => {
//    return Math.min(min, currentVal)
//});

//more reduce

const votes = [
    'y', 'y', 'n',
    'y', 'n', 'y',
    'n', 'y', 'n',
    'n', 'n', 'absent',
    'y', 'y','absent'
];

//const results = votes.reduce((tally, val) => {
//    if (tally[val]) {
//        tally[val]++
//    } else {
//        tally[val] = 1;
//    }
//      return tally;
//    }, {})

//shorter equivalent 
const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;  
},{})

//more complex reduce
const books =
    [
        {
            title: 'Good Omens',
            authors: ['Terry Pratchett', 'Neil Gaiman'],
            rating: 4.25,
            genres: ['fiction', 'fantasy']
        },
        {
            title: 'Changing my mind',
            authors: ['Zadie Smith'],
            rating: 4.25,
            genres: ['nonfiction', 'essays']
        },
        {
            title: 'Bone: The Complete Edition',
            authors: ['Jeff Smith'],
            rating: 4.42,
            genres: ['fiction', 'graphic novel', 'fantasy']
        },
        {
            title: 'American Gods',
            authors: ['Neil Gaiman'],
            rating: 4.11,
            genres: ['fiction', 'fantasy']
        },
        {
            title: 'A Gentleman In Moscow',
            authors: ['Amor Towles'],
            rating: 4.36,
            genres: ['fiction', 'historical fiction']
        },
        {
            title: 'The Name of the Wind',
            authors: ['Patrick Rothfuss'],
            rating: 4.36,
            genres: ['fantasy', 'fiction']
        },
        {
            title: 'The Overstory',
            authors: ['Richard Powers'],
            rating: 4.19,
            genres: ['fiction', 'short stories']
        },
        {
            title: 'The Way of Kings',
            authors: ['Brandon Sanderson'],
            rating: 3.67,
            genres: ['fantasy', 'epic']
        },
        {
            title: 'Lord of the Flies',
            authors: ['William Golding'],
            rating: 3.67,
            genres: ['fiction']
        }]

const groupedratings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
}, {})
//reduce multiple values into one value
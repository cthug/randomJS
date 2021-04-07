//this is to revisit sort use

//const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

//prices.sort();

//this will return the sort in terms of string 
//i can change the way sort acts

//prices.sort();

//const ascSort = prices.sort((a, b) => a - b);
//const descSort = prices.sort((a, b) => b - a);

//more on sort

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

//books.sort((a, b) => a.rating - b.rating)

books.sort((a, b) => b.rating - a.rating)
            
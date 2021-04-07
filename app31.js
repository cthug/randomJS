//some and every

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3);

const allEndIng = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
});

const someStartWithD = words.some(word => word[0] === 'd');
const allStartWithD = words.every(word => word[0] === 'd');

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
    genres: ['nonfiction','essays']
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

const allGoodBooks = books.every(book => book.rating > 3.5);
const any2Authors = books.some(book => book.authors.length === 2)

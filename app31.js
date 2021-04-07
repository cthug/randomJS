//some and every

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3);

const allEndIng = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
});

const someStartWithD = words.some(word => word[0] === 'd');
const allStartWithD = words.every(word => word[0] === 'd');
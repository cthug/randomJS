//this is to revisit sort use

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

//prices.sort();

//this will return the sort in terms of string 
//i can change the way sort acts

prices.sort();

const ascSort = prices.sort((a, b) => a - b);
const descSort = prices.sort((a, b) => b - a);


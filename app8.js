//simple operator precedence
let x = 7;
x == 7 || x === 3 && x > 10;
//reads true because "and" operator, takes precedence over "or".
//to make logic work left to right use ()
//for example
let x = 7;
(x == 7 || x === 3) && x > 10;
//this will now run false 
//order matters with logical operators
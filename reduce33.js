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

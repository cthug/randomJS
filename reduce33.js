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

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currentVal) => {
    if (currentVal > max) return currentVal;
    return max;
})

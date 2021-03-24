//const gamerboard =[
//[4,32,8,4],
//[64,8,32,2],
//[8,32,16,4],
//[2,8,4,2]    
//];

//
//    console.log('outerloop:', i);
//    for (let j = 5; j >= 0; j -= 2){
//        console.log('inner loop:', j);
//    }
//}

const gameBoard = [
[4,32,8,4],
[64,8,32,2],
[8,32,16,4],
[2,8,4,2]    
];
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    //console.log(row);
    for (let j = 0; j < row.length; j++){
        //console.log(row[j]);
        totalScore += row[j];
        
    }
}
//the console.log will call on the row[i] itself
//the second console.log will call on the individual numbers one at a time
//within the row[i]
// this is a simple nested for loop example!

// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidP// Write a isValidPassword functionassword('hello1', 'dogLuvr') //false


//function isValidPassword(password, username) {
//   if (password.length <= 8) {
//        return false;
//    }
//    if (password.indexOf(' ') !== -1) {
//        return false;
//    }
//    if (password.indexOf(username) !== -1) {
//        return false;
//    }
//    return true;
//}
//another example

//function isValidPassword(password, username) {
//    const tooShort = password.length <= 8;
//    const hasSpace = password.indexOf(' ') !== -1;
//    const tooSimilar = password.indexOf(username) !== -1;
//    return !tooShort && !hasSpace && !tooSimilar;
//}

//writing a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2
//format example


//function avg(arr) {
//    let total = 0;
//    arr.forEach(x => total = total + x);
 //   console.log(total / arr.length);
//}
//avg([0, 50])
//avg([75, 76, 80, 95, 100])


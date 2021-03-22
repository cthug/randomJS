//The switch statement
//international standard
let day = 7;

//if (day === 1) {
//    console.log('Monday');
//}
//else if (day === 2) {
//    console.log('Tuesday');
//}
//else if (day === 3) {
//    console.log('Wednsday');
//}
//else if (day === 4) {
//    console.log('Thursday');
//}
//else if (day === 5) {
//    console.log('Friday');
//}
//else if (day === 6) {
//    console.log('saturday');
//}
//else if (day === 7) {
//    console.log('sunday');
//}
//else {
//    console.log('Invalid Day');
//}

//with switch

//switch (day) {
//    case 1:
//        console.log('Monday');
//        break;
//    case 2:
//        console.log('Tuesday');
//        break;
//    case 3:
//        console.log('Wednsday');
//        break;
//    case 4:
//        console.log('Thursday');
//        break;
//    case 5:
//        console.log('Friday');
//        break;
//    case 6:
//        console.log('Saturday');
//        break;
//   case 7:
//        console.log('Sunday');
//        break;
//    default:
//        console.log('Invalid day');
//}

let emoji = 'sad face';


switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'lips':
    case 'heart':
        console.log('red');
        break;
}
//switch can be used in this way to prevent writing long else if sections of code.
//when two or more values correspond with the same variable
//this syntax is more efficient
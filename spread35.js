//spread syntax

//spread in a function call 

//function giveMeFour(a,b,c,d) {
//    console.log('a',a)
//    console.log('b',b)
//    console.log('c',c)
//    console.log('d',d)
//}
//
//const colors = ['red', 'orange', 'yellow', 'green']
//
//giveMeFour(...colors);

//spread in array literal

const guns = ['pistol', 'shotgun', 'rifle'];
const gunCompanies = ['smith&wesson', 'remmington', 'glock']
const gunCal = ['.45', '12gauge', '.220']

const gunDetails = [...gunCompanies, ...guns, ...gunCal]
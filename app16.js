//nested array
//const board = [
//    ['O',null,'X'],
//    [null, 'X', 'O'],
//    ['X','O',null],
//]

//object
//objects are collections of properties
//properties are a key value pair
// rather than accessing index, we use custom keys

//creating object literals

//const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: '5 of 7',
//   avgGoodSleep:    '2:13',
//};
//fitBitData.totalMiles
// 5755
//fitBitData.avgCalorieBurn
// 5755
//the . 
//allows you to reference information
//specifically desired within the object literal

//let data = { a: 1, b: 2, c: 3, }; another simple example

//accessing object literals
const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

//palette.blue
//palette.red
//palette.yellow

let mysteryColor = 'yellow';

//palette.mysteryColor will read undefined
palette[mysteryColor]
//use square brackets to access variable or some dynamic value within
//the object literal
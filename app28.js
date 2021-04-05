//callback functions

//function callTwice(func) {
//    func();
//    func();
//}
//function laugh() {
//    console.log('haha!');
//}
//callTwice(laugh)

//this calls the function callTwice,and calls laugh its an example
//of callback function

//sometimes anonymous function is needed

//setTimeout(function () {
//    alert('Welcome!')
//}, 2000);


//function alpha() {
//    alert('Hello Tatum i knew you would click this button...self destruct in 10 seconds')
//}
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('Tatum the button says dont click me! ')
})

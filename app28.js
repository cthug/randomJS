//callback functions

function callTwice(func) {
    func();
    func();
}
function laugh() {
    console.log('haha!');
}
callTwice(laugh)
//this calls the function callTwice,and calls laugh its an example
//of callback function

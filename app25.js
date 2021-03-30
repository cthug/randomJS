//A pangram is a sentence that contains every letter
//of the alphabet, Like :
//"the quick brown fox jumps over the lazy dog"

//write a function called isPangram

function isPangram(sentence) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (sentence.indexOf (char) === -1) {
            return false;
        } 
    }
    return true;
}
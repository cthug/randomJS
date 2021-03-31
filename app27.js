//lexical scope
function outer() {
    let movie = 'Amadeus'

    function inner() {
        console.log(movie.toUpperCase())
    
    function extraInner() {
        let movie = 'the shining'
        console.log(movie.toUpperCase());
    }
    extraInner();
}
    inner()
}
outer()

//lexical scope simply is a nested function within a function
//and the relationship between the parent function and inner function
//the inner is always bound to outer function
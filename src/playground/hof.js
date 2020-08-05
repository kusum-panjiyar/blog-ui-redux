//hof - higher order function
// a function which takes a function as an argument of a function that returns a function as a value is called a hof.

//callback function - the function which is being passes as an argument to another function is called a callback function

const prices = [10, 20, 30]
// prices.forEach()

// a function that returns a function as a value
function sum(){
    return function(a, b){
        return a + b
    }
}
console.log(sum()(10, 20))
console.log(sum(5)(10, 20))
console.log(sum(2)(10, 20))

// a function which takes another function as an argument 
/*
forEach
filter
find
map
addEventListener
then
*/


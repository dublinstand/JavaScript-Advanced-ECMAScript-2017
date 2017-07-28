//Write a function that adds a number passed to it to an internal sum and returns itself
//with its internal sum set to the new value, so it can be chained in a functional manner.
//Making a function return itself is easy enough, but to keep a sum that’s shared across all
//instances requires some effort. You’ll need to place it inside a closure and expose just the function.
//Finally, to get the stored value, you’ll have to override the built-in toString() method that all JavaScript
//objects have so that it returns the internal sum – this will allow any other function to access it either for
//printing or to use it in an expression, without being able to modify it.
//You can attach it directly to your function from inside the closure:

//we use IIFE and a function inside that is returned everytime, in order to have access to it
//our sum is saved in the closure, while add function is called every time
let add = (function functionalSum(){
    let sum = 0;

    //here we return the same function to the addSum function
    function add(num){
        sum += num;
        return add;
    }

    //add a toString property to add that returns the sum
    add.toString = () => sum;

    //we return the add function again
    return add;
})();

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
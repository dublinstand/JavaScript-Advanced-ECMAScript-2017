//Write a function that sorts an array with numeric values in ascending or descending order,
// depending on an argument that’s passed to it.
//Input
//You will receive a numeric array and a string as arguments to the first function in your code.
// If the second argument is asc, the array should be sorted in ascending order (smallest values first).
// If it is desc, then the array is sorted in descending order (largest first).

function sortArray(array, sortType){

    //Arrays in JavaScript are by default sorted alphabetically, which means if we have an array of numbers [3, 1, 2, 10]
    // and we call sort() on it, the result will be [1, 10, 2, 3]. You can however pass a sorting criteria as an argument
    // in the form of a function.
    // This function can be anonymously defined inline or a named function, or even a variable that holds a reference to a function:
    //If you test this function, you’ll see it uses the ASCII values to sort the objects inside the array.
    // Next we need to pass an argument to the sort() function to get the desired result.
    // It will consist of a special function which takes two arguments (current element and next element to be sorted),
    // compares them and returns a value. If the value is zero, then they are equal. If it’s greater than zero, the first element
    // is larger. If it’s less than zero, this means the second element is larger. In short, return a positive value to
    // swap elements and zero or negative to keep the current order.
    let ascendingOrder = function (a, b){
        return a - b;
    };

    let descendingOrder = function (a, b) {
      return a + b;
    };

    //We can now pass either of them to the sorting function, depending on what we need. We’ll save those in an
    // object and use a string as a key, which would match the input shown in the problem description:
    let sortingStrategy = {
        'asc': ascendingOrder,
        'desc': descendingOrder
    };

    return array.sort(sortingStrategy[sortType]);
}
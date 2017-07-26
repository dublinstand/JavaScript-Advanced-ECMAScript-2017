//Write a JS program that takes an array of numeric elements as input and returns the largest element of the array.

function maxNumberInArray(arr) {
    return Math.max.apply(null, arr);
}

console.log(maxNumberInArray(['10', '20', '5']));

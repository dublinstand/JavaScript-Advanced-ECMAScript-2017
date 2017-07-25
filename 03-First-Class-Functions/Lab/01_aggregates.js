//Write a JS program that uses a reducer function to display information about an input array.
//Input
//You will receive an array of numeric values.
//Output
//The output should be the printed on the console. Display the sum of all elements in the array,
// the value of the smallest, the value of the biggest,
// the product of all elements and a string of all elements joined together.


function aggregates(array){
    console.log("Sum = " + reduce(array, (x,y) => Number(x) + Number(y)));
    console.log("Min = " + reduce(array, (x,y) => Math.min(x, y)));
    console.log("Max = " + reduce(array, (x,y) => Math.max(x, y)));
    console.log("Product = " + reduce(array, (x,y) => x * y));
    console.log("Join = " + reduce(array, (x,y) => "" + x + y));
}


function reduce(arr, func){
    let result = arr[0];
    for(let nextElement of arr.slice(1)){
        result = func(result, nextElement);
    }

    return result;
}

console.log(aggregates(['2', '3', '10', '5']));
console.log(aggregates(['5', '-3', '20', '7', '0.5']));
//Write several functions for preforming calculations with vectors in 2D space  and collect them all in a
// single object (namespace), so they don’t pollute the global scope. Implement the following functions:
//•	add(vec1, vec2) – Addition of two vectors –
//•	multiply(vec1, scalar) – Scalar multiplication –
//•	length(vec1) – Vector length –
//•	dot(vec1, vec2) – Dot product of two vectors –
//•	cross(vec1, vec2) – Cross product of two vectors –
//The math-savvy may notice that the given cross product formula results in a scalar, instead of a vector –
// we’re actually only measuring the length of the resulting vector, since cross product is not possible in 2D,
// it will exist purely in the z-dimension. If you don’t know what this all means, ignore this paragraph, it’s irrelevant
// to the solution.
//Input
//Each separate function in your namespace will be tested with individual values.
// It must expect one or two arguments, as described above, and return a value. Vectors will be 2D arrays with format [x, y].
//Output
//Your program needs to return an object, containing all functions described above.
// Each individual function must return a value, as required. Don’t round any values.


let solution = (() => {
    let add = (vec1, vec2) => [vec1[0]+vec2[0], vec1[1]+vec2[1]];
    let multiply = (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar];
    let length = (vec1) => Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
    let dot = (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1];
    let cross = (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0];

    //we need to return each function
    return {add, multiply, length, dot, cross};
})();



console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));


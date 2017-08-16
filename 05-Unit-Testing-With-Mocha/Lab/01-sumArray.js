function sum(arr){
    let sum = 0;
    for (let x of arr){
        sum += Number(x);
    }

    return sum;
}

//this way we export to the outer world our function. This is not workin in browsers only Node.js
module.exports = {sum};

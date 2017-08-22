function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal =
        (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

//this way we export to the outer world our function. This is not workin in browsers only Node.js
module.exports = {isSymmetric};

//Extend the build-in Array object with additional functionality. Implement the following functionality:
//•	last() – returns the last element of the array
//•	skip(n) – returns a new array which includes all original elements, except the first n elements; n is a Number parameter
//•	take(n) – returns a new array containing the first n elements from the original array; n is a Number parameter
//•	sum() – returns a sum of all array elements
//•	average() – returns the average of all array elements
//Input / Output
//Input for functions that expect it will be passed as valid parameters. Output from functions should be their return value.
//Structure your code as an IIFE.

(function solution() {
    //Array.prototype.last = () => this(this.length - 1);
    Array.prototype.last = function () {
        return this(this.length - 1);
    };

    Array.prototype.skip = function (n) {
        let newArray = [];

        for (let i = 1 + n; i < this.length; i++) {
            newArray.push(this[i]);
        }
        return newArray;
    };

    Array.prototype.take = function (n) {
        let newArray = [];

        for (let i = 0; i <= n; i++) {
            newArray.push(this[i]);
        }
        return newArray;
    };

    Array.prototype.sum = function () {
        let sum = 0;
        //this.forEach((x) => sum += x);
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };

    Array.prototype.average = function(){
        let sum = this.sum();
        return sum / this.length;
    }
})();

(function solution2() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a+b);
    };

    Array.prototype.average = function () {
        return this.sum()/this.length;
    }
})();
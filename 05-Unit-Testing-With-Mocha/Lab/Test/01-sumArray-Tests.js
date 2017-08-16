//we enter chai framework to use expect
let expect = require("chai").expect;
//we get the module 01-sumArray that we will test
let sum = require("../01-sumArray").sum;


describe("sum(arr) - sum array of numbers", function(){
   it("should return 3 for [1,2]", function(){
       let expectedSum = 3;
       let actualSum = sum([1,2]);
       expect(actualSum).to.be.equal(expectedSum);
   });

    it("should return 5 for [5]", function(){
        let expectedSum = 5;
        let actualSum = sum([5]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 3 for [1.5,2.5,-1]", function () {
        let expectedSum = 3;
        let actualSum = sum([1.5,2.5,-1]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 0 for an empty array", function () {
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });
});
//we enter chai framework to use expect
let expect = require("chai").expect;

let isOddOrEven = require("../01-isOdd").isOddOrEven;

describe("isOdd function - displaying odd, even or undefined", function(){
    it("should return undefined for [2]", function(){
        let expectedSum = undefined;
        let actualSum = isOddOrEven([2]);
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using number as variable");
    });

    it("should return undefined for passing an object parameter", function(){
        let expectedSum = undefined;
        let actualSum = isOddOrEven({name: 'pesho'});
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using an object as variable");
    });

    it("should return even for passing 'even'", function(){
        let expectedSum = "even";
        let actualSum = isOddOrEven("even");
        expect(actualSum).to.be.equal(expectedSum, "Function did not return even");
    });

    it("should return odd for passing 'pesho'", function(){
        let expectedSum = "odd";
        let actualSum = isOddOrEven("pesho");
        expect(actualSum).to.be.equal(expectedSum, "Function did not return even");
    });

    it('with an even length string, should return correct result', function(){
        expect(isOddOrEven("roar")).to.be.equal("even", "Function did not return the correct result!")
    });

    it('with multiple consecutive checks, should return correct values', function(){
        expect(isOddOrEven("cat")).to.be.equal("odd", "Function did not return even");
        expect(isOddOrEven("alabala")).to.be.equal("odd", "Function did not return even");
        expect(isOddOrEven("is it even")).to.be.equal("even", "Function did not return even");
    });
});
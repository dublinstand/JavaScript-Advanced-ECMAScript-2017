//we enter chai framework to use expect
let expect = require("chai").expect;

let lookupChar = require("../02-charLookup").lookupChar;

describe("lookupChar function - returns the character from a string for a given index", function() {
    it("should return undefined for [2]", function () {
        let expectedSum = undefined;
        let actualSum = lookupChar(23, 23);
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using numbers for string");
    });

    it("should return undefined for using an object", function () {
        let expectedSum = undefined;
        let actualSum = lookupChar({object: "object"}, 23);
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using an object");
    });

    it("with a floating number second parameter, should return undefined ", function () {
        let expectedSum = undefined;
        let actualSum = lookupChar({object: "object"}, 2.3);
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using a floating number");
    });

    it("should return undefined for a string ", function () {
        let expectedSum = undefined;
        let actualSum = lookupChar("test", "test");
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using numbers for string");
    });

    it("should return undefined for using an object", function () {
        let expectedSum = undefined;
        let actualSum = lookupChar("test", {object: "object"});
        expect(actualSum).to.be.equal(expectedSum, "function does not return undefined for using an object");
    });

    it("should return 'Incorrect index' for using a string and a number that is bigger than the length", function () {
        let expectedSum = "Incorrect index";
        let actualSum = lookupChar("test", 4);
        expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
    });

    it("should return 'Incorrect index' for using a string and a number that is bigger than the length", function () {
        let expectedSum = "Incorrect index";
        let actualSum = lookupChar("test", -1);
        expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
    });

    it("with multiple consecutive checks, should return correct values", function () {
        expect(lookupChar("cat",0)).to.be.equal("c", "Function did not return even");
        expect(lookupChar("cat",1)).to.be.equal("a", "Function did not return even");
        expect(lookupChar("cat",2)).to.be.equal("t", "Function did not return even");
    });
});

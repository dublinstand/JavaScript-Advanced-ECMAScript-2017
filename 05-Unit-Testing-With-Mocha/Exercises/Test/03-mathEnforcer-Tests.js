//we enter chai framework to use expect
let expect = require("chai").expect;

let mathEnforcer = require("../03-mathEnforcer").mathEnforcer;

describe("mathEnforcer function", function() {

    describe("tests for addFive(num) function", function() {
        it("should return undefined if not number", function () {
            let expectedSum = undefined;
            let actualSum = mathEnforcer.addFive("Test");
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });

        it("should return 10 if [5] is passed", function () {
            let expectedSum = 10;
            let actualSum = mathEnforcer.addFive(5);
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });
    });

    describe("tests for subtractTen(num) function", function() {
        it("should return undefined if not number", function () {
            let expectedSum = undefined;
            let actualSum = mathEnforcer.subtractTen("Test");
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });

        it("should return -5 if [5] is passed", function () {
            let expectedSum = -5;
            let actualSum = mathEnforcer.subtractTen(5);
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });
    });

    describe("tests for sum(num1, num2) function", function() {
        it("should return undefined if not number", function () {
            let expectedSum = undefined;
            let actualSum = mathEnforcer.sum("Test",5);
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });

        it("should return undefined if not number", function () {
            let expectedSum = undefined;
            let actualSum = mathEnforcer.sum(5, "Test");
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });

        it("should return 10 if [5, 5] is passed", function () {
            let expectedSum = 10;
            let actualSum = mathEnforcer.sum(5, 5);
            expect(actualSum).to.be.equal(expectedSum, "Function did not return the correct result!");
        });
    });
});
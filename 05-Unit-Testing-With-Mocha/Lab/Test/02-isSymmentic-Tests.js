//we enter chai framework to use expect
let expect = require("chai").expect;
//we get the module 02-isSymmentic that we will test
let isSymmetric = require("../02-isSymmentic").isSymmetric;


describe("isSymmetric(arr)", function () {
    it("should return true for [1,2,3,3,2,1]", function () {
        let symetric = isSymmetric([1, 2, 3, 3, 2, 1]);
        expect(symetric).to.be.equal(true);
    });

    it("should return false for [1,2,3,4,2,1]", function () {
        let symetric = isSymmetric([1, 2, 3, 4, 2, 1]);
        expect(symetric).to.be.equal(false);
    });

    it("should return true for [-1,2,-1]", function () {
        let symetric = isSymmetric([-1,2,-1]);
        expect(symetric).to.be.equal(true);
    });

    it("should return false for [-1,2,1]",  function () {
        let symetric = isSymmetric([-1,2,1]);
        expect(symetric).to.be.equal(false);
    });

});
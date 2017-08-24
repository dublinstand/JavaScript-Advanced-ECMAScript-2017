//we enter chai framework to use expect
let expect = require("chai").expect;
let createCalculator = require("../04-calculator").createCalculator;

describe("createCalculator()", function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3);
        calc.add(2);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it("should return 0 if nothing is done", function() {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it("should return -5 after {subtract 3; subtract 2}", function() {
        calc.subtract(3);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });

    it("should return 4.2 after {add 5.3; subtract 1.1}", function() {
        calc.add(5.3);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.equal(4.2);
    });
});
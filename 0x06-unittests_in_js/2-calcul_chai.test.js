const mocha = require("mocha")
//expect from chai
const expect = require("chai").expect
const calculateNumber = require("./2-calcul_chai.js")

describe("calculateNumber", () => {
    it("calculates", () => {
        expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6)
        expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4)
        expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2)
        expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error")
        expect(calculateNumber("SUM", 0.5, 0)).to.equal(1)
        expect(calculateNumber("DIVIDE", 0, 0)).to.equal("Error")
        expect(calculateNumber("SUBTRACT", 0.5, 0.2)).to.equal(1)
    });
});

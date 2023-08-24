const mocha = require("mocha")
const assert = require("assert")
const calculateNumber = require("./1-calcul.js")


describe('Calculate', () => {
	it("Calculate", () => {
		assert.equal(calculateNumber("SUM", 1.5, 3.7), 6)
	})

	it("Calculate", () => {
                assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error")
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber("SUM", 0.5, 0), 1)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber("DIVIDE", 0, 0), "Error")
        })
	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber("SUBTRACT", 0.5, 0.2), 1)
        })
})

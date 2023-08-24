const mocha = require("mocha")
const assert = require("assert")
const calculateNumber = require("./0-calcul.js")


describe('Calculate', () => {
	it("Calculate should return the ceiling", () => {
		assert.equal(calculateNumber(1.5, 3.7), 6)
	})

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber(1.2, 3.7), 5)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber(1, 3.7), 5)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber(1, 3), 4)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber(0.5, 0), 1)
        })

	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber(0, 0), 0)
        })
	it("Calculate should return the ceiling", () => {
                assert.equal(calculateNumber(0.5, 0.2), 1)
        })
})

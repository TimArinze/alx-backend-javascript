//utils module
const Utils = {
	//calculateNumber property and the function becomes the value of the property
	calculateNumber : (type, a, b) => {
	if (type === "SUM") {
		return Math.round(a) + Math.round(b)
	} else if (type === "SUBTRACT") {
		return Math.round(a) - Math.round(b)
	} else if (type === "DIVIDE") {
		let rounded_a = Math.round(a)
		let rounded_b = Math.round(b)
		if (rounded_b === 0) {
			return "Error"
		} else {
			return rounded_a / rounded_b
		}
	}
	}
}


module.exports = Utils;

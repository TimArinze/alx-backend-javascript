const Utils = require('./utils.js')

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
	// To call property of a function you call it as if you want to access dictionary
	const sum = Utils.calculateNumber("SUM", totalAmount, totalShipping)
	console.log(`The total is: ${sum}`)
}


module.exports = sendPaymentRequestToApi;

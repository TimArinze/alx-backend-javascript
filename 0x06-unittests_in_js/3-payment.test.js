// payment test
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
	it('validate the usage of the Utils function', () => {
		//spy on Utils.calculateNumber
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);
		//to verify if it is called with those args
		expect(spy.calledWith("SUM", 100, 20)).to.be.true;
		//to restore the original function
		spy.restore();
	}
	);
});

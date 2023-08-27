// payment test
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');


describe('sendPaymentRequestToApi', () => {
	it('validate the usage of the Utils function', () => {
		const spy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20);
		expect(spy.calledWith('The total is: 120')).to.be.true;
		expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
		spy.restore();
		calculateNumberSpy.restore();
	}
	);
});

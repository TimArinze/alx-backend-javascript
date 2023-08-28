// payment test
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
	let spy;
	beforeEach(() => {
		spy = sinon.spy(console, "log")
	});
	afterEach(() => {
		spy.restore()
	});
        it('validate sendPymentRequestToApi was called is logging 120', () => {
                sendPaymentRequestToApi(100, 20);
                expect(spy.calledWith("The total is:", 120))
		expect(spy.calledOnce).to.be.true;
        });
	it('validate sendPymentRequestToApi was called is logging 20', () => {
                sendPaymentRequestToApi(10, 10);
                expect(spy.calledWith("The total is:", 20))
		expect(spy.calledOnce).to.be.true;
	});

});

// payment test
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
        it('validate the usage of the Utils function', () => {
                //sinon.stub are functions (spies) with pre-programmed behavior
                const stub = sinon.stub(Utils, 'calculateNumber');
		const spy = sinon.spy(console, 'log')
                //the fake function
		stub.withArgs("SUM", 100, 20).returns(10)
		sendPaymentRequestToApi(100, 20);
                expect(stub.calledWith("SUM", 100, 20)).to.be.true;
		expect(spy.calledWith("The total is:", 10))
                //to restore the original function
                stub.restore();
        }
        );
});

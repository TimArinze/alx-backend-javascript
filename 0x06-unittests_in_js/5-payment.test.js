// payment test using hooks beforeEach and After each
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let spy;
  //beforeEach hook
  beforeEach(() => {
	//to spy on console.log
    spy = sinon.spy(console, "log")
  });
  //afterEach hook
  afterEach(() => {
    spy.restore()
  });
  //verifies that the console is logging the string 'The total is: 120'
  it('validate sendPymentRequestToApi was called is logging 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith("The total is:", 120))
    expect(spy.calledOnce).to.be.true;
  });
  //verifies that the console is logging the string 'The total is: 120'
  it('validate sendPymentRequestToApi was called is logging 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith("The total is:", 20))
    expect(spy.calledOnce).to.be.true;
  });

});

// payment test
const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  it('Promise should resolve', function (done) {
    getPaymentTokenFromAPI(true).then(function(result) {
      //deep is used with equal to perform a deep equility check when comparing objects
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
})
})
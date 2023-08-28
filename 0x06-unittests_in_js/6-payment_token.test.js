// payment test
const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const paymentToken = require('./6-payment_token.js');

describe('test a promise', () => {
        it('Promise should resolve', (done) => {
            paymentToken(true).then((data) => {
                expect(data).to.eql({ data: 'Successful response from the API' });
                done();
            }
            )
        });

});

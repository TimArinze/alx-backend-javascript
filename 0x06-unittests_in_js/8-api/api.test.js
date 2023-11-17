const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const endpoint = 'http://localhost:7865';
  it('returns the right content', function (done) {
    request(endpoint, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    })
  })
})

const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
  it('returns the right content', function (done) {
    const endpoint = 'http://localhost:7865';
    //You can use the request module to make HTTP requests with Node.js
    //But the app need to be running for you to effectively test your code

    //request(endpoint, function (error, response) {
        //expect(response.body).to.equal('Welcome to the payment system');
    //}) this works equally well
    request(endpoint, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    })
  })
  it('regex testing', function (done) {
    const endpoint = 'http://localhost:7865/cart/12';
    request(endpoint, function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    expect(body).to.equal(`Payment methods for cart 12`)
    done()
    })
  })
  it('test with wrong id', function (done) {
    const endpoint = 'http://localhost:7865/cart/hello';
    request(endpoint, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done()
    })
  })
  it('Deep equality', function (done) {
    const endpoint = 'http://localhost:7865/available_payments';
    request(endpoint, function (error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
      }})
      expect(response.statusCode).to.equal(200);
      done()
    })
  })
  it('Post integration', function (done) {
    const endpoint = 'http://localhost:7865/login';
    const userData = {userName: 'Tim'}
    request.post({url: endpoint, json: userData }, function (error, response, body) {
      expect(body).to.equal(`Welcome Tim`)
      done()
    })
  })
})

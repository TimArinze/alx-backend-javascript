const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const app = require('./api.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Index page', () => {
  it('return the right content', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      })
  })
})

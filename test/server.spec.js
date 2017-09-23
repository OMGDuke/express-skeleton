const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server');
const should = chai.should();

chai.use(chaiHttp);


describe('Todo API', () => {

  it('returns status 200', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.message.should.equal('Hello World');
        done();
      });
  });
});
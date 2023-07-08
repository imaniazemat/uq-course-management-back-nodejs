process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('/Inscription api test', () => {

  it('Sould insert a insciption when calling /inscription/insert Api', (done) => {

      chai.request(app)
      .post('/inscription/insert')
      .end((err, res) => {
          res.should.have.status(200);       
          done();
      });
  });
})


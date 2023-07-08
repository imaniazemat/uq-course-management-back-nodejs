process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('/Cateorie api test', () => {

  it('Sould create a categorie when calling createCategorie Api', (done) => {

      chai.request(app)
      .post('/createCategorie')
      .end((err, res) => {
          res.should.have.status(200);       
          done();
      });
  });
})


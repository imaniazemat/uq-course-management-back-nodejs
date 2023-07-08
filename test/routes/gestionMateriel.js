process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('/Gestion Materiel api test', () => {

  it('Sould add a materiel when calling createCours Api', (done) => {

      chai.request(app)
      .post('/ajouterMateriel')
      .end((err, res) => {
          res.should.have.status(200);       
          done();
      });
  });
})


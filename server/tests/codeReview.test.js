const chai = require('chai');
    const chaiHttp = require('chai-http');
    const app = require('../app');
    const { expect } = chai;

    chai.use(chaiHttp);

    describe('Code Review API', () => {
      it('should return comments for valid code', (done) => {
        chai.request(app)
          .post('/api/review')
          .send({ code: 'function add(a, b) { return a + b; }' })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('comments');
            done();
          });
      });

      it('should return an error for empty code', (done) => {
        chai.request(app)
          .post('/api/review')
          .send({ code: '   ' }) // Sending only whitespace
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.have.property('error');
            done();
          });
      });

      it('should return an error for missing code', (done) => {
        chai.request(app)
          .post('/api/review')
          .send({})
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.have.property('error');
            done();
          });
      });
    });

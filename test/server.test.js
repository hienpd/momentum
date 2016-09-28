'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const app = require('../server');
const knex = require('../knex');
const supertest = require('supertest');

suite('users routes', () => {
  before((done) => {          // Before the suite
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {      // Before each test
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /users', (done) => {
    supertest(app)
      .get('/users')
      .expect(200, [{
        id: 1,
        name: 'Stanley',
        lucky_binary: '110'
      }])
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('GET /users/1', (done) => {
    supertest(app)
      .get('/users/1')
      .expect(200, {
        id: 1,
        name: 'Stanley',
        lucky_binary: '110'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('POST /users', (done) => {
    supertest(app)
      .post('/users')
      .send({
        name: 'Lee Stan',
        lucky_number: 9
      })
      .expect(200, {
        id: 2,
        name: 'Lee Stan',
        lucky_binary: '1001'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });
});

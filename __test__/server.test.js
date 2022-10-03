'use strict';

const app = require('./../src/server');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing our server works', () =>
{
  test('Should respond with a 200 status', async () =>
  {
    const response = await request.get('/server');
    expect(response.status).toEqual(200);
  });

});

describe('Testing the error handling of server', () =>
{
  test('Should respond with a 404 for incorrect method', async () =>
  {
    const response = await request.post('/server');
    expect(response.status).toEqual(404);
  });

  test('Should respond with a 404 for incorrect route', async () =>
  {
    const response = await request.get('/server/');
    expect(response.status).toEqual(404);
  });
});

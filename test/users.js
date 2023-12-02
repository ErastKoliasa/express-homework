const chai = require('chai');
const { expect } = chai;
const { server } = require('../server'); 
const request = require('supertest')(server);
const users = require('../data/users.json');

describe('Users API tests', () => {
  it('should get all users', async () => {
    const response = await request.get('/users');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(users);
  });

  it('should get a user by email', async () => {
    const userEmail = 'johndoe@example.com'; 
    const response = await request.get(`/users/${userEmail}`);
    expect(response.status).to.equal(200);
    expect(response.body.email).to.equal(userEmail);
  });

  it('should return 404 for a non-existing user', async () => {
    const nonExistingEmail = 'nonexistent@example.com';
    const response = await request.get(`/users/${nonExistingEmail}`);
    expect(response.status).to.equal(404);
    expect(response.body.error).to.equal('User not found');
  });

  it('should add a new user', async () => {
    const newUser = {
      firstName: 'John',
      email: 'john.doe@example.com',
      password: 'password123',
      age: 25,
    };

    const response = await request.post('/users').send(newUser);
    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal(newUser);
  });

});
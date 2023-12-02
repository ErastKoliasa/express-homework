const chai = require('chai');
const { expect } = chai;
const { server } = require('../server');
const request = require('supertest')(server);
const students = require('../data/students.json');

describe('Students API tests', () => {
    it('should get all students', async () => {
        const response = await request.get('/students');
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(students);
    });

    it('should get the worst score for a specific type', async () => {
        const type = 'homework';
        const response = await request.get(`/students/worst-score/${type}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('scores');
    });

    it('should return 400 for a non-existing score type', async () => {
        const nonExistingType = 'nonexistent';
        const response = await request.get(`/students/worst-score/${nonExistingType}`);
        expect(response.status).to.equal(400);
        expect(response.body.error).to.include(`${nonExistingType} score is missing for the`);
    });
});
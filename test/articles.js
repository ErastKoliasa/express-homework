const chai = require('chai');
const { expect } = chai;
const { server } = require('../server');
const request = require('supertest')(server);
const articles = require('../data/articles.json');

describe('Articles API tests', () => {
    it('should get all articles', async () => {
        const response = await request.get('/articles');
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(articles);
    });

    it('should add a new articles', async () => {
        const newArticles = {
            name: "React",
            description: "Test description",
            type: "course",
            tags: ["programming"],
        };
        const response = await request.post('/articles').send(newArticles);
        expect(response.status).to.equal(201);
        expect(response.body).to.deep.equal(newArticles);
    });

    it('should return 400 for missing article fields during creation', async () => {
        const invalidArticle = {
            name: "React",
            tags: ["programming"],
        };
        const response = await request.post('/articles').send(invalidArticle);
        expect(response.status).to.equal(400);
        expect(response.body.error).to.equal('Name, description, type and tags are required fields');
    });

    it('should update article tags', async () => {
        const articleIndex = 0;
        const updatedTags = ['updated', 'tags'];
        const response = await request
            .put(`/articles/${articleIndex}/tags`)
            .send({ tags: updatedTags });
        expect(response.status).to.equal(200);
        expect(response.body.tags).to.deep.equal(updatedTags);
    });

    it('should return 400 for missing tags during tag update', async () => {
        const articleIndex = 0;
        const invalidTags = {};
        const response = await request.put(`/articles/${articleIndex}/tags`).send(invalidTags);
        expect(response.status).to.equal(400);
        expect(response.body.error).to.equal('Tags are required for updating article tags');
    });
})
const express = require("express");

const router = express.Router();

const articlesHandler = require('../controllers/articles');
const articlesMdware = require('../middlewares/articles.mdware');

router.get('/', articlesHandler.getArticles);

router.post('/', articlesMdware.validateArticleFields, articlesHandler.addNewArticle);

router.put('/:articleIndex/tags', articlesMdware.validateUpdateTagsFields, articlesHandler.updateArticleTags);

module.exports = router;
const articles = require("../data/articles.json")

function getArticles(req, res, next) {
    try{
        res.json(articles);
    } catch(error) {
        next(error);
    }
}

function addNewArticle(req, res, next) {
    try {
        const newArticle = req.body;
        articles.push(newArticle);
        res.status(201).json(newArticle);
    } catch (error) {
        next(error);
    }
}

function updateArticleTags(req, res, next) {
    try {
        const articleIndex = req.params.articleIndex;
        const updatedTags = req.body.tags;
        if (!articles[articleIndex]) {
            return res.status(404).json({ error: 'Article not found' });
        }
        articles[articleIndex].tags = updatedTags;
        res.json(articles[articleIndex]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getArticles,
    addNewArticle,
    updateArticleTags
}
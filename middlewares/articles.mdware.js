validateArticleFields = (req, res, next) => {
    if (!req.body.name || !req.body.description || !req.body.type || !req.body.tags) {
        return res.status(400).json({ error: 'Name, description, type and tags are required fields' });
    }
    next();
};

validateUpdateTagsFields = (req, res, next) => {
    if (!req.body.tags) {
        return res.status(400).json({ error: 'Tags are required for updating article tags' });
    }
    next();
};

module.exports = {
    validateArticleFields,
    validateUpdateTagsFields
}
validateUserFields = (req, res, next) => {
    if (!req.body.firstName || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'First name, email and password are required fields' });
    }
    next();
};

validateUserAge = (req, res, next) => {
    const validAge = !isNaN(parseInt(req.body.age, 10)) && req.body.age >= 0 && req.body.age <= 110;
    if (!validAge) {
        return res.status(400).json({ error: 'Invalid age format.' });
    }
    next();
}

module.exports = {
    validateUserFields, 
    validateUserAge
}


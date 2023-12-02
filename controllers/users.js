const users = require("../data/users.json");

function getUsers(req, res, next) {
    try {
        res.json(users);
    } catch (error) {
        next(error);
    }
}

function addNewUser(req, res, next) {
    try {
        const newUser = req.body;
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

function getUserByEmail(req, res, next) {
    try {
        const userEmail = req.params.email;
        const user = users.find(user => user.email === userEmail);
        user ? res.json(user) : res.status(404).json({ error: 'User not found' });
    } catch (error) {
        next(error);
    }
}

function updateUserByEmail(req, res, next) {
    try {
        const userEmail = req.params.email;
        const newData = req.body;
        let user = users.find(user => user.email === userEmail);
        if (user) {
            user = Object.assign(user, newData);
            res.json(user)
        }
        else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        next(error);
    }
}

function deleteUserByEmail(req, res, next) {
    try {
        const userEmail = req.params.email;
        const userIndex = users.findIndex(u => u.email === userEmail);
        if (userIndex !== -1) {
            const deletedUser = users.splice(userIndex, 1);
            res.json(deletedUser);
        }
        else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsers,
    addNewUser,
    getUserByEmail,
    updateUserByEmail,
    deleteUserByEmail
}
const express = require('express');

const usersMdware = require("../middlewares/users.mdware")
const usersHandler = require("../controllers/users")
const router = express.Router();

router.get('/', usersHandler.getUsers);
router.get('/:email', usersHandler.getUserByEmail);

router.post('/', usersMdware.validateUserFields, usersMdware.validateUserAge, usersHandler.addNewUser);
router.patch('/:email', usersHandler.updateUserByEmail);

router.delete('/:email', usersHandler.deleteUserByEmail)

module.exports = router
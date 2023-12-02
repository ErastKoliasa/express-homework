const express = require("express");

const router = express.Router();

const studentsHandler = require('../controllers/students');
const studentMdware = require("../middlewares/students.mdware")

router.get('/', studentsHandler.getStudentsStatistics);
router.get('/worst-score/:type', studentMdware.validateStudentsScores, studentsHandler.getWorstScore);

module.exports = router;
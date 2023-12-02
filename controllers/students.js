const students = require('../data/students.json');

function getStudentsStatistics(req, res, next) {
    try {
        res.json(students);
    } catch (error) {
        next(error);
    }
}

function getWorstScore(req, res, next) {
    try {
        let worstStudent = null;
        let worstScore = Number.POSITIVE_INFINITY;
        students.forEach(student => {
            let typeScore = student.scores.find(score => score.type === req.params.type).score;
            if (typeScore < worstScore) {
                worstScore = typeScore;
                worstStudent = student;
            }
        }
        );
        res.json(worstStudent)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getStudentsStatistics,
    getWorstScore
}
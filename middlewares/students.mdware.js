const students = require("../data/students.json")

validateStudentsScores = (req, res, next) => {
    students.forEach(student => {
        let typeScore = student.scores.find(score => score.type === req.params.type)
        if (!typeScore) {
            return res.status(400).json({ error: `${req.params.type} score is missing for the ${student.name}`});
        }
        else { 
            next()
        }
    })
}

module.exports = {
    validateStudentsScores
}

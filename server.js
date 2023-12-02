const express = require("express");
const app = express();
const port = 3000

const requestLoggingMdware = require("./middlewares/reqLogging.mdware");
const errorMdware = require("./middlewares/errors.mdware");

const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students");
const articlesRouter = require("./routes/articles")

app.use(requestLoggingMdware.requestLogging);

app.use(express.json());

app.use('/users', usersRouter);
app.use('/students', studentsRouter);
app.use('/articles', articlesRouter);

app.use(errorMdware.errorHandler)

const server = app.listen(port, () => {
    console.log(`Server listening on ${port}...`)
})

module.exports = {
    server
}
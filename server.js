const express = require("express");
const app = express();
const port = 3000

const usersMdware = require("./middlewares/users.mdware");

const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students")

app.use(express.json());

app.use('/users', usersMdware.validateUserFields, usersRouter);
app.use('/students', studentsRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}...`)
})
const express = require("express");
const app = express();
const port = 3000

const usersMdware = require("./middlewares/users.mdware")

const usersRouter = require("./routes/users")

app.use(express.json());

app.use('/users', usersMdware.validateUserFields, usersRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}...`)
})
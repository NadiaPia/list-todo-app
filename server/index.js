const express = require ("express");
const app = express();
const cors = require("cors"); //this package will allow to make a connection between our FE and server

//middlewares:

app.use(express.json());  //to be able to unparse the json data in the req.body
app.use(cors());

const db = require("./models");

//Routers

const tasksRouter = require("./routes/Tasks");
app.use("/tasks", tasksRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter)




db.sequelize.sync().then(() => {
    app.listen(3003, () => {
        console.log("Server runnin on port 3003")
    });
});

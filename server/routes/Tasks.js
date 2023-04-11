const express = require("express");
const router = express.Router();
const { TasksLists } = require("../models");

//    "/tasks" = "/"

router.get("/", async(req, res) => {
    const listOfTasks = await TasksLists.findAll()
    res.json(listOfTasks);
    //console.log("listOfTasks", listOfTasks)
    //res.json("Successsss")
});

router.post("/", async(req, res) => {
    const newTask = req.body;
    const task = await TasksLists.create(newTask)
    console.log("tasktasktasktasktasktasktask", task) //task.dataValues, task. _previousDataValues, task.uniqno.. We nee only task.dataValues: {id: 11, taskText: 'water a plant', updatedAt: 2023-04-11T07:32:25.314Z,  createdAt: 2023-04-11T07:32:25.314Z }
    res.json(task.dataValues) //task.dataValues: {id: 11, taskText: 'water a plant', updatedAt: 2023-04-11T07:32:25.314Z,  createdAt: 2023-04-11T07:32:25.314Z }

})

router.delete("/:taskId", async(req, res) => {
    const taskId = req.params.taskId
    await TasksLists.destroy({
        where: {
            id: taskId,
        }
    })
    res.json("DELETED SUCCESFULLY")
})

module.exports = router
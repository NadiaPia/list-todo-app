const express = require("express");
const router = express.Router();
const { TasksLists } = require("../models");

//    "/tasks" = "/"

router.get("/", async (req, res) => {
    const listOfTasks = await TasksLists.findAll({ where: { UserId: req.headers.userid } })
    res.json(listOfTasks);
});

router.post("/", async (req, res) => {
    const newTask = req.body; //{textTask: "eat"}
    //console.log("req.headers.userid", req.headers.userid) //2
    newTask.UserId = req.headers.userid; //{textTask: "eat", UserId: 2}   
    const task = await TasksLists.create(newTask);
    res.json(task) //{id: 11, taskText: 'water a plant', UserId: '2', updatedAt: 2023-04-11T07:32:25.314Z,  createdAt: 2023-04-11T07:32:25.314Z }
});

router.delete("/:taskId", async (req, res) => {
    const taskId = req.params.taskId
    await TasksLists.destroy({
        where: {
            id: taskId,
        }
    });
    res.json("DELETED SUCCESFULLY")
});

router.put("/:taskId", async (req, res) => {
    const taskId = req.params.taskId;
    await TasksLists.update({ taskText: req.body.correctedTask }, { where: { id: taskId } });
    res.json("success");
});

router.put("/checkbox/:taskId", async (req, res) => {
    //console.log("req.body.checkbox", req.body.checkbox)
    const taskId = req.params.taskId;
    await TasksLists.update({ checkbox: req.body.checkbox }, { where: { id: taskId } });
    res.json(req.body.checkbox);
});

module.exports = router;
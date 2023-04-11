const express = require("express");
const router = express.Router();
const { TasksLists } = require("../models");

//    "/tasks" = "/"

router.get("/", async(req, res) => {
    const listOfTasks = await TasksLists.findAll()
    res.json(listOfTasks);
    console.log("listOfTaskslistOfTaskslistOfTaskslistOfTaskslistOfTasks", listOfTasks)
    //res.json("Successsss")
});

router.post("/", async(req, res) => {
    const newTask = req.body;
    await TasksLists.create(newTask)
    res.json(newTask)

})

module.exports = router
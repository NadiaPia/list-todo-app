const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//     "/auth" = "/"

router.post("/", async(req,res) => {
    const {username, password} = req.body;
    await Users.create({username: username, password:password})
    res.json("Success")
})

module.exports = router
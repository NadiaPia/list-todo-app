const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//     "/auth" = "/"

router.post("/", async(req,res) => {
    const {username, password} = req.body;
    await Users.create({username: username, password:password})
    res.json("Success")
})

router.post("/login", async(req,res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({where: {username: username, password:password}}); //my password is not hashed => I can find it in the db together with the username
    if(!user) {
        res.json({message: "User does not exist"})
    } 
    res.json({username: user.username, id: user.id}) //if we send 
})


module.exports = router
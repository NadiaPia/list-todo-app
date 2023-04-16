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
    res.json({username: user.username, id: user.id}) //we don't need  sent the rest of the object like {password: 'password', createdAt: '2023-04-14T23:16:07.000Z', updatedAt: '2023-04-14T23:16:07.000Z'}
})


module.exports = router
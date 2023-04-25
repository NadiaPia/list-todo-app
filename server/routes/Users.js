const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//     "/auth" = "/"

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.create({ username: username, password: password });
    //console.log("user.id", user.id);
    res.json({ username: user.username, id: user.id });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username, password: password } }); //my password is not hashed => I can find it in the db together with the username
    if (!user) {
        res.json({ message: "Incorrect username or password" });
    }

    res.json({ username: user.username, id: user.id }); //we don't need  sent the rest of the object like {password: 'password', createdAt: '2023-04-14T23:16:07.000Z', updatedAt: '2023-04-14T23:16:07.000Z'}
});

router.get("/auth", async (req, res) => {
    //console.log('REQ ACCESSS --->>> ', req.headers.accesss);
    const user = await Users.findOne({ where: { id: req.headers.accesss } });
    if (!user) {
        res.json({ message: "User is not loged in" });
    }
    res.json({ username: user.username, id: user.id });
});

module.exports = router;
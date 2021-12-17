const express = require('express');
const router = express.Router();
const { Users } = require('../models');

router.get("/", async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});

router.post("/", async (req, res) => {
    const user = req.body;
    await Users.create(user);
    res.json(user);
});

router.delete("/:userId", async (req, res) => {
    const userId = req.params.userId
    const user = await Users.findByPk(userId);
    user.destroy();
    res.json(user.name + " is Deleted");
});

module.exports = router;
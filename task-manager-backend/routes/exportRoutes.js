const express = require("express");

const router = express.Router();

const exportTasks = require("../services/exportService");

router.get("/", async (req, res) => {

    const tasks = await exportTasks();

    res.json(tasks);
});

module.exports = router;
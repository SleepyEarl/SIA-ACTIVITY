const Task = require("../models/Task");

const exportTasks = async () => {

    const tasks = await Task.find();

    return tasks;
};

module.exports = exportTasks;
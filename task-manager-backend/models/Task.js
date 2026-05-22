const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    text: String,
    category: String,
    priority: String,
    completed: Boolean,
    remainingTime: Number,
    originalTime: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);
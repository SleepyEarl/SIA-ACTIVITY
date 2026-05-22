const express = require("express");

const router = express.Router();

const fetchCategories = require("../services/categoryService");

router.get("/", async (req, res) => {

    const categories = await fetchCategories();

    res.json(categories);
});

module.exports = router;
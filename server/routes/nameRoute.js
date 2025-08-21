const express = require("express");
const router = express.Router();
const addName = require("../controllers/nameController");

router.post("/", addName);

module.exports = router;

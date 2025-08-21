const Name = require("../models/Name");
const addName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim === "") {
      return res.status(400).send({ mesaage: "Please enter a name" });
    }
    const newName = new Name({
      name: name.trim(),
    });
    const savedName = await newName.save();
    res.status(201).send({ message: "Name add success" });
  } catch (error) {
    console.error("Error adding name:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = addName;

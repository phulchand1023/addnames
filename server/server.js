const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/names", require("./routes/nameRoute"));

app.get("/", (req, res) => {
  res.send("Welcome to the new Project");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

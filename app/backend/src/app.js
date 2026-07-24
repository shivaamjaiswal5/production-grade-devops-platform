const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Production Grade DevOps Platform Backend Running 🚀",
    version: "1.0.0"
  });
});

module.exports = app;
const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Production Grade DevOps Platform Backend",
    });
});

module.exports = app;
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/health", healthRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Production Grade DevOps Platform Backend"
    });
});

const errorHandler = require("./middleware/error.middleware");

app.use(errorHandler);

module.exports = app;

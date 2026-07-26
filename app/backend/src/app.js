const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Health Check Route
app.use("/api/v1/health", healthRoutes);

// Root Route
app.get("/", (req, res) => {
    res.status(200).json({
        application: "Production Grade DevOps Platform",
        service: "Backend API",
        version: "2.0.0",
        deployment: "Rolling Update Demo",
        status: "Running",
        message: "Backend Version 2 deployed successfully 🚀",
        timestamp: new Date().toISOString()
    });
});

// Global Error Handler
const errorHandler = require("./middleware/error.middleware");
app.use(errorHandler);

module.exports = app;
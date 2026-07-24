exports.healthCheck = (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "Backend API",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });
};
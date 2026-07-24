const asyncHandler = require("../utils/asyncHandler");

exports.healthCheck = asyncHandler(async (req, res) => {

    res.status(200).json({
        success: true,
        status: "UP",
        service: "Backend API",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });

});
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
const APP_ENV = process.env.APP_ENV || "Local";
const SERVER_NAME = process.env.SERVER_NAME || "Local Machine";

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Health API
app.get("/api/status", (req, res) => {
    res.json({
        status: "Healthy",
        environment: APP_ENV,
        server: SERVER_NAME,
        timestamp: new Date().toISOString(),
        message: "Backend is running successfully!"
    });
});

// Simple API
app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from Azure DevOps Demo Application!"
    });
});

// Start server
app.listen(PORT, "0.0.0.0",() => {
    console.log(
        `Server running on port ${PORT} | Environment: ${APP_ENV} | Server: ${SERVER_NAME}`
    );
});
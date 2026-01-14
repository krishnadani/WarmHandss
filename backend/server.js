const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const helpRoutes = require("./routes/helpRoutes");
const donationRoutes = require("./routes/donationRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
const FRONTEND_URL = process.env.FRONTEND_URL;
if (process.env.NODE_ENV === "production" && FRONTEND_URL) {
  app.use(cors({ origin: FRONTEND_URL }));
} else {
  app.use(cors());
}

app.use(express.json());

// Routes
app.use("/api/help", helpRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("WarmHands backend is running");
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log("Server running on port", PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

  module.exports = app;

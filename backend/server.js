const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const helpRoutes = require("./routes/helpRoutes");
const donationRoutes = require("./routes/donationRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/help", helpRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("WarmHands backend is running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

// Export app for Vercel (IMPORTANT)
module.exports = app;

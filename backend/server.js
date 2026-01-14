const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const helpRoutes = require("./routes/helpRoutes");
const donationRoutes = require("./routes/donationRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

/* =======================
   MIDDLEWARE
======================= */

// ✅ Allow frontend + preview + mobile safely
app.use(
  cors({
    origin: [
      "https://warm-handss-ubgc.vercel.app", // production frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* =======================
   ROUTES
======================= */

app.use("/api/help", helpRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("WarmHands backend is running");
});

/* =======================
   MONGODB CONNECTION
======================= */

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI not found in environment variables");
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("✅ MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err.message);
    });
}

/* =======================
   EXPORT FOR VERCEL
======================= */

module.exports = app;

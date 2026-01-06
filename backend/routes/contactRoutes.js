const express = require("express");
const router = express.Router();

const {
  createContactMessage,
} = require("../controllers/contactController");

// POST /api/contact
router.post("/", createContactMessage);

module.exports = router;

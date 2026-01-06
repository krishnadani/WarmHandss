const express = require("express");
const router = express.Router();

const { createHelpRequest } = require("../controllers/helpController");

// POST /api/help
router.post("/", createHelpRequest);

module.exports = router;

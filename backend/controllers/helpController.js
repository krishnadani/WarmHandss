const HelpRequest = require("../models/HelpRequest");

// Create a new help request
exports.createHelpRequest = async (req, res) => {
  try {
    const { name, phone, reason, details } = req.body;

    // Basic validation (extra safety)
    if (!name || !phone || !reason || !details) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const helpRequest = new HelpRequest({
      name,
      phone,
      reason,
      details,
    });

    await helpRequest.save();

    res.status(201).json({
      message: "Help request submitted successfully",
    });
  } catch (error) {
    console.error("Error saving help request:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
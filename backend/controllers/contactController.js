const ContactMessage = require("../models/ContactMessage");

exports.createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const contact = new ContactMessage({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

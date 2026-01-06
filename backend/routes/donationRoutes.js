const express = require("express");
const router = express.Router();

const {
  createDonation,
  createRazorpayOrder,
  verifyRazorpayPayment,
} = require("../controllers/donationController");

// POST /api/donations
router.post("/", createDonation);
// POST /api/donations/order
router.post("/order", createRazorpayOrder);
// Verify payment & save donation
router.post("/verify", verifyRazorpayPayment);



module.exports = router;

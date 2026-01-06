const Donation = require("../models/Donation");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create a new donation
exports.createDonation = async (req, res) => {
  try {
    const { cause, amount } = req.body;

    // Basic validation
    if (!cause || !amount) {
      return res.status(400).json({
        message: "Cause and amount are required",
      });
    }

    if (amount < 50) {
      return res.status(400).json({
        message: "Minimum donation amount is ₹50",
      });
    }

    const donation = new Donation({
      cause,
      amount,
    });

    await donation.save();

    res.status(201).json({
      message: "Donation recorded successfully",
    });
  } catch (error) {
    console.error("Error saving donation:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount < 50) {
      return res.status(400).json({
        message: "Minimum donation amount is ₹50",
      });
    }

    const options = {
      amount: amount * 100, // Razorpay expects paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay order error:", error);
    res.status(500).json({
      message: "Unable to create Razorpay order",
    });
  }
};

exports.verifyRazorpayPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cause,
      amount,
    } = req.body;

    // Create signature string
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    // Verify signature
    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        message: "Payment verification failed",
      });
    }

    // Save verified donation
    const donation = new Donation({
      cause,
      amount,
    });

    await donation.save();

    res.status(200).json({
      message: "Payment verified and donation saved",
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

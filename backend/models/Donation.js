const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    cause: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 50,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);

const mongoose = require("mongoose");

const SeasonalPricingSchema = new mongoose.Schema(
  {
    seasonName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    dailyRate: {
      type: Number,
      required: true,
    },
    weeklyRate: {
      type: Number,
      required: true,
    },
    monthlyRate: {
      type: Number,
      required: true,
    },
    lateFees: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SeasonalPricing", SeasonalPricingSchema);

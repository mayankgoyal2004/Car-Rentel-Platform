const mongoose = require("mongoose");

const PricingSchema = new mongoose.Schema(
  {
    prices: {
      daily: { type: Number, min: 0 },
      weekly: { type: Number, min: 0 },
      monthly: { type: Number, min: 0 },
      yearly: { type: Number, min: 0 },
    },
    baseKilometers: { type: Number, min: 0, required: true },
    unlimitedKilometers: { type: Boolean, default: false },
    extraKilometerPrice: { type: Number, min: 0, required: true },
    seasonal: [
      { type: mongoose.Schema.Types.ObjectId, ref: "SeasonalPricing" },
    ],
    insurance: [
      {
        name: String,
        price: { type: Number, min: 0 },
        benefits: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pricing", PricingSchema);

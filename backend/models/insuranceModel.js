const mongoose = require("mongoose");

const InsuranceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    priceType: {
      type: String,
      enum: ["Daily", "Fixed", "Percentage"],
      required: true,
    },

    price: { type: Number, min: 0, required: true },
    benefits: [{ type: String, trim: true }], // array of multiple benefits
    status: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Insurance", InsuranceSchema);

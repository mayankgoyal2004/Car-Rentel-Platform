const mongoose = require("mongoose");

const CarSafetyFeatureSchema = new mongoose.Schema(
  {
    safetyFeature: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarSafetyFeature", CarSafetyFeatureSchema);

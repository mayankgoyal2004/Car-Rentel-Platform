const mongoose = require("mongoose");

const CarTransmission = new mongoose.Schema(
  {
    carTransmission: {
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

module.exports = mongoose.model("CarTransmission", CarTransmission);

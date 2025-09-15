const mongoose = require("mongoose");

const CarSteeringSchema = new mongoose.Schema(
  {
    carSteering: {
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

module.exports = mongoose.model("CarSteering", CarSteeringSchema);

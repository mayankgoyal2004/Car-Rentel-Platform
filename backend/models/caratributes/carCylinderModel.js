const mongoose = require("mongoose");

const CarCylinderSchema = new mongoose.Schema(
  {
    carCylinder: {
      type: String, 
      required: true,
      trim: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarCylinder", CarCylinderSchema);

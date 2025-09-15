const mongoose = require("mongoose");

const carModel = new mongoose.Schema(
  {
    carModel: {
      type: String,
      required: true,
      trim: true,
    },
    carBrand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarBrand",
      required: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarModel", carModel);

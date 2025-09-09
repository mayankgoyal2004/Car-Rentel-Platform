const mongoose = require("mongoose");

const CarDoorsSchema = new mongoose.Schema(
  {
    carDoors: {
      type: String, 
      required: true,
      trim: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarDoors", CarDoorsSchema);

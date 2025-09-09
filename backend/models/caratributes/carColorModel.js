const mongoose = require("mongoose");

const CarColorSchema  = new mongoose.Schema(
  {
    CarColor: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarColor", CarColorSchema );

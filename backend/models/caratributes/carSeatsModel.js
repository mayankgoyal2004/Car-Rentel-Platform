const mongoose = require("mongoose");

const CarSeatsSchema = new mongoose.Schema(
  {
    carSeats: {
      type: String,
      required: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarSeats", CarSeatsSchema);

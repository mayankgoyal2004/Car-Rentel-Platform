const mongoose = require("mongoose");

const ExtraServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      required: true,
      enum: ["one-time", "per-day"],
    },
    description: {
      type: String,
      default: "",
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExtraService", ExtraServiceSchema);

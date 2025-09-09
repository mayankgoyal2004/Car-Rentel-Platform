const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
    pincode: { type: String, required: true },
    workingDays: {
      monday: { from: String, to: String, active: Boolean },
      tuesday: { from: String, to: String, active: Boolean },
      wednesday: { from: String, to: String, active: Boolean },
      thursday: { from: String, to: String, active: Boolean },
      friday: { from: String, to: String, active: Boolean },
      saturday: { from: String, to: String, active: Boolean },
      sunday: { from: String, to: String, active: Boolean },
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);

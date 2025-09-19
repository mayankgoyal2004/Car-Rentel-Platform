const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Driver name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    contact: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    licenseNumber: {
      type: String,
      required: [true, "License number is required"],
      unique: true,
    },
    dateOfIssue: {
      type: Date,
      required: [true, "License issue date is required"],
    },
    validTill: {
      type: Date,
      required: [true, "License validity date is required"],
    },
    gender: { type: String },
    image: {
      type: String,
    },
    file: {
      type: String,
    },
    address: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["available", "assigned", "inactive"],
      default: "available",
    },
    isActive: { type: Boolean, default: true },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;

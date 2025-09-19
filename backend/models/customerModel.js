const mongoose = require("mongoose");

const customerschema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    email: { type: String, default: null },
    contact: { type: Number, default: 0 },
    address: { type: String, default: "United Kingdom" },
    image: { type: String, default: null },
    file: {
      type: String,
    },
    age: { type: Number },
    licenseNumber: {
      type: String,
      unique: true,
    },
    licenseImage: { type: String },
    dateOfIssue: {
      type: Date,
    },
    validTill: {
      type: Date,
    },
    pincode: { type: Number },
    Country: { type: String },
    City: { type: String },
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User", default: null },
    language: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String },
    status: { type: Boolean, default: true },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerschema);

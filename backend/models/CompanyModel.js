const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: [true, "companyName  is required"] },
    name: { type: String, required: [true, "name  is required"] },
    email: { type: String, required: [true, "email  is required"] },
    contact: { type: Number, required: [true, "contact is required"] },
    address: {
      type: String,
      default: "United Kingdom",
      required: [true, "address is required"],
    },
    website: { type: String, required: [true, "website is required"] },
    notes: { type: String },
    image: { type: String, default: null },
    file: {
      type: String,
    },
    language: { type: String },
    status: { type: Boolean, default: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);

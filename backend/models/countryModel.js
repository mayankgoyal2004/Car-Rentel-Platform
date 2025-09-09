const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    countryName: { type: String, required: true, unique: true },
    countryCode: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Country", CountrySchema);

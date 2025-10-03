const mongoose = require("mongoose");

const CountrySettingSchema = new mongoose.Schema(
  {
    countryName: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CountrySetting", CountrySettingSchema);

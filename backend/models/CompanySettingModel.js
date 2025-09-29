const mongoose = require("mongoose");

const companySettingSchema = new mongoose.Schema(
  {
    profilePhoto: { type: String, default: "" },
    organizationName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    addressLine: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    postalCode: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CompanySetting", companySettingSchema);

const mongoose = require("mongoose");

const recaptchaSettingSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    default: false,
  },
  siteKey: {
    type: String,
    default: "",
  },
  secretKey: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("RecaptchaSetting", recaptchaSettingSchema);

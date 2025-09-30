const mongoose = require("mongoose");

const smtpSettingSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    default: false,
  },
  fromEmail: {
    type: String,
    default: "",
  },
  smtpPassword: {
    type: String,
    default: "",
  },
  smtpHost: {
    type: String,
    default: "",
  },
  smtpPort: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("smtpSetting", smtpSettingSchema);

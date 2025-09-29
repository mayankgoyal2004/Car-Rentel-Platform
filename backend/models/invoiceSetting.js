const mongoose = require("mongoose");
const invoiceSettingSchema = new mongoose.Schema({
  logo: { type: String, default: null },
});
module.exports = mongoose.model("InvoiceSetting", invoiceSettingSchema);

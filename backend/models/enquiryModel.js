const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  message: { type: String },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  name: { type: String },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);

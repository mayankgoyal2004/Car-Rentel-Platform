const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  message: { type: String },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  name: { type: String },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
});

module.exports = mongoose.model("Enquiry", enquirySchema);

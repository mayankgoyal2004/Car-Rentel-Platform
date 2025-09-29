const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
  {
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    accountHolderName: { type: String, required: true },
    branch: { type: String, required: true },
    ifsc: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BankAccount", bankSchema);

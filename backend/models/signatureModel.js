const mongoose = require("mongoose");

const signatureSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Signature", signatureSchema);

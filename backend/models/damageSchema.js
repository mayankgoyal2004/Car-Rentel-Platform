const mongoose = require("mongoose");

const DamageSchema = new mongoose.Schema(
  {
    damageLocation: { type: String, required: true },
    damageType: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("Damage", DamageSchema);

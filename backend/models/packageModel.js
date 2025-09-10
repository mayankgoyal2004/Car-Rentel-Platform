const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    name: { type: String }, 
    price: { type: Number },
    duration: { type: Number }, 
    features: { type: [String], default: [] }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", packageSchema);

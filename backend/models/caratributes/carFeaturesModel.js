const mongoose = require("mongoose");

const CarFeaturesSchema = new mongoose.Schema(
  {
    carFeature: {
      type: String, 
      required: true,
      trim: true,
    },
    
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarFeatures", CarFeaturesSchema);

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    service: { type: Number, min: 1, max: 5 },
    location: { type: Number, min: 1, max: 5 },
    facilities: { type: Number, min: 1, max: 5 },
    valueForMoney: { type: Number, min: 1, max: 5 },
    cleanliness: { type: Number, min: 1, max: 5 },
    overall: { type: Number, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);

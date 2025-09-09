const mongoose = require("mongoose");

const CarFaqSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },

    question: { type: String, required: true },
    answer: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarFaq", CarFaqSchema);

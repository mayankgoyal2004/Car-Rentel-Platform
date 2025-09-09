const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FaqCategory",
      required: true,
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    status: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faq", faqSchema);

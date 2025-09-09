const mongoose = require("mongoose");

const faqCategory = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    categoryName: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("FaqCategory", faqCategory);

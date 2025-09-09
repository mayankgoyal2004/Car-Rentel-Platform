const mongoose = require("mongoose");

const BlogCategorySchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    categoryName: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("blogCategory", BlogCategorySchema);

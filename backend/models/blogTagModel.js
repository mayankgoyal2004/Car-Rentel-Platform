let mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    TagName: { type: String, required: true, unique: true },

    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tag", tagSchema);

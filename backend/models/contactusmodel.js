const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    comments: {
      type: String,
      required: [true, "Comments are required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);

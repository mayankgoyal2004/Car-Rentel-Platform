const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, default: null },
    email: { type: String, default: null },
    contact: { type: Number, default: 0 },
    password: { type: String, default: null },
    image: { type: String, default: "default.png" },

    verificationToken: { type: String, default: null },
    tokenExpirationTime: { type: Date, default: null },
    otp: { type: String, default: null },
    otpExpiration: { type: Date, default: null },
    status: { type: Boolean, default: false },
    userType: { type: Number, default: 3 }, // 1 = Admin, 2 = teamMembers 3 = user default

    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

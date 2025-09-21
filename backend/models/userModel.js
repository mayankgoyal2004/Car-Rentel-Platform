const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },

    email: { type: String, unique: true, lowercase: true, trim: true },
    contact: { type: String, default: null },
    password: { type: String, default: null },
    image: { type: String, default: "uploads/userImage/default.jpg" },

    verificationToken: { type: String, default: null },
    tokenExpirationTime: { type: Date, default: null },
    otp: { type: String, default: null },
    otpExpiration: { type: Date, default: null },
    status: { type: Boolean, default: false },
    userType: { type: Number, default: 4 }, // 1 = superAdmin, 2 = admin 3 = teamMembers 4 = user default
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      default: null,
    },
    logo: { type: String, default: null },

    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      default: null,
    },
    packageExpiration: {
      type: Date,
      default: null,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    businessName: { type: String, default: null },
    address: { type: String, default: null },
    logo: { type: String, default: null },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

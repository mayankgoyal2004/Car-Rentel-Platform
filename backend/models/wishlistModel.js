// models/Wishlist.js
const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);

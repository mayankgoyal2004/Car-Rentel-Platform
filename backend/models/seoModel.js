const mongoose = require("mongoose");

const globalSEOSchema = new mongoose.Schema({
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
  ogImage: String,
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GlobalSEO", globalSEOSchema);

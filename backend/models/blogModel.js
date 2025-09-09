const mongoose = require("mongoose");
const slugify = require("slugify");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: null },
    image: { type: String, default: "no-image.jpg" },
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User", default: null },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "BlogCategory" },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    status: { type: Boolean, default: false },
    slug: { type: String, unique: true, trim: true },
  },
  { timestamps: true }
);

BlogSchema.pre("save", async function (next) {
  if (this.isModified("title")) {
    let newSlug = slugify(this.title, { lower: true, strict: true });

    // Check for duplicates and append number if needed
    const Blog = mongoose.model("Blog", BlogSchema);
    let slugExists = await Blog.findOne({ slug: newSlug, _id: { $ne: this._id } });

    let counter = 1;
    let finalSlug = newSlug;
    while (slugExists) {
      finalSlug = `${newSlug}-${counter}`;
      slugExists = await Blog.findOne({ slug: finalSlug, _id: { $ne: this._id } });
      counter++;
    }

    this.slug = finalSlug;
  }
  next();
});

module.exports = mongoose.model("Blog", BlogSchema);

const GlobalSEO = require("../models/seoModel");

const addSeo = async (req, res) => {
  try {
    const { metaTitle, metaDescription, keywords } = req.body;

    if (!metaTitle || !metaDescription) {
      return res
        .status(400)
        .json({ success: false, message: "Title & description required" });
    }

    const image = req.file ? req.file.path.replace(/\\/g, "/") : null;

    const keywordArray = keywords
      ? keywords.split(",").map((k) => k.trim())
      : [];

    // Check if SEO already exists
    let seo = await GlobalSEO.findOne();

    if (!seo) {
      seo = new GlobalSEO({
        metaTitle,
        metaDescription,
        keywords: keywordArray,
        ogImage: image,
      });
    } else {
      seo.metaTitle = metaTitle;
      seo.metaDescription = metaDescription;
      seo.keywords = keywordArray;
      if (image) seo.ogImage = image;
      seo.updatedAt = new Date();
    }

    await seo.save();

    res.status(200).json({ success: true, seo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

getSeoSetting = async (req, res) => {
  try {
    const Seo = await GlobalSEO.findOne();

    res.json({
      success: true,
      Seo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { addSeo, getSeoSetting };

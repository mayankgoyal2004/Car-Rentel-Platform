const Faq = require("../models/faqModel");

const addFaq = async (req, res) => {
  try {
    const { category_id, question, answer } = req.body;
    const { _id, admin } = req.user;

    if (!category_id || !question || !answer) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "all fields is required",
      });
    }

    const faq = new Faq({
      category: category_id,
      question,
      answer,
      createdBy: _id,
      admin,
    });
    await faq.save();

    res.status(201).json({ success: true, faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_id, question, answer, status } = req.body;

    const faq = await Faq.findByIdAndUpdate(
      id,
      { category: category_id, question, answer, status },
      { new: true }
    );

    if (!faq)
      return res.status(404).json({ success: false, message: "FAQ not found" });

    res.json({ success: true, faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await Faq.findByIdAndDelete(id);
    if (!faq)
      return res.status(404).json({ success: false, message: "FAQ not found" });

    res.json({ success: true, message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getAllFaqsAdmin = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const adminId = req.user.admin;
    const search = req.query.search;

    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    let filter = { admin: adminId };
    if (search) {
      filter.TagName = { $regex: search, $options: "i" };
    }

    const faqs = await Faq.find(filter)
      .populate("category", "categoryName")
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Faq.countDocuments(filter);

    res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      faqs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getActiveFaqs = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const adminId = req.user.admin;

    const faqs = await Faq.find({ admin: adminId, status: true })
      .populate("category", "name")
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Faq.countDocuments({ admin: adminId, status: true });

    res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      faqs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getHomepageFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find({ status: "active" })
      .populate("category", "name")
      .sort({ createdAt: -1 })
      .limit(6);

    res.json({ success: true, faqs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addFaq,
  updateFaq,
  getActiveFaqs,
  deleteFaq,
  getAllFaqsAdmin,
  getHomepageFaqs,
};

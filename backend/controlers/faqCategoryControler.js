const FaqCategory = require("../models/faqCategoryModel");

const addFaqCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Category Name is required",
      });
    }
    const existingCategory = await FaqCategory.findOne({ categoryName });
    if (existingCategory) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Category already exists",
      });
    }

    const category = new FaqCategory({ categoryName });
    await category.save();

    return res.status(201).json({
      success: true,
      status: 201,
      message: "New Category Inserted",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

const getAllFaqCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search;

    let filter = {};
    if (search) {
      filter.categoryName = { $regex: search, $options: "i" };
    }

    const category = await FaqCategory.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCategories = await FaqCategory.countDocuments(filter);

    res.json({
      success: true,
      data: category,
      pagination: {
        totalCategories,
        currentPage: page,
        totalPages: Math.ceil(totalCategories / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getAllActiveFaqCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const activeCategory = await FaqCategory.find({
      status: true,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalActiveCategories = await FaqCategory.countDocuments({
      status: true,
    });

    res.json({
      success: true,
      data: activeCategory,
      pagination: {
        totalActiveCategories,
        currentPage: page,
        totalPages: Math.ceil(totalActiveCategories / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const deleteFaqCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id is required",
      });
    }

    const category = await FaqCategory.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "FAQ category deleted successfully",
    });
  } catch (error) {
    console.error("Delete FAQ category error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const updateFaqCategory = async (req, res) => {
  try {
    const { status, categoryName } = req.body;
    const { id } = req.params;

    const category = await FaqCategory.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "No category Found!",
      });
    }

    category.status = status;
    category.categoryName = categoryName;
    await category.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "category status changed successfully!",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

module.exports = {
  addFaqCategory,
  updateFaqCategory,
  getAllActiveFaqCategory,
  deleteFaqCategory,
  getAllFaqCategory,
};

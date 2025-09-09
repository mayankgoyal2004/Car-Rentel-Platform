const blogCategory = require("../models/blogCategoryModel");

const addBlogCategory = async (req, res) => {
  try {
    let { categoryName } = req.body;
    categoryName = categoryName?.trim();

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Category Name is required",
      });
    }
    const existingCategory = await blogCategory.findOne({ categoryName });
    if (existingCategory) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Category already exists",
      });
    }

    const category = new blogCategory({
      categoryName,
      createdBy: req.user._id,
      admin: req.user.admin,
    });
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

const updateBlogCategory = async (req, res) => {
  try {
    let { _id, categoryName, status } = req.body;
    categoryName = categoryName?.trim();

    if (!_id || !categoryName) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Both Id and Category Name are required",
      });
    }
    if (status === undefined || status === null) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Status is required",
      });
    }
    const category = await blogCategory.findById(_id);

    if (!category) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Category not found!",
      });
    }

    category.categoryName = categoryName;
    category.status = status;
    await category.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Category updated successfully!",
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

const getAllBlogCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const adminId = req.user.admin;
    const search = req.query.search || "";

    let filter = { admin: adminId };
    if (search) {
      filter.categoryName = { $regex: search, $options: "i" };
    }
    const category = await blogCategory
      .find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCategories = await blogCategory.countDocuments(filter);

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

const getAllActiveBlogCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const adminId = req.user.admin;

    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const blogCategory = await blogCategory
      .find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalBlogComments = await blogCategory.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: blogCategory,
      pagination: {
        totalBlogComments,
        currentPage: page,
        totalPages: Math.ceil(totalBlogComments / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const deleteBlogCategory = async (req, res) => {
  var validation = "";
  const { id } = req.params;

  if (!id) {
    validation += "Id is Required";
  }

  if (!!validation) {
    res.json({
      status: 409,
      success: false,
      message: validation,
    });
  }
  const category = await blogCategory.findById(id);
  if (!category) {
    res.json({
      status: 409,
      success: false,
      message: "Data not Found!",
    });
  } else {
    await blogCategory.deleteOne({ _id: id });
    res.json({
      status: 200,
      success: true,
      message: "Category Successfully Deleted",
    });
  }
};

module.exports = {
  addBlogCategory,
  updateBlogCategory,
  getAllBlogCategory,
  deleteBlogCategory,
  getAllActiveBlogCategory,
};

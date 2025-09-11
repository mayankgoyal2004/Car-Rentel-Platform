const Tag = require("../models/blogTagModel");

const addBlogTag = async (req, res) => {
  try {
    let { TagName } = req.body;
    TagName = TagName?.trim();
    if (!TagName) {
      return res.status(400).json({
        success: false,
        message: "Tag Name is required",
      });
    }

    const existingTag = await Tag.findOne({ TagName });
    if (existingTag) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Tag already exists",
      });
    }

    const tag = new Tag({
      TagName,
      createdBy: req.user._id,
      admin: req.user.admin,
    });
    await tag.save();

    return res.status(201).json({
      success: true,
      message: "New Tag Created",
      data: tag,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Server Error",
    });
  }
};

const updateBlogTag = async (req, res) => {
  try {
    let { _id, TagName, status } = req.body;

    // Trim and validate

    TagName = TagName?.trim();

    if (!_id || !TagName) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Both Id and Tag Name are required",
      });
    }
    if (status === undefined || status === null) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Status is required",
      });
    }

    const tag = await Tag.findById(_id);
    if (!tag) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Tag not found!",
      });
    }

    tag.TagName = TagName;
    tag.status = status;
    await tag.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Tag updated successfully!",
      data: tag,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

const getAllBlogTag = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const adminId = req.user.admin;
    const search = req.query.search || ""; 
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

    const tag = await Tag.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalTag = await Tag.countDocuments(filter);

    res.json({
      success: true,
      data: tag,
      pagination: {
        totalTag,
        currentPage: page,
        totalPages: Math.ceil(totalTag / limit),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const getAllActiveBlogTag = async(req,res) =>{

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
    const tag = await Tag.find({ admin:adminId , status : true}) 
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalTag = await Tag.countDocuments({ admin:adminId , status : true});

    res.json({ 
      success: true,
      data: tag,
      pagination: {
        totalTag,
        currentPage: page,
        totalPages: Math.ceil(totalTag / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }





  
}

// route: DELETE /admin/blogs/tag-delete/:id
const deleteBlogTag = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }

    const tag = await Tag.findById(id);

    if (!tag) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Tag not found!",
      });
    }

    await Tag.deleteOne({ _id: id });

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Tag successfully deleted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

const getAllBlogTagSuperAdmin = async(req,res)=>{
    try {
      if (req.user.userType !== 1)
      return res.status(403).json({ message: "SuperAdmin only" });
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || ""; 
    let filter = {};
    if (search) {
      filter.TagName = { $regex: search, $options: "i" }; 
    }

    const tag = await Tag.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalTag = await Tag.countDocuments(filter);

    res.json({
      success: true,
      data: tag,
      pagination: {
        totalTag,
        currentPage: page,
        totalPages: Math.ceil(totalTag / limit),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
}


module.exports = { addBlogTag, updateBlogTag, getAllBlogTag, deleteBlogTag ,getAllActiveBlogTag ,getAllBlogTagSuperAdmin};

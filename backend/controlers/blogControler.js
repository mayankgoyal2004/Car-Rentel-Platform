const Blog = require("../models/blogModel");

const addBlog = async (req, res) => {
  try {
    const { title, description, category_id, tags_id } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }
    if (!description) {
      return res
        .status(400)
        .json({ success: false, message: "Description is required" });
    }
    if (!category_id) {
      return res
        .status(400)
        .json({ success: false, message: "Category is required" });
    }
    if (!tags_id) {
      return res
        .status(400)
        .json({ success: false, message: "Tags is required" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }
    const imagePath = req.file.path.replace(/\\/g, "/");

    const blog = new Blog({
      title,
      description,
      image: imagePath,
      category: category_id,
      tags: tags_id,
      createdBy: req.user._id,
      admin: req.user.admin,
    });

    await blog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: err.message || "Server Error" });
  }
};

const updateblog = async (req, res) => {
  try {
    const { _id, title, description, category_id, tags_id, status } = req.body;

    if (!_id) {
      res.status(400).json({
        success: false,
        message: "Id is required!",
      });
    }
    if (!title || !description || !category_id || !tags_id) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "all fields are required",
      });
    }
    if (status === undefined || status === null) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Status is required",
      });
    }

    const blogUpdate = await Blog.findById(_id);
    if (!blogUpdate) {
      res.json({
        status: 409,
        success: false,
        message: "Blog not Found!",
      });
    } else {
      blogUpdate.title = title;
      blogUpdate.description = description;
      blogUpdate.category = category_id;
      blogUpdate.tags = tags_id;

      blogUpdate.status = status;

      if (req.file) {
        const imagePath = req.file.path.replace(/\\/g, "/");
        blogUpdate.image = imagePath;
      }
      await blogUpdate.save();

      res.json({
        status: 200,
        success: true,
        message: "Blog Updated SuccessFully",
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getBlogForUser = async (req, res) => {
  try {
    const { category, page, limit } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const search = req.query.search || "";

    let filter = { status: true }; // only active blogs

    // Search by title or description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    const blogs = await Blog.find(filter)
      .populate("category", "categoryName")
      .populate("admin", "userName email image")
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    const totalBlogs = await Blog.countDocuments(filter);

    res.json({
      success: true,
      data: blogs,
      pagination: {
        totalBlogs,
        currentPage: pageNum,
        totalPages: Math.ceil(totalBlogs / limitNum),
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

const getAllBlog = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;

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
      filter.title = { $regex: search, $options: "i" };
    }
    const blogs = await Blog.find(filter)
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("createdBy", "userName email")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalBlogs = await Blog.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: blogs,
      pagination: {
        totalBlogs,
        currentPage: page,
        totalPages: Math.ceil(totalBlogs / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getBlogAllBlogForSuperAdmin = async (req, res) => {
  try {
    if (req.user.userType !== 1)
      return res.status(403).json({ message: "SuperAdmin only" });
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const search = req.query.search;
    let filter = {};
    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const blogs = await Blog.find(filter)
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("createdBy", "userName email")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalBlogs = await Blog.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: blogs,
      pagination: {
        totalBlogs,
        currentPage: page,
        totalPages: Math.ceil(totalBlogs / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getsingleblogForUser = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      res.json({
        status: 409,
        success: false,
        message: "slug is Required!",
      });
    }

    const bdata = await Blog.findOne({ slug, status: true })
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("admin", "userName email image")
      .exec();
    if (!bdata) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Blog not found!",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Blog Data Successfully Fetched!",
      data: bdata,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Server Error!",
      error: err.message,
    });
  }
};
const getsingleblogForAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.json({
        status: 409,
        success: false,
        message: "id is Required!",
      });
    }
    const bdata = await Blog.findById(id)
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("admin", "userName email")
      .exec();
    if (!bdata) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Blog not found!",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "Blog Data Successfully Fetched!",
      data: bdata,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Server Error!",
      error: err.message,
    });
  }
};

const deleteblog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.json({
        status: 409,
        success: false,
        message: "Id is Required!",
      });
    }

    const deleteBlog = await Blog.findById(id);
    if (!deleteBlog) {
      res.json({
        status: 409,
        success: false,
        message: "Blog not Found",
      });
    } else {
      await Blog.deleteOne({ _id: id });

      res.json({
        status: 200,
        success: true,
        message: "Blog successfully Deleted!",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Server Error!",
      error: err.message,
    });
  }
};

const getLatestBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({
      status: true,
    }).populate("category", "categoryName").populate("admin", "userName email image")
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      success: true,
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};
module.exports = {
  addBlog,
  getBlogForUser,
  getAllBlog,
  getsingleblogForUser,
  updateblog,
  deleteblog,
  getBlogAllBlogForSuperAdmin,
  getsingleblogForAdmin,
  getLatestBlog
};

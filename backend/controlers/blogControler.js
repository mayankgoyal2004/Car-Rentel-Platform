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

    const imagePath = req.file
      ? req.file.path.replace(/\\/g, "/")
      : "no-image.jpg";
    if (!imagePath)
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });

    const blog = new Blog({
      title,
      description,
      image: imagePath,
      category: category_id,
      tags: tags_id,
      userId: req.user._id,
    });

    await blog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const { search, category, tag, page, limit } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;

    let filter = { status: true }; // only active blogs

    // Search by title or description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by category
    if (category) {
      filter.category = category; // pass category _id from frontend
    }

    // Filter by tag
    if (tag) {
      filter.tags = tag; // pass tag _id from frontend
    }

    const blogs = await Blog.find(filter)
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("userId", "name email")
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
    const limit = parseInt(req.query.limit) || 10;
    const {_id} = req.user
    if(!_id){
   return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });}

    const blogs = await Blog.find({userId:_id})
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("userId", "name email")
      .sort({  createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalBlogs = await Blog.countDocuments({userId:_id});

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

getsingleblog = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      res.json({
        status: 409,
        success: false,
        message: "Id is Required!",
      });
    }

    const bdata = await Blog.findOne({ _id })
      .populate("category", "categoryName")
      .populate("tags", "TagName")
      .populate("userId", "name email")
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

const updateblog = async (req, res) => {
  try {
    const { _id, title, description, category_id, tags_id, image } = req.body;

    if (!_id) {
      res.json({
        status: 409,
        success: false,
        message: "Id is required!",
      });
    }

    const blogUpdate = await Blog.findOne({ _id });
    if (!blogUpdate) {
      res.json({
        status: 409,
        success: false,
        message: "Data not Found!",
      });
    } else {
      blogUpdate.title = title;
      blogUpdate.description = description;
      blogUpdate.category = category_id;
      blogUpdate.tags = tags_id;
      blogUpdate.userId =  req.user._id;
;

      if (req.file) {
      const imagePath = req.file.path.replace(/\\/g, "/");
      blogUpdate.image = imagePath;
    }
      await blogUpdate.save();

      res.json({
        status: 200,
        success: true,
        message: "Record Updated!",
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
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

    const deleteBlog = await Blog.findById(id );
    if (!deleteBlog) {
      res.json({
        status: 409,
        success: false,
        message: "Data not Found",
      });
    } else {
      await Blog.deleteOne({ _id : id });

      res.json({
        status: 200,
        success: true,
        message: "Record Deleted!",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Server Error!",
      error: err.message
    });
  }
};

const updateBlogStatus = async (req, res) => {
  try {
    const { _id, isActive } = req.body;

    if (!_id ||  typeof isActive === "undefined") {
      return res.status(422).json({
        success: false,
        status: 422,
        message: "Both Comment Id and Status (isActive) are required",
      });
    }

    const blog = await Blog.findOne({ _id });

    if (!blog) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "No blog Found!",
      });
    }

    blog.isActive = isActive;
    await blog.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "blog status changed successfully!",
      data: blog,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

module.exports = { addBlog, getBlogs, getAllBlog, getsingleblog, updateblog , deleteblog , updateBlogStatus};

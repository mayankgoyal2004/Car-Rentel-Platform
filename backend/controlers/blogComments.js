const Comment = require("../models/blogCommentsModel");
const Blog = require("../models/blogModel");

const createComment = async (req, res) => {
  try {
    const { message } = req.body;
    const { blogId } = req.params;
    if (!message) {
      return res
        .status(400)
        .json({ success: false, message: "Message required" });
    }

    const newComment = new Comment({
      blog: blogId,
      createdBy: req.user._id,
      message,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getCommentBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    const comments = await Comment.find({ blog: blogId, status: true })
      .populate("user", "name email image")
      .sort({ created_at: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalComments = await Comment.countDocuments({
      blog: blogId,
      isActive: true,
    });

    res.json({
      success: true,
      comments,
      pagination: {
        totalComments,
        currentPage: page,
        totalPages: Math.ceil(totalComments / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const myBlogs = await Blog.find({ userId: _id }).select("_id");
    const blogId = myBlogs.map((blog) => blog._id);

    const comments = await Comment.find({ blog: { $in: blogId } }, "message")
      .populate("user", "name email image")
      .populate("blog", "title")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalComments = await Comment.countDocuments();

    res.json({
      success: true,
      data: comments,
      pagination: {
        totalComments,
        currentPage: page,
        totalPages: Math.ceil(totalComments / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
const deleteBlogComment = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    es.json({
      status: 409,
      success: false,
      message: "Id is Required",
    });
  }

  const comment = await Comment.findById(id);
  if (!comment) {
    res.json({
      status: 409,
      success: false,
      message: "Data not Found!",
    });
  } else {
    await Comment.deleteOne({ _id: id });
    res.json({
      status: 200,
      success: true,
      message: "Comment Successfully Deleted",
    });
  }
};

const updateCommentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!id || typeof status === "undefined") {
      return res.status(422).json({
        success: false,
        status: 422,
        message: "Both Comment Id and Status are required",
      });
    }

    const comment = await Comment.find(id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "No Comment Found!",
      });
    }

    comment.isActive = isActive;
    await comment.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Comment status changed successfully!",
      data: comment,
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
  createComment,
  getCommentBlog,
  getAllComments,
  updateCommentStatus,
  deleteBlogComment,
};

const CarReview = require("../models/carReviewmodel");
const Car = require("../models/CarModule");

const addCarReview = async (req, res) => {
  try {
    const { carId } = req.params;
    const { carReview, comment } = req.body;
    const userId = req.user._id;

    let review = new CarReview({
      car: carId,
      user: userId,
      carReview,
      comment,
    });

    await review.save();

    res.status(201).json({ message: "Review created", review });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const allReviewByUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "userId ID is required" });
    }

    const carReview = await CarReview.find({ user: userId })
      .populate("car")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarReview = await CarReview.countDocuments({
      user: userId,
    });

    res.status(200).json({
      success: true,
      data: carReview,
      pagination: {
        totalCarReview,
        currentPage: page,
        totalPages: Math.ceil(totalCarReview / limit),
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

const allReviewByAdmin = async (req, res) => {
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

    const cars = await Car.find({ admin: adminId }).select("_id");
    const carIds = cars.map((c) => c._id);

    let filter = { car: { $in: carIds } };
    if (search) {
      filter.$or = [{ comment: { $regex: search, $options: "i" } }];
    }

    const carReview = await CarReview.find(filter)
      .populate("car")
      .populate("user")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalReview = await CarReview.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: carReview,
      pagination: {
        totalReview,
        currentPage: page,
        totalPages: Math.ceil(totalReview / limit),
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

const deleteCarReview = async (req, res) => {
  try {
    const { id } = req.params;
    const carReview = await CarReview.findById(id);
    if (!carReview) {
      return res
        .status(404)
        .json({ success: false, message: "carReview not found" });
    }
    await CarReview.deleteOne({ _id: id });
    res.json({
      success: true,
      message: "carReview deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getCarReviews = async (req, res) => {
  try {
    const { carId } = req.params;
    const reviews = await CarReview.find({ car: carId })
      .populate("user", "userName email image") // if you want user details
      .sort({ createdAt: -1 });

    res.json({ success: true, reviews, total: reviews.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  addCarReview,
  allReviewByUser,
  allReviewByAdmin,
  deleteCarReview,
  getCarReviews,
};

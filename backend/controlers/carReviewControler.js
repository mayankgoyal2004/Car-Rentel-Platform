const CarReview = require("../models/carReviewmodel");
const Car = require("../models/CarModule");

const addCarReview = async (req, res) => {
  try {
    const { carId } = req.params;
    const {
      service,
      location,
      facilities,
      valueForMoney,
      cleanliness,
      comment,
    } = req.body;
    const userId = req.user.id;

    const overall =
      (+service + +location + +facilities + +valueForMoney + +cleanliness) / 5;

    let review = new CarReview({
      car: carId,
      user: userId,
      service,
      location,
      facilities,
      valueForMoney,
      cleanliness,
      overall,
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
    const { userId } = req.user.id;
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
    const { _id } = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const cars = await Car.find({ createdBy: _id }).select("_id");

    const carIds = cars.map((c) => c._id);

    if (carIds.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        pagination: { totalReservations: 0, currentPage: page, totalPages: 0 },
      });
    }
    const carReview = await Reservation.find({ car: { $in: carIds } })
      .populate("car")
      .populate("user")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalReview = await CarReview.countDocuments({
      car: { $in: carIds },
    });

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

module.exports = { addCarReview, allReviewByUser, allReviewByAdmin , deleteCarReview};

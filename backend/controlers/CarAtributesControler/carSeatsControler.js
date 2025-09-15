const CarSeats = require("../../models/caratributes/carSeatsModel");

// Add Car Seats
const addCarSeats = async (req, res) => {
  try {
    const { carSeats } = req.body;

    if (!carSeats) {
      return res
        .status(400)
        .json({ success: false, message: "carSeats is required" });
    }

    // Prevent duplicate seats entry by same user
    const foundSeats = await CarSeats.findOne({
      carSeats,
      admin: req.user?.admin,
    });

    if (foundSeats) {
      return res
        .status(400)
        .json({ success: false, error: "carSeats already exists" });
    }

    const newSeats = new CarSeats({
      carSeats,
      createdBy: req.user?._id,
      admin: req.user.admin,
    });

    await newSeats.save();

    res.status(201).json({
      success: true,
      message: "carSeats added successfully",
      data: newSeats,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Car Seats
const updateCarSeats = async (req, res) => {
  try {
    const { id } = req.params;
    const { carSeats, status } = req.body;

    const seats = await CarSeats.findById(id);
    if (!seats) {
      return res
        .status(404)
        .json({ success: false, message: "carSeats not found" });
    }

    if (carSeats) seats.carSeats = carSeats;
    if (status !== undefined) seats.status = status;

    await seats.save();

    res.json({
      success: true,
      message: "carSeats updated successfully",
      data: seats,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Car Seats
const deleteCarSeats = async (req, res) => {
  try {
    const { id } = req.params;

    const seats = await CarSeats.findById(id);
    if (!seats) {
      return res
        .status(404)
        .json({ success: false, message: "carSeats not found" });
    }

    await CarSeats.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carSeats deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Car Seats
const getAllCarSeats = async (req, res) => {
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
      filter.carSeats = { $regex: search, $options: "i" };
    }
    const seats = await CarSeats.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarSeats = await CarSeats.countDocuments(filter);

    res.json({
      success: true,
      data: seats,
      pagination: {
        totalCarSeats,
        currentPage: page,
        totalPages: Math.ceil(totalCarSeats / limit),
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
const getAllActiveCarSeats = async (req, res) => {
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
    const carSeats = await CarSeats.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarSeats = await CarSeats.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carSeats,
      pagination: {
        totalCarSeats,
        currentPage: page,
        totalPages: Math.ceil(totalCarSeats / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarSeats,
  updateCarSeats,
  deleteCarSeats,
  getAllCarSeats,
  getAllActiveCarSeats,
};

const CarSteering = require("../../models/caratributes/carSteeringModel");

// Add Car Steering
const addCarSteering = async (req, res) => {
  try {
    const { carSteering } = req.body;

    if (!carSteering) {
      return res
        .status(400)
        .json({ success: false, message: "carSteering is required" });
    }

    // Prevent duplicates for same user
    const foundSteering = await CarSteering.findOne({
      carSteering,
      createdBy: req.user?._id,
    });

    if (foundSteering) {
      return res
        .status(400)
        .json({ success: false, error: "carSteering already exists" });
    }

    const newSteering = new CarSteering({
      carSteering,
      createdBy: req.user?._id,
    });

    await newSteering.save();

    res.status(201).json({
      success: true,
      message: "carSteering added successfully",
      data: newSteering,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Car Steering
const updateCarSteering = async (req, res) => {
  try {
    const { id } = req.params;
    const { carSteering, status } = req.body;

    const steering = await CarSteering.findById(id);
    if (!steering) {
      return res
        .status(404)
        .json({ success: false, message: "carSteering not found" });
    }

    if (carSteering) steering.carSteering = carSteering;
    if (status !== undefined) steering.status = status;

    await steering.save();

    res.json({
      success: true,
      message: "carSteering updated successfully",
      data: steering,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Car Steering
const deleteCarSteering = async (req, res) => {
  try {
    const { id } = req.params;

    const steering = await CarSteering.findById(id);
    if (!steering) {
      return res
        .status(404)
        .json({ success: false, message: "carSteering not found" });
    }

    await CarSteering.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carSteering deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Car Steering
const getAllCarSteering = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const steerings = await CarSteering.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarSteering = await CarSteering.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: steerings,
      pagination: {
        totalCarSteering,
        currentPage: page,
        totalPages: Math.ceil(totalCarSteering / limit),
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

module.exports = {
  addCarSteering,
  updateCarSteering,
  deleteCarSteering,
  getAllCarSteering,
};

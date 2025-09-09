const CarDoors = require("../../models/caratributes/carDoorsModel");

// Add Car Doors
const addCarDoors = async (req, res) => {
  try {
    const { carDoors } = req.body;

    if (!carDoors) {
      return res
        .status(400)
        .json({ success: false, message: "carDoors is required" });
    }

    const foundDoors = await CarDoors.findOne({
      carDoors,
      createdBy: req.user?._id,
    });

    if (foundDoors) {
      return res
        .status(400)
        .json({ success: false, error: "carDoors already exists" });
    }

    const newDoors = new CarDoors({
      carDoors,
      createdBy: req.user?._id,
    });

    await newDoors.save();

    res.status(201).json({
      success: true,
      message: "carDoors added successfully",
      data: newDoors,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Car Doors
const updateCarDoors = async (req, res) => {
  try {
    const { id } = req.params;
    const { carDoors, status } = req.body;

    const doors = await CarDoors.findById(id);
    if (!doors) {
      return res
        .status(404)
        .json({ success: false, message: "carDoors not found" });
    }

    if (carDoors) doors.carDoors = carDoors;
    if (status !== undefined) doors.status = status;

    await doors.save();

    res.json({
      success: true,
      message: "carDoors updated successfully",
      data: doors,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Car Doors
const deleteCarDoors = async (req, res) => {
  try {
    const { id } = req.params;

    const doors = await CarDoors.findById(id);
    if (!doors) {
      return res
        .status(404)
        .json({ success: false, message: "carDoors not found" });
    }

    await CarDoors.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carDoors deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Car Doors
const getAllCarDoors = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const doors = await CarDoors.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarDoors = await CarDoors.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: doors,
      pagination: {
        totalCarDoors,
        currentPage: page,
        totalPages: Math.ceil(totalCarDoors / limit),
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
  addCarDoors,
  updateCarDoors,
  deleteCarDoors,
  getAllCarDoors,
};

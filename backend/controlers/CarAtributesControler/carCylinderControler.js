const CarCylinder = require("../../models/caratributes/carCylinderModel");

// Add Car Cylinder
const addCarCylinder = async (req, res) => {
  try {
    let { carCylinder } = req.body;
    carCylinder = carCylinder?.trim();

    if (!carCylinder) {
      return res
        .status(400)
        .json({ success: false, message: "carCylinder is required" });
    }

    // Prevent duplicate entry by same user
    const foundCylinder = await CarCylinder.findOne({
      carCylinder,
      admin: req.user?.admin,
    });

    if (foundCylinder) {
      return res
        .status(400)
        .json({ success: false, error: "carCylinder already exists" });
    }

    const newCylinder = new CarCylinder({
      carCylinder,
      createdBy: req.user?._id,
      admin: req.user.admin,
    });

    await newCylinder.save();

    res.status(201).json({
      success: true,
      message: "carCylinder added successfully",
      data: newCylinder,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Car Cylinder
const updateCarCylinder = async (req, res) => {
  try {
    const { id } = req.params;
    const { carCylinder, status } = req.body;

    const cylinder = await CarCylinder.findById(id);
    if (!cylinder) {
      return res
        .status(404)
        .json({ success: false, message: "carCylinder not found" });
    }

    if (carCylinder) cylinder.carCylinder = carCylinder;
    if (status !== undefined) cylinder.status = status;

    await cylinder.save();

    res.json({
      success: true,
      message: "carCylinder updated successfully",
      data: cylinder,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Car Cylinder
const deleteCarCylinder = async (req, res) => {
  try {
    const { id } = req.params;

    const cylinder = await CarCylinder.findById(id);
    if (!cylinder) {
      return res
        .status(404)
        .json({ success: false, message: "carCylinder not found" });
    }

    await CarCylinder.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carCylinder deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Car Cylinders
const getAllCarCylinder = async (req, res) => {
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
      filter.carFeature = { $regex: search, $options: "i" };
    }
    const cylinders = await CarCylinder.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarCylinder = await CarCylinder.countDocuments(filter);

    res.json({
      success: true,
      data: cylinders,
      pagination: {
        totalCarCylinder,
        currentPage: page,
        totalPages: Math.ceil(totalCarCylinder / limit),
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
const getAllActiveCarCylinder = async (req, res) => {
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
    const carCylinder = await CarCylinder.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarCylinder = await CarCylinder.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carCylinder,
      pagination: {
        totalCarCylinder,
        currentPage: page,
        totalPages: Math.ceil(totalCarCylinder / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarCylinder,
  updateCarCylinder,
  deleteCarCylinder,
  getAllCarCylinder,
  getAllActiveCarCylinder,
};

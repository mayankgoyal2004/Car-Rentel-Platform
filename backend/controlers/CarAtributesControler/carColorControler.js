const CarColor = require("../../models/caratributes/carColorModel");

const addCarColor = async (req, res) => {
  try {
    let { carColor } = req.body;
    carColor = carColor.trim();

    if (!carColor) {
      return res
        .status(400)
        .json({ success: false, message: "carColor is required" });
    }

    const foundCarColor = await CarColor.findOne({
      carColor,
      admin: req.user?.admin,
    });

    if (foundCarColor) {
      return res
        .status(400)
        .json({ success: false, error: "carColor already exists" });
    }

    const newCarColor = new CarColor({
      carColor,
      createdBy: req.user?._id,
      admin: req.user.admin,
    });

    await newCarColor.save();

    res.status(201).json({
      success: true,
      message: "carColor added successfully",
      data: newCarColor,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCarColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { carColor, status } = req.body;

    const color = await CarColor.findById(id);
    if (!color) {
      return res
        .status(404)
        .json({ success: false, message: "carColor not found" });
    }

    if (carColor) color.carColor = carColor;
    if (status !== undefined) color.status = status;

    await color.save();

    res.json({
      success: true,
      message: "carColor updated successfully",
      data: color,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteCarColor = async (req, res) => {
  try {
    const { id } = req.params;

    const color = await CarColor.findById(id);
    if (!color) {
      return res
        .status(404)
        .json({ success: false, message: "carColor not found" });
    }

    await CarColor.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carColor deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllCarColor = async (req, res) => {
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
      filter.carColor = { $regex: search, $options: "i" };
    }

    const colors = await CarColor.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarColor = await CarColor.countDocuments(filter);

    res.json({
      success: true,
      data: colors,
      pagination: {
        totalCarColor,
        currentPage: page,
        totalPages: Math.ceil(totalCarColor / limit),
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
const getAllActiveCarColor = async (req, res) => {
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
    const carColor = await CarColor.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarColor = await CarColor.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carColor,
      pagination: {
        totalCarColor,
        currentPage: page,
        totalPages: Math.ceil(totalCarColor / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarColor,
  updateCarColor,
  deleteCarColor,
  getAllCarColor,
  getAllActiveCarColor,
};

const CarType = require("../../models/caratributes/carTypeModel");

const addCarType = async (req, res) => {
  try {
    let { carType } = req.body;
    carType = carType.trim();
    if (!carType) {
      return res
        .status(400)
        .json({ success: false, message: "carType is required" });
    }
    const foundCarType = await CarType.findOne({
      carType,
      admin: req.user?.admin,
    });
    if (foundCarType) {
      return res.status(404).json({ error: "carType  already exist " });
    }
    const newCarType = new CarType({
      carType,
      admin: req.user.admin,

      createdBy: req.user?._id,
    });

    await newCarType.save();

    res.status(201).json({
      success: true,
      message: "car type added successfully",
      data: newCarType,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCarType = async (req, res) => {
  const { id } = req.params;
  let { carType, status } = req.body;
  carType = carType.trim();

  const cartype = await CarType.findById(id);
  try {
    if (!cartype) {
      return res
        .status(404)
        .json({ success: false, message: "carType not found" });
    }
    cartype.carType = carType;
    cartype.status = status;

    await cartype.save();
    res.json({
      success: true,
      message: "car type updated successfully",
      data: carType,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCarType = async (req, res) => {
  try {
    const { id } = req.params;

    const carType = await CarType.findById(id);
    if (!carType) {
      return res
        .status(404)
        .json({ success: false, message: "carType not found" });
    }

    await CarType.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "CarType deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCarTypes = async (req, res) => {
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
      filter.carType = { $regex: search, $options: "i" };
    }

    const carType = await CarType.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarType = await CarType.countDocuments(filter);

    res.json({
      success: true,
      data: carType,
      pagination: {
        totalCarType,
        currentPage: page,
        totalPages: Math.ceil(totalCarType / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getAllActiveCarType = async (req, res) => {
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
    const carType = await CarType.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalcarType = await CarType.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carType,
      pagination: {
        totalcarType,
        currentPage: page,
        totalPages: Math.ceil(totalcarType / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarType,
  updateCarType,
  deleteCarType,
  getAllCarTypes,
  getAllActiveCarType,
};

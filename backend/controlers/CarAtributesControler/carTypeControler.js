const CarType = require("../../models/caratributes/carTypeModel");

const addCarType = async (req, res) => {
  try {
    const { carType } = req.body;

    if (!carType) {
      return res
        .status(400)
        .json({ success: false, message: "carType is required" });
    }
    const foundCarType = await CarType.find({ carType });
    if (foundCarType) {
      return res.status(404).json({ error: "carType  already exist " });
    }
    const newCarType = new CarType({
      carType,

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
  const { carType, status } = req.body;

  const cartype = await CarType.findById(id);
  try {
    if (!cartype) {
      return res
        .status(404)
        .json({ success: false, message: "carType not found" });
    }
    cartype.carType = carType;
    cartype.status = status;

    await carType.save();
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
    const { _id } = req.user;

    const carType = await CarType.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarType = await CarType.countDocuments({ createdBy: _id });

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

module.exports = { addCarType, updateCarType, deleteCarType, getAllCarTypes };


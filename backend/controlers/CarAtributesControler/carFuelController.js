const CarFuel = require("../../models/caratributes/carFuelModel");

const addCarFuel = async (req, res) => {
  try {
    const { carFuel } = req.body;

    if (!carFuel) {
      return res
        .status(400)
        .json({ success: false, message: "carFuel is required" });
    }
    const foundCarFuel = await CarFuel.find({ carFuel });
    if (foundCarFuel) {
      return res.status(404).json({ error: "carFuel  already exist " });
    }
    const newCarFuel = new CarFuel({
      carFuel,

      createdBy: req.user?._id,
    });

    await newCarFuel.save();

    res.status(201).json({
      success: true,
      message: "cat fuel added successfully",
      data: newCarFuel,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCarFuel = async (req, res) => {
  const { id } = req.params;
  const { carFuel, status } = req.body;

  const carfuel = await CarFuel.findById(id);
  try {
    if (!carfuel) {
      return res
        .status(404)
        .json({ success: false, message: "carfuel not found" });
    }
    carfuel.carFuel = carFuel;
    carfuel.status = status;

    await carfuel.save();
    res.json({
      success: true,
      message: "carfuel updated successfully",
      data: carfuel,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCarFuel = async (req, res) => {
  try {
    const { id } = req.params;

    const carfuel = await CarFuel.findById(id);
    if (!carfuel) {
      return res
        .status(404)
        .json({ success: false, message: "carfuel not found" });
    }

    await CarFuel.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carfuel deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCarFuel = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const carfuel = await CarFuel.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarFuel = await CarFuel.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: carfuel,
      pagination: {
        totalCarFuel,
        currentPage: page,
        totalPages: Math.ceil(totalCarFuel / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = { addCarFuel, updateCarFuel, deleteCarFuel, getAllCarFuel };

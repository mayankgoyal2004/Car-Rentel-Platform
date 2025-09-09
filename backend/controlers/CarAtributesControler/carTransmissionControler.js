const CarTransmission = require("../../models/caratributes/carTransmissions");

const addCarTransmission = async (req, res) => {
  try {
    const { carTransmission } = req.body;

    if (!carTransmission) {
      return res
        .status(400)
        .json({ success: false, message: "carTransmission is required" });
    }
    const foundCarTransmission = await CarTransmission.find({ carTransmission });
    if (foundCarTransmission) {
      return res.status(404).json({ error: "carTransmission  already exist " });
    }
    const newCarTransmission = new CarTransmission({
      carTransmission,

      createdBy: req.user?._id,
    });

    await newCarTransmission.save();

    res.status(201).json({
      success: true,
      message: "cat transmission added successfully",
      data: newCarTransmission,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCarTransmission = async (req, res) => {
  const { id } = req.params;
  const { carTransmission, status } = req.body;

  const cartransmission = await CarTransmission.findById(id);
  try {
    if (!cartransmission) {
      return res
        .status(404)
        .json({ success: false, message: "cartransmission not found" });
    }
    cartransmission.carTransmission = carTransmission;
    cartransmission.status = status;

    await cartransmission.save();
    res.json({
      success: true,
      message: "cartransmission updated successfully",
      data: cartransmission,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCarTransmission = async (req, res) => {
  try {
    const { id } = req.params;

    const cartransmission = await CarTransmission.findById(id);
    if (!cartransmission) {
      return res
        .status(404)
        .json({ success: false, message: "cartransmission not found" });
    }

    await CarTransmission.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "cartransmission deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCarTransmission = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const carTransmission = await CarTransmission.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarTransmission = await CarTransmission.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: carTransmission,
      pagination: {
        totalCarTransmission,
        currentPage: page,
        totalPages: Math.ceil(totalCarTransmission / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = { addCarTransmission, updateCarTransmission, deleteCarTransmission, getAllCarTransmission };

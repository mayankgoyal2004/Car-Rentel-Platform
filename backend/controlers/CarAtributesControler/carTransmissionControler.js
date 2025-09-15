const CarTransmission = require("../../models/caratributes/carTransmissionsModel");

const addCarTransmission = async (req, res) => {
  try {
    let { carTransmission } = req.body;
    carTransmission = carTransmission?.trim();

    if (!carTransmission) {
      return res
        .status(400)
        .json({ success: false, message: "carTransmission is required" });
    }
    const foundCarTransmission = await CarTransmission.findOne({
      carTransmission,
      admin: req.user?.admin,
    });
    if (foundCarTransmission) {
      return res.status(404).json({ error: "carTransmission  already exist " });
    }
    const newCarTransmission = new CarTransmission({
      carTransmission,
      admin: req.user.admin,
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
  let { carTransmission, status } = req.body;
  carTransmission = carTransmission?.trim();

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
      filter.carTransmission = { $regex: search, $options: "i" };
    }
    const carTransmission = await CarTransmission.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarTransmission = await CarTransmission.countDocuments(filter);

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

const getAllActiveCarTransmission = async (req, res) => {
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
    const carTransmission = await CarTransmission.find({
      admin: adminId,
      status: true,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalcarTransmission = await CarTransmission.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carTransmission,
      pagination: {
        totalcarTransmission,
        currentPage: page,
        totalPages: Math.ceil(totalcarTransmission / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
module.exports = {
  addCarTransmission,
  updateCarTransmission,
  deleteCarTransmission,
  getAllCarTransmission,
  getAllActiveCarTransmission
};

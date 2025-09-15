const CarModel = require("../../models/caratributes/CarModelModel");

const addCarModel = async (req, res) => {
  try {
    const { carModel, carBrand_id } = req.body;

    if (!carModel) {
      return res
        .status(400)
        .json({ success: false, message: "carModel is required" });
    }
    const foundCarModel = await CarModel.findOne({
      carModel,
      carBrand_id,
      admin: req.user?.admin,
    });
    if (foundCarModel) {
      return res
        .status(400)
        .json({ error: "Car model already exists for this brand" });
    }
    const newModel = new CarModel({
      carModel,
      carBrand: carBrand_id,
      admin: req.user?.admin,
      createdBy: req.user?._id,
    });

    await newModel.save();

    res.status(201).json({
      success: true,
      message: "Car Model added successfully",
      data: newModel,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCarModel = async (req, res) => {
  const { id } = req.params;
  const { carModel, status, carBrand_id } = req.body;

  const carmodel = await CarModel.findById(id);
  try {
    if (!carmodel) {
      return res
        .status(404)
        .json({ success: false, message: "carmodel not found" });
    }
    carmodel.carModel = carModel;
    carmodel.status = status;
    carmodel.carBrand = carBrand_id;

    await carmodel.save();
    res.json({
      success: true,
      message: "carmodel updated successfully",
      data: carmodel,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCarModel = async (req, res) => {
  try {
    const { id } = req.params;

    const carmodel = await CarModel.findById(id);
    if (!carmodel) {
      return res
        .status(404)
        .json({ success: false, message: "carmodel not found" });
    }

    await CarModel.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "CarModel deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCarModel = async (req, res) => {
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
      filter.carModel = { $regex: search, $options: "i" };
    }

    const carmodel = await CarModel.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarModel = await CarModel.countDocuments(filter);

    res.json({
      success: true,
      data: carmodel,
      pagination: {
        totalCarModel,
        currentPage: page,
        totalPages: Math.ceil(totalCarModel / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getAllActiveCarModel = async (req, res) => {
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
    const carModel = await CarModel.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarModel = await CarModel.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carModel,
      pagination: {
        totalCarModel,
        currentPage: page,
        totalPages: Math.ceil(totalCarModel / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarModel,
  updateCarModel,
  deleteCarModel,
  getAllCarModel,
  getAllActiveCarModel,
};

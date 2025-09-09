const ExtraService = require("../models/extraServiceModel");

// Add Extra Service
const addExtraService = async (req, res) => {
  try {
    const { name, quantity, price, type, description } = req.body;

    if (!name || !quantity || !price || !type) {
      return res
        .status(400)
        .json({ success: false, message: "All required fields must be provided" });
    }

    const foundService = await ExtraService.findOne({
      name,
      type,
      createdBy: req.user?._id,
    });

    if (foundService) {
      return res
        .status(400)
        .json({ success: false, error: "Service with this name already exists" });
    }

    const newService = new ExtraService({
      name,
      quantity,
      price,
      type,
      description,
      createdBy: req.user?._id,
    });

    await newService.save();

    res.status(201).json({
      success: true,
      message: "Extra Service added successfully",
      data: newService,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Extra Service
const updateExtraService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, price, type, description, status } = req.body;

    const service = await ExtraService.findById(id);
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    if (name) service.name = name;
    if (quantity !== undefined) service.quantity = quantity;
    if (price !== undefined) service.price = price;
    if (type) service.type = type;
    if (description !== undefined) service.description = description;
    if (status !== undefined) service.status = status;

    await service.save();

    res.json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Extra Service
const deleteExtraService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await ExtraService.findById(id);
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    await ExtraService.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Services
const getAllExtraServices = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const services = await ExtraService.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalServices = await ExtraService.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: services,
      pagination: {
        totalServices,
        currentPage: page,
        totalPages: Math.ceil(totalServices / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addExtraService,
  updateExtraService,
  deleteExtraService,
  getAllExtraServices,
};

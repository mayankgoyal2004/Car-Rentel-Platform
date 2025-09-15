const CarFeatures = require("../../models/caratributes/carFeaturesModel");

// Add Car Feature
const addCarFeature = async (req, res) => {
  try {
    let { carFeature } = req.body;
    carFeature = carFeature?.trim();

    if (!carFeature) {
      return res
        .status(400)
        .json({ success: false, message: "carFeature is required" });
    }

    const foundFeature = await CarFeatures.findOne({
      carFeature,
      admin: req.user?.admin,
    });

    if (foundFeature) {
      return res
        .status(400)
        .json({ success: false, error: "carFeature already exists" });
    }

    const newFeature = new CarFeatures({
      carFeature,
      createdBy: req.user?._id,
      admin: req.user.admin,
    });

    await newFeature.save();

    res.status(201).json({
      success: true,
      message: "carFeature added successfully",
      data: newFeature,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Car Feature
const updateCarFeature = async (req, res) => {
  try {
    const { id } = req.params;
    let { carFeature, status } = req.body;
    carFeature = carFeature?.trim();

    const feature = await CarFeatures.findById(id);
    if (!feature) {
      return res
        .status(404)
        .json({ success: false, message: "carFeature not found" });
    }

    if (carFeature) feature.carFeature = carFeature;
    if (status !== undefined) feature.status = status;

    await feature.save();

    res.json({
      success: true,
      message: "carFeature updated successfully",
      data: feature,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Car Feature
const deleteCarFeature = async (req, res) => {
  try {
    const { id } = req.params;

    const feature = await CarFeatures.findById(id);
    if (!feature) {
      return res
        .status(404)
        .json({ success: false, message: "carFeature not found" });
    }

    await CarFeatures.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "carFeature deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Car Features
const getAllCarFeatures = async (req, res) => {
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
    const features = await CarFeatures.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarFeatures = await CarFeatures.countDocuments(filter);

    res.json({
      success: true,
      data: features,
      pagination: {
        totalCarFeatures,
        currentPage: page,
        totalPages: Math.ceil(totalCarFeatures / limit),
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

const getAllActiveCarFeatures = async (req, res) => {
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
    const feature = await CarFeatures.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalFeature = await CarFeatures.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: feature,
      pagination: {
        totalFeature,
        currentPage: page,
        totalPages: Math.ceil(totalFeature / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarFeature,
  updateCarFeature,
  deleteCarFeature,
  getAllCarFeatures,
  getAllActiveCarFeatures,
};

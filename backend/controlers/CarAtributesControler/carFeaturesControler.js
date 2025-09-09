const CarFeatures = require("../../models/caratributes/carFeaturesModel");

// Add Car Feature
const addCarFeature = async (req, res) => {
  try {
    const { carFeature } = req.body;

    if (!carFeature) {
      return res
        .status(400)
        .json({ success: false, message: "carFeature is required" });
    }

    const foundFeature = await CarFeatures.findOne({
      carFeature,
      createdBy: req.user?._id,
    });

    if (foundFeature) {
      return res
        .status(400)
        .json({ success: false, error: "carFeature already exists" });
    }

    const newFeature = new CarFeatures({
      carFeature,
      createdBy: req.user?._id,
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
    const { carFeature, status } = req.body;

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
    const { _id } = req.user;

    const features = await CarFeatures.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCarFeatures = await CarFeatures.countDocuments({ createdBy: _id });

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

module.exports = {
  addCarFeature,
  updateCarFeature,
  deleteCarFeature,
  getAllCarFeatures,
};

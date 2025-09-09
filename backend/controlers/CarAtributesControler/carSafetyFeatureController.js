const CarSafetyFeature = require("../../models/caratributes/carSafetyFeatureModel");

// Add Safety Feature
const addSafetyFeature = async (req, res) => {
  try {
    const { safetyFeature } = req.body;

    if (!safetyFeature) {
      return res
        .status(400)
        .json({ success: false, message: "safetyFeature is required" });
    }

    const foundFeature = await CarSafetyFeature.findOne({
      safetyFeature,
      createdBy: req.user?._id,
    });

    if (foundFeature) {
      return res
        .status(400)
        .json({ success: false, error: "safetyFeature already exists" });
    }

    const newFeature = new CarSafetyFeature({
      safetyFeature,
      createdBy: req.user?._id,
    });

    await newFeature.save();

    res.status(201).json({
      success: true,
      message: "safetyFeature added successfully",
      data: newFeature,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Safety Feature
const updateSafetyFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const { safetyFeature, status } = req.body;

    const feature = await CarSafetyFeature.findById(id);
    if (!feature) {
      return res
        .status(404)
        .json({ success: false, message: "safetyFeature not found" });
    }

    if (safetyFeature) feature.safetyFeature = safetyFeature;
    if (status !== undefined) feature.status = status;

    await feature.save();

    res.json({
      success: true,
      message: "safetyFeature updated successfully",
      data: feature,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Safety Feature
const deleteSafetyFeature = async (req, res) => {
  try {
    const { id } = req.params;

    const feature = await CarSafetyFeature.findById(id);
    if (!feature) {
      return res
        .status(404)
        .json({ success: false, message: "safetyFeature not found" });
    }

    await CarSafetyFeature.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "safetyFeature deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Safety Features
const getAllSafetyFeatures = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const features = await CarSafetyFeature.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalSafetyFeatures = await CarSafetyFeature.countDocuments({
      createdBy: _id,
    });

    res.json({
      success: true,
      data: features,
      pagination: {
        totalSafetyFeatures,
        currentPage: page,
        totalPages: Math.ceil(totalSafetyFeatures / limit),
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
  addSafetyFeature,
  updateSafetyFeature,
  deleteSafetyFeature,
  getAllSafetyFeatures,
};

const CarSafetyFeature = require("../../models/caratributes/carSafetyFeatureModel");

// Add Safety Feature
const addSafetyFeature = async (req, res) => {
  try {
    let { safetyFeature } = req.body;
    safetyFeature = safetyFeature?.trim();
    if (!safetyFeature) {
      return res
        .status(400)
        .json({ success: false, message: "safetyFeature is required" });
    }

    const foundFeature = await CarSafetyFeature.findOne({
      safetyFeature,
      admin: req.user?.admin,
    });

    if (foundFeature) {
      return res
        .status(400)
        .json({ success: false, error: "safetyFeature already exists" });
    }

    const newFeature = new CarSafetyFeature({
      safetyFeature,
      createdBy: req.user?._id,
      admin: req.user.admin,
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
    let { safetyFeature, status } = req.body;
    safetyFeature = safetyFeature?.trim();

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
      filter.safetyFeature = { $regex: search, $options: "i" };
    }
    const features = await CarSafetyFeature.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalSafetyFeatures = await CarSafetyFeature.countDocuments(filter);

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

const getAllActiveSafetyFeatures = async (req, res) => {
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
    const safety = await CarSafetyFeature.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalSafetyFeatures = await CarSafetyFeature.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: safety,
      pagination: {
        totalSafetyFeatures,
        currentPage: page,
        totalPages: Math.ceil(totalSafetyFeatures / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addSafetyFeature,
  updateSafetyFeature,
  deleteSafetyFeature,
  getAllSafetyFeatures,
  getAllActiveSafetyFeatures,
};

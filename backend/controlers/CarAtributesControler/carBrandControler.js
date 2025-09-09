const CarBrand = require("../../models/caratributes/carBrandModel");

const addCarBrand = async (req, res) => {
  try {
    const { brandName } = req.body;

    if (!brandName) {
      return res
        .status(400)
        .json({ success: false, message: "brandName is required" });
    }
    const foundbrandName = await CarBrand.find({ brandName });
    if (foundbrandName) {
      return res.status(404).json({ error: "brandName already exist found" });
    }
    const newBrand = new CarBrand({
      brandName,

      createdBy: req.user?._id,
    });

    await newBrand.save();

    res.status(201).json({
      success: true,
      message: "brandName added successfully",
      data: newBrand,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCarBrand = async (req, res) => {
  const { id } = req.params;
  const { brandName, status } = req.body;

  const brand = await CarBrand.findById(id);
  try {
    if (!brand) {
      return res
        .status(404)
        .json({ success: false, message: "brand not found" });
    }
    brand.brandName = brandName;
    brand.status = status;

    await brand.save();
    res.json({
      success: true,
      message: "brand updated successfully",
      data: brand,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await CarBrand.findById(id);
    if (!brand) {
      return res
        .status(404)
        .json({ success: false, message: "brand not found" });
    }

    await CarBrand.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "brand deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllBrand = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const brand = await CarBrand.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalBrand = await CarBrand.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: brand,
      pagination: {
        totalBrand,
        currentPage: page,
        totalPages: Math.ceil(totalBrand / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = { addCarBrand, updateCarBrand, deleteBrand, getAllBrand };


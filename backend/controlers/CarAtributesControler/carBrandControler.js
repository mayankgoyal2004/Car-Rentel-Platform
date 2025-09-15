const CarBrand = require("../../models/caratributes/carBrandModel");

const addCarBrand = async (req, res) => {
  try {
    const { brandName } = req.body;

    if (!brandName) {
      return res
        .status(400)
        .json({ success: false, message: "brandName is required" });
    }
    const foundbrandName = await CarBrand.findOne({
      brandName,
      admin: req.user?.admin,
    });
    if (foundbrandName) {
      return res.status(404).json({ error: "brandName already exist found" });
    }
    const image = req.file ? req.file.path.replace(/\\/g, "/") : null;
    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "image is required" });
    }

    const newBrand = new CarBrand({
      brandName,
      image,
      createdBy: req.user?._id,
      admin: req.user.admin,
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
    if (req.file) brand.image = req.file.path.replace(/\\/g, "/");
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
      filter.brandName = { $regex: search, $options: "i" };
    }

    const brand = await CarBrand.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalBrand = await CarBrand.countDocuments(filter);

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
const getAllActiveCarBrands = async (req, res) => {
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
    const carBrand = await CarBrand.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCarBrand = await CarBrand.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: carBrand,
      pagination: {
        totalCarBrand,
        currentPage: page,
        totalPages: Math.ceil(totalCarBrand / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCarBrand,
  updateCarBrand,
  deleteBrand,
  getAllBrand,
  getAllActiveCarBrands,
};

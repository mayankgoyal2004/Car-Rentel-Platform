const Country = require("../models/countryModel");

const addCountry = async (req, res) => {
  try {
    let { countryName, countryCode } = req.body;
    countryName = countryName?.trim();
    if (!countryName) {
      return res
        .status(400)
        .json({ success: false, message: "countryName is required" });
    }
    countryCode = countryCode?.trim();

    if (!countryCode) {
      return res
        .status(400)
        .json({ success: false, message: "countryCode is required" });
    }
    const existingCountry = await Country.findOne({ countryName });
    if (existingCountry) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Country already exists",
      });
    }

    const country = new Country({
      countryName,
      countryCode,
      createdBy: req.user._id,
      admin: req.user.admin,
    });

    await country.save();

    res.status(201).json({
      success: true,
      message: "country added successfully",
      data: country,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCountry = async (req, res) => {
  const { id } = req.params;
  let { countryName, countryCode, status } = req.body;
  countryName = countryName?.trim();

  if (!id || !countryName) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Both Id and countryName are required",
    });
  }
  if (status === undefined || status === null) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Status is required",
    });
  }

  const country = await Country.findById(id);
  try {
    if (!country) {
      return res
        .status(404)
        .json({ success: false, message: "country not found" });
    }
    country.countryName = countryName;
    country.countryCode = countryCode;
    country.status = status;

    await country.save();
    res.json({
      success: true,
      message: "country updated successfully",
      data: country,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const country = await Country.findById(id);
    if (!country) {
      return res
        .status(404)
        .json({ success: false, message: "country not found" });
    }

    await Country.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "country deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCountry = async (req, res) => {
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
      filter.countryName = { $regex: search, $options: "i" };
    }
    const country = await Country.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCountry = await Country.countDocuments(filter);

    res.json({
      success: true,
      data: country,
      pagination: {
        totalCountry,
        currentPage: page,
        totalPages: Math.ceil(totalCountry / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
const getAllActiveCountry = async (req, res) => {
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
    const country = await Country.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCountry= await Country.countDocuments({ admin: adminId, status: true });

    res.json({
      success: true,
      data: country,
      pagination: {
        totalCountry,
        currentPage: page,
        totalPages: Math.ceil(totalCountry / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = { addCountry, deleteCountry, getAllCountry, updateCountry , getAllActiveCountry };

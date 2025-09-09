const Country = require("../models/countryModel");

const addCountry = async (req, res) => {
  try {
    const { countryName, countryCode } = req.body;

    if (!countryName) {
      return res
        .status(400)
        .json({ success: false, message: "countryName is required" });
    }
    if (!countryCode) {
      return res
        .status(400)
        .json({ success: false, message: "countryCode is required" });
    }

    const country = new Country({
      countryName,
      countryCode,
      createdBy: req.user?._id,
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
  const { countryName, countryCode, status } = req.body;

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
    const { _id } = req.user;

    const country = await Country.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCountry = await Country.countDocuments({ createdBy: _id });

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

module.exports = { addCountry, deleteCountry, getAllCountry, updateCountry };

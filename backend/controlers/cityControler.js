const State = require("../models/stateModel");
const Country = require("../models/countryModel");
const City = require("../models/citymodels");

const addCity = async (req, res) => {
  try {
    let { cityName, country, state } = req.body;
    cityName = cityName?.trim();

    if (!cityName) {
      return res
        .status(400)
        .json({ success: false, message: "cityName is required" });
    }
    if (!country) {
      return res
        .status(400)
        .json({ success: false, message: "country is required" });
    }

    const foundCountry = await Country.findById(country);
    if (!foundCountry) {
      return res.status(404).json({ error: "Country not found" });
    }

    const stateFound = await State.findById(state);
    if (!stateFound) {
      return res.status(404).json({ error: "State not found" });
    }
    const existingCity = await City.findOne({ cityName });
    if (existingCity) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "City already exists",
      });
    }
    const newCity = new City({
      cityName,
      country,
      state,
      createdBy: req.user?._id,
      admin: req.user?.admin,
    });

    await newCity.save();

    res.status(201).json({
      success: true,
      message: "city added successfully",
      data: newCity,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCity = async (req, res) => {
  const { id } = req.params;
  let { cityName, country, state, status } = req.body;
  cityName = cityName?.trim();

  const city = await City.findById(id);
  try {
    if (!city) {
      return res
        .status(404)
        .json({ success: false, message: "city not found" });
    }
    city.stateName = cityName;
    city.state = state;
    city.country = country;
    city.status = status;

    await city.save();
    res.json({
      success: true,
      message: "city updated successfully",
      data: city,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;

    const city = await City.findById(id);
    if (!city) {
      return res
        .status(404)
        .json({ success: false, message: "city not found" });
    }

    await City.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "city deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCity = async (req, res) => {
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
      filter.cityName = { $regex: search, $options: "i" };
    }
    const city = await City.find(filter)
      .populate("country", "countryName")
      .populate("state", "stateName")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCity = await City.countDocuments(filter);

    res.json({
      success: true,
      data: city,
      pagination: {
        totalCity,
        currentPage: page,
        totalPages: Math.ceil(totalCity / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getCitiesByState = async (req, res) => {
  try {
    const { stateId } = req.params;
    const cities = await City.find({
      state: stateId,
      status: true,
      admin: req.user.admin,
    });

    res.json({ success: true, data: cities });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllActiveCity = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const city = await City.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalcity = await City.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: city,
      pagination: {
        totalcity,
        currentPage: page,
        totalPages: Math.ceil(totalcity / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getAllactiveCityHomepage = async (req, res) => {
  try {
    const city = await City.find({ status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalcity = await City.countDocuments({
      status: true,
    });

    res.json({
      success: true,
      data: city,
      pagination: {
        totalcity,
        currentPage: page,
        totalPages: Math.ceil(totalcity / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addCity,
  deleteCity,
  getAllCity,
  updateCity,
  getCitiesByState,
  getAllActiveCity,
  getAllactiveCityHomepage
};

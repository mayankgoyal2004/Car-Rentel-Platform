const State = require("../models/stateModel");
const Country = require("../models/countryModel");
const City = require("../models/citymodels");

const addCity = async (req, res) => {
  try {
    const { cityName, country_id, state_id } = req.body;

    if (!cityName) {
      return res
        .status(400)
        .json({ success: false, message: "cityName is required" });
        
    }
    if (!country_id) {
  return res.status(400).json({ success: false, message: "country_id is required" });
}

const foundCountry = await Country.findById(country_id);
if (!foundCountry) {
  return res.status(404).json({ error: "Country not found" });
}
    
    const stateFound = await State.findById(state_id);
    if (!stateFound) {
      return res.status(404).json({ error: "State not found" });
    }
    const newCity = new City({
      cityName,
      country: country_id,
      state: state_id,
      createdBy: req.user?._id,
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
  const { cityName, country_id, state_id, status } = req.body;

  const city = await City.findById(id);
  try {
    if (!city) {
      return res
        .status(404)
        .json({ success: false, message: "city not found" });
    }
    city.stateName = cityName;
    city.state = state_id;
    city.country = country_id;
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
    const { _id } = req.user;

    const city = await City.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCity = await City.countDocuments({ createdBy: _id });

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
      createdBy: req.user._id,
    }).populate("State", "stateName");

    res.json({ success: true, data: cities });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addCity, deleteCity, getAllCity, updateCity , getCitiesByState};

const State = require("../models/stateModel");
const Country = require("../models/countryModel");

const addState = async (req, res) => {
  try {
    const { stateName, country_id } = req.body;

    if (!stateName) {
      return res
        .status(400)
        .json({ success: false, message: "stateName is required" });
    }
    const foundCountry = await Country.findById(country_id);
    if (!foundCountry) {
      return res.status(404).json({ error: "Country not found" });
    }
    const newState = new State({
      stateName,
      country: country_id,
      createdBy: req.user?._id,
    });

    await newState.save();

    res.status(201).json({
      success: true,
      message: "state added successfully",
      data: newState,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateState = async (req, res) => {
  const { id } = req.params;
  const { stateName, country_id, status } = req.body;

  const state = await State.findById(id);
  try {
    if (!state) {
      return res
        .status(404)
        .json({ success: false, message: "state not found" });
    }
    state.stateName = stateName;
    state.country = country_id;
    state.status = status;

    await state.save();
    res.json({
      success: true,
      message: "state updated successfully",
      data: state,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteState = async (req, res) => {
  try {
    const { id } = req.params;

    const state = await State.findById(id);
    if (!state) {
      return res
        .status(404)
        .json({ success: false, message: "state not found" });
    }

    await State.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "state deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllState = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const state = await State.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalState = await State.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: state,
      pagination: {
        totalState,
        currentPage: page,
        totalPages: Math.ceil(totalState / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};


const getStatesByCountry = async (req, res) => {
  try {
    const { countryId } = req.params;
    const states = await State.find({ country: countryId, status: true ,createdBy : req.user._id}).populate("country", "countryName");

    res.json({ success: true, data: states });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


module.exports = { addState, deleteState, getAllState, updateState , getStatesByCountry};

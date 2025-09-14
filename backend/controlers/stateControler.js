const State = require("../models/stateModel");
const Country = require("../models/countryModel");

const addState = async (req, res) => {
  try {
    let { stateName, country } = req.body;
    stateName = stateName?.trim();
    if (!stateName) {
      return res
        .status(400)
        .json({ success: false, message: "stateName is required" });
    }
    const foundCountry = await Country.findById(country);
    if (!foundCountry) {
      return res.status(404).json({ error: "Country not found" });
    }
    const existingState = await Country.findOne({ stateName });
    if (existingState) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "State already exists",
      });
    }
    const newState = new State({
      stateName,
      country,
      createdBy: req.user?._id,
      admin: req.user?.admin,
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
  let { stateName, country, status } = req.body;
  stateName = stateName?.trim();

  const state = await State.findById(id);
  try {
    if (!state) {
      return res
        .status(404)
        .json({ success: false, message: "state not found" });
    }
    state.stateName = stateName;
    state.country = country;
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
      filter.stateName = { $regex: search, $options: "i" };
    }
    const state = await State.find(filter).populate("country","countryName")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalState = await State.countDocuments(filter);

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
const getAllActiveState = async (req, res) => {
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
    const state = await State.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalState = await State.countDocuments({
      admin: adminId,
      status: true,
    });

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
    const states = await State.find({
      country: countryId,
      status: true,
      admin: req.user.admin,
    }).populate("country", "countryName");

    res.json({ success: true, data: states });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  addState,
  deleteState,
  getAllState,
  updateState,
  getStatesByCountry,
  getAllActiveState,
};

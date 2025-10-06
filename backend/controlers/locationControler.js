const { City } = require("../models/citymodels");
const Location = require("../models/locationModel");
const CountrySetting = require("../models/countrySettingModel");

const addLocation = async (req, res) => {
  try {
    const {
      title,
      email,
      contact,
      location,
      country_id,
      state_id,
      city_id,
      pincode,
      workingDays,
    } = req.body;
    console.log("req.file:", req.file);

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "title is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    }
    if (!contact) {
      return res
        .status(400)
        .json({ success: false, message: "phone is required" });
    }
    if (!location) {
      return res
        .status(400)
        .json({ success: false, message: "location is required" });
    }
    if (!country_id) {
      return res
        .status(400)
        .json({ success: false, message: "country is required" });
    }
    if (!state_id) {
      return res
        .status(400)
        .json({ success: false, message: "State is required" });
    }
    if (!city_id) {
      return res
        .status(400)
        .json({ success: false, message: "city is required" });
    }

    const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;

    if (!imagePath) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }
    let parsedWorkingDays;
    try {
      parsedWorkingDays =
        typeof workingDays === "string" ? JSON.parse(workingDays) : workingDays;
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid workingDays format" });
    }

    const newLocation = new Location({
      title,
      email,
      contact,
      location,
      country: country_id,
      state: state_id,
      image: imagePath,
      city: city_id,
      pincode,
      workingDays: parsedWorkingDays,
      createdBy: req.user?._id,
      admin: req.user?.admin,
    });

    await newLocation.save();

    res.status(201).json({
      success: true,
      message: "Location added successfully",
      data: newLocation,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    const {
      title,
      email,
      contact,
      location,
      country_id,
      state_id,
      city_id,
      pincode,
      workingDays,
      status,
    } = req.body;
    const { id } = req.params;

    const updateLocation = await Location.findById(id);

    if (!updateLocation) {
      return res
        .status(404)
        .json({ success: false, message: "location not found" });
    }

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "title is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    }
    if (!contact) {
      return res
        .status(400)
        .json({ success: false, message: "phone is required" });
    }
    if (!location) {
      return res
        .status(400)
        .json({ success: false, message: "location is required" });
    }
    if (!country_id) {
      return res
        .status(400)
        .json({ success: false, message: "country is required" });
    }
    if (!state_id) {
      return res
        .status(400)
        .json({ success: false, message: "State is required" });
    }
    if (!city_id) {
      return res
        .status(400)
        .json({ success: false, message: "city is required" });
    }

    if (req.file) {
      updateLocation.image = req.file.path.replace(/\\/g, "/");
    }
    let parsedWorkingDays;
    try {
      parsedWorkingDays =
        typeof workingDays === "string" ? JSON.parse(workingDays) : workingDays;
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid workingDays format" });
    }

    updateLocation.title = title;
    updateLocation.contact = contact;
    updateLocation.email = email;
    updateLocation.country = country_id;
    updateLocation.state = state_id;
    updateLocation.city = city_id;
    updateLocation.workingDays = parsedWorkingDays;
    updateLocation.status = status;
    updateLocation.location = location;

    await updateLocation.save();

    res.status(201).json({
      success: true,
      message: "Location updated successfully",
      data: updateLocation,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (!location) {
      return res
        .status(404)
        .json({ success: false, message: "location not found" });
    }
    await Location.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "state deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllLocation = async (req, res) => {
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
      filter.title = { $regex: search, $options: "i" };
    }

    const location = await Location.find(filter)
      .populate("city")
      .populate("country")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalLocation = await Location.countDocuments(filter);

    res.json({
      success: true,
      data: location,
      pagination: {
        totalLocation,
        currentPage: page,
        totalPages: Math.ceil(totalLocation / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
const getAllActiveLocation = async (req, res) => {
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
    const location = await Location.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalLocation = await Location.countDocuments({
      admin: adminId,
      status: true,
    });

    res.json({
      success: true,
      data: location,
      pagination: {
        totalLocation,
        currentPage: page,
        totalPages: Math.ceil(totalLocation / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const addLocationSetting = async (req, res) => {
  try {
    let { countryName } = req.body;
    countryName = countryName?.trim();
    if (!countryName) {
      return res
        .status(400)
        .json({ success: false, message: "countryName is required" });
    }

    const existingCountry = await CountrySetting.findOne({ countryName });
    if (existingCountry) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Country already exists",
      });
    }

    const country = new CountrySetting({
      countryName,
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

const updateLocationSetting = async (req, res) => {
  const { id } = req.params;
  let { countryName, status } = req.body;
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

  const country = await CountrySetting.findById(id);
  try {
    if (!country) {
      return res
        .status(404)
        .json({ success: false, message: "country not found" });
    }
    country.countryName = countryName;
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
const deleteLocationSetting = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const country = await CountrySetting.findById(id);
    if (!country) {
      return res
        .status(404)
        .json({ success: false, message: "country not found" });
    }

    await CountrySetting.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "country deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllLocationSetting = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const search = req.query.search || "";

    let filter = {};
    if (search) {
      filter.countryName = { $regex: search, $options: "i" };
    }
    const country = await CountrySetting.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCountry = await CountrySetting.countDocuments(filter);

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
const getActiveLocationSetting = async (req, res) => {
  try {
    const country = await CountrySetting.find({ status: true }).sort({
      createdAt: -1,
    });
    res.json({
      success: true,
      data: country,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addLocation,
  updateLocation,
  deleteLocation,
  getAllLocation,
  getAllActiveLocation,
  addLocationSetting,
  updateLocationSetting,
  deleteLocationSetting,
  getAllLocationSetting,
  getActiveLocationSetting,
};

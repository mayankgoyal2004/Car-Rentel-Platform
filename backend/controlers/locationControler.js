const { findById } = require("../models/citymodels");
const Location = require("../models/locationModel");

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

    const imagePath = req.files?.image
      ? req.files.path.replace(/\\/g, "/")
      : null;
    // if (!imagePath)
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Image is required" });
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
      workingDays,
      createdBy: req.user?._id,
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

    if (req.files?.image) {
      updateLocation.image = req.files.path.replace(/\\/g, "/");
    }

    updateLocation.title = title;
    updateLocation.image = imagePath;
    updateLocation.contact = contact;
    updateLocation.email = email;
    updateLocation.country = country_id;
    updateLocation.state = state_id;
    updateLocation.city = city_id;
    updateLocation.workingDays = workingDays;
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
    const location = await findById(id);
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

module.exports = { addLocation, updateLocation, deleteLocation };

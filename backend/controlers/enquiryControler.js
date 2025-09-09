const Enquiry = require("../models/enquiryModel");
const Car = require("../models/CarModule");

const addEnquiry = async (req, res) => {
  try {
    const { car_id, message, phoneNumber, name } = req.body;

    if (!car_id || !message || !phoneNumber || !customer_id || !name) {
      return res.status(404).json({ message: "all fields are required" });
    }

    const newEnquiry = new Enquiry({
      car: car_id,
      message,
      phoneNumber,
      customer: customer_id,
      name,
    });

    await newEnquiry.save();
    res.status(201).json({
      success: true,
      message: "enquiry send successfully",
      data: newEnquiry,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getallEnquiry = async (req, res) => {
  try {
    const { _id } = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const cars = await Car.find({ createdBy: _id }).select("_id");
    const carIds = cars.map((c) => c._id);
    const enquiry = await Enquiry.find({ car: { $in: carIds } })
      .populate("car")
      .populate("customer")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const deleteEnquiry = async (req, res) => {
  const { id } = req.params;

  const existingEnquiry = await Enquiry.findById(id);
  if (!existingEnquiry) {
    return res
      .status(400)
      .json({ success: false, message: "Delete ID is required" });
  }
  await Enquiry.deleteOne({ _id: id });
};


module.exports = {
    addEnquiry, getallEnquiry,deleteEnquiry
}
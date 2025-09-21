const Enquiry = require("../models/enquiryModel");
const Car = require("../models/CarModule");
const customer = require("../models/customerModel")

const addEnquiry = async (req, res) => {
  try {
    const { id } = req.params; // carId
    const {message, phone, name, email } = req.body;

    // find customer by user id
    const Customer = await customer.findOne({ userId: req.user._id });
    if (!Customer) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    if (!id || !message || !phone || !name) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newEnquiry = new Enquiry({
       car: id,
      message,
      phoneNumber: phone,
      name,
      email, // ✅ add email
      customer: Customer._id,
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry sent successfully",
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
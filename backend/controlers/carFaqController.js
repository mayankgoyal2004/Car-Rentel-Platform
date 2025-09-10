const CarFaq = require("../models/carFaqModel");
const Car = require("../models/CarModule");
const faqModel = require("../models/faqModel");
const addCarFaq = async (req, res) => {
  try {
    const { id } = req.params;

    const { question, answer } = req.body;

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    if (!question || !answer) {
      return res.status(400).json({
        success: false,
        message: "Car, Question, and Answer are required",
      });
    }

    const faq = new CarFaq({
      question,
      answer,
      createdBy: req.user?._id,
    });

    await faq.save();
    car.carFaq.push(faq._id);
    await car.save();
    res.status(201).json({
      success: true,
      message: "FAQ added successfully",
      data: faq,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getCarFaqs = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findById(id).populate("carFaq");

    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({
      success: true,
      data: car.carFaq,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const faq = await CarFaq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ success: false, message: "faq not found" });
    }
    const car = await Car.findOne({ carFaq: faq._id });
    if (car) {
      car.carFaq = car.carFaq.filter(
        (d) => d.toString() !== faq._id.toString()
      );
      await car.save();
    }

    // Delete the damage document
    await CarFaq.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Faq deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


const editFaq = async (req, res) => {
  try {
    const { id } = req.params; // damage ID
    const { question, answer} = req.body;

    // Find the damage
    const faq = await CarFaq.findById(id);
    if (!faq) {
      return res.status(404).json({ success: false, message: "faq not found" });
    }

    if (question) faq.question = question;
    if (answer) faq.answer = answer;


    await faq.save();

    res.status(200).json({ success: true, message: "faq updated successfully", data: faq });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
module.exports = { addCarFaq, getCarFaqs, deleteFaq , editFaq };

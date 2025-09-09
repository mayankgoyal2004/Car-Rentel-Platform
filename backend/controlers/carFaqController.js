const CarFaq = require("../models/carFaqModel");

const addCarFaq = async (req, res) => {
  try {
    const { carId, question, answer } = req.body;

    if (!carId || !question || !answer) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Car, Question, and Answer are required",
        });
    }

    const faq = new CarFaq({
      car: carId,
      question,
      answer,
      createdBy: req.user?._id,
    });

    await faq.save();

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
    const { carId } = req.params;

    const carFaqs = await CarFaq.find({ car: carId });

    res.status(200).json({ success: true, data: carFaqs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addCarFaq, getCarFaqs };

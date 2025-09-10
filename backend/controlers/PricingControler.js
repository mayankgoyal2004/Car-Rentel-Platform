const Pricing = require("../models/PricingModel");
const Car = require("../models/CarModule");

const updateCarPricing = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      daily,
      weekly,
      monthly,
      yearly,
      baseKilometers,
      unlimitedKilometers,
      extraKilometerPrice,

      seasonal,
      insurance, // array of { name, price, benefits }
    } = req.body;

    // validate required fields
    if (!baseKilometers || !extraKilometerPrice) {
      return res
        .status(400)
        .json({ success: false, message: "Base km & Extra km price required" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    const pricing = new Pricing({
      prices: { daily, weekly, monthly, yearly },
      baseKilometers,
      unlimitedKilometers,
      extraKilometerPrice,
      unlimitedKilometers,
      seasonal,
      insurance,
    });
    await pricing.save();
    car.Pricing = pricing._id;
    await car.save();

    res.status(200).json({
      success: true,
      message: "Car pricing updated successfully",
      pricing,
    });
  } catch (error) {
    console.error("Update Car Pricing Error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating pricing",
      error: error.message,
    });
  }
};

const editCarPricing = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      daily,
      weekly,
      monthly,
      yearly,
      baseKilometers,
      unlimitedKilometers,
      extraKilometerPrice,
      seasonal,
      insurance,
    } = req.body;

  
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car or pricing not found" });
    }
    const updateData = {
      prices: { daily, weekly, monthly, yearly },
      baseKilometers,
      unlimitedKilometers,
      extraKilometerPrice,
      seasonal,
      insurance,
    };

    const updatedPricing = await Pricing.findByIdAndUpdate(car.Pricing, updateData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Car pricing updated successfully",
      pricing: updatedPricing,
    });
  } catch (error) {
    console.error("Edit Car Pricing Error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating car pricing",
      error: error.message,
    });
  }
};



module.exports = { updateCarPricing ,editCarPricing};

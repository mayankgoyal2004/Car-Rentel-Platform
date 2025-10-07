const Pricing = require("../models/PricingModel");
const Car = require("../models/CarModule");

const updateCarPricing = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      prices,
      baseKilometers,
      extraKilometerPrice,
      unlimitedKilometers,
      seasonal,
      insurance,
    } = req.body;

    if (!baseKilometers || !extraKilometerPrice) {
      return res.status(400).json({
        success: false,
        message: "Base km & Extra km price required",
      });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    let pricing;
    if (car.pricing) {
      pricing = await Pricing.findByIdAndUpdate(
        car.pricing,
        {
          prices,
          baseKilometers,
          unlimitedKilometers,
          extraKilometerPrice,
          insurance,
          seasonal,
        },
        { new: true }
      );
    } else {
      pricing = new Pricing({
        prices,
        baseKilometers,
        unlimitedKilometers,
        extraKilometerPrice,
        insurance,
        seasonal,
      });
      await pricing.save();

      car.pricing = pricing._id;
      await car.save();
    }

    const populatedCar = await Car.findById(id).populate("pricing");

    res.status(200).json({
      success: true,
      message: "Car pricing updated successfully",
      pricing: populatedCar.pricing,
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
    } = req.body;

    const car = await Car.findById(id);
    if (!car || !car.pricing) {
      return res
        .status(404)
        .json({ success: false, message: "Car or pricing not found" });
    }

    const updateData = {
      prices: { daily, weekly, monthly, yearly },
      baseKilometers,
      unlimitedKilometers,
      extraKilometerPrice,
    };

    const updatedPricing = await Pricing.findByIdAndUpdate(
      car.pricing,
      updateData,
      { new: true }
    );

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

module.exports = { updateCarPricing, editCarPricing };

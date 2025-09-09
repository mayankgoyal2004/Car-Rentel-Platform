const Pricing = require("../models/PricingModel");

const addPricing = async (req, res) => {
  try {
    let {
      dailyPrice,
      weeklyPrice,
      monthlyPrice,
      yearlyPrice,
      baseKilometers,
      unlimitedKilometers,
      extraKilometerPrice,
      seasonal_id,
      insurance,
    } = req.body;

    if (baseKilometers === undefined || extraKilometerPrice === undefined) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    if (insurance && typeof insurance === "string") {
      try {
        insurance = JSON.parse(insurance);
      } catch {
        return res
          .status(400)
          .json({ success: false, message: "Invalid insurance format" });
      }
    }

    const newPricing = new Pricing({
      prices: {
        daily: dailyPrice,
        weekly: weeklyPrice,
        monthly: monthlyPrice,
        yearly: yearlyPrice,
      },
      baseKilometers,
      unlimitedKilometers: !!unlimitedKilometers,
      extraKilometerPrice,
      seasonal: seasonal_id,
      insurance,
    });

    await newPricing.save();

    res.status(201).json({
      success: true,
      message: "Pricing added successfully",
      data: newPricing,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  addPricing,
};

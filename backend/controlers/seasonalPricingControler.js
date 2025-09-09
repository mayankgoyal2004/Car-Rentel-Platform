const SeasonalPricing = require("../models/seasonalPricingModel");

const addSeasonalPricing = async (req, res) => {
  try {
    const {
      seasonName,
      startDate,
      endDate,
      dailyRate,
      weeklyRate,
      monthlyRate,
      lateFees,
    } = req.body;

    if (
      !seasonName ||
      !startDate ||
      !endDate ||
      !dailyRate ||
      !weeklyRate ||
      !monthlyRate ||
      !lateFees
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newSeason = new SeasonalPricing({
      seasonName,
      startDate,
      endDate,
      dailyRate,
      weeklyRate,
      monthlyRate,
      lateFees,
      createdBy: req.user?._id,
    });

    await newSeason.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Seasonal Pricing added successfully",
        data: newSeason,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateSeasonalPricing = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      seasonName,
      startDate,
      endDate,
      dailyRate,
      weeklyRate,
      monthlyRate,
      lateFees,
      status,
    } = req.body;

    const season = await SeasonalPricing.findById(id);
    if (!season) {
      return res
        .status(404)
        .json({ success: false, message: "Seasonal Pricing not found" });
    }

    season.seasonName = seasonName;
    season.startDate = startDate;
    season.endDate = endDate;
    season.dailyRate = dailyRate;
    season.weeklyRate = weeklyRate;
    season.monthlyRate = monthlyRate;
    season.lateFees = lateFees;
    if (status !== undefined) season.status = status;

    await season.save();

    res.json({
      success: true,
      message: "Seasonal Pricing updated successfully",
      data: season,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteSeasonalPricing = async (req, res) => {
  try {
    const { id } = req.params;
    const season = await SeasonalPricing.findById(id);
    if (!season) {
      return res
        .status(404)
        .json({ success: false, message: "Seasonal Pricing not found" });
    }

    await SeasonalPricing.deleteOne({ _id: id });
    res.json({
      success: true,
      message: "Seasonal Pricing deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllSeasonalPricing = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const seasonalPricing = await SeasonalPricing.find({
      createdBy: req.user._id,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await SeasonalPricing.countDocuments({
      createdBy: req.user._id,
    });

    res.json({
      success: true,
      data: seasonalPricing,
      pagination: {
        total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = {
  addSeasonalPricing,
  updateSeasonalPricing,
  deleteSeasonalPricing,
  getAllSeasonalPricing,
};

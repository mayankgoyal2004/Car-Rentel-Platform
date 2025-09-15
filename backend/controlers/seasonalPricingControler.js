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
      admin: req.user.admin,
    });

    await newSeason.save();

    res.status(201).json({
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
    if (status === undefined || status === null) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Status is required",
      });
    }

    season.seasonName = seasonName;
    season.startDate = startDate;
    season.endDate = endDate;
    season.dailyRate = dailyRate;
    season.weeklyRate = weeklyRate;
    season.monthlyRate = monthlyRate;
    season.lateFees = lateFees;
    season.status = status;

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
      filter.seasonName = { $regex: search, $options: "i" };
    }
    const seasonalPricing = await SeasonalPricing.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await SeasonalPricing.countDocuments(filter);

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

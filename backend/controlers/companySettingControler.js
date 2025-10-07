const CompanySetting = require("../models/CompanySettingModel");

const addCompanySetting = async (req, res) => {
  try {
    const {
      organizationName,
      ownerName,
      email,
      phone,
      addressLine,
      country,
      state,
      city,
      postalCode,
    } = req.body;

    if (!organizationName || !ownerName || !email || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields missing" });
    }

    const profileData = {
      organizationName,
      ownerName,
      email,
      phone,
      addressLine,
      country,
      state,
      city,
      postalCode,
    };

    if (req.file) {
      profileData.profilePhoto = req.file
        ? req.file.path.replace(/\\/g, "/")
        : null;
    }

    const profile = await CompanySetting.findOneAndUpdate({}, profileData, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });

    res.json({ success: true, data: profile });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getCompanySetting = async (req, res) => {
  try {
    const profile = await CompanySetting.findOne({});
    res.json({ success: true, data: profile || null });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addCompanySetting, getCompanySetting };

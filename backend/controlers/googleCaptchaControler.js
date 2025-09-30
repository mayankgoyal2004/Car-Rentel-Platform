const RecaptchaSetting = require("../models/googleCaptchaModel");

const getCaptchaSetting = async (req, res) => {
  try {
    const setting = await RecaptchaSetting.findOne({});
    res.status(200).json({ success: true, data: setting });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getCaptchaFrontend = async (req, res) => {
  try {
    const setting = await RecaptchaSetting.findOne({});
    if (!setting)
      return res.json({ success: true, data: { status: false, siteKey: "" } });
    res.json({
      success: true,
      data: {
        status: setting.status,
        siteKey: setting.siteKey,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCaptchaSetting = async (req, res) => {
  try {
    const { siteKey, secretKey, status } = req.body;

    let setting = await RecaptchaSetting.findOne({});

    if (!setting) {
      setting = new RecaptchaSetting({
        siteKey,
        secretKey,
        status,
      });
    } else {
      setting.siteKey = siteKey ?? setting.siteKey;
      setting.secretKey = secretKey ?? setting.secretKey;
      setting.status = typeof status === "boolean" ? status : setting.status;
    }

    await setting.save();
    res.status(200).json({ success: true, data: setting });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getCaptchaSetting,
  updateCaptchaSetting,
  getCaptchaFrontend,
};

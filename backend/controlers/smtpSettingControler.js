const smtpSetting = require("../models/SMTPModel");

const getSmtpSetting = async (req, res) => {
  try {
    const setting = await smtpSetting.findOne({});
    res.json({ success: true, data: setting });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateSmtpSetting = async (req, res) => {
  try {
    const { status, fromEmail, smtpPassword, smtpHost, smtpPort } = req.body;

    let setting = await smtpSetting.findOne({});
    if (!setting) {
      setting = new smtpSetting({ status, fromEmail, smtpPassword, smtpHost, smtpPort });
    } else {
      setting.status = status;
      setting.fromEmail = fromEmail;
      setting.smtpPassword = smtpPassword;
      setting.smtpHost = smtpHost;
      setting.smtpPort = smtpPort;
    }

    await setting.save();

    res.json({ success: true, message: "SMTP settings updated successfully", data: setting });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getSmtpSetting, updateSmtpSetting };

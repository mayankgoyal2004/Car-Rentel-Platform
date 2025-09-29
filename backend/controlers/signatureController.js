const Signature = require("../models/signatureModel");

// Add new signature
const addSignature = async (req, res) => {
  try {
    const { name, isDefault } = req.body;
    const image = req.file ? req.file.path.replace(/\\/g, "/") : null;

    if (!image || !name) {
      return res
        .status(400)
        .json({ success: false, message: "Name and image required" });
    }

    if (isDefault === "true") {
      await Signature.updateMany({}, { $set: { isDefault: false } });
    }

    const signature = new Signature({
      name,
      image,
      isDefault: isDefault === "true",
      admin: req.user.admin,
    });

    await signature.save();
    res.json({ success: true, data: signature });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getSignatures = async (req, res) => {
  const signatures = await Signature.find({ admin: req.user.admin });
  res.json({ success: true, data: signatures });
};
const getActiveSignature = async (req, res) => {
  const signatures = await Signature.findOne({
    admin: req.user.admin,
    isDefault: true,
  });
  res.json({ success: true, data: signatures });
};

const updateSignature = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, isDefault, status } = req.body;

    let updateData = { name, status };

    if (req.file) {
      updateData.image = req.file.path.replace(/\\/g, "/");
    }

    if (isDefault === "true") {
      await Signature.updateMany({}, { $set: { isDefault: false } });
      updateData.isDefault = true;
    }

    const updated = await Signature.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete signature
const deleteSignature = async (req, res) => {
  try {
    const { id } = req.params;
    await Signature.findByIdAndDelete(id);
    res.json({ success: true, message: "Signature deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  addSignature,
  getSignatures,
  updateSignature,
  deleteSignature,
  getActiveSignature,
};

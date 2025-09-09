const Damage = require("../models/damageSchema");

const addDamage = async (req, res) => {
  try {
    const { damageLocation, damageType, description } = req.body;

    if (!damageLocation || !damageType || !description) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const damage = new Damage({
      damageLocation,
      damageType,
      description,
      createdBy: req.user._id,
    });

    await damage.save();

    res.status(201).json({
      success: true,
      message: "Damage reported successfully",
      data: damage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllDamages = async (req, res) => {
  try {
    const damages = await Damage.find({ createdBy: req.user._id });
    res.status(200).json({ success: true, data: damages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteDamage = async (req, res) => {
  try {
    const damage = await Damage.findByIdAndDelete(req.params.id);

    if (!damage) {
      return res
        .status(404)
        .json({ success: false, message: "Damage not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Damage deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addDamage, deleteDamage, getAllDamages };

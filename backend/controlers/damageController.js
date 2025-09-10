const Damage = require("../models/damageSchema");
const Car = require("../models/CarModule");
const { updateAdmin } = require("./userControlers");

const addDamage = async (req, res) => {
  try {
    const { id } = req.params;

    const { damageLocation, damageType, description } = req.body;

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
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
    car.Damage.push(damage._id);
await car.save();

    res.status(201).json({
      success: true,
      message: "Damage added successfully",
      data: damage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getDamagesByCar = async (req, res) => {
  try {
    const { id } = req.params; // car ID

    const car = await Car.findById(id).populate("Damage"); 
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    res.status(200).json({
      success: true,
      data: car.Damage, // this will be an array of all damages
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


const deleteDamage = async (req, res) => {
  try {
    const damage = await Damage.findById(req.params.id);
    if (!damage) {
      return res.status(404).json({ success: false, message: "Damage not found" });
    }

    // Find the car that has this damage
    const car = await Car.findOne({ Damage: damage._id });
    if (car) {
      // Remove the damage from the car's Damage array
      car.Damage = car.Damage.filter(d => d.toString() !== damage._id.toString());
      await car.save();
    }

    // Delete the damage document
    await Damage.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, message: "Damage deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


const editDamage = async (req, res) => {
  try {
    const { id } = req.params; // damage ID
    const { damageLocation, damageType, description } = req.body;

    // Find the damage
    const damage = await Damage.findById(id);
    if (!damage) {
      return res.status(404).json({ success: false, message: "Damage not found" });
    }

    // Update fields if provided
    if (damageLocation) damage.damageLocation = damageLocation;
    if (damageType) damage.damageType = damageType;
    if (description) damage.description = description;

    await damage.save();

    res.status(200).json({ success: true, message: "Damage updated successfully", data: damage });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


module.exports = { addDamage, deleteDamage, getDamagesByCar , editDamage};

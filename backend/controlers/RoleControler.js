const Role = require("../models/roleModule");
const User = require("../models/userModel")

const addRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Role name is required" });
    }
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const role = new Role({ name, permissions , createdBy: req.user._id});
    await role.save();

    res.status(201).json({
      success: true,
      message: "Role created successfully",
      role,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all roles
const getRole = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      success: true,
      total: roles.length,
      roles,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


const assignRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const role = await Role.findById(roleId);
    if (!role) return res.status(404).json({ message: "Role not found" });

    user.role = role._id;
    await user.save();

    res.json({ message: "Role assigned successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = { addRole, getRole ,assignRole};

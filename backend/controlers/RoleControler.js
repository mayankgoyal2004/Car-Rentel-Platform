const Role = require("../models/roleModule");
const User = require("../models/userModel");

const addRole = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Role name is required" });
    }
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const role = new Role({
      name,
      createdBy: req.user._id,
      admin: req.user.admin,
    });
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

const updateRole = async (req, res) => {
  try {
    let { _id, name, status } = req.body;

    if (!_id || !name) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Both Id and  roleName are required",
      });
    }
    if (status === undefined || status === null) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Status is required",
      });
    }

    const role = await Role.findById(_id);
    if (!role) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "role not found!",
      });
    }

    role.name = name;
    role.status = status;
    await role.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "role updated successfully!",
      data: role,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

const getAllRole = async (req, res) => {
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
      filter.name = { $regex: search, $options: "i" };
    }

    const role = await Role.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalRole = await Role.countDocuments(filter);

    res.json({
      success: true,
      data: role,
      pagination: {
        totalRole,
        currentPage: page,
        totalPages: Math.ceil(totalRole / limit),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};
const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }

    const role = await Role.findById(id);

    if (!role) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "role not found!",
      });
    }

    await Role.deleteOne({ _id: id });

    return res.status(200).json({
      success: true,
      status: 200,
      message: "role successfully deleted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};
const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.json({
        status: 409,
        success: false,
        message: "id is Required!",
      });
    }
    const bdata = await Role.findById(id);

    if (!bdata) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "role not found!",
      });
    }

    res.json({
      status: 200,
      success: true,
      message: "role Data Successfully Fetched!",
      data: bdata,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Server Error!",
      error: err.message,
    });
  }
};
const getAllActiveRole = async (req, res) => {
  try {
    const adminId = req.user.admin;
    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const role = await Role.find({ admin: adminId, status: true })
      .sort({ createdAt: -1 })
      

    res.json({
      success: true,
      data: role,
      
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
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
// Add or update permissions for a role
const updatePermissions = async (req, res) => {
  try {
    const { roleId } = req.params;
    const { permissions } = req.body;

    if (!roleId) {
      return res
        .status(400)
        .json({ success: false, message: "Role ID is required" });
    }

    const role = await Role.findById(roleId);
    if (!role)
      return res
        .status(404)
        .json({ success: false, message: "Role not found" });

    // Replace permissions array with new one
    role.permissions = permissions;
    await role.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Permissions updated successfully",
        data: role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  addRole,
  updateRole,
  getAllRole,
  deleteRole,
  getRoleById,
  updatePermissions,
  getAllActiveRole
};

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const secretKey = "Protect@@@@";

const authUser = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    // const { token } = req.cookies;

    if (!token) {
      return res.status(403).json({ message: "No Token Found!" });
    }

    // decode token
    const decoded = jwt.verify(token, secretKey);

    // fetch full user with role + permissions
    const user = await User.findById(decoded._id).populate("role");

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    req.user = user; // now req.user has role + permissions
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized Access!", error: err.message });
  }
};
const checkPermission = (module, action, superAdminOnly = false) => {
  return (req, res, next) => {
    try {
      if (superAdminOnly && req.user.userType !== 1) {
        return res.status(403).json({ message: "SuperAdmin access only" });
      }

      if (req.user.userType === 1 || req.user.userType === 2) {
        return next();
      }

      if (!req.user || !req.user.role) {
        return res.status(401).json({ message: "Unauthorized: No user info" });
      }

      const role = req.user.role;

      if (!role.permissions ) {
        return res
          .status(403)
          .json({ message: "No permissions assigned to role" });
      }

      const permission = role.permissions.find((p) => p.module === module);

      if (permission) {
        const { actions } = permission;

        if (actions.allowAll || actions[action]) {
          return next();
        }
      }

      return res.status(403).json({ message: "Permission denied" });
    } catch (err) {
      console.error("Permission check error:", err.message);
      return res
        .status(500)
        .json({ message: "Server error during permission check" });
    }
  };
};

module.exports = { authUser, checkPermission };

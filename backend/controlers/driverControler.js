const Driver = require("../models/DriverModel");

const addDriver = async (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      licenseNumber,
      dateOfIssue,
      validTill,
      address,
      gender,
    } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "name is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    }

    if (!contact) {
      return res
        .status(400)
        .json({ success: false, message: "Contact number is required" });
    }

    if (!licenseNumber) {
      return res
        .status(400)
        .json({ success: false, message: "licenseNumber number is required" });
    }

    if (!dateOfIssue) {
      return res
        .status(400)
        .json({ success: false, message: "dateOfIssue number is required" });
    }
    if (!validTill) {
      return res
        .status(400)
        .json({ success: false, message: "valid date number is required" });
    }
    if (!address) {
      return res
        .status(400)
        .json({ success: false, message: "address number is required" });
    }
    if (!gender) {
      return res
        .status(400)
        .json({ success: false, message: "gender number is required" });
    }

    const existingDriver = await Driver.findOne({
      email,
    });
    if (existingDriver) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Driver already exists",
      });
    }

    const exitingDriverLicenseNUmber = await Driver.findOne({ licenseNumber });
    if (exitingDriverLicenseNUmber) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "licenseNumber already exists",
      });
    }
    const exitingContact = await Driver.findOne({ contact });
    if (exitingContact) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "Contact already exists",
      });
    }

    const imagePath = req.files?.image
      ? req.files.image[0].path.replace(/\\/g, "/")
      : null;
    if (!imagePath) {
      return res
        .status(400)
        .json({ success: false, message: "image is required" });
    }

    const filePath = req.files?.file
      ? req.files.file[0].path.replace(/\\/g, "/")
      : null;
    if (!filePath) {
      return res
        .status(400)
        .json({ success: false, message: "file is required" });
    }

    const driver = new Driver({
      name,
      email,
      contact,
      licenseNumber,
      dateOfIssue,
      validTill,
      address,
      image: imagePath,
      file: filePath,
      createdBy: req.user?._id,
      admin: req.user?.admin,
      gender,
    });

    await driver.save();

    res.status(201).json({
      success: true,
      message: "Driver added successfully",
      data: driver,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateDriver = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    gender,
    email,
    contact,
    licenseNumber,
    dateOfIssue,
    validTill,
    address,
    isActive,
  } = req.body;

  const driver = await Driver.findById(id);
  try {
    if (!driver) {
      return res
        .status(404)
        .json({ success: false, message: "Driver not found" });
    }
    driver.name = name;
    driver.email = email;
    driver.contact = contact;
    driver.licenseNumber = licenseNumber;
    driver.dateOfIssue = dateOfIssue;
    driver.validTill = validTill;
    driver.address = address;
    driver.isActive = isActive;
    driver.gender = gender;
    if (req.files?.image) {
      driver.image = req.files.image[0].path.replace(/\\/g, "/");
    }
    if (req.files?.file) {
      driver.file = req.files.file[0].path.replace(/\\/g, "/");
    }

    await driver.save();
    res.json({
      success: true,
      message: "Driver updated successfully",
      data: driver,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;

    const driver = await Driver.findById(id);
    if (!driver) {
      return res
        .status(404)
        .json({ success: false, message: "Driver not found" });
    }

    await Driver.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "Driver deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllDriver = async (req, res) => {
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

    const driver = await Driver.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalDriver = await Driver.countDocuments(filter);

    res.json({
      success: true,
      data: driver,
      pagination: {
        totalDriver,
        currentPage: page,
        totalPages: Math.ceil(totalDriver / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

const getAllActiveDriver = async (req, res) => {
  try {
    const adminId = req.user.admin;

    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const driver = await Driver.find({
      admin: adminId,
      status: "available",
      isActive: true,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: driver,
    });
  } catch (err) {
    res.status(500).json({
      success: false,

      message: "Server Error",
      error: err.message,
    });
  }
};


const getTop5ActiveDrivers = async (req, res) => {
  try {
    const adminId = req.user.admin;

    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Admin Id is required",
      });
    }

    const drivers = await Driver.find({
      admin: adminId,
      isActive: true,
    })
      .sort({ createdAt: -1 }) 
      .limit(5); 

    res.json({
      success: true,
      data: drivers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};



module.exports = {
  addDriver,
  updateDriver,
  deleteDriver,
  getAllDriver,
  getAllActiveDriver,
  getTop5ActiveDrivers,
};

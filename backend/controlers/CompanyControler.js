const Company = require("../models/CompanyModel");

const addCompany = async (req, res) => {
  try {
    const {
      companyName,
      name,
      email,
      contact,
      website,
      notes,
      language,
      address,
    } = req.body;

    if (!companyName) {
      return res
        .status(400)
        .json({ success: false, message: "company name is required" });
    }

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

    if (!website) {
      return res
        .status(400)
        .json({ success: false, message: "website  is required" });
    }

    if (!notes) {
      return res
        .status(400)
        .json({ success: false, message: "notes  is required" });
    }
    if (!language) {
      return res
        .status(400)
        .json({ success: false, message: "language  is required" });
    }
    if (!address) {
      return res
        .status(400)
        .json({ success: false, message: "address  is required" });
    }

    const exitingContact = await Company.findOne({ contact });
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
    const filePath = req.files?.file
      ? req.files.file[0].path.replace(/\\/g, "/")
      : null;

    const company = new Company({
      companyName,
      name,
      email,
      contact,
      website,
      notes,
      language,
      address,
      image: imagePath,
      file: filePath,
      createdBy: req.user?._id,
    });

    await company.save();

    res.status(201).json({
      success: true,
      message: "company added successfully",
      data: company,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateCompany = async (req, res) => {
  const { id } = req.params;
  const {
    companyName,
    name,
    email,
    contact,
    website,
    notes,
    language,
    address,
    status,
  } = req.body;

  const company = await Company.findById(id);
  try {
    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "company not found" });
    }
    company.name = name;
    company.email = email;
    company.contact = contact;
    company.companyName = companyName;
    company.website = website;
    company.notes = notes;
    company.language = language;
    company.address = address;
    company.status = status;

    if (req.files?.image) {
      driver.image = req.files.image[0].path.replace(/\\/g, "/");
    }
    if (req.files?.file) {
      driver.file = req.files.file[0].path.replace(/\\/g, "/");
    }

    await company.save();
    res.json({
      success: true,
      message: "Company updated successfully",
      data: company,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await Company.findById(id);
    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "company not found" });
    }

    await Company.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "company deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllCompany = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { _id } = req.user;

    const company = await Company.find({ createdBy: _id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalCompany = await Company.countDocuments({ createdBy: _id });

    res.json({
      success: true,
      data: company,
      pagination: {
        totalCompany,
        currentPage: page,
        totalPages: Math.ceil(totalCompany / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

module.exports = { addCompany, updateCompany , getAllCompany, deleteCompany};

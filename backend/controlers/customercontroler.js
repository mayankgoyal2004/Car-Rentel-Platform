const customer = require("../models/customerModel");
const Reservation = require("../models/reservationModel");
const Car = require("../models/CarModule");

const addCustomer = async (req, res) => {
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
      language,
      dateOfBirth,
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
        .json({ success: false, message: "contact number is required" });
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
    if (!language) {
      return res
        .status(400)
        .json({ success: false, message: "language number is required" });
    }
    if (!dateOfBirth) {
      return res
        .status(400)
        .json({ success: false, message: "DateOfBirth is required" });
    }

    const exitingDriverLicenseNUmber = await customer.findOne({
      licenseNumber,
    });
    if (exitingDriverLicenseNUmber) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "licenseNumber already exists",
      });
    }
    const exitingContact = await customer.findOne({ contact });
    if (exitingContact) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "contact already exists",
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

    const Customer = new customer({
      name,
      email,
      contact,
      dateOfBirth,
      language,
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

    await Customer.save();

    res.status(201).json({
      success: true,
      message: "customer added successfully",
      data: Customer,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    contact,
    licenseNumber,
    dateOfIssue,
    validTill,
    address,
    gender,
    language,
    DateOfBirth,
    status,
  } = req.body;

  const Customer = await customer.findById(id);
  try {
    if (!Customer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }
    Customer.name = name;
    Customer.email = email;
    Customer.contact = contact;
    Customer.licenseNumber = licenseNumber;
    Customer.dateOfIssue = dateOfIssue;
    Customer.validTill = validTill;
    Customer.address = address;
    Customer.status = status;
    Customer.gender = gender;
    Customer.language = language;
    Customer.DateOfBirth = DateOfBirth;

    if (req.files?.image) {
      Customer.image = req.files.image[0].path.replace(/\\/g, "/");
    }
    if (req.files?.file) {
      Customer.file = req.files.file[0].path.replace(/\\/g, "/");
    }

    await Customer.save();
    res.json({
      success: true,
      message: "Customer updated successfully",
      data: Customer,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const Customer = await customer.findById(id);
    if (!Customer) {
      return res
        .status(404)
        .json({ success: false, message: "customer not found" });
    }

    await customer.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "customer deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
const getAllcustomer = async (req, res) => {
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
    // Step 1: Find all cars created by me
    const myCars = await Car.find({ admin: req.user?.admin }).select("_id");

    // Step 2: Find all reservations for those cars
    const reservations = await Reservation.find({
      car: { $in: myCars },
    }).select("customer");

    const bookedCustomerIds = reservations.map((r) => r.customer);

    // Step 3: Get customers I created OR who booked my cars
    const query = {
      $or: [filter, { _id: { $in: bookedCustomerIds } }],
    };

    const customers = await customer
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalcustomer = await customer.countDocuments(query);

    res.json({
      success: true,
      data: customers,
      pagination: {
        totalcustomer,
        currentPage: page,
        totalPages: Math.ceil(totalcustomer / limit),
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
const getallActiveCustomers = async (req, res) => {
  try {
    const adminId = req.user.admin;

    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    const Customer = await customer.find({ admin: adminId, status: true });

    res.json({
      success: true,
      data: Customer,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
const getCustomerbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await customer.findById(id);
    if (!customers) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }
    res.json({ success: true, data: customers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  addCustomer,
  updateCustomer,
  getAllcustomer,
  deleteCustomer,
  getallActiveCustomers,
  getCustomerbyId,
};

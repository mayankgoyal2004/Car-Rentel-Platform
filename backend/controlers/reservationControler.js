const Reservation = require("../models/reservationModel");
const Car = require("../models/CarModule");
const Driver = require("../models/DriverModel");
const customer = require("../models/customerModel");
const mongoose = require("mongoose");


const addReservation = async (req, res) => {
  try {
    const {
      car_id,
      customer_id,
      rentalType,
      pricing_id,
      pickupLocation,
      pickupAddress,
      dropLocation,
      dropAddress,
      noOfPassengers,
      bookingType,
      pickupTime,
      dropTime,
      pickupDate,
      dropDate,
      driver_id,
      driverType,
      paymentStatus,
      paymentMethod,
      transactionId,
      extraService_id, // should be an array: [{ service, price }]
      securityDeposit,

      carPrice,

      DriverPrice,
      totalPrice,
      pricingDetails,
    } = req.body;

    if (!car_id || !customer_id || !pickupDate || !dropDate || !bookingType) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const car = await Car.findById(car_id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    car.inRent = true;
    await car.save();

    let assignedDriver = null;
    if (driverType === "withDriver") {
      if (driver_id) {
        assignedDriver = driver_id;
      } else {
        const availableDriver = await Driver.findOneAndUpdate(
          { status: "available" },
          { status: "assigned" },
          { new: true }
        );
        if (!availableDriver) {
          return res.status(400).json({
            success: false,
            message: "No available driver found at the moment",
          });
        }
        assignedDriver = availableDriver._id;
      }
    }

    const bookingId = "#" + Math.floor(100000 + Math.random() * 900000);

    const reservation = new Reservation({
      bookingId,
      car: car_id,
      customer: customer_id, // ✅ matches schema
      rentalType,
      pickupLocation,

      pickupAddress,
      dropLocation,
      dropAddress,
      passengers: noOfPassengers,
      bookingType,
      pickupTime,
      dropTime,
      pickupDate,
      driverType,
      dropDate,
      driver: assignedDriver,
      paymentStatus,
      paymentMethod,
      transactionId,
      extraServices: extraService_id,

      securityDeposit,
      carPrice,
      totalPrice,
      pricingDetails,
      createdBy: req.user._id,
      admin: req.user.admin,
    });

    await reservation.save();

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      reservation,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const updateReservation = async (req, res) => {
  try {
    const { id } = req.params; // reservation id from URL
    const {
      car_id,
      customer_id,
      rentalType,
      pricing_id,
      pickupLocation,
      pickupAddress,
      dropLocation,
      dropAddress,
      noOfPassengers,
      bookingType,
      pickupTime,
      dropTime,
      pickupDate,
      dropDate,
      driver_id,
      driverType,
      paymentStatus,
      paymentMethod,
      transactionId,
      extraService_id, // array: [{ service, price }]
      securityDeposit,
      carPrice,
      DriverPrice,
      totalPrice,
      pricingDetails,
    } = req.body;

    // ✅ find existing reservation
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    // ✅ update car assignment if car changed
    if (car_id && reservation.car.toString() !== car_id) {
      // free old car
      const oldCar = await Car.findById(reservation.car);
      if (oldCar) {
        oldCar.inRent = false;
        await oldCar.save();
      }

      // assign new car
      const newCar = await Car.findById(car_id);
      if (!newCar) {
        return res
          .status(404)
          .json({ success: false, message: "New car not found" });
      }
      newCar.inRent = true;
      await newCar.save();

      reservation.car = car_id;
    }

    // ✅ update driver assignment if needed
    if (driverType) {
      if (driverType === "withDriver") {
        if (driver_id) {
          reservation.driver = driver_id;
        } else {
          const availableDriver = await Driver.findOneAndUpdate(
            { status: "available" },
            { status: "assigned" },
            { new: true }
          );
          if (!availableDriver) {
            return res.status(400).json({
              success: false,
              message: "No available driver found at the moment",
            });
          }
          reservation.driver = availableDriver._id;
        }
      } else {
        reservation.driver = null;
      }
      reservation.driverType = driverType;
    }

    // ✅ update remaining fields
    reservation.customer = customer_id || reservation.customer;
    reservation.rentalType = rentalType || reservation.rentalType;
    reservation.pickupLocation = pickupLocation || reservation.pickupLocation;
    reservation.pickupAddress = pickupAddress || reservation.pickupAddress;
    reservation.dropLocation = dropLocation || reservation.dropLocation;
    reservation.dropAddress = dropAddress || reservation.dropAddress;
    reservation.passengers = noOfPassengers || reservation.passengers;
    reservation.bookingType = bookingType || reservation.bookingType;
    reservation.pickupTime = pickupTime || reservation.pickupTime;
    reservation.dropTime = dropTime || reservation.dropTime;
    reservation.pickupDate = pickupDate || reservation.pickupDate;
    reservation.dropDate = dropDate || reservation.dropDate;
    reservation.paymentStatus = paymentStatus || reservation.paymentStatus;
    reservation.paymentMethod = paymentMethod || reservation.paymentMethod;
    reservation.transactionId = transactionId || reservation.transactionId;
    reservation.extraServices = extraService_id || reservation.extraServices;
    reservation.securityDeposit =
      securityDeposit || reservation.securityDeposit;
    reservation.carPrice = carPrice || reservation.carPrice;
    reservation.totalPrice = totalPrice || reservation.totalPrice;
    reservation.pricingDetails = pricingDetails || reservation.pricingDetails;

    // ✅ track who updated
    reservation.updatedBy = req.user._id;

    await reservation.save();

    res.status(200).json({
      success: true,
      message: "Reservation updated successfully",
      reservation,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await reservation.findById(id);
    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "reservation not found" });
    }
    await Reservation.deleteOne({ _id: id });
    res.json({
      success: true,
      message: "reservation deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllReservationByCustomer = async (req, res) => {
  try {
    const { _id } = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!customerId) {
      return res
        .status(400)
        .json({ success: false, message: "Customer ID is required" });
    }

    const reservations = await Reservation.find({ createdBy: _id })
      .populate("car")
      .populate("user")
      .populate("driver")
      .populate("extraService")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalReservations = await Reservation.countDocuments({
      createdAt: _id,
    });

    res.status(200).json({
      success: true,
      data: reservations,
      pagination: {
        totalReservations,
        currentPage: page,
        totalPages: Math.ceil(totalReservations / limit),
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

const getAllReservationsForAdmin = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const cars = await Car.find({ admin: req.user.admin }).select("_id");

    const carIds = cars.map((c) => c._id);

    if (carIds.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        pagination: { totalReservations: 0, currentPage: page, totalPages: 0 },
      });
    }
    const reservations = await Reservation.find({ car: { $in: carIds } })
      .populate("car", "carName image")
      .populate("customer", "name image")

      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalReservations = await Reservation.countDocuments({
      car: { $in: carIds },
    });

    res.status(200).json({
      success: true,
      data: reservations,
      pagination: {
        totalReservations,
        currentPage: page,
        totalPages: Math.ceil(totalReservations / limit),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
    c;
  }
};

const getsingleReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id)
      .populate("car", "carName carModel")
      .populate("customer", "name image contact")
      .populate("driver", "name image contact")
      .populate("extraServices");

    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }

    res.json({ success: true, data: reservation });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const addReservationStep1 = async (req, res) => {
  try {
    const {
      pickupAddress,
      dropAddress,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      priceRate, // daily, weekly, monthly, yearly
      rentType, // delivery, selfPickup
    } = req.body;

    const { id } = req.params;
    // Validation
    if (
      !pickupAddress ||
      !dropAddress ||
      !pickupDate ||
      !pickupTime ||
      !returnDate ||
      !returnTime ||
      !priceRate ||
      !rentType
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    // Check if car exists
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    // Check if customer exists
    const customerObj = await customer.findOne({ userId: req.user._id });

    if (!customerObj) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }

    // Generate booking ID
    const bookingId = "#" + Math.floor(100000 + Math.random() * 900000);

    // Create reservation
    const reservation = new Reservation({
      bookingId,
      car: id,
      customer: customerObj._id,
      pickupAddress,
      dropAddress,
      pickupDate,
      dropDate: returnDate,
      pickupTime,
      dropTime: returnTime,
      bookingType: priceRate,
      rentalType: rentType,
      driverType: "self",
      status: "pending",
      createdBy: req.user?._id || null,
      admin: req.user?.admin || null,
    });

    await reservation.save();

    res.status(201).json({
      success: true,
      message: "Reservation step 1 created successfully",
      data: reservation,
    });
  } catch (err) {
    console.error("Add Reservation Step1 Error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const editReservationStep2 = async (req, res) => {
  try {
    const { id } = req.params; // Reservation ID to update

    const {
      pickupAddress,
      dropAddress,
      pickupDate,
      securityDeposit,
      pickupTime,
      returnDate,
      returnTime,
      priceRate, // daily, weekly, monthly, yearly
      rentalType, // delivery, selfPickup
      driverType, // optional: self, withDriver
      status, // optional: pending, confirmed, cancelled, etc.
    } = req.body;

    // Validation
    if (
      !pickupAddress ||
      !dropAddress ||
      !pickupDate ||
      !pickupTime ||
      !returnDate ||
      !returnTime ||
      !priceRate ||
      !rentalType
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    // Find reservation
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    // Update fields
    reservation.pickupAddress = pickupAddress;
    reservation.dropAddress = dropAddress;
    reservation.pickupDate = pickupDate;
    reservation.dropDate = returnDate;
    reservation.pickupTime = pickupTime;
    reservation.dropTime = returnTime;
    reservation.bookingType = priceRate;
    reservation.rentalType = rentalType;
    reservation.securityDeposit = securityDeposit;
    reservation.driverType = driverType || reservation.driverType;
    reservation.status = status || reservation.status;
    reservation.updatedAt = Date.now();

    await reservation.save();

    res.status(200).json({
      success: true,
      message: "Reservation step 2 updated successfully",
      data: reservation,
    });
  } catch (err) {
    console.error("Edit Reservation Step2 Error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id)
      .populate({
        path: "car",
        populate: [
          { path: "pricing" },
          { path: "extraService" },
          { path: "mainLocation" },
        ],
      })
      .populate("extraServices");

    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }
    res.json({ success: true, data: reservation });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


 

const editReservationStep3 = async (req, res) => {
  const { id } = req.params;
  const { extraServices, driverType, totalPrice } = req.body;

  console.log("data", req.body);

  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({ success: false, message: "Reservation not found" });
    }

    // 1️⃣ Update total price
    if (totalPrice !== undefined) reservation.totalPrice = totalPrice;

    // 2️⃣ Update extra services
 if (extraServices) {
  const extrasArray = Array.isArray(extraServices) ? extraServices : [extraServices];

  reservation.extraServices = extrasArray
    .map((svc) => {
      const id = typeof svc === "object" && svc._id ? svc._id : svc;
      return mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : null;
    })
    .filter(Boolean); // remove invalid IDs
}

    // 3️⃣ Update driver details
   if (driverType === "self") {
  reservation.driverType = "self";

  const driverDetails = req.body.driverDetails || {};

  // Map incoming driverDetails to customer schema fields
   const driverData = {
    firstName: driverDetails.firstName || null,
    lastName: driverDetails.lastName || null,
    age: driverDetails.age ? Number(driverDetails.age) : null,
    contact: driverDetails.mobile || null, // mobile -> contact
    licenseNumber: driverDetails.licenseNumber || null,
    file: req.file ? req.file.path.replace(/\\/g, "/") : undefined, // <-- here
  };

 const customerRecord = await customer.findById(reservation.customer);
  if (customerRecord) {
    customerRecord.firstName = driverData.firstName;
    customerRecord.lastName = driverData.lastName;
    customerRecord.age = driverData.age;
    customerRecord.contact = driverData.contact;
    customerRecord.licenseNumber = driverData.licenseNumber;
    if (driverData.file) customerRecord.file = driverData.file; // <-- FIXED

    await customerRecord.save();
  }

    } else if (driverType === "withDriver") {
      reservation.driverType = "withDriver";
    }

    // Save reservation
    await reservation.save();

    return res.status(200).json({
      success: true,
      message: "Step 3 updated successfully",
      data: reservation,
    });

  } catch (error) {
    console.error("Error updating Step 3:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};



module.exports = {
  addReservation,
  updateReservation,
  deleteReservation,
  getAllReservationByCustomer,
  getAllReservationsForAdmin,
  getsingleReservation,
  addReservationStep1,
  getReservationById,
  editReservationStep2,
  editReservationStep3,
};

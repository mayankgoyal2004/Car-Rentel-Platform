const Reservation = require("../models/reservationModel");
const Car = require("../models/carModel");
const Driver = require("../models/DriverModel");

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
      paymentStatus,
      paymentMethod,
      transactionId,
      extraService_id,
      driverType,
      couponCode,
      pricingDetails,
      totalPrice,
    } = req.body;


    if (!car_id || !customer_id || !pickupDate || !dropDate) {
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

    const orderId = "#" + Math.floor(100000 + Math.random() * 900000);

    const reservation = new Reservation({
      orderId,
      car: car_id,
      user: customer_id,
      rentalType,
      pricing: pricing_id,
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
      driver: assignedDriver,
      paymentStatus,
      paymentMethod,
      transactionId,
      extraService: extraService_id,
      driverType,
      couponCode,
      totalPrice,
      createdBy: req.user._id,
      admin: req.user.admin
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
    const { id } = req.params;
    const {
      car_id,
      user_id,
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
      paymentStatus,
      paymentMethod,
      transactionId,
      extraService_id,
      driverType,
      couponCode,
      totalPrice,
      status,
      cancellationReason,
      rejectionReason,
    } = req.body;

    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }
    if (driver_id && driver_id.toString() !== reservation.driver?.toString()) {
      if (reservation.driver) {
        await Driver.findByIdAndUpdate(reservation.driver, {
          status: "available",
        });
      }
      reservation.driver = driver_id;
      await Driver.findByIdAndUpdate(driver_id, { status: "assigned" });
    }

    if (car_id) reservation.car = car_id;
    if (user_id) reservation.user = user_id;
    if (rentalType) reservation.rentalType = rentalType;
    if (pricing_id) reservation.pricing = pricing_id;
    if (pickupLocation) reservation.pickupLocation = pickupLocation;
    if (pickupAddress) reservation.pickupAddress = pickupAddress;
    if (dropLocation) reservation.dropLocation = dropLocation;
    if (dropAddress) reservation.dropAddress = dropAddress;
    if (bookingType) reservation.bookingType = bookingType;
    if (pickupTime) reservation.pickupTime = pickupTime;
    if (dropTime) reservation.dropTime = dropTime;
    if (pickupDate) reservation.pickupDate = pickupDate;
    if (dropDate) reservation.dropDate = dropDate;
    if (paymentMethod) reservation.paymentMethod = paymentMethod;
    if (transactionId) reservation.transactionId = transactionId;
    if (extraService_id) reservation.extraService = extraService_id;
    if (driverType) reservation.driverType = driverType;
    if (totalPrice) reservation.totalPrice = totalPrice;
    if (couponCode) reservation.couponCode = couponCode;
    if (noOfPassengers) reservation.noOfPassengers = noOfPassengers;
    if (paymentStatus) reservation.paymentStatus = paymentStatus;

    if (status) {
      reservation.status = status;
      if (status === "cancelled" && cancellationReason) {
        reservation.cancellationReason = cancellationReason;
      }
      if (status === "rejected" && rejectionReason) {
        reservation.rejectionReason = rejectionReason;
      }
    }
    if (
      reservation.status === "rejected" ||
      reservation.status === "cancelled" ||
      reservation.status === "completed"
    ) {
      if (reservation.car) {
        await Car.findByIdAndUpdate(reservation.car, { inRent: false });
      }
      if (reservation.driver) {
        await Driver.findByIdAndUpdate(reservation.driver, {
          status: "available",
        });
      }
    }

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

    const reservations = await Reservation.find({ createdAt: _id })
      .populate("car")
      .populate("user")
      .populate("driver")
      .populate("extraService")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalReservations = await Reservation.countDocuments({ createdAt: _id });

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
      .populate("car")
      .populate("user")
      .populate("driver")
      .populate("extraService")
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
  }
};

module.exports = {
  addReservation,
  updateReservation,
  deleteReservation,
  getAllReservationByCustomer,
  getAllReservationsForAdmin
};

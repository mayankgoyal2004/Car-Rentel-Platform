const Invoice = require("../models/invoiceModel");
const Reservation = require("../models/reservationModel");
const Car = require("../models/CarModule");
const Customer = require("../models/customerModel");

const createInvoice = async (req, res) => {
  try {
    const { reservationId, Items, terms, notes, paymentMethod } = req.body;
    const { _id } = req.user;
    const reservation = await Reservation.findById(reservationId)
      .populate("car")
      .populate("user");

    const items = [];

    items.push({
      description: `${reservation.car.carName} Rental`,
      quantity: reservation.noOfPassengers || 1,
      netPrice: reservation.totalPrice,
      tax: 0,
      totalPrice: reservation.totalPrice,
    });

    // 3. Add extra charges (from admin)
    if (extraItems && Array.isArray(extraItems)) {
      extraItems.forEach((item) => {
        items.push({
          description: item.description,
          quantity: item.quantity,
          netPrice: item.netPrice,
          tax: item.tax || 0,
          totalPrice:
            item.netPrice * item.quantity * (1 + (item.tax || 0) / 100),
        });
      });
    }

    const subtotal = items.reduce(
      (sum, item) => sum + item.netPrice * item.quantity,
      0
    );
    const tax = items.reduce(
      (sum, item) => sum + item.netPrice * item.quantity * (item.tax / 100),
      0
    );
    const totalAmount = subtotal + tax;
    const invoiceNumber = "INV-" + Math.floor(100000 + Math.random() * 900000);

    const invoice = new Invoice({
      invoiceNumber,
      car: reservation.car._id,
      customer: reservation.user._id,
      reservation: reservation._id,
      fromDate: reservation.pickupDate,
      dueDate: reservation.dropDate,
      from: {
        name: "DreamsRent",
        address: "Flat8, Park View House, 7 high Street , US",
        contact: "+447123456789",
        email: "dreamsrent@example.com",
      },
      to: {
        name: reservation.user.name,
        address: reservation.user.address || "",
        contact: reservation.user.phone || "",
        email: reservation.user.email,
      },
      items,
      paymentMethod,
      terms,
      notes,
      subtotal,
      tax,
      totalAmount,
      createdBy: _id,
    });

    await invoice.save();

    res.status(201).json({
      success: true,
      message: "Invoice created successfully",
      invoice,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createInvoice };

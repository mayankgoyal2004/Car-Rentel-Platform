const Invoice = require("../models/invoiceModel");
const Reservation = require("../models/reservationModel");
const Car = require("../models/CarModule");
const Customer = require("../models/customerModel");
const InvoiceSetting = require("../models/invoiceSetting");

const createInvoice = async (req, res) => {
  try {
    const {
      reservationId,
      invoiceNumber,
      totalAmount,
      issuedDate,
      fromDate,
      subtotal,
      dueDate,
      carId,
      items,
      terms,
      notes,
      status,
      currency,
      from,
      to,
      paymentMethod,
    } = req.body;
    const reservation = await Reservation.findById(reservationId)
      .populate("car")
      .populate("customer")
      .populate("extraServices");
    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }

    const invoice = new Invoice({
      invoiceNumber,
      car: reservation.car._id || carId,
      customer: reservation.customer._id || to,
      reservation: reservationId,
      fromDate: fromDate,
      dueDate: dueDate,
      status: status,
      from: {
        name: from,
      },
      to: {
        address: reservation.customer.address || "",
        contact: reservation.customer.phone || "",
        email: reservation.customer.email,
      },
      issuedDate,
      items,
      paymentMethod,
      terms,
      notes,
      subtotal,

      currency,
      totalAmount,
      createdBy: req.user._id,
      admin: req.user.admin,
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

const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res
        .status(404)
        .json({ success: false, message: "Invoice not found" });
    }

    // Prevent invoiceNumber from being updated
    if (req.body.invoiceNumber) delete req.body.invoiceNumber;

    const {
      reservationId,
      totalAmount,
      issuedDate,
      fromDate,
      subtotal,
      dueDate,
      carId,
      items,
      terms,
      notes,
      status,
      currency,
      from,
      paymentMethod,
    } = req.body;

    let reservation = null;
    if (reservationId) {
      reservation = await Reservation.findById(reservationId)
        .populate("car")
        .populate("customer")
        .populate("extraServices");
    }

    invoice.car = reservation?.car?._id || carId || invoice.car;
    invoice.customer = reservation?.customer?._id || invoice.customer;
    invoice.reservation = reservationId || invoice.reservation;
    invoice.fromDate = fromDate || invoice.fromDate;
    invoice.dueDate = dueDate || invoice.dueDate;
    invoice.status = status || invoice.status;
    invoice.currency = currency || invoice.currency;
    invoice.subtotal = subtotal || invoice.subtotal;
    invoice.totalAmount = totalAmount || invoice.totalAmount;
    invoice.issuedDate = issuedDate || invoice.issuedDate;
    invoice.terms = terms || invoice.terms;
    invoice.notes = notes || invoice.notes;
    invoice.paymentMethod = paymentMethod || invoice.paymentMethod;

    invoice.from = {
      name: from,
    };
    invoice.to = reservation?.customer
      ? {
          address: reservation.customer.address || "",
          contact: reservation.customer.phone || "",
          email: reservation.customer.email,
        }
      : invoice.to;

    invoice.items = items || invoice.items;

    await invoice.save();

    res.json({
      success: true,
      message: "Invoice updated successfully",
      data: invoice,
    });
  } catch (err) {
    console.error("❌ Update error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllInvoice = async (req, res) => {
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
      filter.invoiceNumber = { $regex: search, $options: "i" };
    }

    const invoice = await Invoice.find(filter)
      .populate("car")
      .populate("customer")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalInvoice = await Invoice.countDocuments(filter);

    res.json({
      success: true,
      data: invoice,
      pagination: {
        totalInvoice,
        currentPage: page,
        totalPages: Math.ceil(totalInvoice / limit),
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
const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res
        .status(404)
        .json({ success: false, message: "invoice not found" });
    }

    await Invoice.deleteOne({ _id: id });

    res.json({
      success: true,
      message: "invoice deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const invoiceDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id)
      .populate("customer")
      .populate("reservation")
      .populate("admin");
    if (!invoice) {
      return res
        .status(404)
        .json({ success: false, message: "invoice not found" });
    }
    res.json({ success: true, data: invoice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getLatestInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.find({ admin: req.user.admin })
      .populate("customer")
      .sort({ createdAt: -1 })
      .limit(5);
    if (!invoice) {
      return res
        .status(404)
        .json({ success: false, message: "invoice not found" });
    }
    res.json({ success: true, data: invoice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getInvoiceByReservationId = async (req, res) => {
  try {
    const invoice = await Invoice.findOne({
      reservation: req.params.reservationId,
    })
      .populate("customer", "userName email")
      .populate("car", "name");

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: "No invoice found for this reservation",
      });
    }

    res.json({ success: true, data: invoice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const addInvoiceLogo = async (req, res) => {
  try {
    const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;

    if (!imagePath) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    let invoiceSetting = await InvoiceSetting.findOne();

    if (invoiceSetting) {
      invoiceSetting.logo = imagePath;
      await invoiceSetting.save();
    } else {
      invoiceSetting = new InvoiceSetting({ logo: imagePath });
      await invoiceSetting.save();
    }

    res.json({
      success: true,
      message: "Invoice logo updated successfully",
      data: invoiceSetting,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getInvoiceLogo = async (req, res) => {
  try {
    const invoiceSetting = await InvoiceSetting.findOne();
    if (!invoiceSetting) {
      return res
        .status(404)
        .json({ success: false, message: "Invoice logo not found" });
    }
    res.json({ success: true, data: invoiceSetting });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  createInvoice,
  deleteInvoice,
  getAllInvoice,
  invoiceDetails,
  updateInvoice,
  getLatestInvoice,
  getInvoiceByReservationId,
  addInvoiceLogo,
  getInvoiceLogo,
};

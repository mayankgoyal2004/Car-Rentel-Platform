const mongoose = require("mongoose");

const invoiceItemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  netPrice: { type: Number, required: true },
  tax: { type: Number, default: 0 },
  totalPrice: { type: Number, required: true },
});

const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: { type: String, required: true, unique: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    reservation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
      required: true,
    },
    fromDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    currency: { type: String, default: "USD" },

    status: {
      type: String,
      enum: ["unpaid", "partially_paid", "paid"],
      default: "unpaid",
    },
    from: {
      name: String,
      address: String,
      contact: String,
      email: String,
    },
     to: {
      name: String,
      address: String,
      contact: String,
      email: String,
    },
    items: [invoiceItemSchema],

    paymentMethod: { type: String, default: "Bank Transfer" },

    terms: { type: String },
    notes: { type: String },

    subtotal: { type: Number, default: 0 },
    discount: { type: Number, default: 0 }, // can store %
    tax: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);

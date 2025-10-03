const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

    rentalType: {
      type: String,
      enum: ["delivery", "selfPickup"],
      required: true,
    },

    pricing: { type: mongoose.Schema.Types.ObjectId, ref: "Pricing" },
    bookingId: { type: String, unique: true },
    cancellation: {
      reason: { type: String },
      cancelledBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
      refundAmount: { type: Number, default: 0 },
    },

    pickupLocation: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    pickupAddress: { type: String },
    dropLocation: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    dropAddress: { type: String },

    passengers: { type: Number, min: 1 },
    securityDeposit: { type: Number, default: 0 },

    bookingType: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
      required: true,
    },
    pickupTime: { type: String, required: true },
    dropTime: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    dropDate: { type: Date, required: true },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Partial", "Paid", "Refunded"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: [
        "Credit Card",
        "Debit Card",
        "Cash",
        "Bank Transfer",
        "Digital Wallet",
      ],
      default: "Credit Card",
    },
    transactionId: { type: String },

    extraServices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExtraService",
      },
    ],
    driverType: { type: String, enum: ["self", "withDriver"], required: true },

    driverPrice: { type: Number, default: 0 },
    baseKilometers: { type: Number, default: 100 },
    kmExtraPrice: { type: Number, default: 0 },
    carPrice: { type: Number },
    totalPrice: { type: Number },
    pricingDetails: {
      basePrice: { type: Number },
      driverCost: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      tax: { type: Number, default: 0 },
      finalAmount: { type: Number },
      security: { type: Number, default: 0 },
    },
    cancellationReason: { type: String, default: null },
    rejectionReason: { type: String },
    cancelledBy: { type: String, enum: ["user", "owner"] },
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "cancelled",
        "completed",
        "rejected",
        "inRental",
      ],

      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);

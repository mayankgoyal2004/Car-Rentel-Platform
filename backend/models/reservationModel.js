const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    rentalType: {
      type: String,
      enum: ["delivery", "selfPickup"],
      required: true,
    },
    pricing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pricing",
    },
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

    pickupLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
    pickupAddress: { type: String }, // user-typed, optional
    dropLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
    dropAddress: { type: String }, 

    noOfPassengers: { type: Number },

    bookingType: {
      type: String,
      enum: ["day", "weekly", "monthly", "yearly"],
      required: true,
    },
    pickupTime: { type: Date, required: true },
    dropTime: { type: Date, required: true },
    pickupDate: { type: Date, required: true },
    dropDate: { type: Date, required: true },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["card", "upi", "cash", "wallet"],
      default: "cash",
    },
    transactionId: { type: String },

    extraService: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExtraService",
      },
    ],
    driverType: { type: String, enum: ["self", "withDriver"], required: true },

    couponCode: { type: String, default: null },
    pricingDetails: {
      basePrice: { type: Number },
      extraServiceCost: { type: Number, default: 0 },
      driverCost: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      tax: { type: Number, default: 0 },
      finalAmount: { type: Number },
      securityDeposit: { type: Number, default: 0 },
    },
    cancellationReason: { type: String },
    rejectionReason : {type:String},
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

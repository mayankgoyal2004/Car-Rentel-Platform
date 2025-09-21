const mongoose = require("mongoose");
const slugify = require("slugify");

const CarSchema = new mongoose.Schema(
  {
    image: { type: String },
    carName: { type: String, required: true },
    carType: { type: mongoose.Schema.Types.ObjectId, ref: "CarType" },

    carBrand: { type: mongoose.Schema.Types.ObjectId, ref: "CarBrand" },
    carModel: { type: mongoose.Schema.Types.ObjectId, ref: "CarModel" },
    category: {
      type: String,
    },
    plateNumber: {
      type: String,
    },

    vinNumber: {
      type: String,
    },
    carCylinder: { type: mongoose.Schema.Types.ObjectId, ref: "CarCylinder" },
    carFeatures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarFeatures",
      },
    ],
    odometer: {
      type: Number,
      default: 0,
    },
    year: {
      type: Date,
    },
    carColor: { type: mongoose.Schema.Types.ObjectId, ref: "CarColor" },
    carFuel: { type: mongoose.Schema.Types.ObjectId, ref: "CarFuel" },
    carSeats: { type: mongoose.Schema.Types.ObjectId, ref: "CarSeats" },
    carTransmission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarTransmission",
    },
    carSafetyFeature: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarSafetyFeature",
      },
    ],
    carSteering: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarSteering",
    },
    extraService: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExtraService",
      },
    ],
    mileage: {
      type: String,
    },
    airbags: {
      type: String,
    },
    noOfDoors: {
      type: Number,
    },
    passengers: {
      type: Number,
    },
    permalink: { type: String, trim: true },

    mainLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
    otherLocations: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },

    status: { type: Boolean, default: false }, // superAdmin approves
    isAvailable: { type: Boolean, default: true }, // admin toggle availability
    inRent: { type: Boolean, default: false }, // when car is rented

    carVideo: [
      {
        type: String,
      },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    carDocuments: [
      {
        type: String,
      },
    ],
    carPolicies: [
      {
        type: String,
      },
    ],

    description: { type: String },
    videoPlatform: { type: String },
    pricing: { type: mongoose.Schema.Types.ObjectId, ref: "Pricing" },
    damages: [
      {
        location: { type: String },
        type: { type: String },
        description: { type: String },
      },
    ],
    faqs: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

CarSchema.pre("validate", async function (next) {
  if (this.permalink) {
    // Normalize user-entered permalink
    this.permalink = slugify(this.permalink, { lower: true, strict: true });

    // Ensure uniqueness
    let slug = this.permalink;
    let count = 1;
    const Car = mongoose.model("Car", CarSchema);

    let existing = await Car.findOne({
      permalink: slug,
      _id: { $ne: this._id },
    });
    while (existing) {
      slug = `${this.permalink}-${count}`;
      existing = await Car.findOne({ permalink: slug, _id: { $ne: this._id } });
      count++;
    }

    this.permalink = slug;
  }

  next();
});
module.exports = mongoose.model("Car", CarSchema);

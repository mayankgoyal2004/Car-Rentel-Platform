const Car = require("../models/CarModule");
const Location = require("../models/locationModel");
const City = require("../models/citymodels");
const CarModel = require("../models/caratributes/CarModelModel");
const CarBrand = require("../models/caratributes/carBrandModel");
const CarTransmission = require("../models/caratributes/carTransmissionsModel");
const CarFuel = require("../models/caratributes/carFuelModel");

const addCar = async (req, res) => {
  try {
    const {
      carName,
      permalink,
      carType,
      carBrand,
      carModel,
      category,
      plateNumber,
      vinNumber,
      mainLocation,
      otherLocations,
      carFuel,
      odometer,
      carColor,
      yearOfCar,
      carTransmission,
      mileage,
      passengers,
      NoofSeats,
      airbags,
      noOfDoors,
    } = req.body;

    if (
      !carName ||
      !permalink ||
      !carType ||
      !carBrand ||
      !carColor ||
      !carFuel ||
      !yearOfCar ||
      !carModel ||
      !category ||
      !plateNumber ||
      !vinNumber ||
      !mainLocation ||
      !carFuel ||
      !odometer ||
      !carTransmission ||
      !mileage ||
      !passengers ||
      !NoofSeats ||
      !airbags ||
      !noOfDoors
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Car image is required" });
    }

    const imagePath = req.file.path.replace(/\\/g, "/");

    const car = new Car({
      carName,
      permalink,
      carType,
      carBrand,
      carModel,
      category,
      plateNumber,
      vinNumber,
      mainLocation,
      otherLocations,
      carFuel,
      odometer,
      carColor,
      year: yearOfCar,
      carTransmission,
      mileage,
      passengers,
      carSeats: NoofSeats,
      airbags,
      noOfDoors,
      image: imagePath,

      createdBy: req.user._id,
      admin: req.user.admin,
      status: false,
      isAvailable: false,
      inRent: false,
    });

    await car.save();

    res.status(201).json({
      success: true,
      message: "Car added successfully. Pending SuperAdmin approval.",
      car,
    });
  } catch (error) {
    console.error("Add Car Error:", error);
    res.status(500).json({
      success: false,
      message: "Error adding car",
      error: error.message,
    });
  }
};

const updateCarFeatures = async (req, res) => {
  try {
    const { id } = req.params;
    const { carFeatures } = req.body;

    if (!Array.isArray(carFeatures) || carFeatures.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Features must be an array of IDs" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    car.carFeatures = carFeatures;
    await car.save();

    res.status(200).json({
      success: true,
      message: "Car features updated successfully",
      car,
    });
  } catch (error) {
    console.error("Update Car Features Error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating features",
      error: error.message,
    });
  }
};

const updateCarExtraService = async (req, res) => {
  try {
    const { id } = req.params;
    const { extraService } = req.body;

    if (!Array.isArray(extraService) || extraService.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Extra services must be an array of IDs",
      });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    car.extraService = extraService;
    await car.save();

    res.status(200).json({
      success: true,
      message: "Car extra service updated successfully",
      car,
    });
  } catch (error) {
    console.error("Update Car extraService Error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating ExtraService",
      error: error.message,
    });
  }
};

const updateCarVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { videoPlatform, videoLink } = req.body;

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    if (videoPlatform) car.videoPlatform = videoPlatform;
    if (videoLink) car.videoLink = videoLink;

    await car.save();

    res.status(200).json({
      success: true,
      message: "Car video updated successfully",
      car,
    });
  } catch (error) {
    console.error("Update Car Video Error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating video",
      error: error.message,
    });
  }
};

const uploadCarFiles = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    console.log("REQ.FILES:", req.files);

    if (req.files.documents) {
      req.files.documents.forEach((file) => {
        car.carDocuments.push(file.path); // just store the path
      });
    }

    if (req.files.policies) {
      req.files.policies.forEach((file) => {
        car.carPolicies.push(file.path);
      });
    }

    if (req.files.videos) {
      req.files.videos.forEach((file) => {
        car.carVideo.push(file.path);
      });
    }

    // Save videos

    await car.save();

    res.status(200).json({ success: true, message: "Files uploaded", car });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const updateCarStatusByAdmin = async (req, res) => {
  try {
    if (req.user.userType !== 1)
      return res.status(403).json({ message: "SuperAdmin only" });

    const { status } = req.body;
    const car = await Car.findById(req.params.id);
    car.status = status;
    await car.save();
    res.json({ success: true, message: "Car approved", car });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const toggleAvailability = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car.status) return res.status(400).json({ message: "Not approved" });

    car.isAvailable = req.body.isAvailable;
    await car.save();
    res.json({ success: true, car });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Public list
// const getAllCars = async (req, res) => {
//   try {
//     const cars = await Car.find({
//       status: true,
//       isAvailable: true,
//       inRent: false,
//     }).populate("carType carBrand carModel createdBy");
//     res.json({ success: true, count: cars.length, cars });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// };

// PUT /cars/:id
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    const imagePath = req.files?.image
      ? req.files.path.replace(/\\/g, "/")
      : null;

    data.image = imagePath;

    await car.save(data);

    res.status(200).json({ message: "Car updated successfully", car });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating car", error: error.message });
  }
};

// DELETE /cars/:id
const carDelete = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error deleting car", error: error.message });
  }
};

// GET /cars/created-by/:userId
const getCar = async (req, res) => {
  try {
    const cars = await Car.find({ admin: req.user.admin });
    res.status(200).json(cars);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error fetching cars", error: error.message });
  }
};

// GET /cars/search?type=SUV&location=Delhi&minPrice=1000&maxPrice=5000&features=GPS,AC&available=true

// All cars with search & filters
// controllers/carController.js
const getAllCars = async (req, res) => {
  try {
    const {
      search, // free text
      carType,
      carTransmission,
      carColor,
      carBrand,
      carModel,
      carFuel,
      pickupLocation,
      dropLocation,
      pickupDate,
      dropDate,
      page = 1,
      limit = 10,
    } = req.query;

    console.log(req.query);
    // ✅ Only active and available cars
    let filter = { status: true, isAvailable: true };

    // Free text search (carName, brandName, modelName)
    if (search) {
      filter.$or = [{ carName: { $regex: search, $options: "i" } }];
    }
    if (carFuel) {
      // Normalize to array
      const fuelNames = Array.isArray(carFuel)
        ? carFuel
        : carFuel.split(",").map((f) => f.trim());

      // Build regex OR query (case-insensitive)
      const regexQueries = fuelNames.map((f) => ({
        carFuel: { $regex: new RegExp(f, "i") },
      }));

      const fuels = await CarFuel.find({ $or: regexQueries }).select("_id");

      if (fuels.length > 0) {
        filter.carFuel = { $in: fuels.map((f) => f._id) };
      } else {
        filter.carFuel = { $in: [] }; // ensures no cars returned
      }
    }

    if (carType) filter.carType = carType;
    if (carTransmission) {
      // Normalize to array
      const transmissionNames = Array.isArray(carTransmission)
        ? carTransmission
        : carTransmission.split(",").map((t) => t.trim());

      // Build regex OR query (case-insensitive)
      const regexQueries = transmissionNames.map((t) => ({
        carTransmission: { $regex: new RegExp(t, "i") },
      }));

      const transmissions = await CarTransmission.find({
        $or: regexQueries,
      }).select("_id");

      if (transmissions.length > 0) {
        filter.carTransmission = { $in: transmissions.map((t) => t._id) };
      } else {
        filter.carTransmission = { $in: [] }; // no match
      }
    }
    if (carColor) filter.carColor = carColor;
    if (carBrand) {
      // Always normalize to array
      const brandNames = Array.isArray(carBrand)
        ? carBrand
        : carBrand.split(",").map((b) => b.trim());

      // Build regex OR query for case-insensitive match
      const regexQueries = brandNames.map((b) => ({
        brandName: { $regex: new RegExp(b, "i") },
      }));

      const brands = await CarBrand.find({ $or: regexQueries }).select("_id");

      if (brands.length > 0) {
        filter.carBrand = { $in: brands.map((b) => b._id) };
      } else {
        filter.carBrand = { $in: [] }; // ensures no cars returned
      }
    }

    if (carModel) {
      const modelDoc = await CarModel.findOne({ modelName: carModel.trim() });
      if (modelDoc) {
        filter.carModel = modelDoc._id;
      }
    }
    // ✅ Location based filter
    if (pickupLocation) {
      const city = await City.findOne({
        cityName: { $regex: pickupLocation, $options: "i" },
      }).select("_id");

      console.log("Matched city:", city);

      if (city) {
        const pickupLocs = await Location.find({ city: city._id }).select(
          "_id"
        );
        if (pickupLocs.length > 0) {
          filter.mainLocation = { $in: pickupLocs.map((loc) => loc._id) };
        } else {
          filter.mainLocation = { $in: [] }; // no locations in this city
        }
      } else {
        filter.mainLocation = { $in: [] }; // city not found
      }
    }

    // Drop-off Location (search by cityId)
    // if (dropLocation) {
    //   const city = await City.findOne({
    //     name: { $regex: dropLocation, $options: "i" },
    //   }).select("_id");

    //   if (city) {
    //     const dropLocs = await Location.find({ city: city._id }).select("_id");
    //     if (dropLocs.length > 0) {
    //       filter.otherLocations = { $in: dropLocs.map((loc) => loc._id) };
    //     } else {
    //       filter.otherLocations = null;
    //     }
    //   } else {
    //     filter.otherLocations = null;
    //   }
    // }

    // ✅ Date filter (example: check availability)
    // Assuming your Car schema has `bookings` with { startDate, endDate }

    const skip = (page - 1) * limit;

    const cars = await Car.find(filter)
      .populate("carType", "carType")
      .populate("carBrand", "brandName")
      .populate("carModel", "carModel")
      .populate("carCylinder", "carCylinder")
      .populate("carFeatures", "carFeature")
      .populate("carColor", "carColor")
      .populate("carFuel", "carFuel")
      .populate("carSeats", "carSeats")
      .populate("carTransmission", "carTransmission")
      .populate("carSafetyFeature", "safetyFeatureName")
      .populate("carSteering", "steeringType")
      .populate("extraService", "serviceName price")
      .populate("mainLocation", "title")
      .populate("otherLocations", "title")
      .populate("pricing")
      .populate("createdBy", "name email")
      .populate("admin", "name email")
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Car.countDocuments(filter);

    res.status(200).json({
      success: true,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      limit: parseInt(limit),
      data: cars,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id).populate("carFeatures");
    console.log(car);
    res.status(200).json({ success: true, car });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const quickSearchCar = async (req, res) => {
  try {
    const { pickupLocation, dropLocation, pickupDate, dropDate } = req.query;

    let cars = await Car.find({ status: true })
      .populate({
        path: "mainLocation",
        match: {
          location: { $regex: pickupLocation, $options: "i" },
        },
      })
      .populate({
        path: "otherLocations",
        match: {
          location: { $regex: dropLocation, $options: "i" },
        },
      });

    const availableCars = cars.filter(
      (car) => car.mainLocation || car.otherLocations
    );

    res.status(200).json({
      success: true,
      count: availableCars.length,
      cars: availableCars,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllCarsForAdmin = async (req, res) => {
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
      filter.carName = { $regex: search, $options: "i" };
    }
    const populatedCars = await Car.find(filter)
      .populate([
        { path: "carType", select: "carType" },
        { path: "carBrand", select: "brandName" },
        { path: "carModel", select: "carModel" },
        { path: "carFuel", select: "carFuel" },
        { path: "carColor", select: "colorName" },
        { path: "carTransmission", select: "carTransmission" },
        { path: "otherLocations", select: "location" },
        { path: "mainLocation", select: "location" },
      ])
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCar = await Car.countDocuments(filter);

    res.json({
      success: true,
      data: populatedCars,
      pagination: {
        totalCar,
        currentPage: page,
        totalPages: Math.ceil(totalCar / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
const saveCarDamages = async (req, res) => {
  try {
    const { carId } = req.params;
    const { damages } = req.body; // expects array of { location, type, description }

    if (!damages || !Array.isArray(damages)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid damages data" });
    }

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    car.damages = damages; // Replace or append, depending on your logic
    await car.save();

    res.status(200).json({ success: true, message: "Damages saved", car });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
const saveCarFaqs = async (req, res) => {
  try {
    const { carId } = req.params;
    const { faqs } = req.body;

    if (!Array.isArray(faqs)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid FAQs data" });
    }

    const car = await Car.findById(carId);
    if (!car)
      return res.status(404).json({ success: false, message: "Car not found" });

    car.faqs = faqs; // replace or append
    await car.save();

    res.status(200).json({ success: true, message: "FAQs saved", car });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// GET /api/superadmin/cars
const getAllCarsForSuperAdmin = async (req, res) => {
  try {
    // Only allow SuperAdmin
    if (req.user.userType !== 1) {
      return res
        .status(403)
        .json({ success: false, message: "SuperAdmin only" });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    let statusFilter = req.query.status; // true | false | undefined

    // Convert query string to boolean if provided
    if (statusFilter === "true") statusFilter = true;
    else if (statusFilter === "false") statusFilter = false;
    else statusFilter = undefined;

    // Build filter object
    let filter = {};
    if (search) {
      filter.carName = { $regex: search, $options: "i" };
    }
    if (statusFilter !== undefined) {
      filter.isAvailable = statusFilter;
    }

    // Query cars
    const cars = await Car.find(filter)
      .populate("pricing", "prices")
      .populate("mainLocation", "location")
      .populate("admin", "name email")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCars = await Car.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: cars,
      pagination: {
        totalCars,
        currentPage: page,
        totalPages: Math.ceil(totalCars / limit),
      },
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

// ✅ Get all approved cars (status = true) with search + pagination
const getApprovedCarsAdminReservation = async (req, res) => {
  try {
    const search = req.query.search ? req.query.search.trim() : "";

    // ✅ Only approved cars
    let filter = { status: true };

    // ✅ Search filter
    if (search) {
      filter.$or = [
        { carName: { $regex: search, $options: "i" } },
        { plateNumber: { $regex: search, $options: "i" } },
      ];
    }

    // ✅ Query and populate
    const cars = await Car.find(filter)
      .populate([
        { path: "carBrand", select: "brandName" },
        { path: "carModel", select: "carModel" },
        { path: "carType", select: "carType" },
        { path: "carFuel", select: "carFuel" },
        { path: "carColor", select: "carColor" },
        { path: "carTransmission", select: "transmissionType" },
        { path: "mainLocation", select: "title location" },
        {
          path: "extraService",
          select: "name quantity price type description status",
        },
        {
          path: "pricing",
          select:
            "prices basePrice dailyPrice weeklyPrice monthlyPrice yearlyPrice",
        },
      ])
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: cars,
    });
  } catch (err) {
    console.error("Error fetching approved cars:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

module.exports = {
  addCar,
  updateCarFeatures,
  updateCarExtraService,
  getCar,
  quickSearchCar,
  getCarById,
  uploadCarFiles,
  getAllCarsForAdmin,
  saveCarDamages,
  saveCarFaqs,
  getAllCarsForSuperAdmin,
  getApprovedCarsAdminReservation,
  getAllCars,
};

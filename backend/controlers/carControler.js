const Car = require("../models/CarModule");

const addCar = async (req, res) => {
  try {
    const {
      carName,
      permalink,
      carType_id,
      carBrand_id,
      carModel_id,
      category,
      plateNumber,
      vinNumber,
      mainLocation,
      otherLocations,
      fuel_id,
      odometer,
      color_id,
      year,
      transmission_id,
      mileage,
      passengers,
      NoofSeats,
      airbags,
      noOfDoors,
    } = req.body;

    if (
      !carName ||
      !permalink ||
      !carType_id ||
      !carBrand_id ||
      !carModel_id ||
      !category ||
      !plateNumber ||
      !vinNumber ||
      !mainLocation ||
      !fuel_id ||
      !odometer ||
      !color_id ||
      !year ||
      !transmission_id ||
      !mileage ||
      !passengers ||
      !NoofSeats ||
      !airbags ||
      !noOfDoors
    ) {
      return res
        .status(400)
        .json({
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
      carType: carType_id,
      carBrand: carBrand_id,
      carModel: carModel_id,
      category,
      plateNumber,
      vinNumber,
      mainLocation,
      otherLocations: otherLocations ? JSON.parse(otherLocations) : [],
      carFuel: fuel_id,
      odometer,
      carColor: color_id,
      year,
      carTransmission: transmission_id,
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
    const { features } = req.body;

    if (!Array.isArray(features) || features.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Features must be an array of IDs" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    car.carFeatures = features;
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

    if (!Array.isArray(features) || features.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Features must be an array of IDs" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    car.extraService = extraService;
    await car.save();

    res.status(200).json({
      success: true,
      message: "Car extraServe updated successfully",
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


const uploadCarFiles = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ success: false, message: "Car not found" });

    const type = req.body.type; // 'documents', 'policies', or 'videos'

    if (!req.files || req.files.length === 0)
      return res.status(400).json({ success: false, message: "No files uploaded" });

    req.files.forEach(file => {
      if (type === "documents") car.carDocuments.push({ name: file.originalname, path: file.path });
      if (type === "policies") car.carPolicies.push({ name: file.originalname, path: file.path });
      if (type === "videos") car.carVideo.push({ name: file.originalname, path: file.path });
    });

    if (req.body.videoLink) car.videoLink = req.body.videoLink;

    await car.save();

    res.status(200).json({ success: true, message: "Files uploaded", car });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { uploadCarFiles };




const updateCarStatusByAdmin = async (req, res) => {
  try {
    if (req.user.userType !== 1)
      return res.status(403).json({ message: "SuperAdmin only" });

    const {status} = req.body
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
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({
      status: true,
      isAvailable: true,
      inRent: false,
    }).populate("carType carBrand carModel createdBy");
    res.json({ success: true, count: cars.length, cars });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

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

const getAllCar = async (req, res) => {
  try {
    const { type, minPrice, maxPrice, features, search } = req.query;

    let filter = { status: true };
    let cars = await Car.find(filter).populate("type").populate("features");

    if (type) {
      cars = cars.filter((car) =>
        car.type.carType.toLowerCase().includes(type.toLowerCase())
      );
    }
    if (features) {
      const featureArray = features.split(",").map((f) => f.toLowerCase());
      cars = cars.filter((car) => {
        if (!car.features || car.features.length === 0) return false;
        const carFeatureNames = car.features.map((f) => f.name.toLowerCase());
        return featureArray.every((f) => carFeatureNames.includes(f));
      });
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // 🔹 Availability (boolean)
    if (available) {
      filter.available = available === "true";
    }

    // 🔹 Date filter (optional)
    if (startDate && endDate) {
      filter.availableFrom = { $lte: new Date(startDate) };
      filter.availableTo = { $gte: new Date(endDate) };
    }

    // 🔹 General text search across multiple fields
    if (search) {
      filter.$or = [
        { type: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    res.status(200).json({ success: true, count: cars.length, cars });
  } catch (error) {
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

module.exports = {
  addCar,
  updateCarFeatures,
  updateCarExtraService,
  getCar,
  quickSearchCar,
  getCarById,
  uploadCarFiles
};

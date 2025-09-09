const Car = require("../models/CarModule");

const addCar = async (req, res) => {
  try {
    const data = req.body;

    const car = new Car(data);
    await car.save();

    res.status(201).json({ message: "Car added successfully", car });
  } catch (error) {
    res.status(400).json({ message: "Error adding car", error: error.message });
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
    const cars = await Car.find({ createdBy: req.user._id });
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
  updateCar,
  getAllCar,
  getCar,
  quickSearchCar,
  getCarById,
};

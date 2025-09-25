const Wishlist = require("../models/wishlistModel");
const Car = require("../models/CarModule");

const getWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    const wishlist = await Wishlist.findOne({ userId }).populate({
      path: "cars",
      select: "carName image mileage year", // ✅ use select instead of putting "carName" in path
      populate: [
        { path: "carTransmission", model: "CarTransmission" },
        { path: "pricing", model: "Pricing" },
        { path: "carBrand", model: "CarBrand" },
        { path: "mainLocation", model: "Location" },
        { path: "carSeats", model: "CarSeats" },
        { path: "carFuel", model: "CarFuel" },
      ],
    });

    const totalWishlist = await Wishlist.countDocuments({ userId });
    res.status(200).json({
      success: true,
      wishlist: wishlist.cars,
      pagination: {
        totalWishlist,
        currentPage: 1,
        totalPages: 1,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error!" });
  }
};

const toggleWishlist = async (req, res) => {
  try {
    const { carId } = req.body;
    const userId = req.user._id;

    if (!carId) {
      return res.status(400).json({ error: "carId is required" });
    }

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, cars: [carId] });
      await wishlist.save();
    } else if (wishlist.cars.includes(carId)) {
      wishlist.cars.pull(carId);
      await wishlist.save();
    } else {
      wishlist.cars.push(carId);
      await wishlist.save();
    }

    await wishlist.populate({
      path: "cars",
      select: "carName image mileage year",
      populate: [
        { path: "carTransmission", model: "CarTransmission" },
        { path: "pricing", model: "Pricing" },
        { path: "carBrand", model: "CarBrand" },
        { path: "mainLocation", model: "Location" },
        { path: "carSeats", model: "CarSeats" },
        { path: "carFuel", model: "CarFuel" },
      ],
    });

    res.json({
      success: true,
      wishlist: wishlist.cars,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getWishlist,
  toggleWishlist,
};

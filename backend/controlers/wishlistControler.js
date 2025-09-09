const Wishlist = require("../models/wishlistModel");
const Car = require("../models/CarModule");

const getWishlist = async (req, res) => {
  try {
    const { userId } = req.user._id;

    const wishlist = await Wishlist.findOne({ userId }).populate("car");

    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error!" });
  }
};

const toggleWishlist = async (req, res) => {
  try {
    const { carId } = req.body;
    const userId = req.user.id;

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, cars: [carId] });
      await wishlist.save();
      return res.json({ message: "Added to wishlist", wishlist });
    }

    if (wishlist.cars.includes(carId)) {
      wishlist.cars.pull(carId);
      await wishlist.save();
      return res.json({ message: "Removed from wishlist", wishlist });
    }

    wishlist.cars.push(carId);
    await wishlist.save();
    return res.json({ message: "Added to wishlist", wishlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getWishlist,
  toggleWishlist,
};

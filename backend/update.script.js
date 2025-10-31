const mongoose = require("mongoose");
const Car = require("./models/CarModule"); // adjust path

async function updateCars() {
  await mongoose.connect("mongodb://127.0.0.1:27017/DreamsRent", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const result = await Car.updateMany(
    { isDeleted: { $exists: false } }, // only update docs missing field
    { $set: { isDeleted: false } }
  );

  console.log("Updated Documents Count:", result.modifiedCount);
  await mongoose.disconnect();
}

updateCars().catch(console.error);

const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);

    console.log("Connected to Database");
  } catch (err) {
    console.error("Error connecting to Database:", err.message);
  }
};

module.exports = connectDB;

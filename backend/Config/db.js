const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://mayankgoyal6595_db_user:ISqnr282y5sMfMyz@cluster0.efzvaya.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);

    console.log("Connected to Database");
  } catch (err) {
    console.error("Error connecting to Database:", err.message);
  }
};

module.exports = connectDB;

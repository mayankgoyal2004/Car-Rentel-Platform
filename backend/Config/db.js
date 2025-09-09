const  mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/DreamsRent';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);

    console.log("Connected to Database");
  } catch (err) {
    console.error("Error connecting to Database:", err.message);

  }
};

module.exports = connectDB;

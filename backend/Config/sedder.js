const bcrypt = require("bcrypt");
const User = require("../models/userModel");

let saltRound = 12;

const adminSeeder = async () => {
  try {
    const admindata = await User.findOne({ email: "admin@gmail.com" });
    if (!admindata) {
      let adminobj = new User();
      adminobj.email = "admin@gmail.com";
      adminobj.password = await bcrypt.hash("admin123", saltRound);
      adminobj.userName = "Admin";
      adminobj.role = "68beb3b5dddeaf1d3e316889";
      adminobj.userType = 1;
      adminobj.status = true;
      adminobj.admin = "68bec47a36a09e2b06277211"
      await adminobj.save();
    }
    
  } catch (err) {
    console.error("Seeder Error:", err.message);
  }
};

module.exports = { adminSeeder };

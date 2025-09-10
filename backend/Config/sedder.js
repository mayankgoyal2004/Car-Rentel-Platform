const bcrypt = require("bcrypt");
const User = require("../models/userModel");

let saltRound = 12;

const superAdmin = async () => {
  try {
    const superadmindata = await User.findOne({
      email: "superAdmin@gmail.com",
    });
    if (!superadmindata) {
      let superadminobj = new User();
      superadminobj.email = "superadmin@gmail.com";
      superadminobj.password = await bcrypt.hash("admin123", saltRound);
      superadminobj.userName = "superAdmin";
      superadminobj.userType = 1;
      superadminobj.status = true;
      await superadminobj.save();
    }
  } catch (err) {
    console.error("Seeder Error:", err.message);
  }
};

module.exports = { superAdmin };

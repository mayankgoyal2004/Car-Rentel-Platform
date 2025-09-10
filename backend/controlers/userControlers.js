const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const customer = require("../models/customerModel");
const Package = require("../models/packageModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const saltround = 15;
const secretKey = "Protect@@@@";
const emailSecret = "EmailVerifySecret@@@";
const otpGenerator = require("otp-generator");

const generateVerificationToken = (user) => {
  const token = jwt.sign({ userId: user._id }, emailSecret, {
    expiresIn: "24h",
  });
  return token;
};
async function sendVerifyMail({ name, email, token }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "mayankgoyal6595@gmail.com",
      pass: "bmpzntwmrgtxbnum",
    },
  });

  const verificationLink = `http://localhost:5173/verify-email?token=${token}`;

  const mailOptions = {
    from: "mayankgoyal6595@gmail.com",
    to: email,
    subject: "Email Verification Link - Dream rents",
    html: `
      <div style="font-family:sans-serif;text-align:center;">
        <p>Hello ${name},</p>
        <p>Click the button below to verify your Email Address:</p>
        <a href="${verificationLink}" style="
          display:inline-block;
          padding:12px 24px;
          background-color:#7A7F34;
          color:white;
          text-decoration:none;
          font-weight:bold;
          border-radius:5px;
          margin-top:10px;
        ">Verify</a>
        <p>This link is valid for 24 hours. If you did not register, please ignore this email.</p>
        <b>Note: Your email verification link will expire in 24 hours.</b>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent to:", email);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
}
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    let validator = "";
    if (!name) validator += "Name is Required. ";
    if (!email) validator += "Email is Required. ";
    if (!password) validator += "Password is Required. ";
    if (validator) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: validator.trim(),
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: 409,
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltround);

    const newUser = new User({
      userName: name,
      email,
      password: hashedPassword,
      role: "user",
      status: false,
    });

    const verificationToken = generateVerificationToken(newUser);
    newUser.verificationToken = verificationToken;
    newUser.tokenExpirationTime = Date.now() + 24 * 60 * 60 * 1000;

    await newUser.save();
    const customerobj = new customer({
      name,
      email,
      userId: newUser._id,
    });

    await customerobj.save();

    sendVerifyMail({
      name: newUser.userName,
      email: newUser.email,
      token: verificationToken,
    });
    return res.json({
      status: 201,
      success: true,
      message: "User registered successfully. Verification email sent.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    let validator = "";
    const { email, password } = req.body;
    if (!password) validator += "Password is Required. ";
    if (!email) validator += "Email is Required. ";

    if (validator) {
      return res.json({
        status: 409,
        success: false,
        message: validator,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        status: 404,
        success: false,
        message: "User with this Email Address/Phone Number not Exists!",
      });
    }

    if (user.status === false) {
      return res.status(403).json({
        success: false,
        message:
          "Your email is not verified. Please verify your email to log in.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password!",
      });
    }
    const payload = {
      _id: user._id,
      name: user.userName,
      email: user.email,
      role: user.role,
      userType: user.userType,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    res.cookie("token", token);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      data: user,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Server error",
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    user.otp = otp;
    user.otpExpiration = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "mayankgoyal6595@gmail.com",
        pass: "bmpzntwmrgtxbnum",
      },
    });

    const mailOptions = {
      from: `"Dream rents" <${"mayankgoyal@gmail.com"}>`,
      to: email,
      subject: "Forget Password Verification Code",
      html: `
        <div style="font-family:sans-serif;">
          <p>Verification Code: <b>${otp}</b></p>
          <p><b>Note:</b> Your verification code will expire in 10 minutes.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully to your email",
      email, // return only email
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending OTP",
    });
  }
};
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.otp !== otp || user.otpExpiration < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, saltround);

    user.password = hashedPassword;

    user.otp = null;
    user.otpExpiration = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
};

const logout = async (req, res) => {
  try {
    // Clear token cookie
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while logging out",
    });
  }
};
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Verification token is required",
      });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, emailSecret); // emailSecret same as used in register
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token",
      });
    }
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.status === true) {
      return res.status(200).json({
        success: true,
        message: "Email already verified",
      });
    }
    if (user.tokenExpirationTime && user.tokenExpirationTime < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Verification token has expired",
      });
    }
    user.status = true;
    user.verificationToken = null;
    user.tokenExpirationTime = null;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Verify Email Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
const changePassword = async (req, res) => {
  try {
    validator = "";
    const { oldPassword, newPassword, confirmPassword, userId } = req.body;
    if (!oldPassword) validator += "Old Password is Required!";
    if (!newPassword) validator += "New password is Required!";
    if (!confirmPassword) validator += "Confirm Password is also Required!";
    if (!userId) validator += "User Id  is Required!";
    if (validator) {
      res.json({
        status: 409,
        success: false,
        message: validator,
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New Password and Confirm Password do not match!",
      });
    }
    if (newPassword == confirmPassword) {
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid Password!",
        });
      }
      const hashedPassword = await bcrypt.hash(newPassword, saltround);

      user.password = hashedPassword;
      await user.save();
      res.json({
        status: 200,
        success: true,
        message: "Password Successfully Updated!",
      });
    }
  } catch (error) {
    console.error("change password Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const { _id } = req.user;

    // Find the user
    const user = await User.findById(_id);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (req.body.userType) user.userType = req.body.userType;
    if (req.body.userName) user.userName = req.body.userName;
    if (req.body.email) user.email = req.body.email;
    if (req.body.contact) user.contact = req.body.contact;
    if (req.body.image) await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const adduserByadmin = async (req, res) => {
  try {
    const { name, role_id, email, contact, password, confirmPassword } =
      req.body;

    let validator = "";
    if (!name) validator += "Name is required. ";
    if (!email) validator += "Email is required. ";
    if (!password) validator += "Password is required. ";
    if (!confirmPassword) validator += "Confirm Password is required. ";
    if (!role_id) validator += "Role is required. ";
    if (password !== confirmPassword) validator += "Passwords do not match. ";

    if (validator) {
      return res.status(400).json({ success: false, message: validator });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltround);

    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path.replace(/\\/g, "/");
    }
    const newUser = new User({
      userName: name,
      email,
      contact,
      password: hashedPassword,
      role: role_id,
      userType: 2,
      status: true,
      image: imagePath,
      admin: req.user.admin,
      createdBy: req.user._id,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User added successfully by admin",
      user: newUser,
    });
  } catch (error) {
    console.error("Add user by admin error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
const updateUserByadmin = async (req, res) => {
  try {
    const { name, role_id, email, contact, password, confirmPassword, status } =
      req.body;

    let validator = "";
    if (!name) validator += "Name is required. ";
    if (!email) validator += "Email is required. ";
    if (!password) validator += "Password is required. ";
    if (!confirmPassword) validator += "Confirm Password is required. ";
    if (!role_id) validator += "Role is required. ";
    if (password !== confirmPassword) validator += "Passwords do not match. ";

    if (validator) {
      return res.status(400).json({ success: false, message: validator });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User not exist " });
    }
    const hashedPassword = await bcrypt.hash(password, saltround);

    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path.replace(/\\/g, "/");
    }
    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      {
        userName: name,
        email,
        contact,
        password: hashedPassword,
        role: role_id,
        userType: 2,
        status,
        image: imagePath,
      },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: "User added successfully by admin",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Add user by admin error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let validator = "";
    if (!name) validator += "Name is required. ";
    if (!email) validator += "Email is required. ";
    if (!password) validator += "Password is required. ";

    if (validator) {
      return res.status(400).json({ success: false, message: validator });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, saltround);

    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path.replace(/\\/g, "/");
    }
    let newUser = new User({
      userName: name,
      email,
      password: hashedPassword,
      userType: 2,
      status: true,
      image: imagePath,
    });

    newUser = await newUser.save();
    newUser.admin = newUser._id;
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User added successfully by admin",
      user: newUser,
    });
  } catch (error) {
    console.error("Add user by admin error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { _id } = req.user;
    const { name, email, contact, password, packageId } = req.body;
    const admin = await User.findById(_id);
    if (!admin || admin.userType !== 2) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    if (name) admin.userName = name;
    if (email) admin.email = email;
    if (contact) admin.contact = contact;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltround);
      admin.password = hashedPassword;
    }
    if (req.file) {
      admin.image = req.file.path.replace(/\\/g, "/");
    }
    if (packageId) {
      const pkg = await Package.findById(packageId);
      if (!pkg) {
        return res.status(400).json({
          success: false,
          message: "Invalid package ID",
        });
      }

      admin.package = pkg._id;
      admin.packageExpiration = new Date(
        Date.now() + pkg.duration * 24 * 60 * 60 * 1000 // duration in days
      );
    }

    await admin.save();

    return res.status(200).json({
      success: true,
      message: "Admin updated successfully",
      admin,
    });
  } catch (error) {
    console.error("Update Admin Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
  verifyEmail,
  changePassword,
  updateUserDetails,
  adduserByadmin,
  updateUserByadmin,
  registerAdmin,
  updateAdmin,
};

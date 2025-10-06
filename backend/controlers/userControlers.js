const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const customer = require("../models/customerModel");
const Package = require("../models/packageModel");
const bcrypt = require("bcrypt");
const axios = require("axios");
const nodemailer = require("nodemailer");
const saltround = 12;
const secretKey = "Protect@@@@";
const emailSecret = "EmailVerifySecret@@@";
const otpGenerator = require("otp-generator");
const RecaptchaSetting = require("../models/googleCaptchaModel");
const smtpSetting = require("../models/SMTPModel");

const generateVerificationToken = (user) => {
  const token = jwt.sign({ userId: user._id }, emailSecret, {
    expiresIn: "24h",
  });
  return token;
};
async function sendVerifyMail({ name, email, token }) {
  const SMTPSetting = await smtpSetting.findOne({});

  const transporter = nodemailer.createTransport({
    host: SMTPSetting.smtpHost,
    port: SMTPSetting.smtpPort,
    secure: true, // true for 465, false for 587
    auth: {
      user: SMTPSetting.fromEmail,
      pass: SMTPSetting.smtpPassword,
    },
  });

  const verificationLink = `http://localhost:5173/verify-email?token=${token}`;

  const mailOptions = {
    from: SMTPSetting.fromEmail,
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
    const { name, email, password, recaptchaToken } = req.body;

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
    const SMTPSetting = await smtpSetting.findOne({});
    const setting = await RecaptchaSetting.findOne({});
    if (setting?.status) {
      if (!recaptchaToken) {
        return res.status(400).json({
          success: false,
          message: "Captcha required",
        });
      }
      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${setting.secretKey}&response=${recaptchaToken}`
      );

      if (!recaptchaResponse.data.success) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "reCAPTCHA verification failed",
        });
      }
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
    const userStatus = SMTPSetting?.status ? false : true;

    const newUser = new User({
      userName: name,
      email,
      password: hashedPassword,
      status: userStatus,
    });
    let verificationToken;

    if (SMTPSetting?.status) {
      verificationToken = generateVerificationToken(newUser);
      console.log("Generated verification token:", verificationToken);

      newUser.verificationToken = verificationToken;
      newUser.tokenExpirationTime = Date.now() + 24 * 60 * 60 * 1000;
    }

    await newUser.save();
    const customerobj = new customer({
      name,
      email,
      userId: newUser._id,
      createdBy: newUser._id,
      admin: null,
    });

    await customerobj.save();
    if (SMTPSetting?.status) {
      sendVerifyMail({
        name: newUser.userName,
        email: newUser.email,
        token: verificationToken,
      });
    }

    return res.json({
      status: 201,
      success: true,
      message: SMTPSetting?.status
        ? "User registered successfully. Verification email sent."
        : "User registered successfully",
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
    const { email, password, recaptchaToken } = req.body;
    if (!password) validator += "Password is Required. ";
    if (!email) validator += "Email is Required. ";
    const setting = await RecaptchaSetting.findOne({});
    if (setting?.status) {
      if (!recaptchaToken) {
        return res.status(400).json({
          success: false,
          message: "Captcha required",
        });
      }

      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${setting.secretKey}&response=${recaptchaToken}`
      );

      if (!recaptchaResponse.data.success) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "reCAPTCHA verification failed",
        });
      }
    }
    if (validator) {
      return res.json({
        status: 409,
        success: false,
        message: validator,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
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
        message: "Invalid Credentials",
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
    const { email, recaptchaToken } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }
    const setting = await RecaptchaSetting.findOne({});
    if (setting?.status) {
      if (!recaptchaToken) {
        return res.status(400).json({
          success: false,
          message: "Captcha required",
        });
      }

      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${setting.secretKey}&response=${recaptchaToken}`
      );

      if (!recaptchaResponse.data.success) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "reCAPTCHA verification failed",
        });
      }
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
    const SMTPSetting = await smtpSetting.findOne({});
    if (!SMTPSetting?.status) {
      return res.status(400).json({
        success: false,
        message: "Password reset is disabled",
      });
    }
    const transporter = nodemailer.createTransport({
      host: SMTPSetting.smtpHost,
      port: SMTPSetting.smtpPort,
      auth: {
        user: SMTPSetting.fromEmail,
        pass: SMTPSetting.smtpPassword,
      },
    });

    const mailOptions = {
      from: SMTPSetting.fromEmail,
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
    const { email, otp, newPassword, recaptchaToken } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const setting = await RecaptchaSetting.findOne({});
    if (setting?.status) {
      if (!recaptchaToken) {
        return res.status(400).json({
          success: false,
          message: "Captcha required",
        });
      }

      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${setting.secretKey}&response=${recaptchaToken}`
      );

      if (!recaptchaResponse.data.success) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "reCAPTCHA verification failed",
        });
      }
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

// const logout = async (req, res) => {
//   try {
//     // Clear token cookie
//     res.clearCookie("token", {
//       httpOnly: true,
//       sameSite: "strict",
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Logged out successfully",
//     });
//   } catch (error) {
//     console.error("Logout Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong while logging out",
//     });
//   }
// };
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

    const updateData = {
      userName: req.body.userName,
      email: req.body.email,
      contact: req.body.contact,
    };

    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path.replace(/\\/g, "/");
      updateData.image = imagePath;
    }

    const user = await User.findByIdAndUpdate(_id, updateData, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });

    const existingCustomer = await customer.findOne({ userId: _id });

    const customerUpdateData = {
      userId: _id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      contact: req.body.contact,
      address: req.body.address,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
    };

    if (req.file) {
      customerUpdateData.image = imagePath;
    }

    const Customer = await customer.findOneAndUpdate(
      { userId: _id },
      customerUpdateData,
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: "Details updated",
      user,
      Customer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { _id } = req.user;
    if (!_id) return res.status(404).json({ error: "User not found" });
    const user = await User.findById(_id);
    const Customer = await customer.findOne({ userId: _id });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ user, Customer });
  } catch (err) {
    console.error(err);
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
      userType: 3,
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
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, saltround);
    }

    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path.replace(/\\/g, "/");
    }
    const updateFields = {
      userName: name,
      email,
      contact,
      role: role_id,
      userType: 2,
      status,
    };
    if (password) updateFields.password = hashedPassword;
    if (req.file) updateFields.image = imagePath;

    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      updateFields,
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
const getUserByAdmin = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const adminId = req.user.admin;
    const search = req.query.search || "";
    if (!adminId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }
    let filter = { admin: adminId };
    if (search) {
      filter.userName = { $regex: search, $options: "i" };
    }

    const user = await User.find(filter)
      .populate("role", "name")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalUser = await User.countDocuments(filter);
    res.json({
      success: true,
      data: user,
      pagination: {
        totalUser,
        currentPage: page,
        totalPages: Math.ceil(totalUser / limit),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

const deleteUserByAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Id is required",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "user not found!",
      });
    }

    await User.deleteOne({ _id: id });

    return res.status(200).json({
      success: true,
      status: 200,
      message: "user successfully deleted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Server Error",
    });
  }
};

const registerAdmin = async (req, res) => {
  try {
    const {
      ownerName,
      email,
      password,
      address,
      confirmPassword,
      recaptchaToken,
    } = req.body;

    if (!ownerName) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }
    if (!confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Confirm password is required" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }
    if (!address) {
      return res
        .status(400)
        .json({ success: false, message: "Business address is required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    if (!req.file) {
      return res
        .status(409)
        .json({ success: false, message: "Image is Required" });
    }

    const imagePath = req.file.path.replace(/\\/g, "/");

    const setting = await RecaptchaSetting.findOne({});
    if (setting?.status) {
      if (!recaptchaToken) {
        return res.status(400).json({
          success: false,
          message: "Captcha required",
        });
      }

      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${setting.secretKey}&response=${recaptchaToken}`
      );

      if (!recaptchaResponse.data.success) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "reCAPTCHA verification failed",
        });
      }
    }
    const hashedPassword = await bcrypt.hash(password, saltround);

    let newUser = new User({
      userName: ownerName,
      email,
      password: hashedPassword,
      userType: 2,
      status: true,
      address,
      image: imagePath,
    });

    newUser = await newUser.save();
    newUser.admin = newUser._id;
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "Business added successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Business added error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { _id } = req.user;
    const {
      name,
      email,
      contact,
      firstName,
      lastName,
      userName,
      password,
      address,
      packageId,
    } = req.body;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    if (name) user.userName = name;
    if (email) user.email = email;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (userName) user.userName = userName;
    if (contact) user.contact = contact;
    if (address) user.address = address;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltround);
      user.password = hashedPassword;
    }
    if (req.file) {
      user.image = req.file.path.replace(/\\/g, "/");
    }
    if (packageId) {
      const pkg = await Package.findById(packageId);
      if (!pkg) {
        return res.status(400).json({
          success: false,
          message: "Invalid package ID",
        });
      }

      user.package = pkg._id;
      user.packageExpiration = new Date(
        Date.now() + pkg.duration * 24 * 60 * 60 * 1000 // duration in days
      );
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Admin updated successfully",
      admin: user,
    });
  } catch (error) {
    console.error("Update Admin Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// PUT /api/admin/change-password
const changeAdminPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);

    // 1️⃣ Check current password
    try {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) throw new Error("Current password is incorrect");

      user.password = await bcrypt.hash(newPassword, saltround);
      await user.save();

      // ✅ Make sure to return here
      return res.status(200).json({
        success: true,
        message: "Password updated successfully",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  } catch (error) {
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
  verifyEmail,
  changePassword,
  updateUserDetails,
  adduserByadmin,
  updateUserByadmin,
  registerAdmin,
  updateAdmin,
  getUserByAdmin,
  deleteUserByAdmin,
  getUserDetails,
  changeAdminPassword,
};

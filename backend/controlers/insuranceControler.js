const Insurance = require("../models/insuranceModel");

// Add new insurance
const addInsurance = async (req, res) => {
  try {
    const { name, price, benefits } = req.body;
    if (!name || price == null) {
      return res
        .status(400)
        .json({ success: false, message: "Name & Price required" });
    }
    const insurance = new Insurance({
      name,
      price,
      benefits,
      createdBy: req.user._id,
      admin: req.user.admin,
    });
    await insurance.save();
    res.status(201).json({
      success: true,
      message: "Insurance added successfully",
      data: insurance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update insurance
const updateInsurance = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const insurance = await Insurance.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!insurance) {
      return res
        .status(404)
        .json({ success: false, message: "Insurance not found" });
    }
    res.json({
      success: true,
      message: "Insurance updated successfully",
      data: insurance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete insurance
const deleteInsurance = async (req, res) => {
  try {
    const { id } = req.params;
    const insurance = await Insurance.findByIdAndDelete(id);
    if (!insurance) {
      return res
        .status(404)
        .json({ success: false, message: "Insurance not found" });
    }
    res.json({ success: true, message: "Insurance deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get single insurance
const getInsurance = async (req, res) => {
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
      filter.name = { $regex: search, $options: "i" };
    }

    const insurance = await Insurance.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalInsurance = await Insurance.countDocuments(filter);

    res.json({
      success: true,
      data: insurance,
      pagination: {
        totalInsurance,
        currentPage: page,
        totalPages: Math.ceil(totalInsurance / limit),
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};

// Get all active insurance
const getAllActiveInsurance = async (req, res) => {
 try {
     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;
     const adminId = req.user.admin;
 
     if (!adminId) {
       return res.status(400).json({
         success: false,
         status: 400,
         message: "Id is required",
       });
     }
     const carType = await Insurance.find({ admin: adminId, status: true })
       .sort({ createdAt: -1 })
       .skip((page - 1) * limit)
       .limit(limit);
     const totalInsurance = await Insurance.countDocuments({
       admin: adminId,
       status: true,
     });
 
     res.json({
       success: true,
       data: carType,
       pagination: {
         totalInsurance,
         currentPage: page,
         totalPages: Math.ceil(totalInsurance / limit),
       },
     });
   } catch (err) {
     res
       .status(500)
       .json({ success: false, message: "Server Error", error: err.message });
   }
};

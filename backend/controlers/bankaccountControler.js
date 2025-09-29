const BankAccount = require("../models/bankAccountModel");
// Add new signature
const addBankAccount = async (req, res) => {
  try {
    const {
      bankName,
      accountNumber,
      isDefault,
      accountHolderName,
      branch,
      ifsc,
    } = req.body;

    if (!bankName || !accountNumber || !accountHolderName || !branch || !ifsc) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are required" });
    }

    if (isDefault) {
      await BankAccount.updateMany({}, { $set: { isDefault: false } });
    }

    const bankAccount = new BankAccount({
      bankName,
      accountNumber,
      accountHolderName,
      branch,
      ifsc,
      isDefault: isDefault,
      admin: req.user.admin,
    });

    await bankAccount.save();
    res.status(201).json({ success: true, data: bankAccount });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getBankAccount = async (req, res) => {
  const bankAccount = await BankAccount.find({ admin: req.user.admin });
  res.json({ success: true, data: bankAccount });
};
const getActiveBankAccount = async (req, res) => {
  const bankAccount = await BankAccount.findOne({
    admin: req.user.admin,
    isDefault: true,
  });
  res.json({ success: true, data: bankAccount });
};

const updateBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      bankName,
      accountNumber,
      isDefault,
      accountHolderName,
      branch,
      ifsc,
      status,
    } = req.body;

    let updateData = {
      bankName,
      accountNumber,
      accountHolderName,
      branch,
      ifsc,
      status,
    };

    if (isDefault) {
      await BankAccount.updateMany({}, { $set: { isDefault: false } });
      updateData.isDefault = true;
    }

    const updated = await BankAccount.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    await BankAccount.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Bank Account deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  deleteBankAccount,
  updateBankAccount,
  addBankAccount,
  getBankAccount,
  getActiveBankAccount,
};

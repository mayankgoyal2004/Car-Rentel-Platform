const Contact = require("../models/contactusmodel");

// 📌 Add Contact (user side)
const addContact = async (req, res) => {
  try {
    const { name, email, phone, comments } = req.body;
console.log("REQ BODY =>", req.body);

    if (!name || !email || !phone || !comments) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, phone, comments });
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact details submitted successfully",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

//  Get All Contacts (admin side)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// 📌 Delete Contact by ID (admin side)
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.status(200).json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

module.exports = { addContact, getAllContacts, deleteContact };

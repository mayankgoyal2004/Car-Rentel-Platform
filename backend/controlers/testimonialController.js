const Testimonial = require("../models/testromonialModel");

const addTestimonial = async (req, res) => {
  try {
    const { customer, rating, review } = req.body;

    if (!customer || !rating || !review) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const image = req.file ? req.file.path.replace(/\\/g, "/") : null;
    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "image is required" });
    }

    const testimonial = new Testimonial({
      customer,
      rating,
      review,
      image,
    });
    await testimonial.save();

    res.status(201).json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { customer, rating, review, status } = req.body;

    const updateData = { customer, rating, review, status };
    if (req.file) updateData.image = req.file.path.replace(/\\/g, "/");

    const testimonial = await Testimonial.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!testimonial)
      return res.status(404).json({ success: false, message: "Not found" });

    res.json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial)
      return res.status(404).json({ success: false, message: "Not found" });

    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getAllTestimonialsAdmin = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search || "";

    let filter = {};
    if (search) {
      filter.customer = { $regex: search, $options: "i" };
    }

    const testimonials = await Testimonial.find(filter)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Testimonial.countDocuments(filter);

    res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      testimonials,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

getTestimonialsPublic = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const testimonials = await Testimonial.find({ status: true })
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Testimonial.countDocuments({ status: true });

    res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      testimonials,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

getHomepageTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ status: true })
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({ success: true, testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addTestimonial,
  updateTestimonial,
  getAllTestimonialsAdmin,
  getHomepageTestimonials,
  deleteTestimonial,
  getTestimonialsPublic,
};

const multer = require("multer");
const path = require("path");

const blogStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/blog");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    let baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});

const blogUpload = multer({ storage: blogStorage });

//driver upload section
const driverStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/drivers");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|doc|svg|docx/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only images (jpeg, jpg, png) and documents (pdf, doc, docx) are allowed!"
      )
    );
  }
};
const driverUpload = multer({
  storage: driverStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const customerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/customers");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const customerUpload = multer({
  storage: customerStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});
const companyStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/company");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const companyUpload = multer({
  storage: companyStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const carBrand = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/carBrand");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const carBrandUpload = multer({
  storage: carBrand,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const location = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/location");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const locationUpload = multer({
  storage: location,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const carImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/carImage");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const carImageUpload = multer({
  storage: carImage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const userImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/userImage");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const userImageUpload = multer({
  storage: userImage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const testimonial = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/testimonials");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const testimonialUpload = multer({
  storage: testimonial,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

const bussinessLogo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/businessImage");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const bussinessLogoUpload = multer({
  storage: bussinessLogo,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});
const invoiceLogo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/invoiceLogo");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const InvoiceLogoUpload = multer({
  storage: invoiceLogo,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});
const signatureImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/signature");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const signatureUpload = multer({
  storage: signatureImage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});
const companyImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/company");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const companyImageUpload = multer({
  storage: companyImage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});
const carfiles = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/carFiles");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + baseName + ext);
  },
});
const carFileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|doc|docx|mp4|mov|avi|mkv|webm/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype.toLowerCase());

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only images, documents, and videos (mp4, mov, avi, mkv, webm) are allowed!"
      )
    );
  }
};

const carFilesUpload = multer({
  storage: carfiles,
  limits: { fileSize: 50 * 1024 * 1024 }, // 🚀 Allow up to 50MB
  fileFilter: carFileFilter,
});

module.exports = {
  carFilesUpload,
  blogUpload,
  driverUpload,
  customerUpload,
  companyUpload,
  carBrandUpload,
  locationUpload,
  carImageUpload,
  userImageUpload,
  testimonialUpload,
  bussinessLogoUpload,
  InvoiceLogoUpload,
  signatureUpload,
  companyImageUpload,
};

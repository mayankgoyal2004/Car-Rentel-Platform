const express = require("express");
const userRoute = require("../controlers/userControlers");
const { authUser, checkPermission } = require("../middlewares/auth");
const blogComments = require("../controlers/blogComments");
const BlogCategory = require("../controlers/blogCategory");
const blogTags = require("../controlers/BlogTags");
const blog = require("../controlers/blogControler");
const upload = require("../middlewares/upload");
const driver = require("../controlers/driverControler");
const customer = require("../controlers/customercontroler");
const company = require("../controlers/CompanyControler");
const country = require("../controlers/countryControler");
const state = require("../controlers/stateControler");
const carBrand = require("../controlers/CarAtributesControler/carBrandControler");
const city = require("../controlers/cityControler");
const carType = require("../controlers/CarAtributesControler/carTypeControler");
const carModel = require("../controlers/CarAtributesControler/CarModelControler");
const carTransmission = require("../controlers/CarAtributesControler/carTransmissionControler");
const carFuel = require("../controlers/CarAtributesControler/carFuelController");
const carColor = require("../controlers/CarAtributesControler/carColorControler");
const carSteering = require("../controlers/CarAtributesControler/carSteeringControler");
const carSeats = require("../controlers/CarAtributesControler/carSeatsControler");
const carCylinder = require("../controlers/CarAtributesControler/carCylinderControler");
const carDoors = require("../controlers/CarAtributesControler/carDoorsControler");
const carFeatures = require("../controlers/CarAtributesControler/carFeaturesControler");
const carSafetyFeature = require("../controlers/CarAtributesControler/carSafetyFeatureController");
const extraService = require("../controlers/extraServiceControler");
const seasonalPricing = require("../controlers/seasonalPricingControler");
const location = require("../controlers/locationControler");
const pricing = require("../controlers/PricingControler");
const damage = require("../controlers/damageController");
const carFaq = require("../controlers/carFaqController");
const car = require("../controlers/carControler");
const wishlist = require("../controlers/wishlistControler");
const enquiry = require("../controlers/enquiryControler");
const carReview = require("../controlers/carReviewControler");
const role = require("../controlers/RoleControler");
const testimonial = require("../controlers/testimonialController");
const faqCategory = require("../controlers/faqCategoryControler");
const faq = require("../controlers/faqControler");

const route = express.Router();

route.post("/register", userRoute.register);
route.post("/login", userRoute.login);
route.post("/forgot-password", userRoute.forgotPassword);
route.post("/reset-password", userRoute.resetPassword);

route.use(authUser);
route.post("/logout", userRoute.logout);
route.post("/verify-email", userRoute.verifyEmail);
route.post("/change-password", userRoute.changePassword);
route.post("/update-user", userRoute.updateUserDetails);
route.post(
  "/add-user-admin",
  authUser,
  upload.userImageUpload.single("image"),
  userRoute.adduserByadmin
);
route.post(
  "/update-user-by admin",
  authUser,
  upload.userImageUpload.single("image", userRoute.updateUserByadmin)
);

// !!comment route for blogs
route.post("/blogs/comments/:blogId", authUser, blogComments.createComment);
route.get("/blogs/get-all-comments", authUser, blogComments.getAllComments);
route.get("/blogs/get-comments/:blogId", blogComments.getCommentBlog);
route.put("/blogs/comments/status", blogComments.updateCommentStatus);
route.delete("/blogs/comments/delete/:id", blogComments.deleteBlogComment);

// !!Category route for blog
route.post(
  "/blogs/category",
  authUser,
  checkPermission("blogCategory", "create"),
  BlogCategory.addBlogCategory
);
route.post(
  "/blogs/update-category",
  checkPermission("blogCategory", "edit"),
  BlogCategory.updateBlogCategory
);
route.get(
  "/blogs/get-all-blog-category",
  authUser,
  checkPermission("blogCategory", "view"),
  BlogCategory.getAllBlogCategory
);
route.delete(
  "/blogs/category-delete/:id",
  checkPermission("blogCategory", "delete"),
  BlogCategory.deleteBlogCategory
);
route.get(
  "/blogs/all-active-category",
  checkPermission("blogCategory", "view"),
  BlogCategory.getAllActiveBlogCategory
);

// !!teg route for blog
route.post(
  "/blogs/tag",
  authUser,
  checkPermission("tag", "create"),
  blogTags.addBlogTag
);
route.post(
  "/blogs/update-tag",
  authUser,
  checkPermission("tag", "edit"),
  blogTags.updateBlogTag
);
route.get(
  "/blogs/get-all-blog-tag",
  authUser,
  checkPermission("tag", "view"),
  blogTags.getAllBlogTag
);
route.delete(
  "/blogs/tag-delete/:id",
  authUser,
  checkPermission("tag", "delete"),
  blogTags.deleteBlogTag
);
route.get("/blog-all-active-tags", authUser, checkPermission("tag", "view"));
//!!blog routes
route.post(
  "/blogs/add",
  authUser,
  upload.blogUpload.single("image"),
  blog.addBlog
);
route.get("/blogs/get-blogs", blog.getBlogs);
route.get("/blogs/get-all-blogs", authUser, blog.getAllBlog);
route.get("/blogs/get-single-blog", blog.getsingleblog);
route.post(
  "/blogs/update-blog",
  authUser,
  upload.blogUpload.single("image"),
  blog.updateblog
);
route.delete("/blogs/delete-blog/:id", authUser, blog.deleteblog);
route.post("/blogs/update-blog-status", blog.updateBlogStatus);

// !!driver route
route.post(
  "/add-driver",
  authUser,
  upload.driverUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  driver.addDriver
);
route.post(
  "/update-driver/:id",
  upload.driverUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  driver.updateDriver
);
route.delete("/delete-driver/:id", driver.deleteDriver);
route.get("/get-all-driver", authUser, driver.getAllDriver);

//!!customer routes
route.post(
  "/add-customer",
  authUser,
  upload.customerUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  customer.addCustomer
);
route.post(
  "/update-customer/:id",
  upload.customerUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  customer.updateCustomer
);
route.delete("/delete-customer/:id", authUser, customer.deleteCustomer);
route.get("/get-all-customer", authUser, customer.getAllcustomer);

// !! company routes

route.post(
  "/add-company",
  authUser,
  upload.companyUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  company.addCompany
);
route.post(
  "/update-company/:id",
  upload.companyUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  company.updateCompany
);
route.delete("/delete-company/:id", authUser, company.deleteCompany);
route.get("/get-all-company", authUser, company.getAllCompany);

// !! country routes

route.post("/add-country", authUser, country.addCountry);
route.post(
  "/update-country/:id",

  country.updateCountry
);
route.delete("/delete-country/:id", authUser, country.deleteCountry);
route.get("/get-all-country", authUser, country.getAllCountry);

//!! state  routes

route.post("/add-state", authUser, state.addState);
route.post(
  "/update-state/:id",

  state.updateState
);
route.delete("/delete-state/:id", authUser, state.deleteState);
route.get("/get-all-state", authUser, state.getAllState);
route.get("/get-state-by-country", authUser, state.getStatesByCountry);

//!city routes
route.post("/add-city", authUser, city.addCity);
route.post(
  "/update-city/:id",

  city.updateCity
);
route.delete("/delete-city/:id", authUser, city.deleteCity);
route.get("/get-all-city", authUser, city.getAllCity);
route.get("/get-city-by-state", authUser, city.getCitiesByState);

//!!location route
route.post(
  "/add-location",
  authUser,
  upload.locationUpload.single("image"),
  location.addLocation
);
route.post(
  "/add-update-location",
  authUser,
  upload.locationUpload.single("image"),
  location.updateLocation
);

route.delete("/delete-location", authUser, location.deleteLocation);

//!! car attributes router

//!! car brand route
route.post(
  "/add-car-brand",
  authUser,
  upload.carBrandUpload.single("image"),
  carBrand.addCarBrand
);
route.post(
  "/update-car-brand/:id",

  carBrand.updateCarBrand
);
route.delete("/delete-car-brand/:id", authUser, carBrand.deleteBrand);
route.get("/get-all-car-brand", authUser, carBrand.getAllBrand);

//!! car type route
route.post("/add-car-type", authUser, carType.addCarType);
route.post(
  "/update-car-type/:id",

  carType.updateCarType
);
route.delete("/delete-car-type/:id", authUser, carType.deleteCarType);
route.get("/get-all-car-type", authUser, carType.getAllCarTypes);

//!! car model routes

route.post("/add-car-model", authUser, carModel.addCarModel);
route.post(
  "/update-car-model/:id",

  carModel.updateCarModel
);
route.delete("/delete-car-model/:id", authUser, carModel.deleteCarModel);
route.get("/get-all-car-model", authUser, carModel.getAllCarModel);

//!! car Transmission route
route.post(
  "/add-car-transmission",
  authUser,
  carTransmission.addCarTransmission
);
route.post(
  "/update-car-transmission/:id",

  carTransmission.updateCarTransmission
);
route.delete(
  "/delete-car-transmission/:id",
  authUser,
  carTransmission.deleteCarTransmission
);
route.get(
  "/get-all-car-transmission",
  authUser,
  carTransmission.getAllCarTransmission
);

//!! car fuel route
route.post("/add-car-fuel", authUser, carFuel.addCarFuel);
route.post(
  "/update-car-fuel/:id",

  carFuel.updateCarFuel
);
route.delete("/delete-car-fuel/:id", authUser, carFuel.deleteCarFuel);
route.get("/get-all-car-fuel", authUser, carFuel.getAllCarFuel);

//!! car color routes
route.post("/add-car-color", authUser, carColor.addCarColor);
route.post("/update-car-color/:id", authUser, carColor.updateCarColor);
route.delete("/delete-car-color/:id", authUser, carColor.deleteCarColor);
route.get("/get-all-car-color", authUser, carColor.getAllCarColor);

//!! car steering routes
route.post("/add-car-steering", authUser, carSteering.addCarSteering);
route.post("/update-car-steering/:id", authUser, carSteering.updateCarSteering);
route.delete(
  "/delete-car-steering/:id",
  authUser,
  carSteering.deleteCarSteering
);
route.get("/get-all-car-steering", authUser, carSteering.getAllCarSteering);

//!! car seats routes
route.post("/add-car-seats", authUser, carSeats.addCarSeats);
route.post("/update-car-seats/:id", authUser, carSeats.updateCarSeats);
route.delete("/delete-car-seats/:id", authUser, carSeats.deleteCarSeats);
route.get("/get-all-car-seats", authUser, carSeats.getAllCarSeats);

//!! car cylinder routes
route.post("/add-car-cylinder", authUser, carCylinder.addCarCylinder);
route.post("/update-car-cylinder/:id", authUser, carCylinder.updateCarCylinder);
route.delete(
  "/delete-car-cylinder/:id",
  authUser,
  carCylinder.deleteCarCylinder
);
route.get("/get-all-car-cylinder", authUser, carCylinder.getAllCarCylinder);

//!! car doors routes
route.post("/add-car-doors", authUser, carDoors.addCarDoors);
route.post("/update-car-doors/:id", authUser, carDoors.updateCarDoors);
route.delete("/delete-car-doors/:id", authUser, carDoors.deleteCarDoors);
route.get("/get-all-car-doors", authUser, carDoors.getAllCarDoors);

//!! car features routes
route.post("/add-car-feature", authUser, carFeatures.addCarFeature);
route.post("/update-car-feature/:id", authUser, carFeatures.updateCarFeature);
route.delete("/delete-car-feature/:id", authUser, carFeatures.deleteCarFeature);
route.get("/get-all-car-features", authUser, carFeatures.getAllCarFeatures);

//!! car safety features routes
route.post("/add-safety-feature", authUser, carSafetyFeature.addSafetyFeature);
route.post(
  "/update-safety-feature/:id",
  authUser,
  carSafetyFeature.updateSafetyFeature
);
route.delete(
  "/delete-safety-feature/:id",
  authUser,
  carSafetyFeature.deleteSafetyFeature
);
route.get(
  "/get-all-safety-features",
  authUser,
  carSafetyFeature.getAllSafetyFeatures
);

//!extra service

route.post("/add-extra-service", authUser, extraService.addExtraService);
route.post(
  "/update-extra-service/:id",
  authUser,
  extraService.updateExtraService
);
route.delete(
  "/delete-extra-service/:id",
  authUser,
  extraService.deleteExtraService
);
route.get(
  "/get-all-extra-services",
  authUser,
  extraService.getAllExtraServices
);

//! seasional pricing route
route.post(
  "/add-seasonal-pricing",
  authUser,
  seasonalPricing.addSeasonalPricing
);
route.post(
  "/update-seasonal-pricing/:id",
  authUser,
  seasonalPricing.updateSeasonalPricing
);
route.delete(
  "/delete-seasonal-pricing/:id",
  authUser,
  seasonalPricing.deleteSeasonalPricing
);
route.get(
  "/get-all-seasonal-pricing",
  authUser,
  seasonalPricing.getAllSeasonalPricing
);

//!!pricing module
route.post("/add-pricing", authUser, pricing.addPricing);

//!damage route
route.post("/add-damage", authUser, damage.addDamage);
route.get("/get-all-damages", authUser, damage.getAllDamages);
route.delete("/get-damages/:id", authUser, damage.deleteDamage);

//! car Faq
route.post("/add-carFaq", authUser, carFaq.addCarFaq);
route.get("/get-all-carFaq", authUser, carFaq.getCarFaqs);

//!! car controler
route.post("/add-Car", authUser, car.addCar);
route.get("/get-quick-car", car.quickSearchCar);
route.get("/get-all-car", car.getAllCar);
route.get("/get-car-by/:id", car.getCarById);

//!! wishlist
route.post("/toggle-wishlist", authUser, wishlist.toggleWishlist);
route.get("/get-wishlist", authUser, wishlist.getWishlist);

//!! Enquiry

route.post("/add-enquiry", authUser, enquiry.addEnquiry);
route.get("/get-enquiry", authUser, enquiry.getallEnquiry);
route.delete("/delete-enquiry/:id", authUser, enquiry.deleteEnquiry);

//!! carReview

route.post("/add-car-review", authUser, carReview.addCarReview);
route.get("/get-all-review-admin", authUser, carReview.allReviewByAdmin);
route.get("/get-all-review-user", authUser, carReview.allReviewByUser);
route.delete("/delete-car-review/:id", authUser, carReview.deleteCarReview);

//!! role route

route.post("/add-roll", authUser, role.addRole);
route.get("/get-role", authUser, role.getRole);
route.post("/assign-role", authUser, role.assignRole);

//!! testimonial route

route.post(
  "/add-testimonial",
  upload.testimonialUpload.single("image"),
  testimonial.addTestimonial
);
route.post(
  "/update-testimonial/:id",
  upload.testimonialUpload.single("image"),
  testimonial.updateTestimonial
);
route.delete("/delete/testimonial/:id", testimonial.deleteTestimonial);
route.get("/get-all-testimonial-admin", testimonial.getAllTestimonialsAdmin);
route.get("/get-all-testimonial-user", testimonial.getTestimonialsPublic);
route.get("/get-all-testimonial-homepage", testimonial.getHomepageTestimonials);

//!! faq category

route.post("/add-faq-category", authUser, faqCategory.addFaqCategory);
route.post("/update-faq-category/:id", authUser, faqCategory.updateFaqCategory);
route.get("/get-all-faq-category", authUser, faqCategory.getAllFaqCategory);
route.get(
  "/get-all-active-faq-category",
  authUser,
  faqCategory.getAllActiveFaqCategory
);
route.delete(
  "/delete-faq-category/:id",
  authUser,
  faqCategory.deleteFaqCategory
);

//!! faq router

route.post("/add-faq", authUser, faq.addFaq);
route.post("/update-faq/:id", authUser, faq.updateFaq);
route.get("/get-all-faq", authUser, faq.getAllFaqsAdmin);
route.get("/get-all-active-faq", authUser, faq.getActiveFaqs);
route.get("/get-all-active-faq-homepage", authUser, faq.getHomepageFaqs);
route.delete("/delete-faq-category/:id", authUser, faq.deleteFaq);

module.exports = route;

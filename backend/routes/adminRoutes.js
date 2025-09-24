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
const checkSubscription = require("../middlewares/checkPermission");
const reservation = require("../controlers/reservationControler");
const contact = require("../controlers/contactUsControler");

const route = express.Router();

route.post("/register", userRoute.register);
route.post("/login", userRoute.login);
route.post("/forgot-password", userRoute.forgotPassword);
route.post("/reset-password", userRoute.resetPassword);
route.post(
  "/register-admin",
  upload.bussinessLogoUpload.single("logo"),
  userRoute.registerAdmin
);
route.post("/verify-email", userRoute.verifyEmail);

//!! get testimonial for public without authentication
route.get("/get-all-testimonial-user", testimonial.getTestimonialsPublic);
route.get("/get-all-testimonial-homepage", testimonial.getHomepageTestimonials);

//!! comments api blog
route.get("/blogs/get-all-comments-user/:blogId", blogComments.getCommentBlog);

//!! car
route.get("/car-details-user/:id", car.getSingleCarUser);
route.get("/car-review/:carId", carReview.getCarReviews);

//!! get all faq for public without authentication
route.get("/get-all-active-faq", faq.getActiveFaqs);
route.get("/get-all-active-faq-homepage", faq.getHomepageFaqs);
route.get(
  "/blogs/all-active-category-home",
  BlogCategory.getAllActiveBlogCategoryHomePage
);

//!! get all cars api
route.get("/all-cars-home-page", car.getAllCars);
//!!contact
route.post("/add-constact", contact.addContact);

//!! blog
route.get("/blogs/user", blog.getBlogForUser);
route.get("/blogs/get-single-blog-user/:slug", blog.getsingleblogForUser);

route.use(authUser);
route.post("/logout", userRoute.logout);

route.post("/change-password", userRoute.changePassword);
route.post(
  "/update-user-details",
  upload.userImageUpload.single("image"),
  userRoute.updateUserDetails
);
route.post(
  "/update-admin",
  upload.userImageUpload.single("image"),
  userRoute.updateAdmin
);
route.post(
  "/add-user-admin",
  upload.userImageUpload.single("image"),
  userRoute.adduserByadmin
);
route.post("/update-admin-password", userRoute.changeAdminPassword);
route.get(
  "/get-user-by-admin",
  checkPermission("user", "view"),
  userRoute.getUserByAdmin
);
route.get("/get-user-details", userRoute.getUserDetails);
route.post(
  "/update-user-by-admin",

  upload.userImageUpload.single("image"),
  userRoute.updateUserByadmin
);
route.delete(
  "/user-delete/:id",
  checkPermission("user", "delete"),
  userRoute.deleteUserByAdmin
);

// !!comment route for blogs
route.post(
  "/blogs/comments/:blogId",
  checkPermission("Blog", "create"),
  blogComments.createComment
);
route.get(
  "/blogs/get-comments-admin",
  checkPermission("Blog", "view"),
  blogComments.getAllComments
);
route.delete(
  "/blogs/comments/delete/:id",
  checkPermission("Blog", "delete"),
  blogComments.deleteBlogComment
);

// !!Category route for blog
route.post(
  "/blogs/category",
  checkPermission("Blog", "create"),
  BlogCategory.addBlogCategory
);
route.post(
  "/blogs/update-category",
  checkPermission("Blog", "edit"),
  BlogCategory.updateBlogCategory
);
route.get(
  "/blogs/get-all-blog-category",
  checkPermission("Blog", "view"),
  BlogCategory.getAllBlogCategory
);
route.delete(
  "/blogs/category-delete/:id",
  checkPermission("Blog", "delete"),
  BlogCategory.deleteBlogCategory
);
route.get("/blogs/all-active-category", BlogCategory.getAllActiveBlogCategory);
route.get(
  "/blog-all-category-superadmin",
  checkPermission("Blog", "assignPackage", true),
  blogTags.getAllBlogTagSuperAdmin
);

// !!teg route for blog
route.post(
  "/blogs/tag",

  checkPermission("Blog", "create"),
  blogTags.addBlogTag
);
route.post(
  "/blogs/update-tag",

  checkPermission("Blog", "edit"),
  blogTags.updateBlogTag
);
route.get(
  "/blogs/get-all-blog-tag",

  checkPermission("Blog", "view"),
  blogTags.getAllBlogTag
);
route.delete(
  "/blogs/tag-delete/:id",

  checkPermission("Blog", "delete"),
  blogTags.deleteBlogTag
);
route.get(
  "/blog-all-active-tags",
  checkPermission("Blog", "view"),
  blogTags.getAllActiveBlogTag
);
route.get(
  "/blog-all-tags-superadmin",
  checkPermission("admin", "assignPackage", true),
  blogTags.getAllBlogTagSuperAdmin
);

//!!blog routes
route.post(
  "/blogs/add",
  checkPermission("Blog", "create"),
  upload.blogUpload.single("image"),
  blog.addBlog
);
route.get(
  "/blog-all-blogs-superadmin",
  checkPermission("admin", "assignPackage", true),
  blog.getBlogAllBlogForSuperAdmin
);

route.get(
  "/blogs/get-all-blogs",
  checkPermission("Blog", "view"),
  blog.getAllBlog
);

route.post(
  "/blogs/update-blog",
  checkPermission("Blog", "update"),
  upload.blogUpload.single("image"),
  blog.updateblog
);
route.get("/blogs/get-single-blog-admin/:id", blog.getsingleblogForAdmin);

route.delete(
  "/blogs/delete-blog/:id",
  checkPermission("Blog", "delete"),
  blog.deleteblog
);

// !!driver route
route.post(
  "/add-driver",
  checkPermission("Driver", "create"),
  upload.driverUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  driver.addDriver
);
route.post(
  "/update-driver/:id",
  checkPermission("Driver", "edit"),
  upload.driverUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  driver.updateDriver
);
route.delete(
  "/delete-driver/:id",
  checkPermission("Driver", "delete"),
  driver.deleteDriver
);
route.get(
  "/get-all-driver",
  checkPermission("Driver", "view"),
  driver.getAllDriver
);
route.get(
  "/get-5-latest-driver",
  checkPermission("Driver", "view"),
  driver.getAllDriver
);
route.get(
  "/get-all-active-driver",
  checkPermission("Driver", "view"),
  driver.getAllActiveDriver
);

//!!customer routes
route.post(
  "/add-customer",
  checkPermission("Customer", "create"),
  upload.customerUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  customer.addCustomer
);
route.post(
  "/update-customer/:id",
  checkPermission("Customer", "edit"),

  upload.customerUpload.fields([
    { name: "image", maxCount: 1 }, // 1 profile image
    { name: "file", maxCount: 1 }, // 1 license image
  ]),
  customer.updateCustomer
);
route.delete(
  "/delete-customer/:id",
  checkPermission("Customer", "delete"),
  customer.deleteCustomer
);
route.get(
  "/get-all-customer",
  checkPermission("Customer", "view"),
  customer.getAllcustomer
);
route.get(
  "/get-all-customer-super-admin",

  customer.getAllCustomerSuperAdmin
);
route.get(
  "/get-all-owner-super-admin",

  customer.getAllOwner
);
route.get(
  "/chat/:receiverId",

  customer.getMessage
);
route.get(
  "/get-all-message-by-customer",

  customer.getCustomerByMessage
);
route.get(
  "/get-5-customer-admin",
  checkPermission("Customer", "view"),
  customer.getLatest5Customers
);
route.get(
  "/get-customer-by-id/:id",
  checkPermission("Customer", "view"),
  customer.getCustomerbyId
);
route.get(
  "/get-all-active-customer",
  checkPermission("Customer", "view"),
  customer.getallActiveCustomers
);

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

route.post(
  "/add-country",
  checkPermission("location", "create"),
  country.addCountry
);
route.post(
  "/update-country/:id",
  checkPermission("location", "edit"),
  country.updateCountry
);
route.delete(
  "/delete-country/:id",
  checkPermission("location", "delete"),
  country.deleteCountry
);
route.get(
  "/get-all-country",
  checkPermission("location", "view"),
  country.getAllCountry
);
route.get(
  "/get-all-active-country",
  checkPermission("location", "view"),
  country.getAllActiveCountry
);

//!! state  routes

route.post("/add-state", checkPermission("location", "create"), state.addState);
route.post(
  "/update-state/:id",
  checkPermission("location", "edit"),
  state.updateState
);
route.delete(
  "/delete-state/:id",
  checkPermission("location", "delete"),
  state.deleteState
);
route.get(
  "/get-all-state",
  checkPermission("location", "view"),
  state.getAllState
);
route.get(
  "/get-state-by-country/:countryId",
  checkPermission("location", "view"),
  state.getStatesByCountry
);
route.get(
  "/get-all-active-state",
  checkPermission("location", "view"),
  state.getAllActiveState
);

//!city routes
route.post("/add-city", checkPermission("location", "create"), city.addCity);
route.post(
  "/update-city/:id",
  checkPermission("location", "edit"),
  city.updateCity
);
route.delete(
  "/delete-city/:id",
  checkPermission("location", "delete"),
  city.deleteCity
);
route.get(
  "/get-all-city",
  checkPermission("location", "view"),
  city.getAllCity
);
route.get(
  "/get-city-by-state/:stateId",
  checkPermission("location", "view"),
  city.getCitiesByState
);
route.get(
  "/get-all-active-city",
  checkPermission("location", "view"),
  city.getAllActiveCity
);

//!!location route
route.post(
  "/add-location",
  checkPermission("location", "create"),
  upload.locationUpload.single("image"),
  location.addLocation
);
route.post(
  "/update-location/:id",
  checkPermission("location", "edit"),
  upload.locationUpload.single("image"),
  location.updateLocation
);

route.delete(
  "/delete-location/:id",
  checkPermission("location", "delete"),
  location.deleteLocation
);
route.get(
  "/get-all-location",
  checkPermission("location", "view"),
  location.getAllLocation
);
route.get(
  "/get-all-active-location",
  checkPermission("location", "view"),
  location.getAllActiveLocation
);

//!! car attributes router

//!! car brand route
route.post(
  "/add-car-brand",
  checkPermission("Car", "create"),
  upload.carBrandUpload.single("image"),
  carBrand.addCarBrand
);
route.post(
  "/update-car-brand/:id",
  checkPermission("Car", "edit"),
  upload.carBrandUpload.single("image"),

  carBrand.updateCarBrand
);
route.delete(
  "/delete-car-brand/:id",
  checkPermission("Car", "delete"),
  carBrand.deleteBrand
);
route.get(
  "/get-all-car-brand",
  checkPermission("Car", "view"),
  carBrand.getAllBrand
);
route.get(
  "/get-all-active-car-brand",
  checkPermission("Car", "view"),
  carBrand.getAllBrand
);

//!! car type route
route.post(
  "/add-car-type",
  checkPermission("Car", "create"),
  carType.addCarType
);
route.post(
  "/update-car-type/:id",
  checkPermission("Car", "edit"),

  carType.updateCarType
);
route.delete(
  "/delete-car-type/:id",
  checkPermission("Car", "delete"),
  carType.deleteCarType
);
route.get(
  "/get-all-car-types",
  checkPermission("Car", "view"),
  carType.getAllCarTypes
);
route.get(
  "/get-all-active-car-type",
  checkPermission("Car", "view"),
  carType.getAllActiveCarType
);

//!! car model routes

route.post(
  "/add-car-model",
  checkPermission("Car", "create"),
  carModel.addCarModel
);
route.post(
  "/update-car-model/:id",
  checkPermission("Car", "edit"),
  carModel.updateCarModel
);
route.delete(
  "/delete-car-model/:id",
  checkPermission("Car", "view"),
  carModel.deleteCarModel
);
route.get(
  "/get-all-car-model",
  checkPermission("Car", "view"),
  carModel.getAllCarModel
);
route.get(
  "/get-all-active-car-model",
  checkPermission("Car", "view"),
  carModel.getAllActiveCarModel
);

//!! car Transmission route
route.post(
  "/add-car-transmission",
  checkPermission("Car", "create"),
  carTransmission.addCarTransmission
);
route.post(
  "/update-car-transmission/:id",
  checkPermission("Car", "edit"),
  carTransmission.updateCarTransmission
);
route.delete(
  "/delete-car-transmission/:id",
  checkPermission("Car", "delete"),
  carTransmission.deleteCarTransmission
);
route.get(
  "/get-all-car-transmission",
  checkPermission("Car", "view"),
  carTransmission.getAllCarTransmission
);
route.get(
  "/get-all-active-car-transmission",
  checkPermission("Car", "view"),
  carTransmission.getAllActiveCarTransmission
);

//!! car fuel route
route.post(
  "/add-car-fuel",
  checkPermission("Car", "create"),
  carFuel.addCarFuel
);
route.post(
  "/update-car-fuel/:id",
  checkPermission("Car", "edit"),

  carFuel.updateCarFuel
);
route.delete(
  "/delete-car-fuel/:id",
  checkPermission("Car", "delete"),
  carFuel.deleteCarFuel
);
route.get(
  "/get-all-car-fuel",
  checkPermission("Car", "view"),
  carFuel.getAllCarFuel
);
route.get(
  "/get-all-active-car-fuel",
  checkPermission("Car", "view"),
  carFuel.getAllActiveCarFuels
);

//!! car color routes
route.post(
  "/add-car-color",
  checkPermission("Car", "create"),
  carColor.addCarColor
);
route.post(
  "/update-car-color/:id",
  checkPermission("Car", "edit"),
  carColor.updateCarColor
);
route.delete(
  "/delete-car-color/:id",
  checkPermission("Car", "delete"),
  carColor.deleteCarColor
);
route.get(
  "/get-all-car-color",
  checkPermission("Car", "view"),
  carColor.getAllCarColor
);
route.get(
  "/get-all-active-car-color",
  checkPermission("Car", "view"),
  carColor.getAllActiveCarColor
);

//!! car steering routes
route.post(
  "/add-car-steering",
  checkPermission("Car", "create"),
  carSteering.addCarSteering
);
route.post(
  "/update-car-steering/:id",
  checkPermission("Car", "edit"),
  carSteering.updateCarSteering
);
route.delete(
  "/delete-car-steering/:id",
  checkPermission("Car", "delete"),

  carSteering.deleteCarSteering
);
route.get(
  "/get-all-car-steering",
  checkPermission("Car", "view"),
  carSteering.getAllCarSteering
);
route.get(
  "/get-all-active-car-steering",
  checkPermission("Car", "view"),
  carSteering.getAllActiveCarSteering
);

//!! car seats routes
route.post(
  "/add-car-seats",
  checkPermission("Car", "create"),
  carSeats.addCarSeats
);
route.post(
  "/update-car-seats/:id",
  checkPermission("Car", "edit"),
  carSeats.updateCarSeats
);
route.delete(
  "/delete-car-seats/:id",
  checkPermission("Car", "delete"),
  carSeats.deleteCarSeats
);
route.get(
  "/get-all-car-seats",
  checkPermission("Car", "view"),
  carSeats.getAllCarSeats
);
route.get(
  "/get-all-active-car-seats",
  checkPermission("Car", "view"),
  carSeats.getAllActiveCarSeats
);

//!! car cylinder routes
route.post(
  "/add-car-cylinder",
  checkPermission("Car", "create"),
  carCylinder.addCarCylinder
);
route.post(
  "/update-car-cylinder/:id",
  checkPermission("Car", "edit"),
  carCylinder.updateCarCylinder
);
route.delete(
  "/delete-car-cylinder/:id",
  checkPermission("Car", "delete"),
  carCylinder.deleteCarCylinder
);
route.get(
  "/get-all-car-cylinder",
  checkPermission("Car", "view"),
  carCylinder.getAllCarCylinder
);
route.get(
  "/get-all-active-car-cylinder",
  checkPermission("Car", "view"),
  carCylinder.getAllActiveCarCylinder
);

//!! car doors routes
route.post("/add-car-doors", carDoors.addCarDoors);
route.post("/update-car-doors/:id", carDoors.updateCarDoors);
route.delete("/delete-car-doors/:id", carDoors.deleteCarDoors);
route.get("/get-all-car-doors", carDoors.getAllCarDoors);

//!! car features routes
route.post(
  "/add-car-feature",
  checkPermission("Car", "create"),
  carFeatures.addCarFeature
);
route.post(
  "/update-car-feature/:id",
  checkPermission("Car", "edit"),
  carFeatures.updateCarFeature
);
route.delete(
  "/delete-car-feature/:id",
  checkPermission("Car", "delete"),
  carFeatures.deleteCarFeature
);
route.get(
  "/get-all-car-features",
  checkPermission("Car", "view"),
  carFeatures.getAllCarFeatures
);
route.get(
  "/get-all-acitve-car-features",
  checkPermission("Car", "view"),
  carFeatures.getAllActiveCarFeatures
);

//!! car safety features routes
route.post(
  "/add-safety-feature",
  checkPermission("Car", "create"),
  carSafetyFeature.addSafetyFeature
);
route.post(
  "/update-safety-feature/:id",
  checkPermission("Car", "edit"),
  carSafetyFeature.updateSafetyFeature
);
route.delete(
  "/delete-safety-feature/:id",
  checkPermission("Car", "delete"),
  carSafetyFeature.deleteSafetyFeature
);
route.get(
  "/get-all-safety-features",
  checkPermission("Car", "view"),
  carSafetyFeature.getAllSafetyFeatures
);
route.get(
  "/get-all-active-safety-features",
  checkPermission("Car", "view"),
  carSafetyFeature.getAllSafetyFeatures
);

//!extra service

route.post(
  "/add-extra-service",
  checkPermission("Car", "create"),
  extraService.addExtraService
);
route.post(
  "/update-extra-service/:id",
  checkPermission("Car", "edit"),
  extraService.updateExtraService
);
route.delete(
  "/delete-extra-service/:id",
  checkPermission("Car", "delete"),
  extraService.deleteExtraService
);
route.get(
  "/get-all-extra-services",
  checkPermission("Car", "view"),
  extraService.getAllExtraServices
);
route.get(
  "/get-all-active-extra-services",
  checkPermission("Car", "view"),
  extraService.getAllActiveExtraService
);

//! seasional pricing route
route.post(
  "/add-seasonal-pricing",
  checkPermission("Car", "create"),
  seasonalPricing.addSeasonalPricing
);
route.post(
  "/update-seasonal-pricing/:id",
  checkPermission("Car", "edit"),
  seasonalPricing.updateSeasonalPricing
);
route.delete(
  "/delete-seasonal-pricing/:id",
  checkPermission("Car", "delete"),
  seasonalPricing.deleteSeasonalPricing
);
route.get(
  "/get-all-seasonal-pricing",
  checkPermission("Car", "view"),
  seasonalPricing.getAllSeasonalPricing
);
route.get(
  "/get-all-active-seasonal-pricing",
  checkPermission("Car", "view"),
  seasonalPricing.getAllActiveSeasionlaPricing
);

//!! car controler
route.post(
  "/add-car",
  checkPermission("car", "create"),
  upload.carImageUpload.single("image"),
  car.addCar
);

route.post(
  "/edit-car-basics/:id",
  checkPermission("car", "edit"),
  upload.carImageUpload.single("image"),
  car.editBasicCar
);
route.post("/update-cars/:id/pricing", pricing.updateCarPricing);
route.put("/cars/:id/pricing", pricing.editCarPricing);
route.put("/update-car/:id/features", car.updateCarFeatures);
route.put("/update-car/:id/extraService", car.updateCarExtraService);
// route.post("/update-car/:id/damage", damage.addDamage);
// route.get("/get-car/:id/damage", damage.getDamagesByCar);
// route.delete("/delete-car/:id/damage", damage.deleteDamage);
// route.put("/edit-car/:id/damage", damage.editDamage);
route.post("/cars/:carId/damages", car.saveCarDamages);

route.post("/cars/:carId/faqs", car.saveCarFaqs);
route.post("/cars/:carId/description", car.saveCarDescription);
// route.get("/get-car/:id/faq", carFaq.getCarFaqs);
// route.delete("/delete-car/:id/faq", carFaq.deleteFaq);
// route.put("/edit-car/:id/faq", carFaq.editFaq);
route.get("/get-all-cars-super-admin", car.getAllCarsForSuperAdmin);
route.post("/change-status-by-admin/:id", car.updateCarStatusByAdmin);
route.get("/get-car-by-id/:id", car.getCarById);

route.post(
  "/cars/:carId/upload",
  upload.carFilesUpload.fields([
    { name: "documents", maxCount: 10 },
    { name: "policies", maxCount: 10 },
    { name: "videos", maxCount: 10 },
  ]),
  car.uploadCarFiles
);

route.get(
  "/get-all-car-admin",
  checkPermission("Car", "view"),
  car.getAllCarsForAdmin
);
route.get(
  "/get-newly-added-car-admin",
  checkPermission("Car", "view"),
  car.getNewlyAddedCars
);
route.get(
  "/get-all-car-inRental",
  checkPermission("Car", "view"),
  car.getInRentalCars
);

route.get(
  "/get-car-by-id-admin/:id",
  checkPermission("Car", "view"),
  car.getCayByIdAdmin
);

//!! wishlist
route.post("/toggle-wishlist", wishlist.toggleWishlist);
route.get("/get-wishlist", wishlist.getWishlist);

//!! Enquiry

route.post("/add-enquiry/:id", enquiry.addEnquiry);
route.get("/get-enquiry", enquiry.getallEnquiry);
route.delete("/delete-enquiry/:id", enquiry.deleteEnquiry);

//!! carReview

route.post("/add-car-review/:carId", carReview.addCarReview);
route.get("/get-all-review-admin", carReview.allReviewByAdmin);
route.get("/get-all-review-user-dashboard", carReview.allReviewByUser);
route.delete("/delete-car-review/:id", carReview.deleteCarReview);

//!! role route

route.post("/add-roll", checkPermission("role", "create"), role.addRole);
route.post(
  "/roles/:roleId/permissions",
  checkPermission("role", "create"),
  role.updatePermissions
);

route.post("/update-role", checkPermission("role", "edit"), role.updateRole);
route.get("/get-role", checkPermission("role", "view"), role.getAllRole);
route.get(
  "/get-all-active-role",
  checkPermission("role", "view"),
  role.getAllActiveRole
);

route.delete(
  "/delete-role/:id",
  checkPermission("role", "delete"),
  role.deleteRole
);
route.get(
  "/get-role-id/:id",
  checkPermission("role", "view"),
  role.getRoleById
);

//!! testimonial route

route.post(
  "/add-testimonial",
  upload.testimonialUpload.single("image"),
  checkPermission("admin", "assignPackage", true),

  testimonial.addTestimonial
);
route.post(
  "/update-testimonial/:id",
  upload.testimonialUpload.single("image"),
  checkPermission("admin", "assignPackage", true),

  testimonial.updateTestimonial
);
route.delete(
  "/delete/testimonial/:id",
  checkPermission("admin", "assignPackage", true),
  testimonial.deleteTestimonial
);
route.get(
  "/get-all-testimonial-admin",
  checkPermission("admin", "assignPackage", true),
  testimonial.getAllTestimonialsAdmin
);

//!! faq category

route.post(
  "/add-faq-category",
  checkPermission("admin", "assignPackage", true),
  faqCategory.addFaqCategory
);
route.post(
  "/update-faq-category/:id",
  checkPermission("admin", "assignPackage", true),
  faqCategory.updateFaqCategory
);
route.get(
  "/get-all-faq-category",
  authUser,
  checkPermission("admin", "assignPackage", true),
  faqCategory.getAllFaqCategory
);
route.get(
  "/get-all-active-faq-category",
  authUser,
  checkPermission("admin", "assignPackage", true),
  faqCategory.getAllActiveFaqCategory
);
route.delete(
  "/delete-faq-category/:id",
  checkPermission("faqCategory", "delete"),
  faqCategory.deleteFaqCategory
);

//!! faq router

route.post("/add-faq", checkPermission("faqCategory", "create"), faq.addFaq);
route.post(
  "/update-faq/:id",
  checkPermission("admin", "assignPackage", true),
  faq.updateFaq
);
route.get(
  "/get-all-faq",
  checkPermission("admin", "assignPackage", true),

  faq.getAllFaqsAdmin
);

route.delete(
  "/delete-faq/:id",
  checkPermission("admin", "assignPackage", true),
  faq.deleteFaq
);

//!! reservation api for admin
route.get(
  "/get-all-reservation",
  checkPermission("Reservation", "view"),
  reservation.getAllReservationsForAdmin
);
route.get(
  "/get-all-reservation-superAdmin",
  checkPermission("admin", "assignPackage", true),

  reservation.getAllReservationSuperAdmin
);
route.post(
  "/add-reservation-admin",
  checkPermission("Reservation", "Create"),
  reservation.addReservation
);
route.post("/add-reservation-user-step-1/:id", reservation.addReservationStep1);
route.post(
  "/cancel-reservation-user/:id",
  reservation.reservationCancelledByUser
);
route.post(
  "/cancel-reservation-admin/:id",
  reservation.reservationCancelledByAdmin
);
route.post(
  "/edit-reservation-user-step-2/:id",
  reservation.editReservationStep2
);
route.post(
  "/edit-reservation-user-step-3/:id",
  upload.customerUpload.single("driverDetailsDocument"),
  reservation.editReservationStep3
);

route.post(
  "/update-reservation/:id",
  checkPermission("Reservation", "edit"),
  reservation.updateReservation
);
route.post(
  "/change-reservation-status-conformed/:id",
  checkPermission("Reservation", "edit"),
  reservation.changetheStatusofReservationToConformed
);
route.get(
  "/get-reservation-by/:id",
  checkPermission("Reservation", "view"),
  reservation.getsingleReservation
);
route.get("/get-last-5-reservation", reservation.getLast5Reservations);
route.get(
  "/get-last-5-reservation-admin",
  reservation.getLatest5ReservationsForAdmin
);
route.get(
  "/get-all-calender-reservation",
  reservation.getAllReservationCalender
);
route.get("/get-all-reservation-user", reservation.getAllReservationUser);
route.get(
  "/get-all-pending-reservation-user",
  reservation.getPendingReservationsUser
);
route.get(
  "/get-all-completed-reservation-user",
  reservation.getCompletedReservationsUser
);
route.get(
  "/get-all-cancelled-reservation-user",
  reservation.getCancelledReservationsUser
);
route.get("/get-reservation-by-booking/:id", reservation.getReservationById);
route.delete("/delete-reservation/:id", reservation.deleteReservation);
route.get("/get-all-active-car-admin", car.getApprovedCarsAdminReservation);

//!!! contact api
route.get(
  "/get-all-contact-admin",
  checkPermission("admin", "assignPackage", true),
  contact.getAllContacts
);
route.delete(
  "/delete-constact/:id",
  checkPermission("admin", "assignPackage", true),
  contact.deleteContact
);

module.exports = route;

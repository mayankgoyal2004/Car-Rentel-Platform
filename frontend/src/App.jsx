import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./layout/Master";
import Main from "./homepage/Main";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Contact from "./Pages/Contact";
import Listing from "./Pages/Listing";
import ListingDetails from "./components/listingDetails";
import About from "./Pages/About-us";
import Faq from "./Pages/Faq";
import Bloglist from "./Pages/Bloglist";
import BlogDetails from "./components/BlogDetails";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ForgotPassword from "./authentication/ForgotPassword";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Testimonials from "./Pages/Testimonials";
import BookingCheckout from "./Pages/BookingCheckout";
import BookingAddOn from "./Pages/BookingAddOn";
import BookingDetals from "./Pages/BookingDetals";
import BookingPayment from "./Pages/BookingPayment";
import BookingSuccess from "./Pages/BookingSuccess";
import ScrollToTop from "../ScrollIntoView";
import Team from "./Pages/Team";
import Gallery from "./Pages/Gallery";
import TermsAndCondition from "./Pages/TermsAndCondition";
import UserDashboard from "./user/userDashboard";
import UserMainDashboard from "./user/userMainDashboard";
import UserBooking from "./user/UserBooking";
import UserReview from "./user/UserReview";
import UserWishlist from "./user/UserWishlist";
import UserMessage from "./user/UserMessage";
import UserWallet from "./user/UserWallet";
import UserPayment from "./user/UserPayment";
import UserSetting from "./user/UserSetting";
import UserAllBooking from "./user/UserAllBooking";
import UserUpcomingBooking from "./user/UserUpcomingBooking";
import UserBookingInProgress from "./user/UserBookingInProgress";
import UserBookingCompleted from "./user/UserBookingCompleted";
import UserBookingCancelled from "./user/UserBookingCancelled";
import Booking from "./Pages/booking";
import Pricing from "./Pages/Pricing";
import UserProfile from "./user/userProfile";
import UserProfileSetting from "./user/UserProfileSetting";
import UserPreference from "./user/UserPreference";
import UserNotification from "./user/UserNotification";
import UserIntegration from "./user/UserIntegration";
import UserBookingCalender from "./user/UserBookingCalender";
import AdminMain from "./Admin/adminMain";
import AdminCalender from "./Admin/AdminCalender";
import AddAdminReservation from "./Admin/AddAdminReservation";
import AdminReservation from "./Admin/AdminReservation";
import AdminQuotations from "./Admin/AdminQuotations";
import AdminCustomers from "./Admin/AdminCustomers";
import AdminDrivers from "./Admin/AdminDrivers";
import AdminLocations from "./Admin/AdminLocations";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminCars from "./Admin/AdminCars";
import AdminBrands from "./Admin/adminCarAttribute/AdminBrands";
import AdminCarTypes from "./Admin/adminCarAttribute/AdminCarTypes";
import AdminCarModels from "./Admin/adminCarAttribute/AdminCarModels";
import AdminCarTransmissions from "./Admin/adminCarAttribute/AdminCarTransmissions";
import AdminCarFuel from "./Admin/adminCarAttribute/AdminCarFuel";
import AdminCarColor from "./Admin/adminCarAttribute/AdminCarColor";
import AdminCarSteering from "./Admin/adminCarAttribute/AdminCarStreaing";
import AdminCarSeats from "./Admin/adminCarAttribute/AdminCarSeats";
import AdminCarCylinders from "./Admin/adminCarAttribute/AdminCarCyllanders";
import AdminCarDoors from "./Admin/adminCarAttribute/AdminCarDoors";
import AdminCarFeatures from "./Admin/adminCarAttribute/AdminCarFeatures";
import AdminCarSafetyFeatures from "./Admin/adminCarAttribute/AdminCarSafetyFeatures";
import AdminCarExtraFeatures from "./Admin/AdminCarExtraFeatures";
import AdminCarPricing from "./Admin/AdminCarPricing";
import AdminInspection from "./Admin/AdminInspection";
import AdminTracking from "./Admin/AdminTracking";
import AdminMaintenance from "./Admin/AdminMaintenance";
import AdminReview from "./Admin/AdminReview";
import AdminInvoice from "./Admin/AdminInvoice";
import AdminPayment from "./Admin/AdminPayment";
import AdminMessage from "./Admin/AdminMessage";
import AdminCoupons from "./Admin/AdminCoupons";
import AdminNewsLetter from "./Admin/AdminNewsLetter";
import AdminPages from "./Admin/AdminPages";
import AdminMenuManagement from "./Admin/AdminMenuManagement";
import AdminAllBlogs from "./Admin/AdminBlogs/AdminAllBlogs";
import AdminBlogsComments from "./Admin/AdminBlogs/AdminBlogsComments";
import AdminBlogsTags from "./Admin/AdminBlogs/AdminBlogsTags";
import AdminLocationCountries from "./Admin/AdminLocation/AdminLocationCountries";
import AdminLocationStates from "./Admin/AdminLocation/AdminLocationStates";
import AdminAllFaq from "./Admin/AdminFaq/AdminAllFaq";
import AdminFaqCategories from "./Admin/AdminFaq/AdminFaqCategories";
import AdminContactMessage from "./Admin/AdminSupports/AdminContactMessage";
import AdminAnnouncements from "./Admin/AdminSupports/AdminAnnouncements";
import AdminTickets from "./Admin/AdminSupports/AdminTickets";
import AdminAllUser from "./Admin/UserManegement/AdminAllUser";
import AdminManageRolsAndPermissions from "./Admin/UserManegement/AdminManageRolsAndPermissions";
import IncomeVsExpenses from "./Admin/AdminReports/IncomeVsExpenses";
import EarningReports from "./Admin/AdminReports/EarningReports";
import RentalReport from "./Admin/AdminReports/RentalReport";
import AdminLogin from "./Admin/AdminAuthentication/AdminLogin";
import AdminForgotPassword from "./Admin/AdminAuthentication/AdminForgotPassword";
import AdminOtp from "./Admin/AdminAuthentication/AdminOtp";
import AdminResetPassword from "./Admin/AdminAuthentication/AdminResetPassword";
import AdminProfileSetting from "./Admin/SETTINGS & CONFIGURATION/AdminProfileSetting";
import AdminSecuritySetting from "./Admin/SETTINGS & CONFIGURATION/AdminSecuritySetting";
import AdminNotificationSetting from "./Admin/SETTINGS & CONFIGURATION/AdminNotificationSetting";
import AdminIntegrationSetting from "./Admin/SETTINGS & CONFIGURATION/AdminIntegrationSetting";
import AdminCustomersDetails from "./Admin/AdminCustomersDetails";
import AdminCustomersCumpanies from "./Admin/AdminCustomersCumpanies";
import AdminInvoiceDetails from "./Admin/AdminInvoiceDetails";
import AdminCarDetails from "./Admin/AdminCarDetails";
import AdminAddCars from "./Admin/AdminAddCars";
import AdminEditCar from "./Admin/AdminEditCar";
import AdminReservationDetails from "./Admin/AdminReservationDetails";
import AdminCompaniesDetails from "./Admin/AdminCumpaniesDetails";
import AdminEditReservation from "./Admin/EditReservation";
import AdminQuatationDetails from "./Admin/AdminQuatationDetails";
import AdminEditQuatations from "./Admin/AdminEditQuatations";
import AdminEnquiries from "./Admin/AdminEnquiries";
import AdminAddQuotations from "./Admin/AdminAddQuatations";
import AdminTestimonials from "./Admin/AdminTestromonials";
import AdminLocationCities from "./Admin/AdminLocation/AdminLocationCities";
import AdminEditEnvoice from "./Admin/AdminEditEnvoice";
import AddInvoice from "./Admin/AddInvoice";
import AdminAddPages from "./Admin/AdminAddPages";
import AdminBlogDetails from "./Admin/AdminBlogDetails";
import { AdminEditBlog } from "./Admin/AdminBlogs/AdminEditBlog";
import AdminAddBlogs from "./Admin/AdminBlogs/AdminAddBlogs";
import AdminBlogsCategories from "./Admin/AdminBlogs/AdminBlogsCategories";
import AdminPermissions from "./Admin/AdminPermissions";
import ProtectedRoute from "./authentication/ProtectedRoute";
import EmailVerified from "./authentication/emailVerified";
import ResetPassword from "./authentication/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing-details" element={<ListingDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog-list" element={<Bloglist />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-checkout" element={<BookingCheckout />} />
          <Route path="/booking-add-on" element={<BookingAddOn />} />
          <Route path="/booking-details" element={<BookingDetals />} />
          <Route path="/booking-payment" element={<BookingPayment />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route element={<ProtectedRoute allowedRoles={[3]} />}>
            <Route path="/user-dashboard" element={<UserDashboard />}>
              <Route path="/user-dashboard" element={<UserMainDashboard />} />
              <Route path="user-review" element={<UserReview />} />
              <Route path="user-wishlist" element={<UserWishlist />} />
              <Route path="user-message" element={<UserMessage />} />
              <Route path="user-wallet" element={<UserWallet />} />
              <Route path="user-payment" element={<UserPayment />} />
              <Route path="user-setting" element={<UserSetting />}>
                <Route index element={<UserProfile />} />
                <Route
                  path="user-profile-setting"
                  element={<UserProfileSetting />}
                />
                <Route path="user-preference" element={<UserPreference />} />
                <Route
                  path="user-notification"
                  element={<UserNotification />}
                />
                <Route path="user-integration" element={<UserIntegration />} />
              </Route>
              <Route path="user-booking" element={<UserBooking />}>
                <Route index element={<UserAllBooking />} />
                <Route
                  path="user-booking-calender"
                  element={<UserBookingCalender />}
                />
                <Route
                  path="user-upcoming-booking"
                  element={<UserUpcomingBooking />}
                />
                <Route
                  path="user-booking-inProgress"
                  element={<UserBookingInProgress />}
                />
                <Route
                  path="user-booking-completed"
                  element={<UserBookingCompleted />}
                />
                <Route
                  path="user-booking-cancelled"
                  element={<UserBookingCancelled />}
                />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<EmailVerified />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* adminroute */}
        <Route element={<ProtectedRoute allowedRoles={[1, 2, 3]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<AdminMain />} />
            <Route path="add-reservation" element={<AddAdminReservation />} />
            <Route path="admin-calender" element={<AdminCalender />} />
            <Route path="all-reservation" element={<AdminReservation />} />
            <Route path="all-quotations" element={<AdminQuotations />} />
            <Route path="all-enquiries" element={<AdminEnquiries />} />
            <Route path="all-customers" element={<AdminCustomers />} />
            <Route path="all-drivers" element={<AdminDrivers />} />
            <Route path="all-locations" element={<AdminLocations />} />
            <Route path="all-cars" element={<AdminCars />} />
            <Route path="car-brands" element={<AdminBrands />} />
            <Route path="car-types" element={<AdminCarTypes />} />
            <Route path="car-models" element={<AdminCarModels />} />
            <Route
              path="car-transmissions"
              element={<AdminCarTransmissions />}
            />
            <Route path="car-fuel" element={<AdminCarFuel />} />
            <Route path="car-color" element={<AdminCarColor />} />
            <Route path="car-steering" element={<AdminCarSteering />} />
            <Route path="car-seats" element={<AdminCarSeats />} />
            <Route path="car-cylinders" element={<AdminCarCylinders />} />
            <Route path="car-doors" element={<AdminCarDoors />} />
            <Route path="car-features" element={<AdminCarFeatures />} />
            <Route
              path="car-safety-features"
              element={<AdminCarSafetyFeatures />}
            />
            <Route
              path="car-extra-features"
              element={<AdminCarExtraFeatures />}
            />
            <Route path="car-pricing" element={<AdminCarPricing />} />
            <Route path="car-inspection" element={<AdminInspection />} />
            <Route path="car-tracking" element={<AdminTracking />} />
            <Route path="car-maintenance" element={<AdminMaintenance />} />
            <Route path="car-review" element={<AdminReview />} />
            <Route path="all-invoice" element={<AdminInvoice />} />
            <Route path="account-payment" element={<AdminPayment />} />
            <Route path="admin-message" element={<AdminMessage />} />
            <Route path="admin-coupons" element={<AdminCoupons />} />
            <Route path="admin-news-letter" element={<AdminNewsLetter />} />
            <Route path="admin-pages" element={<AdminPages />} />
            <Route
              path="admin-menu-management"
              element={<AdminMenuManagement />}
            />
            <Route path="all-blogs" element={<AdminAllBlogs />} />
            <Route path="blogs-categories" element={<AdminBlogsCategories />} />
            <Route path="blogs-comments" element={<AdminBlogsComments />} />
            <Route path="blogs-blogs-tags" element={<AdminBlogsTags />} />
            <Route
              path="location-countries"
              element={<AdminLocationCountries />}
            />
            <Route path="location-states" element={<AdminLocationStates />} />
            <Route path="location-cities" element={<AdminLocationCities />} />
            <Route path="all-testimonials" element={<AdminTestimonials />} />
            <Route path="all-faq" element={<AdminAllFaq />} />\{" "}
            <Route path="all-faq-categories" element={<AdminFaqCategories />} />
            <Route path="contact-message" element={<AdminContactMessage />} />
            <Route path="all-announcements" element={<AdminAnnouncements />} />
            <Route path="all-tickets" element={<AdminTickets />} />
            <Route path="all-user" element={<AdminAllUser />} />
            <Route
              path="roles-permissions"
              element={<AdminManageRolsAndPermissions />}
            />
            <Route path="income-vs-expenses" element={<IncomeVsExpenses />} />
            <Route path="earning-reports" element={<EarningReports />} />
            <Route path="rental-report" element={<RentalReport />} />
            <Route
              path="admin-forgot-password"
              element={<AdminForgotPassword />}
            />
            <Route path="admin-otp" element={<AdminOtp />} />
            <Route
              path="admin-resetPassword"
              element={<AdminResetPassword />}
            />
            <Route path="profile-setting" element={<AdminProfileSetting />} />
            <Route path="security-setting" element={<AdminSecuritySetting />} />
            <Route
              path="notification-setting"
              element={<AdminNotificationSetting />}
            />
            <Route
              path="integration-setting"
              element={<AdminIntegrationSetting />}
            />
            <Route
              path="tracker-setting"
              element={<AdminIntegrationSetting />}
            />
            <Route
              path="customer-details"
              element={<AdminCustomersDetails />}
            />
            <Route
              path="customer-companies"
              element={<AdminCustomersCumpanies />}
            />
            <Route path="invoice-details" element={<AdminInvoiceDetails />} />
            <Route path="car-details" element={<AdminCarDetails />} />
            <Route path="add-car" element={<AdminAddCars />} />
            <Route path="edit-car" element={<AdminEditCar />} />
            <Route
              path="reservation-details"
              element={<AdminReservationDetails />}
            />
            <Route path="company-details" element={<AdminCompaniesDetails />} />
            <Route path="edit-reservation" element={<AdminEditReservation />} />
            <Route
              path="quotation-details"
              element={<AdminQuatationDetails />}
            />
            <Route path="edit-quotations" element={<AdminEditQuatations />} />
            <Route path="add-quotations" element={<AdminAddQuotations />} />
            <Route path="edit-invoice" element={<AdminEditEnvoice />} />
            <Route path="add-invoice" element={<AddInvoice />} />
            <Route path="add-pages" element={<AdminAddPages />} />
            <Route path="admin-blog-details" element={<AdminBlogDetails />} />
            <Route path="edit-blog" element={<AdminEditBlog />} />
            <Route path="add-blog" element={<AdminAddBlogs />} />
            <Route path="admin-permissions" element={<AdminPermissions />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

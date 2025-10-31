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
import AdminCarFeatures from "./Admin/adminCarAttribute/AdminCarFeatures";
import AdminCarExtraFeatures from "./Admin/AdminCarExtraFeatures";

import AdminReview from "./Admin/AdminReview";
import AdminInvoice from "./Admin/AdminInvoice";
import AdminPayment from "./Admin/AdminPayment";
import AdminMessage from "./Admin/AdminMessage";

import AdminNewsLetter from "./Admin/AdminNewsLetter";
import AdminPages from "./Admin/AdminPages";
import AdminAllBlogs from "./Admin/AdminBlogs/AdminAllBlogs";
import AdminBlogsComments from "./Admin/AdminBlogs/AdminBlogsComments";
import AdminBlogsTags from "./Admin/AdminBlogs/AdminBlogsTags";
import AdminLocationCountries from "./Admin/AdminLocation/AdminLocationCountries";
import AdminLocationStates from "./Admin/AdminLocation/AdminLocationStates";
import AdminAllFaq from "./Admin/AdminFaq/AdminAllFaq";
import AdminFaqCategories from "./Admin/AdminFaq/AdminFaqCategories";
import AdminContactMessage from "./Admin/AdminSupports/AdminContactMessage";
import AdminAllUser from "./Admin/UserManegement/AdminAllUser";
import AdminManageRolsAndPermissions from "./Admin/UserManegement/AdminManageRolsAndPermissions";
import AdminForgotPassword from "./Admin/AdminAuthentication/AdminForgotPassword";
import AdminOtp from "./Admin/AdminAuthentication/AdminOtp";
import AdminResetPassword from "./Admin/AdminAuthentication/AdminResetPassword";
import AdminProfileSetting from "./Admin/SettingCONFIGURATION/AdminProfileSetting";
import AdminSecuritySetting from "./Admin/SettingCONFIGURATION/AdminSecuritySetting";

import AdminCustomersDetails from "./Admin/AdminCustomersDetails";
import AdminInvoiceDetails from "./Admin/AdminInvoiceDetails";
import AdminCarDetails from "./Admin/AdminCarDetails";
import AdminAddCars from "./Admin/AdminAddCars";
import AdminEditCar from "./Admin/AdminEditCar";
import AdminReservationDetails from "./Admin/AdminReservationDetails";
import AdminEditReservation from "./Admin/EditReservation";
import AdminEnquiries from "./Admin/AdminEnquiries";

import AdminTestimonials from "./Admin/AdminTestromonials";
import AdminLocationCities from "./Admin/AdminLocation/AdminLocationCities";
import AdminEditEnvoice from "./Admin/AdminEditEnvoice";
import AddInvoice from "./Admin/AddInvoice";
import AdminBlogDetails from "./Admin/AdminBlogDetails";
import { AdminEditBlog } from "./Admin/AdminBlogs/AdminEditBlog";
import AdminAddBlogs from "./Admin/AdminBlogs/AdminAddBlogs";
import AdminBlogsCategories from "./Admin/AdminBlogs/AdminBlogsCategories";
import AdminPermissions from "./Admin/AdminPermissions";
import ProtectedRoute from "./authentication/ProtectedRoute";
import EmailVerified from "./authentication/emailVerified";
import ResetPassword from "./authentication/ResetPassword";
import AdminRegister from "./Admin/AdminAuthentication/adminRegister";
import AdminOwners from "./Admin/adminAllOwner";
import InvoiceSetting from "./Admin/invoiceSetting";
import SignatureSetting from "./Admin/SignatureSetting";
import BankAccountSetting from "./Admin/BankAccountSetting";
import CompanySetting from "./Admin/CompanySetting";
import LoginSettingAdmin from "./Admin/LoginSettingAdmin";
import EmailSetting from "./Admin/EmailSetting";
import LocationSetting from "./Admin/LocationSetting";
import LocalizationSetting from "./Admin/LocalizationSetting";
import ErrorPage from "../Error404Page";
import AdminBin from "./Admin/AdminBin";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Main />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/listing-details/:id" element={<ListingDetails />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog-list" element={<Bloglist />} />
            <Route path="/blog-details/:slug" element={<BlogDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-condition"
              element={<TermsAndCondition />}
            />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-checkout/:id" element={<BookingCheckout />} />
            <Route path="/booking-add-on/:id" element={<BookingAddOn />} />
            <Route path="/booking-details/:id" element={<BookingDetals />} />
            <Route path="/booking-payment/:id" element={<BookingPayment />} />
            <Route path="/booking-success/:id" element={<BookingSuccess />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route element={<ProtectedRoute allowedRoles={[4]} />}>
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
                  <Route
                    path="user-integration"
                    element={<UserIntegration />}
                  />
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
                    path="user-booking-in-progress"
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
          <Route path="/business-register" element={<AdminRegister />} />

          {/* adminroute */}
          <Route element={<ProtectedRoute allowedRoles={[1, 2, 3]} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<AdminMain />} />
              <Route path="add-reservation" element={<AddAdminReservation />} />
              <Route path="admin-calender" element={<AdminCalender />} />
              <Route path="all-reservation" element={<AdminReservation />} />
              <Route path="all-enquiries" element={<AdminEnquiries />} />
              <Route path="all-customers" element={<AdminCustomers />} />
              <Route path="all-owners" element={<AdminOwners />} />
              <Route path="all-drivers" element={<AdminDrivers />} />
              <Route path="all-locations" element={<AdminLocations />} />
              <Route path="all-cars" element={<AdminCars />} />
              <Route path="bin" element={<AdminBin />} />
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
              <Route path="car-features" element={<AdminCarFeatures />} />
              <Route
                path="car-extra-features"
                element={<AdminCarExtraFeatures />}
              />
              <Route path="car-review" element={<AdminReview />} />
              <Route path="all-invoice" element={<AdminInvoice />} />
              <Route path="account-payment" element={<AdminPayment />} />
              <Route path="admin-message" element={<AdminMessage />} />
              <Route path="admin-news-letter" element={<AdminNewsLetter />} />
              <Route path="admin-pages" element={<AdminPages />} />
              <Route path="all-blogs" element={<AdminAllBlogs />} />
              <Route
                path="blogs-categories"
                element={<AdminBlogsCategories />}
              />
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
              <Route
                path="all-faq-categories"
                element={<AdminFaqCategories />}
              />
              <Route path="contact-message" element={<AdminContactMessage />} />
              <Route path="all-user" element={<AdminAllUser />} />
              <Route
                path="roles-permissions"
                element={<AdminManageRolsAndPermissions />}
              />
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
              <Route
                path="security-setting"
                element={<AdminSecuritySetting />}
              />
              <Route path="invoice-setting" element={<InvoiceSetting />} />
              <Route path="signature-setting" element={<SignatureSetting />} />
              <Route path="location-setting" element={<LocationSetting />} />
              <Route
                path="language-setting"
                element={<LocalizationSetting />}
              />
              <Route path="login-setting" element={<LoginSettingAdmin />} />
              <Route path="company-setting" element={<CompanySetting />} />
              <Route path="email-setting" element={<EmailSetting />} />
              <Route
                path="bank-account-setting"
                element={<BankAccountSetting />}
              />
              <Route
                path="customer-details/:id"
                element={<AdminCustomersDetails />}
              />
              <Route
                path="invoice-details/:id"
                element={<AdminInvoiceDetails />}
              />
              <Route path="car-details/:id" element={<AdminCarDetails />} />
              <Route path="add-car" element={<AdminAddCars />} />
              <Route path="edit-car/:id" element={<AdminEditCar />} />
              <Route
                path="reservation-details/:id"
                element={<AdminReservationDetails />}
              />
              <Route
                path="edit-reservation/:id"
                element={<AdminEditReservation />}
              />
              <Route path="edit-invoice/:id" element={<AdminEditEnvoice />} />
              <Route path="add-invoice" element={<AddInvoice />} />
              <Route
                path="admin-blog-details/:id"
                element={<AdminBlogDetails />}
              />
              <Route path="edit-blog/:id" element={<AdminEditBlog />} />
              <Route path="add-blog" element={<AdminAddBlogs />} />
              <Route
                path="admin-permissions/:roleId"
                element={<AdminPermissions />}
              />
            </Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

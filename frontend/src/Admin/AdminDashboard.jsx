import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./assets/logo.css";
// import "./assets/css/admin-style.css"
import "./assets/css/admin-style.css";
import "./assets/plugins/tabler-icons/tabler-icons.min.css";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL_IMG } from "../../Apiservice/apiService";
import { removeUser } from "../utils/userSlice";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [blogOpen, setblogOpen] = useState(false);
  const [LocationOpen, SetLocationOpen] = useState(false);
  const [FaqOpen, SetFaqOpen] = useState(false);
  const [SettingOpen, SetSettingOpen] = useState(false);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //

  const dispatch = useDispatch();
  const navigete = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeUser());
    navigete("/login");
  };

  return (
    <div className="main-wrapper">
      {/* Header */}
      <div className="header">
        <div className="main-header">
          <div className="header-left">
            <Link to="/admin-dashboard" className="logo">
              <img src="/admin-assets/img/logo.svg" alt="Logo" />
            </Link>
            <Link to="/admin-dashboard" className="dark-logo">
              <img src="/admin-assets/img/logo-white.svg" alt="Logo" />
            </Link>
          </div>
          <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <div className=" header-user">
            <div className="nav user-menu nav-list navouter">
              <div
                className="me-auto d-flex align-items-center"
                id="header-search"
              >
                <a id="toggle_btn" href="javascript:void(0);">
                  <i className="ti ti-menu-deep" />
                </a>
                <div className="add-dropdown">
                  <Link
                    to="add-reservation"
                    className="btn btn-dark d-inline-flex align-items-center"
                  >
                    <i className="ti ti-plus me-1" />
                    New Reservation
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center header-icons">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-menubar"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="ti ti-grid-dots" />
                  </a>
                  <div className="dropdown-menu p-3">
                    <ul>
                      <li>
                        <Link
                          to="add-car"
                          className="dropdown-item d-inline-flex align-items-center"
                        >
                          <i className="ti ti-car me-2" />
                          car
                        </Link>
                      </li>

                      <li>
                        <a
                          href="pricing.html"
                          className="dropdown-item d-inline-flex align-items-center"
                        >
                          <i className="ti ti-file-dollar me-2" />
                          Seasonal Pricing
                        </a>
                      </li>
                      <li>
                        <Link
                          to=""
                          href="extra-services.html"
                          className="dropdown-item d-inline-flex align-items-center"
                        >
                          <i className="ti ti-script-plus me-2" />
                          Extra Service
                        </Link>
                      </li>
                      <li>
                        <a
                          href="inspections.html"
                          className="dropdown-item d-inline-flex align-items-center"
                        >
                          <i className="ti ti-dice-6 me-2" />
                          Inspection
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="dropdown profile-dropdown">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <span className="avatar avatar-sm">
                      <img
                        src={`${BASE_URL_IMG + userData.image}`}
                        alt="Img"
                        className="img-fluid rounded-circle"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="profileset d-flex align-items-center">
                      <span className="user-img me-2">
                        <img
                          src="/admin-assets/img/profiles/avatar-05.jpg"
                          alt
                        />
                      </span>
                      <div>
                        <h6 className="fw-semibold mb-1">Andrew Simmonds</h6>
                        <p className="fs-13">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="f7969993859280b7928f969a879b92d994989a"
                          >
                            {userData.email}
                          </a>
                        </p>
                      </div>
                    </div>
                    <Link
                      to="profile-setting"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="ti ti-user-edit me-2" />
                      Edit Profile
                    </Link>
                    <div className="dropdown-divider my-2" />
                    <div className="dropdown-item"></div>
                    <Link
                      to="security-setting"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="ti ti-exchange me-2" />
                      Change Password
                    </Link>
                    <Link
                      to="profile-setting"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="ti ti-settings me-2" />
                      Settings
                    </Link>
                    <div className="dropdown-divider my-2" />
                    <button
                      onClick={handleLogout}
                      className="dropdown-item logout d-flex align-items-center justify-content-between"
                    >
                      <span>
                        <i className="ti ti-logout me-2" />
                        Logout Account
                      </span>{" "}
                      <i className="ti ti-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="dropdown mobile-user-menu">
            <a
              href="javascript:void(0);"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <Link to="profile-setting" className="dropdown-item">
                Settings
              </Link>
              <Link to="/login" className="dropdown-item">
                Logout
              </Link>
            </div>
          </div>
          {/* /Mobile Menu */}
        </div>
      </div>

      {/* /Header */}
      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        {/* Logo */}
        <div className="sidebar-logo navbar-1">
          <Link to="/admin-dashboard" className="logo logo-normal">
            <img src="/admin-assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to="/admin-dashboard" className="logo-small">
            <img src="/admin-assets/img/logo-small.svg" alt="Logo" />
          </Link>
          <Link to="/admin-dashboard" className="dark-logo">
            <img src="/admin-assets/img/logo-white.svg" alt="Logo" />
          </Link>
        </div>
        {/* /Logo */}
        <div className="sidebar-inner ">
          <PerfectScrollbar>
            <div id="sidebar-menu" className="sidebar-menu">
              <div className="form-group">
                {/* Search */}
                <div className="input-group input-group-flat d-inline-flex">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="group-text">
                    <i className="ti ti-command" />
                  </span>
                </div>
                {/* /Search */}
              </div>
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li>
                  <ul>
                    <li className="active">
                      <Link to="">
                        <i className="ti ti-layout-dashboard" />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Bookings</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="all-reservation">
                        <i className="ti ti-files" />
                        <span>Reservations</span>
                        <span className="track-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="admin-calender">
                        <i className="ti ti-calendar-bolt" />
                        <span>Calendar</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="all-quotations">
                        <i className="ti ti-file-symlink" />
                        <span>Quotations</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="all-enquiries">
                        <i className="ti ti-mail" />
                        <span>Enquiries</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Manage</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="all-customers">
                        <i className="ti ti-users-group" />
                        <span>Customers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="all-drivers">
                        <i className="ti ti-user-bolt" />
                        <span>Drivers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="all-locations">
                        <i className="ti ti-map-pin" />
                        <span>Locations</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>RENTALS</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="all-cars">
                        <i className="ti ti-car" />
                        <span>Cars</span>
                      </Link>
                    </li>
                    <li>
                      <a onClick={() => setOpen(!open)}>
                        <i className="ti ti-device-camera-phone" />
                        <span>car Attributes</span>
                        <span className="menu-arrow" />
                      </a>
                      {open && (
                        <ul>
                          <li>
                            <Link to="car-brands">Brands</Link>
                          </li>
                          <li>
                            <Link to="car-types">Types</Link>
                          </li>
                          <li>
                            <Link to="car-models">Models</Link>
                          </li>
                          <li>
                            <Link to="car-transmissions">Transmissions</Link>
                          </li>
                          <li>
                            <Link to="car-fuel">Fuels</Link>
                          </li>
                          <li>
                            <Link to="car-color">Colors</Link>
                          </li>
                          <li>
                            <Link to="car-steering">Steering</Link>
                          </li>
                          <li>
                            <Link to="car-seats">Seats</Link>
                          </li>
                          <li>
                            <Link to="car-cylinders">Cylinders</Link>
                          </li>

                          <li>
                            <Link to="car-features">Features</Link>
                          </li>
                          <li>
                            <Link to="car-safety-features">
                              Safety Features
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="car-extra-features">
                        <i className="ti ti-script-plus" />
                        <span>Extra Service</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="car-pricing">
                        <i className="ti ti-file-dollar" />
                        <span>Seasonal Pricing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="car-inspection">
                        <i className="ti ti-dice-6" />
                        <span>Inspections</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="car-tracking">
                        <i className="ti ti-map-pin-pin" />
                        <span>Tracking</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="car-maintenance">
                        <i className="ti ti-color-filter" />
                        <span>Maintenance</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="car-review">
                        <i className="ti ti-star" />
                        <span>Reviews</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>FINANCE &amp; ACCOUNTS</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="all-invoice">
                        <i className="ti ti-file-invoice" />
                        <span>Invoices</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="account-payment">
                        <i className="ti ti-credit-card" />
                        <span>Payments</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>OTHERS</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="admin-message">
                        <i className="ti ti-message" />
                        <span>Messages</span>
                        <span className="count">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="admin-coupons">
                        <i className="ti ti-discount-2" />
                        <span>Coupons</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="admin-news-letter">
                        <i className="ti ti-file-horizontal" />
                        <span>Newsletters</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>CMS</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <a onClick={() => setblogOpen(!blogOpen)}>
                        <i className="ti ti-device-desktop-analytics" />
                        <span>Blogs</span>
                        <span className="menu-arrow" />
                      </a>
                      {blogOpen && (
                        <ul>
                          <li>
                            <Link to="all-blogs">All Blogs</Link>
                          </li>
                          <li>
                            <Link to="blogs-categories">Categories</Link>
                          </li>
                          <li>
                            <Link to="blogs-comments">Comments</Link>
                          </li>
                          <li>
                            <Link to="blogs-blogs-tags">Blog Tags</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <a onClick={() => SetLocationOpen(!LocationOpen)}>
                        <i className="ti ti-map" />
                        <span>Locations</span>
                        <span className="menu-arrow" />
                      </a>
                      {LocationOpen && (
                        <ul>
                          <li>
                            <Link to="location-countries">Countries</Link>
                          </li>
                          <li>
                            <Link to="location-states">States</Link>
                          </li>
                          <li>
                            <Link to="location-cities">Cities</Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    {userType === 1 && (
                      <li>
                        <Link to="all-testimonials">
                          <i className="ti ti-brand-hipchat" />
                          <span>Testimonials</span>
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <a onClick={() => SetFaqOpen(!FaqOpen)}>
                          <i className="ti ti-question-mark" />
                          <span>FAQ’s</span>
                          <span className="menu-arrow" />
                        </a>
                        {FaqOpen && (
                          <ul>
                            <li>
                              <Link to="all-faq">FAQ's</Link>
                            </li>
                            <li>
                              <Link to="all-faq-categories">FAQ Category</Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    )}
                  </ul>
                </li>
                <li className="menu-title">
                  <span>SUPPORT</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="contact-message">
                        <i className="ti ti-messages" />
                        <span>Contact Messages</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="all-announcements">
                        <i className="ti ti-speakerphone" />
                        <span>Announcements</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="all-tickets">
                        <i className="ti ti-ticket" />
                        <span>Tickets</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>USER MANAGEMENT</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="all-user">
                        <i className="ti ti-user-circle" />
                        <span>Users</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="roles-permissions">
                        <i className="ti ti-user-shield" />
                        <span>Roles &amp; Permissions</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>REPORTS</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link to="earning-reports">
                        <i className="ti ti-chart-line" />
                        <span>Earnings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="rental-report">
                        <i className="ti ti-chart-infographic" />
                        <span>Rentals</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-title">
                  <span>SETTINGS &amp; CONFIGURATION</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <a onClick={() => SetSettingOpen(!SettingOpen)}>
                        <i className="ti ti-user-cog" />
                        <span>Account Settings</span>
                        <span className="menu-arrow" />
                      </a>
                      {SettingOpen && (
                        <ul>
                          <li>
                            <Link to="profile-setting">Profile</Link>
                          </li>
                          <li>
                            <Link to="security-setting">Security</Link>
                          </li>
                          <li>
                            <Link to="notification-setting">Notifications</Link>
                          </li>
                          <li>
                            <Link to="integration-setting">Integrations</Link>
                          </li>
                          <li>
                            <Link to="tracker-setting">Tracker</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
      {/* /Sidebar */}
      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

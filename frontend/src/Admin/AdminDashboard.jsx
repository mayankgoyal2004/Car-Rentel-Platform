import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
  const [isMini, setIsMini] = useState(true); // default collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //

  const dispatch = useDispatch();
  const navigete = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeUser());
    navigete("/login");
  };
  const toggleSidebar = () => {
    const wrapper = document.querySelector(".main-wrapper");
    wrapper.classList.toggle("slide-nav");
  };

  return (
    <div className={`main-wrapper `}>
      {/* Header */}
      <div className="header ">
        <div className="main-header">
          <div className="header-left">
            <NavLink to="/admin-dashboard" className="logo">
              <img src="/admin-assets/img/logo.svg" alt="Logo" />
            </NavLink>
            <NavLink to="/admin-dashboard" className="dark-logo">
              <img src="/admin-assets/img/logo-white.svg" alt="Logo" />
            </NavLink>
          </div>
          <a id="mobile_btn" className="mobile_btn" onClick={toggleSidebar}>
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <div className=" header-user custom-admin">
            <div className="nav custom-admin user-menu nav-list navouter">
              <div
                className="me-auto d-flex align-items-center"
                id="header-search"
              >
                <a id="toggle_btn">
                  <i className="ti ti-menu-deep" />
                </a>
                <div className="add-dropdown">
                  <NavLink
                    to="add-reservation"
                    className="btn btn-dark d-inline-flex align-items-center"
                  >
                    <i className="ti ti-plus me-1" />
                    New Reservation
                  </NavLink>
                </div>
              </div>
              <div className="d-flex align-items-center header-icons">
                <div className="dropdown">
                  <a
                    className="btn btn-menubar"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="ti ti-grid-dots" />
                  </a>
                  <div className="dropdown-menu p-3">
                    <ul>
                      <li>
                        <NavLink
                          to="add-car"
                          className="dropdown-item d-inline-flex align-items-center"
                        >
                          <i className="ti ti-car me-2" />
                          car
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to=""
                          href="extra-services.html"
                          className="dropdown-item d-inline-flex align-items-center"
                        >
                          <i className="ti ti-script-plus me-2" />
                          Extra Service
                        </NavLink>
                      </li>

                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="dropdown profile-dropdown">
                  <a
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
                          src={`${BASE_URL_IMG + userData.image}`}
                          alt="Img"
                        />
                      </span>
                      <div>
                        <h6 className="fw-semibold mb-1">
                          {userData.userName}
                        </h6>
                        <p className="fs-13">
                          <a
                            className="__cf_email__"
                            data-cfemail="f7969993859280b7928f969a879b92d994989a"
                          >
                            {userData.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="dropdown-item"></div>
                    <NavLink
                      to="security-setting"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="ti ti-exchange me-2" />
                      Change Password
                    </NavLink>
                    <NavLink
                      to="profile-setting"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="ti ti-settings me-2" />
                      Settings
                    </NavLink>
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
              <NavLink to="profile-setting" className="dropdown-item">
                Settings
              </NavLink>
              <NavLink to="/login" className="dropdown-item">
                Logout
              </NavLink>
            </div>
          </div>
          {/* /Mobile Menu */}
        </div>
      </div>

      {/* /Header */}
      {/* Sidebar */}
      <div
        className="sidebar"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        id="sidebar"
      >
        {/* Logo */}
        <div className="sidebar-logo navbar-1">
          <NavLink to="/admin-dashboard" className="logo logo-normal">
            <img src="/admin-assets/img/logo.svg" alt="Logo" />
          </NavLink>
          <NavLink to="/admin-dashboard" className="logo-small">
            <img src="/admin-assets/img/logo-small.svg" alt="Logo" />
          </NavLink>
          <NavLink to="/admin-dashboard" className="dark-logo">
            <img src="/admin-assets/img/logo-white.svg" alt="Logo" />
          </NavLink>
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
                      <NavLink to="">
                        <i className="ti ti-layout-dashboard" />
                        <span>Dashboard</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {userType !== 1 && (
                  <li className="menu-title">
                    <span>Bookings</span>
                  </li>
                )}
                {userType !== 1 && (
                  <li>
                    <ul>
                      <li>
                        <NavLink to="all-reservation">
                          <i className="ti ti-files" />
                          <span>Reservations</span>
                          <span className="track-icon" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="admin-calender">
                          <i className="ti ti-calendar-bolt" />
                          <span>Calendar</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="all-enquiries">
                          <i className="ti ti-mail" />
                          <span>Enquiries</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}

                <li className="menu-title">
                  <span>Manage</span>
                </li>

                <li>
                  <ul>
                    <li>
                      <NavLink to="all-customers">
                        <i className="ti ti-users-group" />
                        <span>Customers</span>
                      </NavLink>
                    </li>
                    {userType === 1 && (
                      <li>
                        <NavLink to="all-owners">
                          <i className="ti ti-users-group" />
                          <span>Owners</span>
                        </NavLink>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <NavLink to="all-drivers">
                          <i className="ti ti-user-bolt" />
                          <span>Drivers</span>
                        </NavLink>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <NavLink to="all-locations">
                          <i className="ti ti-map-pin" />
                          <span>Locations</span>
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </li>

                <li className="menu-title">
                  <span>RENTALS</span>
                </li>

                <li>
                  <ul>
                    <li>
                      <NavLink to="all-cars">
                        <i className="ti ti-car" />
                        <span>Cars</span>
                      </NavLink>
                    </li>

                    {userType !== 1 && (
                      <li>
                        <a onClick={() => setOpen(!open)}>
                          <i className="ti ti-device-camera-phone" />
                          <span>car Attributes</span>
                          <span className="menu-arrow" />
                        </a>
                        {open && (
                          <ul>
                            <li>
                              <NavLink to="car-brands">Brands</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-types">Types</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-models">Models</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-transmissions">
                                Transmissions
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="car-fuel">Fuels</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-color">Colors</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-steering">Steering</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-seats">Seats</NavLink>
                            </li>
                            <li>
                              <NavLink to="car-cylinders">Cylinders</NavLink>
                            </li>

                            <li>
                              <NavLink to="car-features">Features</NavLink>
                            </li>
                          </ul>
                        )}
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <NavLink to="car-extra-features">
                          <i className="ti ti-script-plus" />
                          <span>Extra Service</span>
                        </NavLink>
                      </li>
                    )}
                    {/* <li>
                      <NavLink to="car-pricing">
                        <i className="ti ti-file-dollar" />
                        <span>Seasonal Pricing</span>
                      </NavLink>
                    </li> */}

                    {/* <li>
                      <NavLink to="car-maintenance">
                        <i className="ti ti-color-filter" />
                        <span>Maintenance</span>
                      </NavLink>
                    </li> */}
                    {userType !== 1 && (
                      <li>
                        <NavLink to="car-review">
                          <i className="ti ti-star" />
                          <span>Reviews</span>
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </li>
                {userType !== 1 && (
                  <li className="menu-title">
                    <span>FINANCE &amp; ACCOUNTS</span>
                  </li>
                )}
                {userType !== 1 && (
                  <li>
                    <ul>
                      <li>
                        <NavLink to="all-invoice">
                          <i className="ti ti-file-invoice" />
                          <span>Invoices</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
                {userType !== 1 && (
                  <li className="menu-title">
                    <span>OTHERS</span>
                  </li>
                )}
                {userType !== 1 && (
                  <li>
                    <ul>
                      <li>
                        <NavLink to="admin-message">
                          <i className="ti ti-message" />
                          <span>Messages</span>
                          <span className="count">5</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
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
                            <NavLink to="all-blogs">All Blogs</NavLink>
                          </li>
                          {userType === 1 && (
                            <li>
                              <NavLink to="blogs-categories">
                                Categories
                              </NavLink>
                            </li>
                          )}
                          {userType !== 1 && (
                            <li>
                              <NavLink to="blogs-comments">Comments</NavLink>
                            </li>
                          )}
                          {userType === 1 && (
                            <li>
                              <NavLink to="blogs-blogs-tags">Blog Tags</NavLink>
                            </li>
                          )}
                        </ul>
                      )}
                    </li>

                    {userType !== 1 && (
                      <li>
                        <a onClick={() => SetLocationOpen(!LocationOpen)}>
                          <i className="ti ti-map" />
                          <span>Locations</span>
                          <span className="menu-arrow" />
                        </a>
                        {LocationOpen && (
                          <ul>
                            <li>
                              <NavLink to="location-countries">
                                Countries
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="location-states">States</NavLink>
                            </li>
                            <li>
                              <NavLink to="location-cities">Cities</NavLink>
                            </li>
                          </ul>
                        )}
                      </li>
                    )}

                    {userType === 1 && (
                      <li>
                        <NavLink to="all-testimonials">
                          <i className="ti ti-brand-hipchat" />
                          <span>Testimonials</span>
                        </NavLink>
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
                              <NavLink to="all-faq">FAQ's</NavLink>
                            </li>
                            <li>
                              <NavLink to="all-faq-categories">
                                FAQ Category
                              </NavLink>
                            </li>
                          </ul>
                        )}
                      </li>
                    )}
                  </ul>
                </li>
                {userType === 1 && (
                  <li className="menu-title">
                    <span>SUPPORT</span>
                  </li>
                )}
                {userType === 1 && (
                  <li>
                    <ul>
                      <li>
                        <NavLink to="contact-message">
                          <i className="ti ti-messages" />
                          <span>Contact Messages</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
                {userType !== 1 && (
                  <li className="menu-title">
                    <span>USER MANAGEMENT</span>
                  </li>
                )}
                {userType !== 1 && (
                  <li>
                    <ul>
                      <li>
                        <NavLink to="all-user">
                          <i className="ti ti-user-circle" />
                          <span>Users</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="roles-permissions">
                          <i className="ti ti-user-shield" />
                          <span>Roles &amp; Permissions</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
                {/* <li className="menu-title">
                  <span>REPORTS</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <NavLink to="earning-reports">
                        <i className="ti ti-chart-line" />
                        <span>Earnings</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="rental-report">
                        <i className="ti ti-chart-infographic" />
                        <span>Rentals</span>
                      </NavLink>
                    </li>
                  </ul>
                </li> */}

                <li className="menu-title">
                  <span>SETTINGS &amp; CONFIGURATION</span>
                </li>
                <li>
                  {userType === 1 ||
                    (userType === 2 && (
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
                                <NavLink to="profile-setting">Profile</NavLink>
                              </li>
                              <li>
                                <NavLink to="security-setting">
                                  Security
                                </NavLink>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    ))}
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

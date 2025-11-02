import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import {
  X,
  ChevronDown,
  LogOut,
  ArrowRight,
  User,
  Lock,
  Heart,
  MessageCircle,
  RefreshCcw,
} from "react-feather";

const Header = () => {
  const [pageOpen, setPageOpen] = useState(false);
  const [companySetting, setCompanySetting] = useState({});
  const [user, setUser] = useState(null);
  const [activePath, setActivePath] = useState("/");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchCompanySetting = async () => {
    try {
      const res = await apiService.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load company settings" + err.message);
    }
  };

  useEffect(() => {
    fetchCompanySetting();
  }, []);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    window.history.replaceState(null, "", "/#");
  };

  useEffect(() => {
    const mobileBtn = document.getElementById("mobile_btn");
    const menuClose = document.getElementById("menu_close");

    const toggleMenu = () => {
      document.documentElement.classList.toggle("menu-opened");
    };

    mobileBtn?.addEventListener("click", toggleMenu);
    menuClose?.addEventListener("click", toggleMenu);

    return () => {
      mobileBtn?.removeEventListener("click", toggleMenu);
      menuClose?.removeEventListener("click", toggleMenu);
    };
  }, []);

  const userData = useSelector((store) => store.user);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  }, [userData]);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeUser());
    setUser(null);
    navigate("/");
  };

  // Helper function to check if a path is active
  const isActive = (path) => {
    if (path === "/" && activePath === "/") return true;
    if (path !== "/" && activePath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header header-four custom-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          {/* Logo */}
          <div className="navbar-header">
            <a id="mobile_btn">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link
              to="/#"
              className="navbar-brand logo"
              onClick={handleLogoClick}
            >
              <img
                src={BASE_URL_IMG + companySetting?.profilePhoto}
                className="img-fluid white-logo"
                alt="Logo"
              />
              <img
                src={BASE_URL_IMG + companySetting?.profilePhoto}
                className="img-fluid dark-logo"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img
                  src={BASE_URL_IMG + companySetting?.profilePhoto}
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <a id="menu_close" className="menu-close">
                <X size={22} />
              </a>
            </div>

            <ul className="main-nav">
              <li className={`has-submenu ${isActive("/") ? "active" : ""}`}>
                <Link to="/">Home</Link>
              </li>
              <li
                className={`has-submenu ${
                  isActive("/listing") ? "active" : ""
                }`}
              >
                <Link to="/listing">Listings</Link>
              </li>
              <li
                className={`has-submenu ${pageOpen ? "submenu-open" : ""} ${
                  isActive("/about-us") ||
                  isActive("/contact-us") ||
                  isActive("/faq")
                    ? "active"
                    : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPageOpen(!pageOpen);
                  }}
                >
                  Pages <ChevronDown size={18} />
                </a>
                <ul className="submenu">
                  <li className={isActive("/about-us") ? "active" : ""}>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className={isActive("/contact-us") ? "active" : ""}>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li className={isActive("/faq") ? "active" : ""}>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`has-submenu ${
                  isActive("/blog-list") ? "active" : ""
                }`}
              >
                <Link to="/blog-list">Blogs</Link>
              </li>
              {!user && (
                <>
                  <li
                    className={` login-link has-submenu ${
                      isActive("/login") ? "active" : ""
                    }`}
                  >
                    <Link to="/login">Login</Link>
                  </li>
                  <li
                    className={` login-link has-submenu ${
                      isActive("/register") ? "active" : ""
                    }`}
                  >
                    <Link to="/register">Sign Up</Link>
                  </li>
                </>
              )}

              {/* Profile and Logout in sidebar (mobile view) */}
              {user && (
                <>
                  <li
                    className={`has-submenu mobile-profile-item ${
                      isActive("/user-dashboard") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/user-dashboard"
                      className="d-flex align-items-center"
                    >
                      <span className="user-img me-2">
                        <img
                          src={`${BASE_URL_IMG + user.image}`}
                          alt="Profile"
                          className="img-fluid rounded-circle"
                        />
                      </span>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className="has-submenu mobile-logout-item">
                    <Link
                      onClick={handleLogout}
                      className="d-flex align-items-center"
                    >
                     <LogOut size={18} className="me-2" />

                      <span>Logout</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* ✅ Right Side Buttons - Only show login/signup in desktop view */}
          <ul className="nav header-navbar-rht">
            {user ? (
              <li className="nav-item dropdown profile-dropdown">
                <a
                  className="d-flex align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  href="#!"
                >
                  <span className="user-img">
                    <img
                      src={`${BASE_URL_IMG + user.image}`}
                      alt="Profile"
                      className="img-fluid rounded-circle"
                    />
                  </span>
                  {/* <span className="ms-1">{user.userName}</span> */}
                  <ChevronDown size={18} />
                </a>
                <div className="dropdown-menu p-2">
                  {/* Profile Header */}
                  <div className="profileset d-flex align-items-center mb-2">
                    <span className="user-img me-2">
                      {/* <img
                        src={`${BASE_URL_IMG + user?.image}`}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                      /> */}
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">{user.userName}</h6>
                      <p className="mb-0 text-muted">{user.email}</p>
                    </div>
                  </div>

                  <div className="dropdown-divider" />

                  {/* Dashboard Link */}
                  <Link
                    to="/user-dashboard"
                    className={`dropdown-item d-flex align-items-center ${
                      isActive("/user-dashboard") ? "active" : ""
                    }`}
                  >
                 <RefreshCcw size={18} className="me-2" />

                    Dashboard
                  </Link>

                  {/* Wishlist Link */}
                  <Link
                    to="/user-dashboard/user-wishlist"
                    className={`dropdown-item d-flex align-items-center ${
                      isActive("/user-dashboard/user-wishlist") ? "active" : ""
                    }`}
                  >
                 <Heart size={18} className="me-2" />

                    Wishlist
                  </Link>

                  {/* Messages Link */}
                  <Link
                    to="/user-dashboard/user-message"
                    className={`dropdown-item d-flex align-items-center ${
                      isActive("/user-dashboard/user-message") ? "active" : ""
                    }`}
                  >
                  <MessageCircle size={18} className="me-2" />

                    Messages
                  </Link>

                  <div className="dropdown-divider" />

                  {/* Logout */}
                  <button
                    className="dropdown-item logout d-flex align-items-center justify-content-between"
                    onClick={handleLogout}
                  >
                    <span>
                      <LogOut size={18} className="me-2" /> Logout Account
                    </span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </li>
            ) : (
              <>
                {/* Sign in/up buttons when not logged in */}
                <li className="nav-item">
                  <Link
                    to="/login"
                    className={`nav-link custom-nav btn-secondary btn d-inline-flex align-items-center ${
                      isActive("/login") ? "active" : ""
                    }`}
                  >
                   <User size={18} className="me-1" />

                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className={`nav-link header-reg d-inline-flex align-items-center ${
                      isActive("/register") ? "active" : ""
                    }`}
                  >
                   <Lock size={18} className="me-1" />

                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { BASE_URL_IMG } from "../../Apiservice/apiService";

const Header = () => {
  const [pageOpen, setPageOpen] = useState(false);
  const [user, setUser] = useState(null); // store logged in user
  const dispatch = useDispatch();

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
  };

  return (
    <header className="header header-four">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          {/* Logo */}
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img
                src="/user-assets/img/logo-white.svg"
                className="img-fluid white-logo"
                alt="Logo"
              />
              <img
                src="/user-assets/img/logo.svg"
                className="img-fluid dark-logo"
                alt="Logo"
              />
            </Link>
            <Link to="/" className="navbar-brand logo-small">
              <img
                src="/user-assets/img/logo-small.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img
                  src="/user-assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>

            <ul className="main-nav">
              <li className="has-submenu megamenu active">
                <Link to="/">Home</Link>
              </li>
              <li className="has-submenu">
                <Link to="/listing">Listings</Link>
              </li>
              <li className={`has-submenu ${pageOpen ? "submenu-open" : ""}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPageOpen(!pageOpen);
                  }}
                >
                  Pages <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/blog-list">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* ✅ Right Side Buttons */}
          <ul className="nav header-navbar-rht">
            {user ? (
              // Profile dropdown (only when logged in)
              <li className="nav-item dropdown profile-dropdown">
                <a
                  href="javascript:void(0);"
                  className="d-flex align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <span className="avatar avatar-sm">
                    <img
                      src={`${BASE_URL_IMG + user.image}`}
                      alt="Profile"
                      className="img-fluid rounded-circle"
                    />
                  </span>
                </a>
                <div className="dropdown-menu">
                  <div className="profileset d-flex align-items-center">
                    <span className="user-img me-2">
                      <img
                        src={`${BASE_URL_IMG + user.image}`}
                        alt="Profile"
                      />
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">{user.userName}</h6>
                    </div>
                  </div>

                  <div className="dropdown-divider my-2" />
                  <Link
                    to="/user-dashboard"
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="ti ti-exchange me-2" /> Profile
                  </Link>

                  <div className="dropdown-divider my-2" />
                  <button
                    className="dropdown-item logout d-flex align-items-center justify-content-between"
                    onClick={handleLogout}
                  >
                    <span>
                      <i className="ti ti-logout me-2" /> Logout Account
                    </span>
                    <i className="ti ti-chevron-right" />
                  </button>
                </div>
              </li>
            ) : (
              // Sign in/up buttons when not logged in
              <>
                <li className="nav-item user-link">
                  <Link
                    to="/login"
                    className="nav-link btn-secondary btn d-inline-flex align-items-center"
                  >
                    <i className="bx bx-user me-1" />
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link header-reg d-inline-flex align-items-center"
                  >
                    <span>
                      <i className="bx bx-lock" />
                    </span>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

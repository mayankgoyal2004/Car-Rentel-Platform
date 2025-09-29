import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, Send } from "react-feather";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const Footer = () => {
  const [companySetting, setCompanySetting] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  const fetchCompanySetting = async () => {
    try {
      const res = await apiService.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load company settings");
    }
  };

  useEffect(() => {
    fetchCompanySetting();
  }, []);

  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">About Company</h5>
                    <ul>
                      <li>
                        <Link to="/about-us">Our Company</Link>
                      </li>
                      <li>
                        <Link to="/our-team" href="javascript:void(0)">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link
                          to="/terms-and-condition"
                          href="javascript:void(0)"
                        >
                          Terms and conditions
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy" href="javascript:void(0)">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Vehicles Type</h5>
                    <ul>
                      <li>
                        <Link to="/listing">All Vehicles</Link>
                      </li>
                      <li>
                        <Link to="/listing">SUVs</Link>
                      </li>
                      <li>
                        <Link to="/listing">Trucks</Link>
                      </li>
                      <li>
                        <Link to="/listing">Cars</Link>
                      </li>
                      <li>
                        <Link to="/listing">Crossovers</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Quick links</h5>
                    <ul>
                      <li>
                        <Link to="/user-dashboard">My Account</Link>
                      </li>
                      <li>
                        <Link to="/listing">All vehicles</Link>
                      </li>
                      <li>
                        <Link to="/blog-list" href="javascript:void(0)">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-contact footer-widget">
                <h5 className="footer-title">Contact Info</h5>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <PhoneCall size={18} />
                    </span>
                    <div className="addr-info">
                      <a href={`tel:${companySetting?.phone}`}>{companySetting?.phone}</a>
                    </div>
                  </div>
                  <div className="footer-address">
                    <span>
                      <Mail size={18} />
                    </span>
                    <div className="addr-info">
                      <a href={`mailto:${companySetting?.email}`}>
                      {companySetting?.email}
                      </a>
                    </div>
                  </div>
                  <div className="update-form">
                    <form action="#">
                      <span>
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter You Email Here"
                      />
                      <button type="submit" className="btn btn-subscribe">
                        <span>
                          <Send size={18} />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="footer-social-widget">
                  <ul className="nav-social">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f fa-facebook fi-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="#" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance fi-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter fi-icon" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin fi-icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© 2025 Vibrantick Inc All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6">
                {/* Copyright Menu */}
                <div className="copyright-menu">
                  <div className="vistors-details">
                    <ul className="d-flex">
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/icons/paypal.svg"
                            alt="Paypal"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/icons/visa.svg"
                            alt="Visa"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/icons/master.svg"
                            alt="Master"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/icons/applegpay.svg"
                            alt="applegpay"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Copyright Menu */}
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
  );
};

export default Footer;

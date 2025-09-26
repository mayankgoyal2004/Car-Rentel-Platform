import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookingDetals = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-wrapper">
        {/* Breadscrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Checkout</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadscrumb Section */}
        <div className="booking-new-module">
          <div className="container">
            <div className="booking-wizard-head">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-3">
                  <div className="booking-head-title">
                    <h4>Reserve Your Car</h4>
                    <p>Complete the following steps</p>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9">
                  <div className="booking-wizard-lists">
                    <ul>
                      <li className="active activated">
                        <span>
                          <img
                            src="/user-assets/img/icons/booking-head-icon-01.svg"
                            alt="Booking Icon"
                          />
                        </span>
                        <h6>Location &amp; Time</h6>
                      </li>
                      <li className="active activated">
                        <span>
                          <img
                            src="/user-assets/img/icons/booking-head-icon-02.svg"
                            alt="Booking Icon"
                          />
                        </span>
                        <h6>Extra Services</h6>
                      </li>
                      <li className="active">
                        <span>
                          <img
                            src="/user-assets/img/icons/booking-head-icon-03.svg"
                            alt="Booking Icon"
                          />
                        </span>
                        <h6>Detail</h6>
                      </li>
                      <li>
                        <span>
                          <img
                            src="/user-assets/img/icons/booking-head-icon-04.svg"
                            alt="Booking Icon"
                          />
                        </span>
                        <h6>Checkout</h6>
                      </li>
                      <li>
                        <span>
                          <img
                            src="/user-assets/img/icons/booking-head-icon-05.svg"
                            alt="Booking Icon"
                          />
                        </span>
                        <h6>Booking Confirmed</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-detail-info">
              <div className="row">
                <div className="col-lg-8">
                  <div className="booking-information-main">
                    <form action={`/booking-payment/${id}`}>
                      <div className="booking-information-card">
                        <div className="booking-info-head justify-content-between">
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="bx bx-add-to-queue" />
                            </span>
                            <h5>Billing Info</h5>
                          </div>
                          <div className="d-flex align-items-center">
                            <h6>Returning customer?</h6>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-secondary ms-3"
                              data-bs-toggle="modal"
                              data-bs-target="#sign_in_modal"
                            >
                              <i className="bx bx-user me-2" />
                              Sign In
                            </a>
                          </div>
                        </div>
                        <div className="booking-info-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">
                                  First Name{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter First Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">
                                  Last Name{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">
                                  No of Persons{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <select className="form-control select">
                                  <option>2 Adults, 1 Child</option>
                                  <option>5 Adults, 2 Child</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">Company</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Company Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block">
                                <label className="form-label">
                                  Street Address{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="input-block">
                                <label className="form-label">
                                  Country{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <select className="form-control select">
                                  <option>Country</option>
                                  <option>USA</option>
                                  <option>UK</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="input-block">
                                <label className="form-label">
                                  Enter City{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="City"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="input-block">
                                <label className="form-label">
                                  Pincode{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Pincode"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">
                                  Email Address{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">
                                  Phone Number{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block">
                                <label className="form-label">
                                  Additional Information
                                </label>
                                <textarea
                                  className="form-control"
                                  placeholder="Enter Additional Information"
                                  rows={5}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block m-0">
                                <label className="custom_check d-inline-flex location-check m-0">
                                  <span>
                                    I have Read and Accept Terms &amp;
                                    Conditions
                                  </span>{" "}
                                  <span className="text-danger"> *</span>
                                  <input type="checkbox" name="remeber" />
                                  <span className="checkmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="booking-info-btns d-flex justify-content-end">
                        <Link
                          to="/booking-add-on"
                          className="btn btn-secondary"
                        >
                          Back to Extra Services
                        </Link>
                        <button
                          className="btn btn-primary continue-book-btn"
                          type="submit"
                        >
                          Confirm &amp; Pay Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 theiaStickySidebar">
                  <div className="booking-sidebar">
                    <div className="booking-sidebar-card">
                      <div className="accordion-item border-0 mb-4">
                        <div className="accordion-header">
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion_collapse_one"
                            aria-expanded="true"
                          >
                            <div className="booking-sidebar-head">
                              <h5>
                                Booking Details
                                <i className="fas fa-chevron-down" />
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div
                          id="accordion_collapse_one"
                          className="accordion-collapse collapse"
                        >
                          <div className="booking-sidebar-body">
                            <div className="booking-car-detail">
                              <span className="car-img">
                                <img
                                  src="/user-assets/img/car-list-4.jpg"
                                  className="img-fluid"
                                  alt="Car"
                                />
                              </span>
                              <div className="care-more-info">
                                <h5>Chevrolet Camaro</h5>
                                <p>Miami St, Destin, FL 32550, USA</p>
                                <Link to="/listing-details">
                                  View Car Details
                                </Link>
                              </div>
                            </div>
                            <div className="booking-vehicle-rates">
                              <ul>
                                <li>
                                  <div className="rental-charge">
                                    <h6>
                                      Rental Charges Rate <span> (1 day )</span>
                                    </h6>
                                    <span className="text-danger">
                                      (This does not include fuel)
                                    </span>
                                  </div>
                                  <h5>+ $300</h5>
                                </li>
                                <li>
                                  <h6>Doorstep delivery</h6>
                                  <h5>+ $0</h5>
                                </li>
                                <li>
                                  <h6>Trip Protection Fees</h6>
                                  <h5>+ $0</h5>
                                </li>
                                <li>
                                  <h6>Convenience Fees</h6>
                                  <h5>+ $0</h5>
                                </li>
                                <li>
                                  <h6>Tax</h6>
                                  <h5>+ $0</h5>
                                </li>
                                <li>
                                  <h6>Refundable Deposit</h6>
                                  <h5>+$0</h5>
                                </li>

                                <li className="total-rate">
                                  <h6>Subtotal</h6>
                                  <h5>+$1604</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-sidebar-card">
                      <div className="accordion-item border-0 mb-4">
                        <div className="accordion-header p-3 d-flex align-center justify-content-between">
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion_collapse_three"
                            aria-expanded="true"
                          >
                            <div className="booking-sidebar-head p-0 d-flex justify-content-between align-items-center">
                              <h5>
                                Location &amp; Time
                                <i className="fas fa-chevron-down" />
                              </h5>
                            </div>
                          </div>
                          <Link
                            to="/booking-checkout"
                            className="d-flex align-items-center sidebar-edit"
                          >
                            <i className="bx bx-edit-alt me-2" />
                            Edit
                          </Link>
                        </div>
                        <div
                          id="accordion_collapse_three"
                          className="accordion-collapse collapse"
                        >
                          <div className="booking-sidebar-body">
                            <ul className="location-address-info">
                              <li>
                                <h6>Rental Type</h6>
                                <p>Delivery</p>
                              </li>
                              <li>
                                <h6>Booking Type</h6>
                                <p>Days</p>
                              </li>
                              <li>
                                <h6>Delivery Location &amp; time</h6>
                                <p>1230 E Springs Rd, Los Angeles, CA, USA</p>
                                <p>04/18/2024 - 14:00</p>
                              </li>
                              <li>
                                <h6>Return Location &amp; time</h6>
                                <p>
                                  Norwegian Caribbean Cruise Los Angeles, CA
                                  90025
                                </p>
                                <p>04/27/2024 - 03:00</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-sidebar-card">
                      <div className="accordion-item border-0 mb-4">
                        <div className="accordion-header d-flex align-center justify-content-between p-3">
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion_collapse_four"
                            aria-expanded="true"
                          >
                            <div className="booking-sidebar-head p-0 d-flex justify-content-between align-items-center">
                              <h5>
                                Extra Services
                                <i className="fas fa-chevron-down" />
                              </h5>
                            </div>
                            <Link
                              to="/booking-add-on"
                              className="d-flex align-items-center sidebar-edit"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </Link>
                          </div>
                        </div>
                        <div
                          id="accordion_collapse_four"
                          className="accordion-collapse collapse"
                        >
                          <div className="booking-sidebar-body">
                            <div className="booking-vehicle-rates">
                              <ul className="mt-0">
                                <li>
                                  <h6>GPS Navigation Systems</h6>
                                  <h5> $25</h5>
                                </li>
                                <li>
                                  <h6>Wi-Fi Hotspot</h6>
                                  <h5> $25</h5>
                                </li>
                                <li>
                                  <h6>Child Safety Seats</h6>
                                  <h5> $50</h5>
                                </li>
                                <li className="total-rate">
                                  <h6>Extra Services Charges Rate</h6>
                                  <h5>$1200</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="book-our-drivers">
                              <h4 className="title-head">Driver</h4>
                              <ul className="acting-driver-list">
                                <li className="d-block">
                                  <div className="driver-profile-info">
                                    <span className="driver-profile">
                                      <img
                                        src="/user-assets/img/drivers/driver-02.jpg"
                                        alt="Img"
                                      />
                                    </span>
                                    <div className="driver-name">
                                      <h5>Ruban</h5>
                                      <ul>
                                        <li>No of Rides Completed : 32</li>
                                        <li>Price : $100</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="change-driver">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-secondary d-inline-flex align-items-center"
                                    >
                                      <i className="bx bx-check-circle me-2" />
                                      Change Driver
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="total-rate-card">
                      <div className="vehicle-total-price">
                        <h5>Estimated Total</h5>
                        <span>$3541</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal new-modal multi-step fade"
        id="sign_in_modal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-auth">
                    <div className="login-auth-wrap">
                      <h1>Sign In</h1>
                      <p className="account-subtitle">
                        We'll send a confirmation code to your email.
                      </p>
                      <form action="/">
                        <div className="input-block">
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="input-block">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type="password"
                              className="form-control pass-input"
                              placeholder="............."
                            />
                            <span className="fas fa-eye-slash toggle-password" />
                          </div>
                        </div>
                        <div className="input-block text-end">
                          <Link to="/forgot-password" className="forgot-link">
                            Forgot Password ?
                          </Link>
                        </div>
                        <div className="input-block m-0">
                          <label className="custom_check d-inline-flex">
                            <span>Remember me</span>
                            <input type="checkbox" name="remeber" />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <Link
                          to="/"
                          className="btn btn-outline-light w-100 btn-size mt-1"
                        >
                          Sign In
                        </Link>
                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or-log">
                            Or, log in with your email
                          </span>
                        </div>
                        {/* Social Login */}
                        <div className="social-login">
                          <a
                            href="#"
                            className="d-flex align-items-center justify-content-center input-block btn google-login w-100"
                          >
                            <span>
                              <img
                                src="/user-assets/img/icons/google.svg"
                                className="img-fluid"
                                alt="Google"
                              />
                            </span>
                            Log in with Google
                          </a>
                        </div>
                        <div className="social-login">
                          <a
                            href="#"
                            className="d-flex align-items-center justify-content-center input-block btn google-login w-100"
                          >
                            <span>
                              <img
                                src="/user-assets/img/icons/facebook.svg"
                                className="img-fluid"
                                alt="Facebook"
                              />
                            </span>
                            Log in with Facebook
                          </a>
                        </div>
                        {/* /Social Login */}
                        <div className="text-center dont-have">
                          Don't have an account ?{" "}
                          <Link to="/register">Sign Up</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetals;

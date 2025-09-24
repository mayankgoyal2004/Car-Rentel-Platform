import React from "react";
import { Link, Outlet ,NavLink } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
     <div className="main-wrapper">
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">User Dashboard</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb Section */}

  {/* Dashboard Menu */}
  <div className="dashboard-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="dashboard-menu">
            <ul>
              <li>
                <NavLink
                  to=""
                  end
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="/user-assets/img/icons/dashboard-icon.svg"
                    alt="Icon"
                  />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="user-booking"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="/user-assets/img/icons/booking-icon.svg"
                    alt="Icon"
                  />
                  <span>My Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="user-review"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="/user-assets/img/icons/review-icon.svg"
                    alt="Icon"
                  />
                  <span>Reviews</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="user-wishlist"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="/user-assets/img/icons/wishlist-icon.svg"
                    alt="Icon"
                  />
                  <span>Wishlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="user-message"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="/user-assets/img/icons/message-icon.svg"
                    alt="Icon"
                  />
                  <span>Messages</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="user-setting"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img
                    src="/user-assets/img/icons/settings-icon.svg"
                    alt="Icon"
                  />
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Dashboard Menu */}
  <Outlet />
</div>
      <div>
        <div
          className="modal new-modal multi-step fade"
          id="complete_booking"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>Chevrolet Camaro</h6>
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      $4700{" "}
                      <a href="javascript:void(0);">
                        <i className="feather-alert-circle" />
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="booking-group">
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Booking Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booking Type</h6>
                          <p>Delivery</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Rental Type</h6>
                          <p>Days (3 Days)</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Extra Service</h6>
                          <p>Mobile Charging</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Delivery</h6>
                          <p>45, Avenue ,Mark Street, USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Dropoff</h6>
                          <p>78, 10th street Laplace,USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Status</h6>
                          <span className="badge badge-light-success">
                            Completed
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booked On</h6>
                          <p>15 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Start Date</h6>
                          <p>18 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>End Date</h6>
                          <p>20 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Personal Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Details</h6>
                          <p>Johna Melinda</p>
                          <p>+1 56441 56464</p>
                          <p>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="9ed4f1f6f0ffdefbe6fff3eef2fbb0fdf1f3"
                            >
                              [email&nbsp;protected]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Address</h6>
                          <p>78, 10th street</p>
                          <p>Laplace,USA</p>
                          <p>316 654</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>No of Person’s</h6>
                          <p>2 Adults, 1 Child</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm text-end">
                  <a
                   
                    data-bs-target="#start_ride"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Start Ride
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Completed Booking */}
        {/* Order Success Modal */}
        <div
          className="modal new-modal order-success-modal fade"
          id="start_ride"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="order-success-info">
                  <span className="order-success-icon">
                    <img
                      src="/user-assets/img/icons/check-icon.svg"
                      alt="Icon"
                    />
                  </span>
                  <h4>Successful</h4>
                  <p>
                    YYou Ride has been successfully started. Order id :{" "}
                    <span>#50641</span>
                  </p>
                  <div className="modal-btn">
                    <Link to="/user-dashboard" className="btn btn-secondary">
                      Go to Dashboard <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Order Success Modal */}
        {/* Upcoming Booking */}
        <div
          className="modal new-modal multi-step fade"
          id="upcoming_booking"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>Chevrolet Camaro</h6>
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      $4700{" "}
                      <a href="javascript:void(0);">
                        <i className="feather-alert-circle" />
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="booking-group">
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Booking Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booking Type</h6>
                          <p>Delivery</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Rental Type</h6>
                          <p>Days (3 Days)</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Extra Service</h6>
                          <p>Mobile Charging</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Delivery</h6>
                          <p>45, Avenue ,Mark Street, USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Dropoff</h6>
                          <p>78, 10th street Laplace,USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Status</h6>
                          <span className="badge badge-light-secondary">
                            Upcoming
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booked On</h6>
                          <p>15 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Start Date</h6>
                          <p>18 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>End Date</h6>
                          <p>20 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Personal Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Details</h6>
                          <p>Johna Melinda</p>
                          <p>+1 56441 56464</p>
                          <p>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="2a604542444b6a4f524b475a464f04494547"
                            >
                              [email&nbsp;protected]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Address</h6>
                          <p>78, 10th street</p>
                          <p>Laplace,USA</p>
                          <p>316 654</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>No of Person’s</h6>
                          <p>2 Adults, 1 Child</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm text-end">
                  <a
                   
                    data-bs-target="#cancel_ride"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-secondary"
                  >
                    Cancel Booking
                  </a>
                  <a
                   
                    data-bs-target="#start_rides"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Start Ride
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Upcoming Booking */}
        {/* Edit Booking */}
        <div
          className="modal new-modal multi-step fade"
          id="edit_booking"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
                <div className="badge-item w-100 text-end">
                  <span className="badge badge-light-warning">Inprogress</span>
                </div>
              </div>
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>Chevrolet Camaro</h6>
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      $4700{" "}
                      <a href="javascript:void(0);">
                        <i className="feather-alert-circle" />
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="booking-group">
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Select Location</h6>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="loc-wrap">
                          <div className="modal-form-group loc-item">
                            <label>Delivery Location</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Location"
                            />
                          </div>
                          <div className="modal-form-group">
                            <label className="d-sm-block">&nbsp;</label>
                            <a
                             
                              className="btn btn-secondary"
                            >
                              <i className="fa-solid fa-location-crosshairs" />{" "}
                              Current Location
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="modal-form-group">
                          <label>Dropoff Location</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="78, 10th street Laplace USA"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>
                        <span className="title-icon">
                          <i className="fa-solid fa-location-dot" />
                        </span>
                        Select Booking type &amp; Time{" "}
                        <a href="javascript:void(0);">
                          <i className="feather-alert-circle" />
                        </a>
                      </h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="modal-form-group rent-radio active">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              className="rent-types"
                              name="rent_type"
                              defaultChecked
                            />
                            <span className="checkmark" />
                            <span className="rent-option">Hourly</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="modal-form-group rent-radio">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              className="rent-types"
                              name="rent_type"
                            />
                            <span className="checkmark" />
                            <span className="rent-option">Day (8 Hrs)</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="modal-form-group rent-radio">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              className="rent-types"
                              name="rent_type"
                            />
                            <span className="checkmark" />
                            <span className="rent-option">Weekly</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="modal-form-group rent-radio">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              className="rent-types"
                              name="rent_type"
                            />
                            <span className="checkmark" />
                            <span className="rent-option">Monthly</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="modal-form-group">
                          <label>Start Date</label>
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="modal-form-group">
                          <label>Start Time</label>
                          <input type="time" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="modal-form-group">
                          <label>Return Date</label>
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="modal-form-group">
                          <label>Return Time</label>
                          <input type="time" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>
                        <span className="title-icon">
                          <i className="fa-solid fa-medal" />
                        </span>
                        Extra Service
                      </h6>
                    </div>
                    <div className="selectbox-cont">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Baby Seat -{" "}
                        <span className="amt">$10</span>
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" defaultChecked />
                        <span className="checkmark" /> Mobile Charging -{" "}
                        <span className="amt">$50</span>
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Wi-Fi Hotspot -{" "}
                        <span className="amt">$60</span>
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Airport Shuttle Service -{" "}
                        <span className="amt">$90</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm text-end">
                  <a
                   
                    data-bs-dismiss="modal"
                    className="btn btn-secondary"
                  >
                    Go Back
                  </a>
                  <a
                   
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Save &amp; Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Booking */}
        {/* Cancel Ride Modal */}
        <div
          className="modal new-modal fade"
          id="cancel_ride"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Cancel Reason</h4>
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#">
                  <div className="modal-item">
                    <div className="modal-form-group">
                      <label>
                        Reason <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={
                          "The car arrived early & the rep was courteous and polite."
                        }
                      />
                    </div>
                  </div>
                  <div className="modal-btn modal-btn-sm text-end">
                    <a
                     
                      data-bs-dismiss="modal"
                      className="btn btn-secondary"
                    >
                      Cancel
                    </a>
                    <a
                     
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Submit
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Cancel Ride Modal */}
        {/* Order Success Modal */}
        <div
          className="modal new-modal order-success-modal fade"
          id="start_rides"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="order-success-info">
                  <span className="order-success-icon">
                    <img
                      src="/user-assets/img/icons/check-icon.svg"
                      alt="Icon"
                    />
                  </span>
                  <h4>Successful</h4>
                  <p>
                    YYou Ride has been successfully started. Order id :{" "}
                    <span>#50641</span>
                  </p>
                  <div className="modal-btn">
                    <Link to="/user-dashboard" className="btn btn-secondary">
                      Go to Dashboard <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Order Success Modal */}
        {/* Inprogress Booking */}
        <div
          className="modal new-modal multi-step fade"
          id="inprogress_booking"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>Chevrolet Camaro</h6>
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      $4700{" "}
                      <a href="javascript:void(0);">
                        <i className="feather-alert-circle" />
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="booking-group">
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Booking Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booking Type</h6>
                          <p>Delivery</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Rental Type</h6>
                          <p>Days (3 Days)</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Extra Service</h6>
                          <p>Mobile Charging</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Delivery</h6>
                          <p>45, Avenue ,Mark Street, USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Dropoff</h6>
                          <p>78, 10th street Laplace,USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Status</h6>
                          <span className="badge badge-light-warning">
                            Inprogress
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booked On</h6>
                          <p>15 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Start Date</h6>
                          <p>18 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>End Date</h6>
                          <p>20 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Personal Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Details</h6>
                          <p>Johna Melinda</p>
                          <p>+1 56441 56464</p>
                          <p>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="246e4b4c4a4564415c45495448410a474b49"
                            >
                              [email&nbsp;protected]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Address</h6>
                          <p>78, 10th street</p>
                          <p>Laplace,USA</p>
                          <p>316 654</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>No of Person’s</h6>
                          <p>2 Adults, 1 Child</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm text-end">
                  <a
                   
                    data-bs-target="#start_ride"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Complete Ride
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Inprogress Booking */}
        {/* Completed Booking */}
        <div
          className="modal new-modal multi-step fade"
          id="cancelled_booking"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>Chevrolet Camaro</h6>
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      $4700{" "}
                      <a href="javascript:void(0);">
                        <i className="feather-alert-circle" />
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="booking-group">
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Booking Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booking Type</h6>
                          <p>Delivery</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Rental Type</h6>
                          <p>Days (3 Days)</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Extra Service</h6>
                          <p>Mobile Charging</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Delivery</h6>
                          <p>45, Avenue ,Mark Street, USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Dropoff</h6>
                          <p>78, 10th street Laplace,USA</p>
                          <p>11 Jan 2023, 03:30 PM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Status</h6>
                          <span className="badge badge-light-danger">
                            Refund Initiated
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booked On</h6>
                          <p>15 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Start Date</h6>
                          <p>18 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>End Date</h6>
                          <p>20 Sep 2023, 09:30 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-wrapper">
                    <div className="booking-title">
                      <h6>Personal Details</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Details</h6>
                          <p>Johna Melinda</p>
                          <p>+1 56441 56464</p>
                          <p>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="13597c7b7d7253766b727e637f763d707c7e"
                            >
                              [email&nbsp;protected]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Address</h6>
                          <p>78, 10th street</p>
                          <p>Laplace,USA</p>
                          <p>316 654</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>No of Person’s</h6>
                          <p>2 Adults, 1 Child</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cancel-reason">
                    <h6>Cancel Reason</h6>
                    <p>
                      On the booking date i have other work on my personal so i
                      am cancelling my bookingOn the booking date i have other
                      work on my personal so i am cancelling my booking On the
                      booking date i have other work on my personal so i am
                      cancelling my booking
                    </p>
                  </div>
                  <div className="cancel-box">
                    <p>
                      Cancelled By User on 17 Sep 2023, Refund will deposited in
                      user account on 19 Sep 2023{" "}
                    </p>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm text-end">
                  <a
                   
                    data-bs-target="#view_status"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    View status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Cancelled Booking */}
        {/* View Status */}
        <div
          className="modal new-modal fade"
          id="view_status"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>Chevrolet Camaro</h6>
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      $4700{" "}
                      <a href="javascript:void(0);">
                        <i className="feather-alert-circle" />
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="refund-wrap booking-group">
                  <div className="booking-wrapper">
                    <h6>Refund Method</h6>
                    <div className="card-status-wrap">
                      <div className="card-status">
                        <h5>Mastercard</h5>
                        <p>Started on : 20 Oct 2023</p>
                      </div>
                      <div className="status-img">
                        <img
                          src="/user-assets/img/icons/card-icon.svg"
                          alt="Img"
                        />
                      </div>
                    </div>
                    <div className="refund-process">
                      <h5>Refund Process</h5>
                      <ul>
                        <li>
                          <h6>Dreams Rent initiated your refund</h6>
                          <p>20 Oct 2023</p>
                        </li>
                        <li>
                          <h6>Mastercard has accepted your request</h6>
                          <p>20 Oct 2023</p>
                        </li>
                        <li>
                          <h6>Refund credited to you account successfully</h6>
                          <p>20 Oct 2023</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /View Status */}
        {/* Cancel Reason Modal */}
        <div
          className="modal new-modal fade"
          id="cancel_reason"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Cancel Reason</h4>
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="reason-item">
                  <p>
                    On the booking date i have other work on my personal so i am
                    cancelling my bookingOn the booking date i have other work
                    on my personal so i am cancelling my bookingOn the booking
                    date i have other work on my personal so i am cancelling my
                    bookingOn the booking date i have other work on my personal
                    so i am cancelling my booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Cancel Reason Modal */}
        {/* Delete Modal */}
        <div
          className="modal new-modal fade"
          id="delete_modal"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="delete-action">
                  <div className="delete-header">
                    <h4>Delete Booking</h4>
                    <p>Are you sure want to delete?</p>
                  </div>
                  <div className="modal-btn">
                    <div className="row">
                      <div className="col-6">
                        <a
                         
                          data-bs-dismiss="modal"
                          className="btn btn-secondary w-100"
                        >
                          Delete
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                         
                          data-bs-dismiss="modal"
                          className="btn btn-primary w-100"
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
        {/* Custom Date Modal */}
        <div
          className="modal new-modal fade"
          id="custom_date"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Custom Date</h4>
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#">
                  <div className="modal-form-group">
                    <label>
                      From Date <span className="text-danger">*</span>
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="modal-form-group">
                    <label>
                      To Date <span className="text-danger">*</span>
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="modal-btn modal-btn-sm text-end">
                    <a
                     
                      data-bs-dismiss="modal"
                      className="btn btn-secondary"
                    >
                      Cancel Booking
                    </a>
                    <a
                     
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Start Ride
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Add Card Modal */}
          <div
            className="modal new-modal fade"
            id="add_card"
            data-keyboard="false"
            data-backdrop="static"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add New Card</h4>
                  <button
                    type="button"
                    className="close-btn"
                    data-bs-dismiss="modal"
                  >
                    <span>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#">
                    <div className="modal-form-group">
                      <label>
                        Card Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Card Number"
                      />
                    </div>
                    <div className="modal-form-group">
                      <label>
                        Name on Card <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Card Name"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="modal-form-group">
                          <label>
                            CVV <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter CVV Number"
                            />
                            <span className="cus-icon">
                              <img
                                src="/user-assets/img/icons/lock-icon.svg"
                                alt="Icon"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="modal-form-group">
                          <label>
                            Expiry Date <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="DD/MM/YYYY"
                            />
                            <span className="cus-icon">
                              <img
                                src="/user-assets/img/icons/calendar-icon.svg"
                                alt="Icon"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-form-group">
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="rememberme"
                          className="rememberme"
                        />
                        <span className="checkmark" />
                        Save this account for future transaction
                      </label>
                    </div>
                    <div className="modal-btn">
                      <button type="submit" className="btn btn-secondary w-100">
                        Pay $4700
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Card Modal */}
          {/* Add Payment Modal */}
          <div
            className="modal new-modal multi-step fade"
            id="add_payment"
            data-keyboard="false"
            data-backdrop="static"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add Payment</h4>
                  <button
                    type="button"
                    className="close-btn"
                    data-bs-dismiss="modal"
                  >
                    <span>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="total-payment">
                    <p>Total Amount</p>
                    <h6>$22314</h6>
                  </div>
                  <div className="choose-payment-info">
                    <h5>Choose your Payment Method</h5>
                    <div className="choose-payment">
                      <label className="custom_radio">
                        <input
                          type="radio"
                          name="payment_one"
                          defaultValue="wallet_one"
                        />
                        <span className="checkmark" />
                        <img
                          src="/user-assets/img/icons/payment-1.svg"
                          alt="Icon"
                        />
                      </label>
                      <label className="custom_radio">
                        <input
                          type="radio"
                          name="payment_one"
                          defaultValue="wallet_one"
                        />
                        <span className="checkmark" />
                        <img
                          src="/user-assets/img/icons/payment-2.svg"
                          alt="Icon"
                        />
                      </label>
                      <label className="custom_radio">
                        <input
                          type="radio"
                          name="payment_one"
                          defaultValue="wallet_one"
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <img
                          src="/user-assets/img/icons/payment-3.svg"
                          alt="Icon"
                        />
                      </label>
                    </div>
                    <div className="add-payment-table-info">
                      <div className="wallet-table add-payment-table">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <label className="custom_radio">
                                    <input
                                      type="radio"
                                      name="payment_two"
                                      defaultValue="wallet_two"
                                      defaultChecked
                                    />
                                    <span className="checkmark" />
                                    <img
                                      src="/user-assets/img/icons/wallet-01.svg"
                                      alt="Icon"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <h6>3210 **** **** **12</h6>
                                  <p>Card Number</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="wallet-table add-payment-table">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <label className="custom_radio">
                                    <input
                                      type="radio"
                                      name="payment_two"
                                      defaultValue="wallet_two"
                                    />
                                    <span className="checkmark" />
                                    <img
                                      src="/user-assets/img/icons/wallet-02.svg"
                                      alt="Icon"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <h6>7847 **** **** **78</h6>
                                  <p>Card Number</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="wallet-table add-payment-table">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <label className="custom_radio">
                                    <input
                                      type="radio"
                                      name="payment_two"
                                      defaultValue="wallet_two"
                                    />
                                    <span className="checkmark" />
                                    <img
                                      src="/user-assets/img/icons/wallet-03.svg"
                                      alt="Icon"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <h6>4710 **** **** **64</h6>
                                  <p>Card Number</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-btn">
                    <button
                      className="btn btn-secondary w-100"
                      data-bs-target="#order_success"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Add to Wallet
                    </button>
                    <button
                      className="btn btn-outline-cancel"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Payment Modal */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

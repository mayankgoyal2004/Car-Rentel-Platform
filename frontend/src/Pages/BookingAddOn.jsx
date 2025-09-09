import React, { useState } from "react";
import { Link } from "react-router-dom";

const mainAddons = [
  { name: "GPS Navigation Systems", icon: "bx bx-map-pin", price: "$25" },
  { name: "Wi-Fi Hotspot", icon: "bx bx-wifi", price: "$25" },
  { name: "Child Safety Seats", icon: "bx bx-wifi", price: "$50" },
  { name: "Fuel Options", icon: "bx bxs-droplet", price: "$75" },
];

const moreAddons = [
  { name: "Toll Passes", icon: "bx bx-collection", price: "$125" },
  { name: "Roadside Assistance", icon: "bx bx-broadcast", price: "$60" },
  { name: "Satellite Radio", icon: "bx bx-radio", price: "$42" },
  { name: "Additional Accessories", icon: "bx bx-radar", price: "$30" },
  { name: "Express Check-in/Check-out", icon: "bx bx-rename", price: "$54" },
];

const BookingAddOn = () => {
  const [showMoreAddons, setShowMoreAddons] = useState(false);
  const [openInfo, setOpenInfo] = useState(
    Array(mainAddons.length + moreAddons.length).fill(false)
  );

  const handleViewMoreAddons = (e) => {
    e.preventDefault();
    setShowMoreAddons(!showMoreAddons);
  };

  const handleToggleInfo = (idx, e) => {
    e.preventDefault();
    setOpenInfo(openInfo.map((v, i) => (i === idx ? !v : v)));
  };

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
                      <li className="active">
                        <span>
                          <img
                            src="/user-assets/img/icons/booking-head-icon-02.svg"
                            alt="Booking Icon"
                          />
                        </span>
                        <h6>Extra Services</h6>
                      </li>
                      <li>
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
                    <form action="/Booking-details">
                      <div className="booking-information-card">
                        <div className="booking-info-head justify-content-between">
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="bx bx-add-to-queue" />
                            </span>
                            <h5>Extra Services</h5>
                          </div>
                          <h6>Total : 15 Extra Services</h6>
                        </div>
                        <div className="booking-info-body">
                          <ul className="adons-lists">
                            {mainAddons.map((addon, idx) => (
                              <li key={addon.name}>
                                <div className="adons-types">
                                  <div className="d-flex align-items-center adon-name-info">
                                    <span className="adon-icon">
                                      <i className={addon.icon} />
                                    </span>
                                    <div className="adon-name">
                                      <h6>{addon.name}</h6>
                                      <a
                                        href="#"
                                        onClick={(e) =>
                                          handleToggleInfo(idx, e)
                                        }
                                        className="d-inline-flex align-items-center adon-info-btn"
                                      >
                                        <i className="bx bx-info-circle me-2" />
                                        More information
                                        <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                      </a>
                                    </div>
                                  </div>
                                  <span className="adon-price">
                                    {addon.price}
                                  </span>
                                  <a
                                    href="#"
                                    className="btn btn-secondary remove-adon-btn"
                                  >
                                    <i className="bx bx-minus-circle me-2" />
                                    Remove
                                  </a>
                                </div>
                                {openInfo[idx] && (
                                  <div className="more-adon-info">
                                    <p>
                                      Provide GPS navigation devices as add-ons
                                      for customers who need assistance with
                                      directions and navigation during their
                                      rental period.
                                    </p>
                                  </div>
                                )}
                              </li>
                            ))}
                            <li className="view-more-adons">
                              <div
                                className="more-adons"
                                style={{
                                  display: showMoreAddons ? "block" : "none",
                                }}
                              >
                                <ul>
                                  {moreAddons.map((addon, idx) => (
                                    <li key={addon.name}>
                                      <div className="adons-types">
                                        <div className="d-flex align-items-center adon-name-info">
                                          <span className="adon-icon">
                                            <i className={addon.icon} />
                                          </span>
                                          <div className="adon-name">
                                            <h6>{addon.name}</h6>
                                            <a
                                              href="#"
                                              onClick={(e) =>
                                                handleToggleInfo(
                                                  mainAddons.length + idx,
                                                  e
                                                )
                                              }
                                              className="d-inline-flex align-items-center adon-info-btn"
                                            >
                                              <i className="bx bx-info-circle me-2" />
                                              More information{" "}
                                              <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                            </a>
                                          </div>
                                        </div>
                                        <span className="adon-price">
                                          {addon.price}
                                        </span>
                                        <a
                                          href="#"
                                          className="btn add-addon-btn"
                                        >
                                          <i className="bx bx-plus-circle me-2" />
                                          Add
                                        </a>
                                      </div>
                                      {openInfo[mainAddons.length + idx] && (
                                        <div className="more-adon-info">
                                          <p>
                                            Provide GPS navigation devices as
                                            add-ons for customers who need
                                            assistance with directions and
                                            navigation during their rental
                                            period.
                                          </p>
                                        </div>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <a
                                href="#"
                                onClick={handleViewMoreAddons}
                                className="view-adon-btn"
                              >
                                <i className="bx bx-plus-circle me-2" />
                                {showMoreAddons
                                  ? "Hide Add-Ons"
                                  : "View More Add-Ons"}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="booking-information-card">
                        <div className="booking-info-head">
                          <span>
                            <i className="bx bx-user-pin" />
                          </span>
                          <h5>Driver details</h5>
                        </div>
                        <div className="booking-info-body">
                          <ul className="booking-radio-btns">
                            <li>
                              <label className="booking_custom_check">
                                <input
                                  type="radio"
                                  name="driver_type"
                                  id="self_driver"
                                  defaultChecked
                                />
                                <span className="booking_checkmark">
                                  <span className="checked-title">
                                    Self Driver
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li>
                              <label className="booking_custom_check">
                                <input
                                  type="radio"
                                  name="driver_type"
                                  id="acting_driver"
                                />
                                <span className="booking_checkmark">
                                  <span className="checked-title">
                                    Acting Driver
                                  </span>
                                </span>
                              </label>
                            </li>
                          </ul>
                          <div className="booking-timings self-driver-info">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-title-head">
                                  <h5>Driver details</h5>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-block date-widget">
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
                                <div className="input-block date-widget">
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
                                <div className="input-block date-widget">
                                  <label className="form-label">
                                    Driver Age{" "}
                                    <span className="text-danger"> *</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Age of Driver"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-block date-widget">
                                  <label className="form-label">
                                    Mobile Number{" "}
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
                                <div className="input-block date-widget">
                                  <label className="form-label">
                                    Driving Licence Number{" "}
                                    <span className="text-danger"> *</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Driving Licence Number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-block date-widget">
                                  <label className="form-label">
                                    Upload Document{" "}
                                    <span className="text-danger"> *</span>
                                  </label>
                                  <div className="upload-div">
                                    <input type="file" />
                                    <div className="upload-photo-drag">
                                      <span>
                                        <i className="fa fa-upload me-2" />{" "}
                                        Upload Photo
                                      </span>
                                      <h6>or Drag Photos</h6>
                                    </div>
                                  </div>
                                  <div className="upload-list">
                                    <ul>
                                      <li>
                                        The maximum photo size is 8 MB. Formats:
                                        jpeg, jpg, png. Put the main picture
                                        first
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-block m-0">
                                  <label className="custom_check d-inline-flex location-check m-0">
                                    <span>
                                      I Confirm Driver’s Age is above 20 years
                                      old
                                    </span>
                                    <input type="checkbox" name="remeber" />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-timings acting-driver-info">
                            <div className="form-title-head">
                              <h5>Driver</h5>
                            </div>
                            <ul className="acting-driver-list">
                              <li>
                                <div className="driver-profile-info">
                                  <span className="driver-profile">
                                    <img
                                      src="/user-assets/img/icons/booking-head-icon-03.svg"
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
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="booking-information-card pb-1">
                        <div className="booking-info-head">
                          <span>
                            <i className="bx bx-file-blank" />
                          </span>
                          <h5>Insurance</h5>
                        </div>
                        <div className="booking-info-body">
                          <div className="insurance-select custom-checkbox active">
                            <div>
                              <p className="fs-14 d-inline-flex align-items-center mb-1">
                                Full Premium Insurance
                              </p>
                              <div>
                                <a href="#">
                                  +4 Benefits
                                  <i
                                    className="bx bxs-info-circle text-gray-5 ms-1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-original-title="No additional charges for emergency roadside services"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="text-end">
                              <span className="d-block mb-1">Onetime Ride</span>
                              <h6 className="fw-normal">$200</h6>
                            </div>
                          </div>
                          <div className="insurance-select custom-checkbox">
                            <div>
                              <p className="fs-14 d-inline-flex align-items-center mb-1">
                                Roadside Assistance
                              </p>
                              <div>
                                <a href="#">
                                  +3 Benefits
                                  <i
                                    className="bx bxs-info-circle text-gray-5 ms-1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-original-title="No additional charges for emergency roadside services"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="text-end">
                              <span className="d-block mb-1">Onetime Ride</span>
                              <h6 className="fw-normal">$200</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="booking-info-btns d-flex justify-content-end">
                        <Link
                          to="/BookingCheckout"
                          className="btn btn-secondary"
                        >
                          Back to Location &amp; Time
                        </Link>
                        <button
                          className="btn btn-primary continue-book-btn"
                          type="submit"
                        >
                          Continue Booking
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
                                <Link to="/booking-details" >
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
                                  <h5>+ $60</h5>
                                </li>
                                <li>
                                  <h6>Trip Protection Fees</h6>
                                  <h5>+ $25</h5>
                                </li>
                                <li>
                                  <h6>Convenience Fees</h6>
                                  <h5>+ $2</h5>
                                </li>
                                <li>
                                  <h6>Tax</h6>
                                  <h5>+ $2</h5>
                                </li>
                                <li>
                                  <h6>Refundable Deposit</h6>
                                  <h5>+$1200</h5>
                                </li>
                                <li>
                                  <h6>
                                    Full Premium Insurance{" "}
                                    <i className="bx bxs-x-circle text-danger" />
                                  </h6>
                                  <h5>+$200</h5>
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
                            to="/BookingCheckout"
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
                            data-bs-target="#accordion_collapse_two"
                            aria-expanded="true"
                          >
                            <div className="booking-sidebar-head p-0 d-flex justify-content-between align-items-center">
                              <h5>
                                Coupon
                                <i className="fas fa-chevron-down" />
                              </h5>
                            </div>
                            <a href="#" className="coupon-view">
                              View Coupons
                            </a>
                          </div>
                        </div>
                        <div
                          id="accordion_collapse_two"
                          className="accordion-collapse collapse"
                        >
                          <div className="booking-sidebar-body">
                            <form action="Booking-checkout">
                              <div className="d-flex align-items-center">
                                <div className="form-custom flex-fill">
                                  <input
                                    type="text"
                                    className="form-control mb-0"
                                    placeholder="Coupon code"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-secondary apply-coupon-btn d-flex align-items-center ms-2"
                                >
                                  Apply
                                  <i className="feather-arrow-right ms-2" />
                                </button>
                              </div>
                            </form>
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
      {/* scrollToTop start */}
      {/* <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919px, 307.919px",
              strokeDashoffset: "228.265px",
            }}
          />
        </svg>
      </div> */}
    </div>
  );
};

export default BookingAddOn;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingAddOn = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [driverType, setDriverType] = useState("self");
  const [driverDetails, setDriverDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    licenseNumber: "",
    document: null,
  });
  const [showMoreAddons, setShowMoreAddons] = useState(false);
  const [openInfo, setOpenInfo] = useState({});

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const res = await apiService.getReservationByIdBooking(id);

        if (res.data && res.data.success && res.data.data) {
          const reservationData = res.data.data;

          // Transform API data
          const transformedData = {
            ...reservationData,
            rentalType: reservationData.rentalType || "delivery",
            priceRate: reservationData.bookingType || "daily",
            pickupAddress: reservationData.pickupAddress || "",
            dropAddress: reservationData.dropAddress || "",
            returnToSame:
              !reservationData.dropAddress ||
              reservationData.pickupAddress === reservationData.dropAddress,
            pickupDate: reservationData.pickupDate
              ? new Date(reservationData.pickupDate).toISOString().split("T")[0]
              : "",
            returnDate: reservationData.dropDate
              ? new Date(reservationData.dropDate).toISOString().split("T")[0]
              : "",
            pickupTime: reservationData.pickupTime || "10:00",
            returnTime: reservationData.dropTime || "10:00",
            doorStepDelivery: 0,
            tripProtection: 0,
            convenienceFee: 0,
            tax: reservationData.pricingDetails?.tax || 0,
            deposit: reservationData.securityDeposit || 0,
          };

          setReservation(transformedData);

          // Load any previously selected addons
          if (
            reservationData.extraServices &&
            reservationData.extraServices.length > 0
          ) {
            setSelectedAddons(reservationData.extraServices);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reservation:", error);
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  // Calculate number of days
  const calculateNumberOfDays = () => {
    if (!reservation || !reservation.pickupDate || !reservation.returnDate)
      return 0;

    const start = new Date(reservation.pickupDate);
    const end = new Date(reservation.returnDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  // Calculate rental rate
  const calculateRentalRate = () => {
    if (
      !reservation ||
      !reservation.priceRate ||
      !reservation.car?.pricing?.prices
    )
      return 0;

    const days = calculateNumberOfDays();
    const rateType = reservation.priceRate;
    const ratePrices = reservation.car.pricing.prices;

    switch (rateType) {
      case "daily":
        return days * ratePrices.daily;
      case "weekly":
        return Math.ceil(days / 7) * ratePrices.weekly;
      case "monthly":
        return Math.ceil(days / 30) * ratePrices.monthly;
      case "yearly":
        return Math.ceil(days / 365) * ratePrices.yearly;
      default:
        return days * ratePrices.daily;
    }
  };
  // Get available extra services for this car
  const getAvailableAddons = () => {
    if (!reservation || !reservation.car) return { main: [], more: [] };

    const carExtras = reservation.car.extraService || [];

    // Split into first 4 and rest
    const main = carExtras.slice(0, 4);
    const more = carExtras.slice(4);

    return { main, more };
  };

  const handleAddonToggle = (addon) => {
    setSelectedAddons((prev) => {
      const isSelected = prev.some((item) => item._id === addon._id);
      if (isSelected) {
        return prev.filter((item) => item._id !== addon._id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const handleToggleInfo = (addonId) => {
    setOpenInfo((prev) => ({
      ...prev,
      [addonId]: !prev[addonId],
    }));
  };

  const handleDriverDetailChange = (e) => {
    const { name, value } = e.target;
    setDriverDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDocumentUpload = (e) => {
    setDriverDetails((prev) => ({
      ...prev,
      document: e.target.files[0],
    }));
  };

  const calculateAddonsTotal = () => {
    return selectedAddons.reduce((total, addon) => total + addon.price, 0);
  };

  const calculateTotal = () => {
    const rentalRate = calculateRentalRate();
    const addonsTotal = calculateAddonsTotal();
    const additionalFees =
      (reservation?.doorStepDelivery || 0) +
      (reservation?.tripProtection || 0) +
      (reservation?.convenienceFee || 0) +
      (reservation?.tax || 0) +
      (reservation?.deposit || 0);

    return rentalRate + addonsTotal + additionalFees;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append driver type
      formData.append("driverType", driverType);

      // Append extra services
      selectedAddons.forEach((addon) =>
        formData.append("extraServices[]", addon._id)
      );

      // Append total price

      if (driverType === "self") {
        formData.append("driverDetails[firstName]", driverDetails.firstName);
        formData.append("driverDetails[lastName]", driverDetails.lastName);
        formData.append("driverDetails[age]", driverDetails.age);
        formData.append("driverDetails[mobile]", driverDetails.mobile);
        formData.append(
          "driverDetails[licenseNumber]",
          driverDetails.licenseNumber
        );

        if (driverDetails.document) {
          formData.append("driverDetailsDocument", driverDetails.document);
        }
      }

    const res =  await apiService.editReservationStep3(id, formData);

      if (res?.data?.success) {
        toast.success(res.data.message || "Reservation updated successfully!");
        navigate(`/booking-details/${id}`);
      } else {
        toast.error(res?.data?.message || "Failed to update reservation!");
      }
    }  catch (error) {
    console.error("Error updating reservation:", error);

    if (error.response && error.response.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  }
  };

  if (loading) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading reservation details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!reservation) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <h3>Reservation not found</h3>
              <p>The reservation you're looking for doesn't exist.</p>
              <Link to="/" className="btn btn-primary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const availableAddons = getAvailableAddons();

  return (
    <div className="main-wrapper">
      {/* Breadscrumb Section */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Extra Services</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Extra Services
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
                  <form onSubmit={handleSubmit}>
                    <div className="booking-information-card">
                      <div className="booking-info-head justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="bx bx-add-to-queue" />
                          </span>
                          <h5>Extra Services</h5>
                        </div>
                        <h6>
                          Total :{" "}
                          {availableAddons.main.length +
                            availableAddons.more.length}{" "}
                          Extra Services
                        </h6>
                      </div>
                      <div className="booking-info-body">
                        <ul className="adons-lists">
                          {availableAddons.main.map((addon) => {
                            const isSelected = selectedAddons.some(
                              (item) => item._id === addon._id
                            );

                            return (
                              <li key={addon._id}>
                                <div className="adons-types">
                                  <div className="d-flex align-items-center adon-name-info">
                                    <span className="adon-icon">
                                      <i className={addon.icon} />
                                    </span>
                                    <div className="adon-name">
                                      <h6>{addon.name}</h6>
                                      <a
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleToggleInfo(addon._id);
                                        }}
                                        className="d-inline-flex align-items-center adon-info-btn"
                                      >
                                        <i className="bx bx-info-circle me-2" />
                                        More information
                                        <i
                                          className={`bx bx-chevron-${
                                            openInfo[addon._id] ? "up" : "down"
                                          } ms-2 arrow-icon`}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <span className="adon-price">
                                    ${addon.price}
                                  </span>
                                  <button
                                    type="button"
                                    className={`btn ${
                                      isSelected
                                        ? "btn-secondary remove-adon-btn"
                                        : "add-addon-btn"
                                    }`}
                                    onClick={() => handleAddonToggle(addon)}
                                  >
                                    <i
                                      className={`bx bx-${
                                        isSelected ? "minus" : "plus"
                                      }-circle me-2`}
                                    />
                                    {isSelected ? "Remove" : "Add"}
                                  </button>
                                </div>
                                {openInfo[addon._id] && (
                                  <div className="more-adon-info">
                                    <p>{addon.description}</p>
                                  </div>
                                )}
                              </li>
                            );
                          })}

                          <li className="view-more-adons">
                            <div
                              className="more-adons"
                              style={{
                                display: showMoreAddons ? "block" : "none",
                              }}
                            >
                              <ul>
                                {availableAddons.more.map((addon) => {
                                  const isSelected = selectedAddons.some(
                                    (item) => item._id === addon._id
                                  );

                                  return (
                                    <li key={addon._id}>
                                      <div className="adons-types">
                                        <div className="d-flex align-items-center adon-name-info">
                                          <span className="adon-icon">
                                            <i className={addon.icon} />
                                          </span>
                                          <div className="adon-name">
                                            <h6>{addon.name}</h6>
                                            <a
                                              href="#"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                handleToggleInfo(addon._id);
                                              }}
                                              className="d-inline-flex align-items-center adon-info-btn"
                                            >
                                              <i className="bx bx-info-circle me-2" />
                                              More information
                                              <i
                                                className={`bx bx-chevron-${
                                                  openInfo[addon._id]
                                                    ? "up"
                                                    : "down"
                                                } ms-2 arrow-icon`}
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <span className="adon-price">
                                          ${addon.price}
                                        </span>
                                        <button
                                          type="button"
                                          className={`btn ${
                                            isSelected
                                              ? "btn-secondary remove-adon-btn"
                                              : "add-addon-btn"
                                          }`}
                                          onClick={() =>
                                            handleAddonToggle(addon)
                                          }
                                        >
                                          <i
                                            className={`bx bx-${
                                              isSelected ? "minus" : "plus"
                                            }-circle me-2`}
                                          />
                                          {isSelected ? "Remove" : "Add"}
                                        </button>
                                      </div>
                                      {openInfo[addon._id] && (
                                        <div className="more-adon-info">
                                          <p>{addon.description}</p>
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setShowMoreAddons(!showMoreAddons);
                              }}
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
                                value="self"
                                checked={driverType === "self"}
                                onChange={() => setDriverType("self")}
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
                                value="acting"
                                checked={driverType === "acting"}
                                onChange={() => setDriverType("acting")}
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">
                                  Acting Driver
                                </span>
                              </span>
                            </label>
                          </li>
                        </ul>

                        {driverType === "self" && (
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
                                    name="firstName"
                                    className="form-control"
                                    placeholder="Enter First Name"
                                    value={driverDetails.firstName}
                                    onChange={handleDriverDetailChange}
                                    required
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
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Enter Last Name"
                                    value={driverDetails.lastName}
                                    onChange={handleDriverDetailChange}
                                    required
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
                                    type="number"
                                    name="age"
                                    className="form-control"
                                    placeholder="Enter Age of Driver"
                                    value={driverDetails.age}
                                    onChange={handleDriverDetailChange}
                                    required
                                    min="18"
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
                                    type="tel"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Enter Phone Number"
                                    value={driverDetails.mobile}
                                    onChange={handleDriverDetailChange}
                                    required
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
                                    name="licenseNumber"
                                    className="form-control"
                                    placeholder="Enter Driving Licence Number"
                                    value={driverDetails.licenseNumber}
                                    onChange={handleDriverDetailChange}
                                    required
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
                                    <input
                                      type="file"
                                      onChange={handleDocumentUpload}
                                      accept="image/*,.pdf"
                                      required
                                    />
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
                                      I Confirm Driver's Age is above 20 years
                                      old
                                    </span>
                                    <input
                                      type="checkbox"
                                      name="ageConfirmation"
                                      required
                                    />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {driverType === "acting" && (
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
                                      alt="Driver"
                                    />
                                  </span>
                                  <div className="driver-name">
                                    <h5>Professional Driver</h5>
                                    <ul>
                                      <li>Experienced and certified drivers</li>
                                      <li>Price: $100 per day</li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="booking-info-btns d-flex justify-content-end">
                      <Link
                        to={`/booking-checkout/${id}`}
                        className="btn btn-secondary"
                      >
                        Back to Location &amp; Time
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary continue-book-btn"
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
                          className="accordion-button"
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
                        className="accordion-collapse collapse show"
                      >
                        <div className="booking-sidebar-body">
                          <div className="booking-car-detail">
                            <span className="car-img">
                              <img
                                src={
                                  BASE_URL_IMG + (reservation.car?.image || "")
                                }
                                className="img-fluid"
                                alt="Car"
                                onError={(e) => {
                                  e.target.src =
                                    "/user-assets/img/car-list-4.jpg";
                                }}
                              />
                            </span>
                            <div className="care-more-info">
                              <h5>{reservation.car?.carName || "Car Name"}</h5>
                              <p>
                                {reservation.car?.mainLocation?.title ||
                                  "Car Location"}
                              </p>
                              <Link to="/listing-details">
                                View Car Details
                              </Link>
                            </div>
                          </div>
                          <div className="booking-vehicle-rates">
                            <ul>
                              <li>
                                <div className="rental-charge">
                                  <h6>Rental Charges Rate</h6>
                                  <span className="text-danger">
                                    (This does not include fuel)
                                  </span>
                                </div>
                                <h5>+ ${calculateRentalRate()}</h5>
                              </li>

                              {selectedAddons.map((addon) => (
                                <li key={addon._id}>
                                  <h6>{addon.name}</h6>
                                  <h5>+ ${addon.price}</h5>
                                </li>
                              ))}

                              <li>
                                <h6>Doorstep delivery</h6>
                                <h5>+ ${reservation.doorStepDelivery || 0}</h5>
                              </li>
                              <li>
                                <h6>Trip Protection Fees</h6>
                                <h5>+ ${reservation.tripProtection || 0}</h5>
                              </li>
                              <li>
                                <h6>Convenience Fees</h6>
                                <h5>+ ${reservation.convenienceFee || 0}</h5>
                              </li>
                              <li>
                                <h6>Tax</h6>
                                <h5>+ ${reservation.tax || 0}</h5>
                              </li>
                              <li>
                                <h6>Refundable Deposit</h6>
                                <h5>+${reservation.deposit || 0}</h5>
                              </li>
                              <li className="total-rate">
                                <h6>Subtotal</h6>
                                <h5>+${calculateTotal()}</h5>
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
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default BookingAddOn;

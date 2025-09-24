import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const BookingCheckout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const res = await apiService.getReservationByIdBooking(id);

        if (res.data && res.data.success && res.data.data) {
          const reservationData = res.data.data;

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
            tripProtection: 25,
            convenienceFee: 2,
            tax: reservationData.pricingDetails?.tax || 0,
            deposit: reservationData.securityDeposit || 0,
            insurance: 200,
          };

          setReservation(transformedData);
          setFormData(transformedData);
        } else {
          console.error("Invalid response structure:", res.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reservation:", error);
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Transform formData to match backend enums
    const payload = {
      ...formData,
      rentalType:
        formData.rentalType === "pickup" ? "selfPickup" : formData.rentalType,
      priceRate: ["daily", "weekly", "monthly", "yearly"].includes(
        formData.priceRate
      )
        ? formData.priceRate
        : "daily",
    };

    try {
      const res = await apiService.editReservationStep2(id, payload);
      if (res.data.success) {
        navigate(`/booking-add-on/${id}`);
      }
    } catch (err) {
      console.error("Error updating reservation:", err);
    }
  };

  // Calculate the number of days between pickup and return
  const calculateNumberOfDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;

    const start = new Date(formData.pickupDate);
    const end = new Date(formData.returnDate);

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) ;

    return diffDays;
  };

  // Calculate the rental rate based on selected rate type and number of days
  const calculateRentalRate = () => {
    if (!formData.priceRate || !formData.car?.pricing?.prices) return 0;

    const days = calculateNumberOfDays();
    const rateType = formData.priceRate;
    const ratePrices = formData.car.pricing.prices;

    switch (rateType) {
      case "daily":{
        return days * ratePrices.daily;
}
      case "weekly":{
        const weeks = Math.ceil(days / 7);
        return weeks * ratePrices.weekly;
}
      case "monthly":{
        const months = Math.ceil(days / 30);
        return months * ratePrices.monthly;
}
      case "yearly":{
        const years = Math.ceil(days / 365);
        return years * ratePrices.yearly;
}
      default:
        return days * ratePrices.daily;
    }
  };

  // Calculate the total amount
  const calculateTotal = () => {
    const rentalRate = calculateRentalRate();
    const additionalFees =
      (formData.doorStepDelivery || 0) +
      (formData.tripProtection || 0) +
      (formData.convenienceFee || 0) +
      (formData.tax || 0) +
      (formData.deposit || 0);

    return rentalRate + additionalFees;
  };

  // Get the display text for the rate period
  const getRatePeriodText = () => {
    const days = calculateNumberOfDays();
    const rateType = formData.priceRate;

    switch (rateType) {
      case "daily":
        return `${days} ${days === 1 ? "day" : "days"}`;

      case "weekly":{
        const weeks = Math.ceil(days / 7)
        return `${weeks} ${weeks === 1 ? "week" : "weeks"}`;}

      case "monthly":{
        const months = Math.ceil(days / 30);
        return `${months} ${months === 1 ? "month" : "months"}`;
}
      case "yearly":{
        const years = Math.ceil(days / 365);
        return `${years} ${years === 1 ? "year" : "years"}`;}

      default:
        return `${days} ${days === 1 ? "day" : "days"}`;
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

  return (
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
                    <li className="active">
                      <span>
                        <img
                          src="/user-assets/img/icons/booking-head-icon-01.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Location &amp; Time</h6>
                    </li>
                    <li>
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
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bxs-car-garage" />
                        </span>
                        <h5>Rental Type</h5>
                      </div>
                      <div className="booking-info-body">
                        <ul className="booking-radio-btns">
                          <li>
                            <label className="booking_custom_check">
                              <input
                                type="radio"
                                name="rentalType"
                                value="delivery"
                                checked={formData.rentalType === "delivery"}
                                onChange={handleInputChange}
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">Delivery</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="booking_custom_check">
                              <input
                                type="radio"
                                name="rentalType"
                                value="pickup"
                                checked={formData.rentalType === "pickup"}
                                onChange={handleInputChange}
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">
                                  Self Pickup
                                </span>
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {formData.rentalType === "delivery" ? (
                      <div className="booking-information-card delivery-location">
                        <div className="booking-info-head">
                          <span>
                            <i className="bx bxs-car-garage" />
                          </span>
                          <h5>Location</h5>
                        </div>
                        <div className="booking-info-body">
                          <div className="form-custom">
                            <label className="form-label">
                              Delivery Location
                            </label>
                            <div className="d-flex align-items-center">
                              <input
                                type="text"
                                name="pickupAddress"
                                className="form-control mb-0"
                                placeholder="Add Location"
                                value={formData.pickupAddress || ""}
                                onChange={handleInputChange}
                              />
                              <button
                                type="button"
                                className="btn btn-secondary location-btn d-flex align-items-center"
                              >
                                <i className="bx bx-current-location me-2" />
                                Current Location
                              </button>
                            </div>
                          </div>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check">
                              <span>Return to same location</span>
                              <input
                                type="checkbox"
                                name="returnToSame"
                                checked={formData.returnToSame}
                                onChange={handleInputChange}
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                          {!formData.returnToSame && (
                            <div className="form-custom">
                              <label className="form-label">
                                Return Location
                              </label>
                              <div className="d-flex align-items-center">
                                <input
                                  type="text"
                                  name="dropAddress"
                                  className="form-control mb-0"
                                  placeholder="Add Location"
                                  value={formData.dropAddress || ""}
                                  onChange={handleInputChange}
                                />
                                <button
                                  type="button"
                                  className="btn btn-secondary location-btn d-flex align-items-center"
                                >
                                  <i className="bx bx-current-location me-2" />
                                  Current Location
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="booking-information-card pickup-location">
                        <div className="booking-info-head">
                          <span>
                            <i className="bx bxs-car-garage" />
                          </span>
                          <h5>Location</h5>
                        </div>
                        <div className="booking-info-body">
                          <div className="form-custom">
                            <label className="form-label">
                              Pickup Location
                            </label>
                            <div className="d-flex align-items-center">
                              <input
                                type="text"
                                name="pickupAddress"
                                className="form-control mb-0"
                                value={formData.pickupAddress || ""}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check">
                              <span>Return to same location</span>
                              <input
                                type="checkbox"
                                name="returnToSame"
                                checked={formData.returnToSame}
                                onChange={handleInputChange}
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                          {!formData.returnToSame && (
                            <div className="form-custom">
                              <label className="form-label">
                                Return Location
                              </label>
                              <div className="d-flex align-items-center">
                                <input
                                  type="text"
                                  name="dropAddress"
                                  className="form-control mb-0"
                                  value={formData.dropAddress || ""}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="booking-information-card booking-type-card">
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bxs-location-plus" />
                        </span>
                        <h5>Booking type &amp; Time</h5>
                      </div>
                      <div className="booking-info-body">
                        <ul className="booking-radio-btns">
                          {["daily", "weekly", "monthly", "yearly"].map(
                            (rate) => (
                              <li key={rate}>
                                <label className="booking_custom_check">
                                  <input
                                    type="radio"
                                    name="priceRate"
                                    value={rate}
                                    checked={formData.priceRate === rate}
                                    onChange={handleInputChange}
                                  />
                                  <span className="booking_checkmark">
                                    <span className="checked-title">
                                      {rate.charAt(0).toUpperCase() +
                                        rate.slice(1)}
                                      {formData.car?.pricing?.prices?.[rate]
                                        ? ` ($${formData.car.pricing.prices[rate]}/${rate})`
                                        : rate === "daily"
                                        ? " ($300/day)"
                                        : rate === "weekly"
                                        ? " ($820/week)"
                                        : rate === "monthly"
                                        ? " ($2400/month)"
                                        : " ($9400/year)"}
                                    </span>
                                  </span>
                                </label>
                              </li>
                            )
                          )}
                        </ul>
                        <div className="booking-timings">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">Start Date</label>
                                <div className="group-img">
                                  <input
                                    type="date"
                                    name="pickupDate"
                                    className="form-control"
                                    value={formData.pickupDate || ""}
                                    onChange={handleInputChange}
                                  />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block time-widge">
                                <label className="form-label">Start Time</label>
                                <div className="group-img">
                                  <input
                                    type="time"
                                    name="pickupTime"
                                    className="form-control"
                                    value={formData.pickupTime || ""}
                                    onChange={handleInputChange}
                                  />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-time" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">
                                  Return Date
                                </label>
                                <div className="group-img">
                                  <input
                                    type="date"
                                    name="returnDate"
                                    className="form-control"
                                    value={formData.returnDate || ""}
                                    onChange={handleInputChange}
                                  />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block time-widge">
                                <label className="form-label">
                                  Return Time
                                </label>
                                <div className="group-img">
                                  <input
                                    type="time"
                                    name="returnTime"
                                    className="form-control"
                                    value={formData.returnTime || ""}
                                    onChange={handleInputChange}
                                  />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-time" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="booking-info-btns d-flex justify-content-end">
                      <Link to="/listing-details" className="btn btn-secondary">
                        Back to Car details
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary continue-book-btn"
                      >
                        Continue to Add-ons
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
                                src={BASE_URL_IMG + (formData.car?.image || "")}
                                className="img-fluid"
                                alt="Car"
                                onError={(e) => {
                                  e.target.src =
                                    "/user-assets/img/car-list-4.jpg";
                                }}
                              />
                            </span>
                            <div className="care-more-info">
                              <h5>{formData.car?.carName || "Car Name"}</h5>
                              <p>
                                {formData.car?.mainLocation?.title ||
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
                                  <h6>
                                    Rental Charges Rate{" "}
                                    <span>({getRatePeriodText()})</span>
                                  </h6>
                                  <span className="text-danger">
                                    (This does not include fuel)
                                  </span>
                                </div>
                                <h5>+ ${calculateRentalRate()}</h5>
                              </li>
                              <li>
                                <h6>Doorstep delivery</h6>
                                <h5>+ ${formData.doorStepDelivery || 0}</h5>
                              </li>
                              <li>
                                <h6>Trip Protection Fees</h6>
                                <h5>+ ${formData.tripProtection || 0}</h5>
                              </li>
                              <li>
                                <h6>Convenience Fees</h6>
                                <h5>+ ${formData.convenienceFee || 0}</h5>
                              </li>
                              <li>
                                <h6>Tax</h6>
                                <h5>+ ${formData.tax || 0}</h5>
                              </li>
                              <li>
                                <h6>Refundable Deposit</h6>
                                <h5>+${formData.deposit || 0}</h5>
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
    </div>
  );
};

export default BookingCheckout;

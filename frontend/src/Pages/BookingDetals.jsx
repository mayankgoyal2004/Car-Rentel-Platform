import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const BookingDetals = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",     
    phone: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    company: "",
    additionalInfo: "",
    passengers: "1 passenger",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

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
            extraServices: reservationData.extraServices || "",
            adminPickupAddress: reservationData.car.admin.address || "",
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

  const fetchUser = async () => {
    try {
      const res = await apiService.getUerDetails();
      const { Customer, user } = res.data;

      const userDetails = {
        firstName: Customer?.firstName || "",
        lastName: Customer?.lastName || "",
        userName: user?.userName || "",
        phone: Customer?.contact || user?.contact || "",
        email: Customer?.email || user?.email || "",
        address: Customer?.address || user?.address || "",
        country: Customer?.country || "",
        state: Customer?.state || "",
        city: Customer?.city || "",
        pincode: Customer?.pincode || "",
        company: Customer?.company || "",
        additionalInfo: Customer?.additionalInfo || "",
      };

      setUserData(userDetails);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const handleUserInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

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

  // Calculate extra services total
  const calculateExtraServicesTotal = () => {
    if (!reservation?.extraServices) return 0;
    return reservation.extraServices.reduce(
      (total, service) => total + (service.price || 0),
      0
    );
  };

  // Calculate total amount
  const calculateTotal = () => {
    const rentalRate = calculateRentalRate();
    const extraServicesTotal = calculateExtraServicesTotal();
    const additionalFees =
      (reservation?.doorStepDelivery || 0) +
      (reservation?.tripProtection || 0) +
      (reservation?.convenienceFee || 0) +
      (reservation?.tax || 0);

    return rentalRate + extraServicesTotal + additionalFees;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast.error("Please accept the Terms & Conditions to continue.");
      return;
    }

    try {
      // Update user details
      const updateData = {
        userName: userData.userName,
        firstName: userData.firstName,
        lastName: userData.lastName,
        contact: userData.phone,
        email: userData.email,
        address: userData.address,
        country: userData.country,
        state: userData.state,
        city: userData.city,
        pincode: userData.pincode,
      };

      await apiService.updateuserDetials(updateData);

      // Navigate to payment page
      navigate(`/booking-payment/${id}`);
    } catch (error) {
      console.error("Error updating user details:", error);
      toast.error("Failed to update user details. Please try again.");
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
                    <form onSubmit={handleSubmit}>
                      <div className="booking-information-card">
                        <div className="booking-info-head justify-content-between">
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="bx bx-add-to-queue" />
                            </span>
                            <h5>Billing Info</h5>
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
                                  name="firstName"
                                  value={userData.firstName}
                                  onChange={handleUserInputChange}
                                  required
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
                                  name="lastName"
                                  value={userData.lastName}
                                  onChange={handleUserInputChange}
                                  required
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
                                  name="address"
                                  value={userData.address}
                                  onChange={handleUserInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="input-block">
                                <label className="form-label">
                                  Country{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter State"
                                  name="country"
                                  value={userData.country}
                                  onChange={handleUserInputChange}
                                  required
                                />
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
                                  placeholder="Enter City"
                                  name="city"
                                  value={userData.city}
                                  onChange={handleUserInputChange}
                                  required
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
                                  name="pincode"
                                  value={userData.pincode}
                                  onChange={handleUserInputChange}
                                  required
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
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter Email"
                                  name="email"
                                  value={userData.email}
                                  onChange={handleUserInputChange}
                                  required
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
                                  type="tel"
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                  name="phone"
                                  value={userData.phone}
                                  onChange={handleUserInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="input-block m-0">
                                <label className="custom_check d-inline-flex location-check m-0">
                                  <span>
                                    I have Read and Accept Terms &amp;
                                    Conditions
                                  </span>{" "}
                                  <span className="text-danger"> *</span>
                                  <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={termsAccepted}
                                    onChange={handleTermsChange}
                                    required
                                  />
                                  <span className="checkmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="booking-info-btns d-flex justify-content-end">
                        <Link
                          to={`/booking-add-on/${id}`}
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
                                  src={BASE_URL_IMG + reservation?.car?.image}
                                  className="img-fluid"
                                  alt="Car"
                                />
                              </span>
                              <div className="care-more-info">
                                <h5>{reservation?.car?.carName}</h5>
                                <p>
                                  {" "}
                                  <p>{reservation.car?.mainLocation?.title}</p>
                                </p>
                              </div>
                            </div>
                            <div className="booking-vehicle-rates">
                              <ul>
                                <li>
                                  <div className="rental-charge">
                                    <h6>
                                      Rental Charges Rate{" "}
                                      <span>
                                        ({calculateNumberOfDays()} days)
                                      </span>
                                    </h6>

                                    <span className="text-danger">
                                      (This does not include fuel)
                                    </span>
                                  </div>
                                  <h5>+ ${calculateRentalRate()}</h5>
                                </li>
                                {reservation.extraServices?.map((service) => (
                                  <li key={service._id}>
                                    <h6>{service.name}</h6>
                                    <h5>+ ${service.price || 0}</h5>
                                  </li>
                                ))}
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
                                  <h5>+${calculateTotal()}</h5>
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
                            to={`/booking-checkout/${id}`}
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
                                <p>
                                  {reservation.rentalType === "delivery"
                                    ? "Delivery"
                                    : "Pickup"}
                                </p>
                              </li>
                              <li>
                                <h6>Booking Type</h6>
                                <p>{reservation.bookingType}</p>
                              </li>
                              <li>
                                <h6>Delivery Location &amp; time</h6>
                                <p>{reservation.pickupAddress}</p>
                                <p>
                                  {reservation.pickupDate} -{" "}
                                  {reservation.pickupTime}
                                </p>
                              </li>
                              <li>
                                <h6>Return Location &amp; time</h6>
                                <p>
                                  {reservation.dropAddress ||
                                    reservation.pickupAddress}
                                </p>
                                <p>
                                  {reservation.returnDate} -{" "}
                                  {reservation.returnTime}
                                </p>
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
                          </div>
                        </div>
                        <div
                          id="accordion_collapse_four"
                          className="accordion-collapse collapse"
                        >
                          <div className="booking-sidebar-body">
                            <div className="booking-vehicle-rates">
                              <ul className="mt-0">
                                {reservation.extraServices?.map((service) => (
                                  <li key={service._id}>
                                    <h6>{service.name}</h6>
                                    <h5>${service.price || 0}</h5>
                                  </li>
                                ))}
                                {(!reservation.extraServices ||
                                  reservation.extraServices.length === 0) && (
                                  <li>
                                    <h6>No extra services selected</h6>
                                    <h5>$0</h5>
                                  </li>
                                )}
                                <li className="total-rate">
                                  <h6>Extra Services Charges Rate</h6>
                                  <h5>${calculateExtraServicesTotal()}</h5>
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

export default BookingDetals;

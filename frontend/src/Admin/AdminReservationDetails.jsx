import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminReservationDetails = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const fetchReservations = async () => {
    setLoading(true);

    try {
      const res = await apiService.getReservationByIdBooking(id);
      setReservations(res.data.data);
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, [id]);

  const getRentalPeriod = () => {
    if (!reservations?.pickupDate || !reservations?.dropDate) return 0;

    const start = new Date(reservations.pickupDate);
    const end = new Date(reservations.dropDate);

    // Calculate difference in milliseconds
    const diffTime = end - start;

    // Convert to days (round up to include partial days)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTotalPrice = () => {
    if (!reservations?.car?.pricing) return 0;

    const rentalDays = getRentalPeriod();
    const prices = reservations.car.pricing.prices;

    let carPrice = 0;

    switch (reservations.bookingType) {
      case "daily": {
        carPrice = prices.daily * rentalDays;
        break;
      }
      case "weekly": {
        const weeks = Math.ceil(rentalDays / 7);
        carPrice = prices.weekly * weeks;
        break;
      }
      case "monthly": {
        const months = Math.ceil(rentalDays / 30);
        carPrice = prices.monthly * months;
        break;
      }
      case "yearly": {
        const years = Math.ceil(rentalDays / 365);
        carPrice = prices.yearly * years;
        break;
      }
      default: {
        carPrice = 0;
      }
    }

    // Add extra charges
    const extraServices = reservations.extraServices || [];
    const extraServicesPrice = extraServices.reduce(
      (total, service) => total + service.price * (service.quantity || 1),
      0
    );
    const securityDeposit = reservations.securityDeposit || 0;
    const driverPrice = reservations.driverPrice || 0;

    const total = carPrice + extraServicesPrice + securityDeposit + driverPrice;
    return total;
  };

  const getTotalCarPricing = () => {
    if (!reservations?.car?.pricing) return 0;

    const rentalDays = getRentalPeriod();
    const prices = reservations.car.pricing.prices;

    let carPrice = 0;

    switch (reservations.bookingType) {
      case "daily": {
        carPrice = prices.daily * rentalDays;
        break;
      }
      case "weekly": {
        const weeks = Math.ceil(rentalDays / 7);
        carPrice = prices.weekly * weeks;
        break;
      }
      case "monthly": {
        const months = Math.ceil(rentalDays / 30);
        carPrice = prices.monthly * months;
        break;
      }
      case "yearly": {
        const years = Math.ceil(rentalDays / 365);
        carPrice = prices.yearly * years;
        break;
      }
      default: {
        carPrice = 0;
      }
    }

    const total = carPrice;
    return total;
  };

  const getCarPrice = () => {
    if (!reservations?.car?.pricing) return 0;
    const prices = reservations.car.pricing.prices;

    switch (reservations.bookingType) {
      case "daily":
        return prices.daily;
      case "weekly":
        return prices.weekly;
      case "monthly":
        return prices.monthly;
      case "yearly":
        return prices.yearly;
      default:
        return 0;
    }
  };

  const handleConfirm = async () => {
    await apiService.changeReservationStatusToConformed(reservations._id);
    setReservations({ ...reservations, status: "confirmed" });
  };
  const handleComplete = async () => {
    await apiService.changeReservationStatusToComplete(reservations._id);
    setReservations({ ...reservations, status: "complete" });
  };
  const handlegetInvoiceId = async () => {
    try {
      const res = await apiService.getInvoiceByReservationId(reservations._id);

      if (res.data.success) {
        navigate("/admin-dashboard/invoice-details/" + res.data.data._id);
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleCancel = async () => {
    if (!cancelReason.trim()) {
      alert("Please enter cancellation reason");
      return;
    }
    await apiService.cancelRideByAdmin(reservations._id, {
      cancellationReason: cancelReason,
    });
    setReservations({ ...reservations, status: "cancelled", cancelReason });
    setCancelReason("");
  };

  if (loading) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading reservation details...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="mb-3">
                <Link
                  to="/admin-dashboard/all-reservation"
                  className="d-inline-flex align-items-center fw-medium"
                >
                  <i className="ti ti-arrow-narrow-left me-2" />
                  Reservation
                </Link>
              </div>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5>Reservation Details</h5>
                  <span className="badge bg-orange-transparent">
                    {reservations?.status}
                  </span>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-tabs nav-tabs-solid custom-nav-tabs mb-3"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        href="#solid-tab1"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Reservation Info
                      </a>
                    </li>
                    {reservations.cancellationReason && (
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          href="#solid-tab2"
                          data-bs-toggle="tab"
                          aria-selected="false"
                          role="tab"
                        >
                          Cancellation Reasion
                        </a>
                      </li>
                    )}
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="solid-tab1"
                      role="tabpanel"
                    >
                      <div className="border rounded p-3 bg-light mb-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <span className="avatar flex-shrink-0 me-2">
                                <img
                                  src={BASE_URL_IMG + reservations?.car?.image}
                                  alt={reservations?.car?.carName}
                                />
                              </span>
                              <div>
                                <p className="mb-1">
                                  {reservations?.car?.carType?.carType}
                                </p>
                                <h6 className="fs-14">
                                  {reservations?.car?.carName}
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="text-end">
                              <p className="mb-1">Price</p>
                              <h6 className="fs-14">
                                ${getCarPrice()}
                                <span className="text-gray-5 fw-normal">
                                  /{reservations.bookingType}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">Start Date</h6>
                          <p>
                            {new Date(reservations?.pickupDate).toDateString()},{" "}
                            {reservations.pickupTime}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">End Date</h6>
                          <p>
                            {new Date(reservations?.dropDate).toDateString()},{" "}
                            {reservations.dropTime}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">Rental Period</h6>
                          <p>
                            {getRentalPeriod()}{" "}
                            {getRentalPeriod() > 1 ? "Days" : "Day"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">Driving Type</h6>
                          <p>{reservations?.driverType}</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <div className="bg-light p-3 rounded flex-fill mb-3">
                                <h6 className="mb-1 fs-14 fw-medium">
                                  Pickup Location
                                </h6>
                                <p>{reservations?.pickupAddress}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="bg-light p-3 rounded mb-3">
                              <h6 className="mb-1 fs-14 fw-medium">
                                Return Location
                              </h6>
                              <p>{reservations?.dropAddress}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <div className="mb-3">
                                <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                                  Customer
                                  <a className="ms-2"></a>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center mb-3">
                                <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                  <img
                                    src={
                                      BASE_URL_IMG +
                                      reservations?.customer?.image
                                    }
                                    alt
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">
                                    {reservations?.customer?.name}
                                  </h6>
                                  <p>{reservations?.customer?.contact}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            {reservations.driverType === "withDriver" && (
                              <div>
                                <div className="mb-3">
                                  <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                                    Driver
                                    <a className="ms-2">
                                      <i className="ti ti-edit" />
                                    </a>
                                  </h6>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                  <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                    <img
                                      src={
                                        BASE_URL_IMG +
                                        reservations?.driver?.image
                                      }
                                      alt
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">
                                      {reservations.driver?.name}
                                    </h6>
                                    <p>{reservations?.driver?.contact}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3 pb-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">Pricing of Car</h6>
                          <p>${getTotalCarPricing()}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            {reservations.extraServices?.length || 0}
                            <a
                              className="me-2 ms-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={reservations.extraServices
                                ?.map((s) => s.name)
                                .join(", ")}
                            >
                              <i className="ti ti-info-circle-filled" />
                            </a>
                          </h6>

                          <p>
                            $
                            {reservations?.extraServices?.reduce(
                              (total, service) =>
                                total + service.price * (service.quantity || 1),
                              0
                            )}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            Security Deposit
                          </h6>
                          <p>${reservations.securityDeposit || 0}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            Driver Price
                          </h6>
                          <p>${reservations.driverPrice || 0}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Total Price</h6>
                        <h6>${getTotalPrice()}</h6>
                      </div>
                    </div>
                    <div className="tab-pane" id="solid-tab2" role="tabpanel">
                      <div className="border rounded p-3 bg-light mb-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <span className="avatar flex-shrink-0 me-2">
                                <img
                                  src={BASE_URL_IMG + reservations?.car?.image}
                                  alt={reservations?.car?.carName}
                                />
                              </span>
                              <div>
                                <p className="mb-1">
                                  {" "}
                                  {reservations?.car?.carType?.carType}
                                </p>
                                <h6 className="fs-14">
                                  {" "}
                                  {reservations?.car?.carName}
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="text-end">
                              <p className="mb-1">Price</p>
                              <h6 className="fs-14">
                                ${getCarPrice()}
                                <span className="text-gray-5 fw-normal">
                                  /{reservations.bookingType}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2">Cancellation Reason</h5>
                            <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                              {reservations.cancellationReason}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-wrap row-gap-3">
                <button
                  onClick={() => handlegetInvoiceId()}
                  className="btn btn-primary me-3"
                >
                  <i className="ti ti-files me-1" />
                  View Invoice
                </button>
                {reservations.status === "pending" && (
                  <button className="btn btn-success" onClick={handleConfirm}>
                    <i className="ti ti-check me-1" /> Confirm Booking
                  </button>
                )}
                {reservations.status === "confirmed" && (
                  <>
                    <button
                      className="btn btn-danger me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#cancelModal"
                    >
                      <i className="ti ti-x me-1" /> Cancel Booking
                    </button>

                    {/* Cancel Modal */}
                    <div
                      className="modal fade"
                      id="cancelModal"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Cancel Reason</h4>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <textarea
                              className="form-control mb-3"
                              rows={4}
                              placeholder="Enter cancellation reason"
                              value={cancelReason}
                              onChange={(e) => setCancelReason(e.target.value)}
                            />
                            <div className="text-end">
                              <button
                                className="btn btn-secondary me-2"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleCancel}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {reservations.status === "confirmed" && (
                  <button
                    className="btn  btn-success me-3 "
                    onClick={handleComplete}
                  >
                    <i className="ti ti-check me-1" /> Complete Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      <div className="modal fade" id="reservation_completed">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <form action="add-reservation">
                <span className="avatar avatar-lg bg-transparent-success rounded-circle text-success mb-3">
                  <i className="ti ti-check fs-26" />
                </span>
                <h4 className="mb-1">Created Successful</h4>
                <p className="mb-3">
                  Reservation created for the{" "}
                  <span className="text-gray-9">“Ford Fiesta” </span> on{" "}
                  <span className="text-gray-9">“24 Feb 2025”</span>
                </p>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-100">
                    View Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Your existing JSX */}

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

export default AdminReservationDetails;

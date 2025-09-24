import React from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  PlusCircle,
  AlertCircle,
  MapPin,
  Trash2,
  Edit3,
  Eye,
} from "react-feather";
const UserBookingCancelled = () => {
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [deleteBooking, setDeleteBooking] = useState(null);
  const getAllReservationUser = async () => {
    try {
      setLoading(true);
      const res = await apiService.getAllCancelledReservaton();
      setReservation(res.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch Reservation");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllReservationUser();
  }, []);

  const calculateTotalPrice = (reservation) => {
    const { bookingType, extraServices, securityDeposit } = reservation;

    let basePrice = 0;

    if (reservation.car.pricing.prices) {
      if (bookingType === "daily")
        basePrice = reservation.car.pricing.prices.daily || 0;
      else if (bookingType === "weekly")
        basePrice = reservation.car.pricing.prices.weekly || 0;
      else if (bookingType === "monthly")
        basePrice = reservation.car.pricing.prices.monthly || 0;
      else if (bookingType === "yearly")
        basePrice = reservation.car.pricing.prices.yearly || 0;
    }

    const extraServicesTotal = extraServices.reduce(
      (sum, service) => sum + (service.price || 0),
      0
    );

    const deposit = securityDeposit || 0;

    // 4️⃣ Total price
    const totalPrice = basePrice + extraServicesTotal + deposit;

    return totalPrice;
  };
  return (
    <div className="row">
      {/* Cancelled */}
      <div className="col-lg-12 d-flex">
        <div className="card book-card flex-fill mb-0">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-md-5">
                <h4>
                  Cancelled <span>{reservation.length}</span>
                </h4>
              </div>
              <div className="col-md-7 text-md-end">
                <div className="table-search">
                  <div id="tablefilter" />
                  <Link to="/listing" className="btn btn-add">
                    {" "}
                    <PlusCircle size={16} />
                    Add Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive dashboard-table">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" />
                      </label>
                    </th>
                    <th>Booking ID</th>
                    <th>Car Name</th>
                    <th>Rental Type</th>
                    <th>Pickup / Delivery Location</th>
                    <th>Dropoff Location</th>
                    <th>Booked On</th>
                    <th>Total</th>
                    <th>Cancelled By</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : reservation.length > 0 ? (
                    reservation.map((res) => (
                      <tr>
                        <td>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td>
                          <a>{res.bookingId}</a>
                        </td>
                        <td>
                          <div className="table-avatar">
                            <a
                              href="#"
                              className="avatar avatar-lg flex-shrink-0"
                            >
                              <img
                                className="avatar-img"
                                src={BASE_URL_IMG + res?.car?.image}
                                alt="Booking"
                              />
                            </a>
                            <div className="table-head-name flex-grow-1">
                              <a href="#"> {res?.car?.carName}</a>
                              <p>{res.rentalType}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>{res.bookingType}</p>
                        </td>
                        <td>
                          <p>
                            {res.pickupAddress}
                            <span className="d-block">
                              {new Date(res.pickupDate).toDateString()}{" "}
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            {res.dropAddress}
                            <span className="d-block">
                              {new Date(res.dropDate).toDateString()}{" "}
                            </span>
                          </p>
                        </td>
                        <td>
                          <p> {new Date(res.createdAt).toDateString()}</p>
                        </td>
                        <p className="text-darker">
                          ${calculateTotalPrice(res)}
                        </p>
                        <td>
                          <p className="text-darker">{res.cancelledBy}</p>
                        </td>
                        <td>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#cancel_reason"
                            onClick={() =>
                              setSelectedBooking(res.cancellationReason)
                            }
                            className="reason-link"
                          >
                            <i className="fa-regular fa-note-sticky" />
                          </a>
                        </td>
                        <td>
                          <span className="badge badge-danger">
                            {res.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                onClick={() => setDeleteBooking(res)}
                                data-bs-toggle="modal"
                                data-bs-target="#cancelled_booking"
                              >
                                <Eye size={16} color="#000" /> View
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No Reservation found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              <div className="row">
                <div className="col-md-6">
                  <div id="tablelength" />
                </div>
                <div className="col-md-6 text-md-end">
                  <div id="tablepage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <p>{selectedBooking}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            {deleteBooking ? (
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img
                        src={BASE_URL_IMG + deleteBooking?.car?.image}
                        alt="car"
                      />
                    </div>
                    <div className="book-info">
                      <h6>{deleteBooking?.car?.carName}</h6>
                      <p>
                        <MapPin size={16} color="#000" />
                        Location : {deleteBooking?.pickupAddress}
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      ${calculateTotalPrice(deleteBooking)}{" "}
                      <a href="javascript:void(0);">
                        <AlertCircle size={16} color="#f00" />
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
                          <p>{deleteBooking?.bookingType}</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Rental Type</h6>
                          <p>{deleteBooking?.rentalType}</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Extra Service</h6>
                          <p>
                            {deleteBooking?.extraServices
                              ?.map((service) => service.name)
                              .join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Delivery</h6>
                          <p>{deleteBooking?.pickupAddress}</p>
                          <p>
                            {new Date(
                              deleteBooking?.pickupDate
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Dropoff</h6>
                          <p>{deleteBooking?.dropAddress}</p>
                          <p>
                            {new Date(deleteBooking?.dropDate).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Status</h6>
                          <span
                            className={`badge ${
                              deleteBooking?.status === "cancelled"
                                ? "badge-danger"
                                : deleteBooking?.status === "confirmed"
                                ? "badge-success"
                                : "badge-secondary"
                            }`}
                          >
                            {deleteBooking?.status}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booked On</h6>
                          <p>
                            {new Date(
                              deleteBooking?.createdAt
                            ).toLocaleString()}
                          </p>{" "}
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
                          <p>{deleteBooking?.customer.name}</p>
                          <p>{deleteBooking?.customer.contact}</p>
                          <p>
                            <a>{deleteBooking?.customer.email}</a>
                          </p>
                          <p></p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Address</h6>
                          <p>{deleteBooking?.customer.address}</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6"></div>
                    </div>
                  </div>
                  <div className="cancel-reason">
                    <h6>Cancel Reason</h6>
                    <p>{deleteBooking?.cancellationReason}</p>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm text-end"></div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      {/* /Cancelled */}
    </div>
  );
};

export default UserBookingCancelled;

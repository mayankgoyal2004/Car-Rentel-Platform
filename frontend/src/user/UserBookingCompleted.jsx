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
const UserBookingCompleted = () => {
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const getAllReservationUser = async () => {
    try {
      setLoading(true);
      const res = await apiService.getAllCompletedReservaton();
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

  const getRentalPeriod = (res) => {
    if (!res?.pickupDate || !res?.dropDate) return 0;

    const start = new Date(res.pickupDate);
    const end = new Date(res.dropDate);

    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = (res) => {
    if (!res?.car?.pricing) return 0;

    const rentalDays = getRentalPeriod(res);
    const prices = res.car.pricing.prices;

    let carPrice = 0;
    switch (res.bookingType) {
      case "daily":
        carPrice = prices.daily * rentalDays;
        break;
      case "weekly":
        carPrice = prices.weekly * Math.ceil(rentalDays / 7);
        break;
      case "monthly":
        carPrice = prices.monthly * Math.ceil(rentalDays / 30);
        break;
      case "yearly":
        carPrice = prices.yearly * Math.ceil(rentalDays / 365);
        break;
      default:
        carPrice = 0;
    }

    const extraServices = res.extraServices || [];
    const extraServicesPrice = extraServices.reduce(
      (total, service) =>
        total + (service.price || 0) * (service.quantity || 1),
      0
    );

    const securityDeposit = res.securityDeposit || 0;
    const driverPrice = res.driverPrice || 0;

    return carPrice + extraServicesPrice + securityDeposit + driverPrice;
  };
  return (
    <div className="row">
      {/* Completed Bookings */}
      <div className="col-lg-12 d-flex">
        <div className="card book-card flex-fill mb-0">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-md-5">
                <h4>
                  Completed <span>{reservation.length}</span>
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
                        <td>
                          <p className="text-darker">
                            ${calculateTotalPrice(res)}
                          </p>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              res.status === "cancelled"
                                ? "badge-danger"
                                : res.status === "confirmed"
                                ? "badge-success"
                                : "badge-secondary"
                            }`}
                          >
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
                                data-bs-toggle="modal"
                                data-bs-target="#upcoming_booking_All_Booking"
                                onClick={() => setSelectedBooking(res)} // set the clicked booking
                              >
                                <Eye size={16} color="#000" /> View
                              </a>
                              {/* <a
                                                        className="dropdown-item"
                                                     
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit_booking"
                                                        onClick={() => setEditBooking(res)}
                                                      >
                                                        <Edit3 size={16} color="#000" /> Edit
                                                      </a> */}
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
        className="modal new-modal multi-step fade"
        id="upcoming_booking_All_Booking"
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
            {selectedBooking ? (
              <div className="modal-body">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img
                        src={BASE_URL_IMG + selectedBooking?.car?.image}
                        alt="car"
                      />
                    </div>
                    <div className="book-info">
                      <h6>{selectedBooking?.car?.carName}</h6>

                      <p>
                        <MapPin size={16} color="#000" />
                        Location : {selectedBooking?.pickupAddress}
                      </p>
                    </div>
                  </div>
                  <div className="book-amount">
                    <p>Total Amount</p>
                    <h6>
                      ${calculateTotalPrice(selectedBooking)}{" "}
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
                          <p>{selectedBooking?.bookingType}</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Rental Type</h6>
                          <p>{selectedBooking?.rentalType}</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Extra Service</h6>
                          <p>
                            {selectedBooking?.extraServices
                              ?.map((service) => service.name)
                              .join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Delivery</h6>
                          <p>{selectedBooking?.pickupAddress}</p>
                          <p>
                            {new Date(
                              selectedBooking?.pickupDate
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Dropoff</h6>
                          <p>{selectedBooking?.dropAddress}</p>
                          <p>
                            {new Date(
                              selectedBooking?.dropDate
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Status</h6>
                          <span
                            className={`badge ${
                              selectedBooking?.status === "cancelled"
                                ? "badge-danger"
                                : selectedBooking?.status === "confirmed"
                                ? "badge-success"
                                : "badge-secondary"
                            }`}
                          >
                            {selectedBooking?.status}
                          </span>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Booked On</h6>
                          <p>
                            {new Date(
                              selectedBooking?.createdAt
                            ).toLocaleString()}
                          </p>
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
                          <p>{selectedBooking?.customer.name}</p>
                          <p>{selectedBooking?.customer.contact}</p>
                          <p>
                            <a>{selectedBooking?.customer.email}</a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="booking-view">
                          <h6>Address</h6>
                          <p>{selectedBooking?.customer.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      {/* /Completed Bookings */}
    </div>
  );
};

export default UserBookingCompleted;

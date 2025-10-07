import React from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowRight } from "react-feather";
import { toast } from "react-toastify";

const UserMainDashboard = () => {
  const [wishlist, setWishlist] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [allReservation, setAllReservation] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWishList = async () => {
    try {
      const res = await apiService.getWishlist();
      if (res.data?.wishlist) {
        setWishlist(res.data.wishlist);
      } else {
        toast.error("No wishlist data found");
      }
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  const getLast5reservation = async () => {
    try {
      setLoading(true);
      const res = await apiService.getLast5Reservation();
      setReservation(res.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const getAllReservationUser = async () => {
    try {
      setLoading(true);
      const res = await apiService.getAllreservationUser();
      setAllReservation(res.data.data);
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
  useEffect(() => {
    getLast5reservation();
    getWishList();
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
    <div className="content dashboard-content">
      <div className="container">
        {/* Status List */}

        {/* /Status List */}
        {/* Content Header */}
        <div className="content-header">
          <h4>Dashboard</h4>
        </div>
        {/* /Content Header */}
        {/* Dashboard */}
        <div className="row">
          {/* Widget Item */}
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="widget-box flex-fill">
              <div className="widget-header">
                <div className="widget-content">
                  <h6>My Bookings</h6>
                  <h3>{allReservation?.length}</h3>
                </div>
                <div className="widget-icon">
                  <span>
                    <img
                      src="/user-assets/img/icons/book-icon.svg"
                      alt="icon"
                    />
                  </span>
                </div>
              </div>
              <Link to="user-booking" className="view-link">
                View all Bookings <ArrowRight />;
              </Link>
            </div>
          </div>
          {/* /Widget Item */}
          {/* Widget Item */}

          {/* /Widget Item */}
          {/* Widget Item */}

          {/* /Widget Item */}
          {/* Widget Item */}
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="widget-box flex-fill">
              <div className="widget-header">
                <div className="widget-content">
                  <h6>Wishlist Cars</h6>
                  <h3>{wishlist?.length}</h3>
                </div>
                <div className="widget-icon">
                  <span className="bg-danger">
                    <img
                      src="/user-assets/img/icons/cars-icon.svg"
                      alt="icon"
                    />
                  </span>
                </div>
              </div>
              <Link to="user-wishlist" className="view-link">
                Go to Wishlist <ArrowRight />;
              </Link>
            </div>
          </div>
          {/* /Widget Item */}
        </div>
        <div className="row">
          {/* Last 5 Bookings */}
          <div className="">
            <div className="card user-card flex-fill">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <h5>Last 5 Bookings</h5>
                  </div>
                  <div className="col-sm-7 text-sm-end">
                    <div className="booking-select">
                      {/* <select className="form-control select">
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                      </select> */}
                      <Link to="user-booking" className="view-link">
                        View all Bookings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive dashboard-table dashboard-table-info">
                  <table className="table">
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : reservation.length > 0 ? (
                        reservation.map((res) => (
                          <tr key={res._id}>
                            <td>
                              <div className="table-avatar">
                                <Link
                                  to="user-booking"
                                  className="avatar avatar-lg flex-shrink-0"
                                >
                                  <img
                                    className="avatar-img"
                                    src={BASE_URL_IMG + res?.car?.image}
                                    alt="Booking"
                                  />
                                </Link>
                                <div className="table-head-name flex-grow-1">
                                  <Link to="user-booking">
                                    {res?.car?.carName}
                                  </Link>
                                  <p>{res.driverType}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>Start date</h6>
                              <p>{new Date(res.pickupDate).toDateString()}</p>
                            </td>
                            <td>
                              <h6>End Date</h6>
                              <p>{new Date(res.dropDate).toDateString()}</p>
                            </td>
                            <td>
                              <h6>Price</h6>
                              <h5 className="text-danger">
                                ${calculateTotalPrice(res)}
                              </h5>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  res.status === "confirmed"
                                    ? "badge-success"
                                    : res.status === "pending"
                                    ? "badge-warning"
                                    : res.status === "cancelled"
                                    ? "badge-danger"
                                    : "badge-secondary"
                                }`}
                              >
                                {res.status.charAt(0).toUpperCase() +
                                  res.status.slice(1)}
                              </span>
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
              </div>
            </div>
          </div>
          {/* /Last 5 Bookings */}
          {/* Recent Transaction */}
          {/* <div className="col-lg-4 d-flex">
            <div className="card user-card flex-fill">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <h5>Recent Transaction</h5>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    <div className="booking-select">
                      <select className="form-control select">
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive dashboard-table dashboard-table-info">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="border-0">
                          <div className="table-avatar">
                            <Link
                              to="user-booking"
                              className="avatar avatar-md flex-shrink-0"
                            >
                              <img
                                className="avatar-img"
                                src="/user-assets/img/cars/car-04.jpg"
                                alt="Booking"
                              />
                            </Link>
                            <div className="table-head-name flex-grow-1">
                              <Link to="user-booking">
                                Ferrari 458 MM Speciale
                              </Link>
                              <p>Rent Type : Hourly</p>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 text-end">
                          <span className="badge badge-light-secondary">
                            Upcoming
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="pt-0">
                          <div className="status-box">
                            <p>
                              <span>Status : </span>On 15 Sep 2023, 11:30 PM
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0">
                          <div className="table-avatar">
                            <Link
                              to="user-booking"
                              className="avatar avatar-md flex-shrink-0"
                            >
                              <img
                                className="avatar-img"
                                src="/user-assets/img/cars/car-07.jpg"
                                alt="Booking"
                              />
                            </Link>
                            <div className="table-head-name flex-grow-1">
                              <Link to="user-booking">
                                Chevrolet Pick Truck 3.5L
                              </Link>
                              <p>Rent Type : Day</p>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 text-end">
                          <span className="badge badge-light-warning">
                            Refund started{" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="pt-0">
                          <div className="status-box">
                            <p>
                              <span>Status : </span>Yet to recieve
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0">
                          <div className="table-avatar">
                            <Link
                              to="user-booking"
                              className="avatar avatar-md flex-shrink-0"
                            >
                              <img
                                className="avatar-img"
                                src="/user-assets/img/cars/car-08.jpg"
                                alt="Booking"
                              />
                            </Link>
                            <div className="table-head-name flex-grow-1">
                              <Link to="user-booking">Toyota Tacoma 4WD</Link>
                              <p>Rent Type : Weekly</p>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 text-end">
                          <span className="badge badge-light-danger">
                            Cancelled
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="pt-0">
                          <div className="status-box">
                            <p>
                              <span>Status : </span>On 15 Sep 2023, 11:30 PM
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0">
                          <div className="table-avatar">
                            <Link
                              to="user-booking"
                              className="avatar avatar-md flex-shrink-0"
                            >
                              <img
                                className="avatar-img"
                                src="/user-assets/img/cars/car-01.jpg"
                                alt="Booking"
                              />
                            </Link>
                            <div className="table-head-name flex-grow-1">
                              <Link to="user-booking">Ford Mustang 4.0 AT</Link>
                              <p>Rent Type : Monthly</p>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 text-end">
                          <span className="badge badge-light-success">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="pt-0 pb-0 border-0">
                          <div className="status-box">
                            <p>
                              <span>Status : </span>On 20 Dec 2023, 05:20 PM
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
          {/* /Recent Transaction */}
        </div>
        {/* /Dashboard */}
      </div>
    </div>
  );
};

export default UserMainDashboard;

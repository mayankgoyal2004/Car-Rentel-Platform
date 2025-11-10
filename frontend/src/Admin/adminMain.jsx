import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

import { useSelector } from "react-redux";

const AdminMain = () => {
  const [cars, setCars] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [latestReservation, setLatestReservagion] = useState([]);
  const [customer, setCustomers] = useState([]);
  const [newlyCar, setNewlyCar] = useState([]);
  const [rentalCars, setRentalCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [customerPegination, setCustomerPegination] = useState({});
  const [reservationPegination, setreservationPagination] = useState({});
  const [carPegination, setCarPegination] = useState({});
  const [ownerPegination, setOwnerPegination] = useState({});
  const [driverPeginaton, setDriverPegination] = useState({});
  const [invoice, setInvoices] = useState([]);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //

  const fetchAllCars = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarAdmin({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setCars(res.data.data);
        setCarPegination(res.data.pagination);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };
  const fetchAllCarsSuperAdmin = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarSuperAdmin();
      if (res.data.success) {
        setCars(res.data.data);
        setCarPegination(res.data.pagination);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };
  const fetchAllOwnerSuperAdmin = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllOwnerAdmin();
      if (res.data.success) {
        setOwnerPegination(res.data.pagination);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const fetchAllReservationSuperAdmin = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllReservationSuperAdmin();
      if (res.data.success) {
        setCars(res.data.data);
        setreservationPagination(res.data.pagination);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };
  const fetchAllinRentalCars = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarInRental();
      if (res.data.success) {
        setRentalCars(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };
  const fetchLatestInvoices = async () => {
    setLoading(true);
    try {
      const res = await apiService.getLatestInvoice();
      if (res.data.success) {
        setInvoices(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await apiService.getLatest5Customer();
      if (res.data.success) {
        setCustomers(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomersSuperAdmin = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllcustomerSuperAdmin();
      if (res.data.success) {
        setCustomers(res.data.data);
        setCustomerPegination(res.data.pagination);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const gradientStyles = {
    primaryGradient: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    },
    successGradient: {
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "white",
    },
    warningGradient: {
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      color: "white",
    },
    dangerGradient: {
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      color: "white",
    },
    darkGradient: {
      background: "linear-gradient(135deg, #434343 0%, #000000 100%)",
      color: "white",
    },
    purpleGradient: {
      background: "linear-gradient(135deg, #9b59b6 0%, #e74c3c 100%)",
      color: "white",
    },
  };
  const fetchlatestReservaton = async () => {
    setLoading(true);
    try {
      const res = await apiService.getLatest5ReservationsForAdmin();
      if (res.data.success) {
        setLatestReservagion(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };
  const fetchNewlyAddedCar = async () => {
    setLoading(true);
    try {
      const res = await apiService.getNewlyAddedCars();
      if (res.data.success) {
        setNewlyCar(res.data.data[0]);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllReservationAdmin();
      setReservations(res.data.data);
      setreservationPagination(res.data.pagination);
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };

  const getAllDrivers = async () => {
    setLoading(true);
    try {
      const res = await apiService.getlastest5drivers();
      setDrivers(res.data.data || []);
    } catch (err) {
      console.error("Error fetching Driver:", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchDriver = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllDriverAdmin();
      setDriverPegination(res.data.pagination);
    } catch (err) {
      console.error("Error fetching Driver:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userType !== 1) {
      fetchAllCars();
      fetchAllinRentalCars();
      fetchReservations();
      fetchDriver();
      getAllDrivers();
      fetchNewlyAddedCar();
      fetchCustomers();
      fetchLatestInvoices();
      fetchlatestReservaton();
    } else {
      fetchAllCarsSuperAdmin();
      fetchCustomersSuperAdmin();
      fetchAllReservationSuperAdmin();
      fetchAllOwnerSuperAdmin();
    }
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content pb-0">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Dashboard</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Admin Dashboard
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}
        <div className="row">
          <div className="col-xl-8 d-flex flex-column">
            {/* Welcome Wrap */}
            {userType !== 1 && (
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-sm-7">
                      <h4 className="mb-1">{userData?.userName}</h4>
                      <p>400+ Budget Friendly Cars Available for the rents </p>
                      <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                        <div>
                          <p className="mb-1">Total No of Cars</p>
                          <h3>{carPegination?.totalCar}</h3>
                        </div>
                        <div>
                          <p className="d-flex align-items-center mb-2">
                            <span className="line-icon bg-violet me-2" />
                            <span className="fw-semibold text-gray-9 me-1">
                              {rentalCars?.length}
                            </span>
                            In Rental
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <Link
                          to="all-reservation"
                          className="btn btn-primary d-flex align-items-center"
                        >
                          <i className="ti ti-eye me-1" />
                          Reservations
                        </Link>
                        <Link
                          to="add-car"
                          className="btn btn-dark d-flex align-items-center"
                        >
                          <i className="ti ti-plus me-1" />
                          Add New Car
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <img src="/admin-assets/img/icons/car.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* /Welcome Wrap */}
            <div className="row">
              {/* Total Reservations */}
              <div
                className={`${
                  userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"
                }`}
              >
                <div
                  className="card flex-fill border-0 shadow-sm text-white"
                  style={gradientStyles.primaryGradient}
                >
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-0 pb-2">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm bg-secondary-100 text-secondary me-2">
                          <i className="ti ti-calendar-time fs-14" />
                        </span>
                        <Link to="all-reservation" className="">
                          Total Reservations
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="py-2">
                        <h5 className="mb-1 ">
                          {reservationPegination?.totalReservations}
                        </h5>
                      </div>
                      <div id="reservation-chart" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Reservations */}
              {/* Total Earnings */}
              <div
                className={`${
                  userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"
                }`}
              >
                <div
                  className="card flex-fill border-0 shadow-sm text-white"
                  style={gradientStyles.warningGradient}
                >
                  <div className="card-body pb-1">
                    <div className="border-bottom border-white-20 mb-0 pb-2">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm bg-white-20 text-white me-2">
                          <i className="ti ti-users fs-14" />
                        </span>
                        {userType !== 1 && (
                          <Link
                            to="all-drivers"
                            className="text-white fw-medium"
                          >
                            Total Drivers
                          </Link>
                        )}
                        {userType === 1 && (
                          <Link
                            to="all-customers"
                            className="text-white fw-medium"
                          >
                            Total Customer
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="py-2">
                        <h3 className="mb-1 text-white fw-bold">
                          {userType === 1
                            ? customerPegination?.totalcustomer
                            : driverPeginaton?.totalDriver}
                        </h3>
                      </div>
                      <div id="earning-chart" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Earnings */}
              {/* Total Cars */}
              <div
                className={`${
                  userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"
                }`}
              >
                <div
                  className="card flex-fill border-0 shadow-sm text-white"
                  style={gradientStyles.dangerGradient}
                >
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-0 pb-2">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                          <i className="ti ti-car fs-14" />
                        </span>
                        <Link to="all-cars" className="">
                          Total Cars
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="py-2">
                        <h5 className="mb-1 ">{carPegination?.totalCar}</h5>
                      </div>
                      <div id="car-chart" />
                    </div>
                  </div>
                </div>
              </div>
              {userType === 1 && (
                <div
                  className={`${
                    userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"
                  }`}
                >
                  <div
                    className="card flex-fill border-0 shadow-sm text-white"
                    style={gradientStyles.purpleGradient}
                  >
                    {" "}
                    {/* 👈 Changed class here */}
                    <div className="card-body pb-1">
                      <div className="border-bottom mb-0 pb-2">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                            <i className="ti ti-car fs-14" />
                          </span>
                          <Link to="all-owners " className="">
                            Total Owner
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="py-2">
                          <h5 className="mb-1 ">
                            {ownerPegination?.totalUser}
                          </h5>
                        </div>
                        <div id="car-chart" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* /Total Cars */}
            </div>
          </div>
          {/* Newly Added Cars */}
          {userType !== 1 && (
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div
                  className="card-header border-0 text-white py-3"
                  style={gradientStyles.darkGradient}
                >
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h5 className="mb-0 text-white fw-bold">
                      Newly Added Cars
                    </h5>
                    <Link
                      to="/admin-dashboard/all-cars"
                      className="text-white text-decoration-underline fw-medium"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                {newlyCar && (
                  <div className="card-body">
                    {/* <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h5>Newly Added Cars</h5>
                      <Link
                        to="/admin-dashboard/all-cars"
                        className="text-decoration-underline fw-medium"
                      >
                        View All
                      </Link>
                    </div> */}
                    <div className="mb-2">
                      <img
                        src={BASE_URL_IMG + newlyCar?.image}
                        alt={newlyCar?.carName}
                        className="rounded w-100"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <div>
                        <p className="fs-13 mb-1">
                          {newlyCar?.carType?.carType}
                        </p>
                        <h6 className="fs-14 fw-semibold">
                          {newlyCar.carName}
                        </h6>
                      </div>
                      <h6 className="fs-14 fw-semibold">
                        ${newlyCar?.pricing?.prices?.daily ?? 0}{" "}
                        <span className="fw-normal text-gray-5">/day</span>
                      </h6>
                    </div>
                    <div className="row g-2 justify-content-center mb-3">
                      <div className="col-sm-4 col-6 d-flex">
                        <div className="bg-light border p-2 br-5 flex-fill text-center">
                          <h6 className="fs-14 fw-semibold">Fuel Type</h6>
                          <span className="fs-13">
                            {newlyCar?.carFuel?.carFuel || "N/A"}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6 d-flex">
                        <div className="bg-light border p-2 br-5 flex-fill text-center">
                          <h6 className="fs-14 fw-semibold">Passengers</h6>
                          <span className="fs-13">
                            {newlyCar?.passengers || "N/A"}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6 d-flex">
                        <div className="bg-light border p-2 br-5 flex-fill text-center">
                          <h6 className="fs-14 fw-semibold">Transmission</h6>
                          <span className="fs-13">
                            {" "}
                            {newlyCar?.carTransmission?.carTransmission ||
                              "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/admin-dashboard/car-details/${newlyCar?._id}`}
                      className="btn btn-white d-flex align-items-center justify-content-center"
                    >
                      View Details
                      <i className="ti ti-chevron-right ms-1" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* /Newly Added Cars */}
        </div>
        <div className="row">
          {/* customer */}
          {userType !== 1 && (
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                {/* ✅ Full Gradient Header */}
                <div
                  className="card-header border-0 text-white py-3"
                  style={gradientStyles.primaryGradient}
                >
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h5 className="mb-0 text-white fw-bold">Customers</h5>
                    <Link
                      to="all-customers"
                      className="text-white text-decoration-underline fw-medium"
                    >
                      View All
                    </Link>
                  </div>
                </div>

                <div className="card-body pb-1">
                  <div className="table-responsive table-overflow-hidden">
                    <table className="table custom-table1">
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="7" className="text-center py-4">
                              Loading...
                            </td>
                          </tr>
                        ) : customer.length === 0 ? (
                          <tr>
                            <td colSpan="7" className="text-center py-4">
                              No customers found
                            </td>
                          </tr>
                        ) : (
                          customer.map((cus) => (
                            <tr key={cus?._id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to={`/admin-dashboard/customer-details/${cus._id}`}
                                    className="avatar flex-shrink-0"
                                  >
                                    <img
                                      src={`${BASE_URL_IMG + cus?.image}`}
                                      className="rounded-circle"
                                      alt="img"
                                    />
                                  </Link>
                                  <div className="flex-grow-1 ms-2">
                                    <h6 className="fs-14 fw-semibold mb-1">
                                      <Link
                                        to={`/admin-dashboard/customer-details/${cus?._id}`}
                                      >
                                        {cus?.name}
                                      </Link>
                                    </h6>
                                    <span className="badge badge-sm bg-secondary-transparent rounded-pill">
                                      Client
                                    </span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* customer */}
          {/* Recent Reservations */}
         {userType !== 1 && (
    <div className="col-xl-6 d-flex">
      <div className="card flex-fill">

        {/* ✅ Full Gradient Header */}
        <div
          className="card-header border-0 text-white py-3"
          style={gradientStyles.successGradient}
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h5 className="mb-0 text-white fw-bold">Recent Reservations</h5>
            <Link
              to="all-reservation"
              className="text-white text-decoration-underline fw-medium"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="card-body pb-1">
          <div className="table-responsive table-overflow-hidden">
            <table className="table custom-table1">
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">Loading...</td>
                  </tr>
                ) : latestReservation.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">No Reservations found</td>
                  </tr>
                ) : (
                  latestReservation.map((res) => {
                    const pickup = new Date(res?.pickupDate);
                    const drop = new Date(res?.dropDate);
                    const duration = Math.ceil((drop - pickup) / (1000 * 60 * 60 * 24));

                    return (
                      <tr key={res?._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={`/admin-dashboard/car-details/${res.car?._id}`}
                              className="avatar flex-shrink-0"
                            >
                              <img
                                src={BASE_URL_IMG + res?.car.image}
                                alt={res?.car?.carName}
                                className="rounded"
                              />
                            </Link>
                            <div className="flex-grow-1 ms-2">
                              <p className="d-flex align-items-center fs-13 text-default mb-1">
                                {duration} {duration > 1 ? "Days" : "Day"}
                                <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                                {res?.driverType === "self" ? "Self" : "With Driver"}
                              </p>
                              <h6 className="fs-14 fw-semibold mb-1">
                                <Link to={`/admin-dashboard/car-details/${res.car?._id}`}>
                                  {res.car?.carName}
                                </Link>
                              </h6>
                              <span className="badge badge-sm bg-secondary-transparent rounded-pill">
                                {res?.status}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )}

          {/* /Recent Reservations */}
        </div>
        <div className="row">{/* Customers */}</div>
        <div className="row">
          {/* Maintenance */}
          {/* <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body pb-1">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                  <h5>Maintenance</h5>
                  <to
                    t0="car-maintenance"
                    className="text-decoration-underline fw-medium"
                  >
                    View All
                  </to>
                </div>
                <div className="table-responsive">
                  <table className="table custom-table1">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar flex-shrink-0"
                            >
                              <img
                                src="/admin-assets/img/car/car-01.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="flex-grow-1 ms-2">
                              <h6 className="fs-14 fw-semibold mb-1">
                                <Link to="car-details">Ford Endeavour</Link>
                              </h6>
                              <p className="fs-13 text-default">Sedan</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <p className="fs-13 mb-1 text-default">Odometer</p>
                          <h6 className="fs-14 fw-semibold">8656 KM</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar flex-shrink-0"
                            >
                              <img
                                src="/admin-assets/img/car/car-02.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="flex-grow-1 ms-2">
                              <h6 className="fs-14 fw-semibold mb-1">
                                <Link to="car-details">Ferrari 458 MM</Link>
                              </h6>
                              <p className="fs-13 text-default">SUV</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <p className="fs-13 mb-1 text-default">Odometer</p>
                          <h6 className="fs-14 fw-semibold">565 KM</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar flex-shrink-0"
                            >
                              <img
                                src="/admin-assets/img/car/car-03.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="flex-grow-1 ms-2">
                              <h6 className="fs-14 fw-semibold mb-1">
                                <Link to="car-details">Ford Mustang </Link>
                              </h6>
                              <p className="fs-13 text-default">Sedan</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <p className="fs-13 mb-1 text-default">Odometer</p>
                          <h6 className="fs-14 fw-semibold">698 KM</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar flex-shrink-0"
                            >
                              <img
                                src="/admin-assets/img/car/car-04.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="flex-grow-1 ms-2">
                              <h6 className="fs-14 fw-semibold mb-1">
                                <Link to="car-details">Toyota Tacoma 4</Link>
                              </h6>
                              <p className="fs-13 text-default">Minivans</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <p className="fs-13 mb-1 text-default">Odometer</p>
                          <h6 className="fs-14 fw-semibold">855 KM</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar flex-shrink-0"
                            >
                              <img
                                src="/admin-assets/img/car/car-05.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="flex-grow-1 ms-2">
                              <h6 className="fs-14 fw-semibold mb-1">
                                <Link to="car-details">Chevrolet Truck</Link>
                              </h6>
                              <p className="fs-13 text-default">Hatchbacks</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <p className="fs-13 mb-1 text-default">Odometer</p>
                          <h6 className="fs-14 fw-semibold">5889 KM</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
          {/* /Maintenance */}
          {/* Reservation Statistics */}

          {/* /Reservation Statistics */}
          {/* Drivers */}
       {userType !== 1 && (
  <div className="col-xl-4 d-flex">
    <div className="card flex-fill">

      {/* ✅ Full Gradient Header */}
      <div
        className="card-header border-0 text-white py-3"
        style={gradientStyles.warningGradient} // <-- Change gradient if needed
      >
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h5 className="mb-0 text-white fw-bold">Drivers</h5>
          <Link
            to="all-drivers"
            className="text-white text-decoration-underline fw-medium"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="card-body pb-1">
        <div className="table-responsive table-overflow-hidden">
          <table className="table custom-table1">
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">Loading...</td>
                </tr>
              ) : drivers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">No drivers found</td>
                </tr>
              ) : (
                drivers.map((dr) => (
                  <tr key={dr._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar flex-shrink-0">
                          <img
                            src={BASE_URL_IMG + dr?.image}
                            className="rounded-circle"
                            alt="driver"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1">{dr.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-6 me-2" />
                        {dr.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
)}

          {/* /Drivers */}
        </div>
        {userType !== 1 && (
  <div className="row">
    {/* Recent Invoices */}
    <div className="col-md-12">
      <div className="card">

        {/* ✅ Full Gradient Header */}
        <div
          className="card-header border-0 text-white py-3"
          style={gradientStyles.primaryGradient} // change color if needed
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-1">
            <h5 className="mb-0 text-white fw-bold">Recent Invoices</h5>
            <Link
              to="/admin-dashboard/all-invoice"
              className="text-white text-decoration-underline fw-medium"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="card-body">
          <div className="custom-table table-responsive table-overflow-hidden">
            <table className="table">
              <thead>
                <tr>
                  <th>INVOICE NO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>CREATED DATE</th>
                  <th>DUE DATE</th>
                  <th>INVOICE AMOUNT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">Loading...</td>
                  </tr>
                ) : invoice.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">No Invoice found</td>
                  </tr>
                ) : (
                  invoice.map((inv) => (
                    <tr key={inv._id}>
                      <td>
                        <Link to={"invoice-details/" + inv._id} className="fs-12 fw-medium">
                          #{inv.invoiceNumber}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={"customers-details/" + inv.customer?._id}
                            className="avatar flex-shrink-0"
                          >
                            <img
                              src={BASE_URL_IMG + inv.customer?.image}
                              className="rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={"customers-details/" + inv.customer?._id}>
                                {inv.customer?.name}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href={`mailto:${inv.customer?.email}`}>
                          {inv.customer?.email}
                        </a>
                      </td>
                      <td>{new Date(inv?.fromDate).toDateString()}</td>
                      <td>{new Date(inv?.dueDate).toDateString()}</td>
                      <td>${inv?.totalAmount}</td>
                      <td>
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          {inv?.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    {/* /Recent Invoices */}
  </div>
)}

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

export default AdminMain;

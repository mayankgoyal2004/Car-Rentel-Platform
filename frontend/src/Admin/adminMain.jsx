import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { toast } from "react-toastify";

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
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDriver = async () => {
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
  useEffect(() => {
    if (userType !== 1) {
      fetchAllCars();
      fetchAllinRentalCars();
      fetchReservations();
      fetchDriver();
      fetchNewlyAddedCar();
      fetchCustomers();
      fetchlatestReservaton();
    } else {
      fetchAllCarsSuperAdmin();
      fetchCustomersSuperAdmin();
      fetchAllReservationSuperAdmin();
      fetchAllOwnerSuperAdmin()
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
                      <h4 className="mb-1">{userData.userName}</h4>
                      <p>400+ Budget Friendly Cars Available for the rents </p>
                      <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                        <div>
                          <p className="mb-1">Total No of Cars</p>
                          <h3>{cars.length}</h3>
                        </div>
                        <div>
                          <p className="d-flex align-items-center mb-2">
                            <span className="line-icon bg-violet me-2" />
                            <span className="fw-semibold text-gray-9 me-1">
                              {rentalCars.length}
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
              <div className={`${userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"}`}>
                <div className="card flex-fill">
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-0 pb-2">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm bg-secondary-100 text-secondary me-2">
                          <i className="ti ti-calendar-time fs-14" />
                        </span>
                        <p>Total Reservations</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="py-2">
                        <h5 className="mb-1">
                          {userType === 1
                            ? reservationPegination?.totalReservation
                            : reservations.length}
                        </h5>
                      </div>
                      <div id="reservation-chart" />
                    </div>
                  </div>
                </div>
              </div> 
              {/* /Total Reservations */}
              {/* Total Earnings */}
              <div className={`${userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"}`}>
                <div className="card flex-fill">
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-0 pb-2">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm bg-orange-100 text-orange me-2">
                          <i className="ti ti-moneybag fs-14" />
                        </span>
                        <p>
                          {userType === 1 ? "Total Customers" : "Total Drivers"}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="py-2">
                        <h5 className="mb-1">
                          {userType === 1
                            ? customerPegination?.totalcustomer
                            : drivers.length}
                        </h5>
                      </div>
                      <div id="earning-chart" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Earnings */}
              {/* Total Cars */}
              <div className={`${userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"}`}>
                <div className="card flex-fill">
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-0 pb-2">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                          <i className="ti ti-car fs-14" />
                        </span>
                        <p>Total Cars</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="py-2">
                        <h5 className="mb-1">
                          {userType === 1
                            ? carPegination?.totalCars
                            : cars.length}
                        </h5>
                      </div>
                      <div id="car-chart" />
                    </div>
                  </div>
                </div>
              </div>
              {userType === 1 && (
                <div className={`${userType === 1 ? "col-md-3 d-flex" : "col-md-4 d-flex"}`}>
                  <div className="card flex-fill">
                    <div className="card-body pb-1">
                      <div className="border-bottom mb-0 pb-2">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                            <i className="ti ti-car fs-14" />
                          </span>
                          <p>Total Owner</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="py-2">
                          <h5 className="mb-1">
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
                {newlyCar && (
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h5>Newly Added Cars</h5>
                      <Link
                        to="/admin-dashboard/all-cars"
                        className="text-decoration-underline fw-medium"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="mb-2">
                      <img
                        src={BASE_URL_IMG + newlyCar.image}
                        alt={newlyCar.carName}
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
                            {newlyCar.passengers || "N/A"}
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
                      to={`/car-details/${newlyCar._id}`} // ✅ pass car id for details page
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
                <div className="card-body pb-1">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                    <h5>Customers</h5>
                    <Link
                      to="all-customers"
                      className="text-decoration-underline fw-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="table-responsive">
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
                            <tr key={cus._id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to={`/admin-dashboard/customer-details/${cus._id}`}
                                    className="avatar flex-shrink-0"
                                  >
                                    <img
                                      src={`${BASE_URL_IMG + cus.image}`}
                                      className="rounded-circle"
                                      alt="img"
                                    />
                                  </Link>
                                  <div className="flex-grow-1 ms-2">
                                    <h6 className="fs-14 fw-semibold mb-1">
                                      <Link
                                        to={`/admin-dashboard/customer-details/${cus._id}`}
                                      >
                                        {cus.name}
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
                <div className="card-body pb-1">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                    <h5>Recent Reservations</h5>
                    <Link
                      to="all-reservation"
                      className="text-decoration-underline fw-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="table-responsive">
                    <table className="table custom-table1">
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="7" className="text-center py-4">
                              Loading...
                            </td>
                          </tr>
                        ) : latestReservation.length === 0 ? (
                          <tr>
                            <td colSpan="7" className="text-center py-4">
                              No Reservations found
                            </td>
                          </tr>
                        ) : (
                          latestReservation.map((res) => {
                            const pickup = new Date(res.pickupDate);
                            const drop = new Date(res.dropDate);
                            const duration = Math.ceil(
                              (drop - pickup) / (1000 * 60 * 60 * 24)
                            );

                            return (
                              <tr key={res._id}>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to={`/admin-dashboard/car-details/${res.car._id}`}
                                      className="avatar flex-shrink-0"
                                    >
                                      <img
                                        src={BASE_URL_IMG + res.car.image}
                                        alt={res.car.carName}
                                        className="rounded"
                                      />
                                    </Link>
                                    <div className="flex-grow-1 ms-2">
                                      <p className="d-flex align-items-center fs-13 text-default mb-1">
                                        {duration}{" "}
                                        {duration > 1 ? "Days" : "Day"}
                                        <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                                        {res.driverType === "self"
                                          ? "Self"
                                          : "With Driver"}
                                      </p>
                                      <h6 className="fs-14 fw-semibold mb-1">
                                        <Link
                                          to={`/admin-dashboard/car-details/${res.car._id}`}
                                        >
                                          {res.car.carName}
                                        </Link>
                                      </h6>
                                      <span className="badge badge-sm bg-secondary-transparent rounded-pill">
                                        {res.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex flex-column">
                                    <span className="fs-13 fw-semibold">
                                      {res.pickupAddress}
                                    </span>
                                    <span className="fs-13 text-muted">
                                      {pickup.toLocaleDateString()},{" "}
                                      {res.pickupTime}
                                    </span>
                                    <span className="fs-13 fw-semibold mt-1">
                                      {res.dropAddress}
                                    </span>
                                    <span className="fs-13 text-muted">
                                      {drop.toLocaleDateString()},{" "}
                                      {res.dropTime}
                                    </span>
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
                <div className="card-body pb-1">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                    <h5>Drivers</h5>
                    <Link
                      to="all-drivers"
                      className="text-decoration-underline fw-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="table-responsive">
                    <table className="table custom-table1">
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="7" className="text-center py-4">
                              Loading...
                            </td>
                          </tr>
                        ) : drivers.length === 0 ? (
                          <tr>
                            <td colSpan="7" className="text-center py-4">
                              No drivers found
                            </td>
                          </tr>
                        ) : (
                          drivers.map((dr) => (
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <a className="avatar flex-shrink-0">
                                    <img
                                      src={BASE_URL_IMG + dr.image}
                                      className="rounded-circle"
                                      alt
                                    />
                                  </a>
                                  <div className="flex-grow-1 ms-2">
                                    <h6 className="fs-14 fw-semibold mb-1">
                                      <a>{dr.name}</a>
                                    </h6>
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
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                    <h5 className="mb-1">Recent Invoices</h5>
                    <Link
                      Link="all-invoice"
                      className="text-decoration-underline fw-medium mb-1"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="custom-table table-responsive">
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
                        <tr>
                          <td>
                            <Link
                              to="invoice-details"
                              className="fs-12 fw-medium"
                            >
                              #12345
                            </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="customers-details"
                                className="avatar flex-shrink-0"
                              >
                                <img
                                  src="/admin-assets/img/profiles/avatar-20.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </Link>
                              <div className="flex-grow-1 ms-2">
                                <h6 className="fs-14 fw-semibold mb-1">
                                  <Link to="customers-details">
                                    Andrew Simons{" "}
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="61000f05130416210419000c110d044f020e0c"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>24 Jan 2025</td>
                          <td>24 Jan 2025</td>
                          <td>$120.00</td>
                          <td>
                            <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-6 me-2" />
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link
                              to="invoice-details"
                              className="fs-12 fw-medium"
                            >
                              #12346
                            </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="customers-details"
                                className="avatar flex-shrink-0"
                              >
                                <img
                                  src="/admin-assets/img/profiles/avatar-21.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </Link>
                              <div className="flex-grow-1 ms-2">
                                <h6 className="fs-14 fw-semibold mb-1">
                                  <Link to="customers-details">
                                    David Steiger
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="e68287908f82a6839e878b968a83c885898b"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>19 Dec 2024</td>
                          <td>19 Dec 2024</td>
                          <td>$85.00</td>
                          <td>
                            <span className="badge badge-md bg-info-transparent d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-6 me-2" />
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link
                              to="invoice-details"
                              className="fs-12 fw-medium"
                            >
                              #12347
                            </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="customers-details"
                                className="avatar flex-shrink-0"
                              >
                                <img
                                  src="/admin-assets/img/profiles/avatar-12.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </Link>
                              <div className="flex-grow-1 ms-2">
                                <h6 className="fs-14 fw-semibold mb-1">
                                  <Link to="customers-details">
                                    Virginia Phu
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="f0809885b09588919d809c95de939f9d"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>11 Dec 2024</td>
                          <td>11 Dec 2024</td>
                          <td>$250.00</td>
                          <td>
                            <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-6 me-2" />
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link
                              to="invoice-details"
                              className="fs-12 fw-medium"
                            >
                              #12348
                            </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="customers-details"
                                className="avatar flex-shrink-0"
                              >
                                <img
                                  src="/admin-assets/img/profiles/avatar-03.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </Link>
                              <div className="flex-grow-1 ms-2">
                                <h6 className="fs-14 fw-semibold mb-1">
                                  <Link to="customers-details">
                                    Walter Hartmann
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="1463757860716654716c75796478713a777b79"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>29 Nov 2024</td>
                          <td>229 Nov 2024</td>
                          <td>$175.00</td>
                          <td>
                            <span className="badge badge-md bg-purple-transparent d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-6 me-2" />
                              Overdue
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link
                              to="invoice-details"
                              className="fs-12 fw-medium"
                            >
                              #12349
                            </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="customers-details"
                                className="avatar flex-shrink-0"
                              >
                                <img
                                  src="/admin-assets/img/profiles/avatar-07.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </Link>
                              <div className="flex-grow-1 ms-2">
                                <h6 className="fs-14 fw-semibold mb-1">
                                  <Link to="customers-details">
                                    Andrea Jermaine
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="39535c4b545850575c795c41585449555c175a5654"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>03 Nov 2024</td>
                          <td>03 Nov 2024</td>
                          <td>$200.00</td>
                          <td>
                            <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-6 me-2" />
                              Paid
                            </span>
                          </td>
                        </tr>
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
    </div>
  );
};

export default AdminMain;

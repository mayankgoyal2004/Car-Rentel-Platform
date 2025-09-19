import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const AdminReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [deleteReservation, setDeleteReservation] = useState(null);

  const fetchReservations = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllReservationAdmin({
        search: searchQuery,
        page,
      });
      setReservations(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      setTotalCount(res.data.pagination?.total || 0);
      setPageSize(res.data.pagination?.limit || 10);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations(search, currentPage);
  }, [currentPage, search]);


  const handleDeleteConfirm = (reservation) => {
    setDeleteReservation(reservation);
  };

  const handleDelete = async () => {
    if (!deleteReservation) return;
    try {
      await apiService.deleteReservation(deleteReservation._id);
      fetchReservations(search, currentPage);
      setDeleteReservation(null);
    } catch (err) {
      console.error("Error deleting Reservation:", err);
      alert(
        "Error deleting reservation: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">All Reservations</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Reservations
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <a
                href="javascript:void(0);"
                className="btn btn-white d-flex align-items-center"
              >
                <i className="ti ti-printer me-2" />
                Print
              </a>
            </div>
            <div className="mb-2">
              <div className="dropdown">
                <a
                  href="javascript:void(0);"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <div className="me-2">
              <div className="input-icon-start position-relative topdatepicker">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar" />
                </span>
                <input
                  type="text"
                  className="form-control date-range bookingrange"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                />
              </div>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom Data Table */}
        <div className="custom-datatable-filter table-responsive">
          <table className="table datatable">
            <thead className="thead-light">
              <tr>
                <th className="no-sort">
                  <div className="form-check form-check-md">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="select-all"
                    />
                  </div>
                </th>
                <th>CAR</th>
                <th>CUSTOMER</th>
                <th>PICK UP DETAILS</th>
                <th>DROP OFF DETAILS</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation._id}>
                  <td>
                    <div className="form-check form-check-md">
                      <input className="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={`/admin-dashboard/car-details/${reservation.car._id}`}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src={BASE_URL_IMG + reservation.car.image}
                          alt={reservation.car.carName}
                        />
                      </Link>
                      <div>
                        <Link
                          to={`/admin-dashboard/reservation-details/${reservation._id}`}
                          className="text-info d-block mb-1"
                        >
                          {reservation.bookingId}
                        </Link>
                        <h6 className="fs-14">
                          <Link
                            to={`/admin-dashboard/car-details/${reservation.car._id}`}
                          >
                            {reservation.car.carName}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={`/admin-dashboard/customer-details/${reservation.customerId}`}
                        className="avatar avatar-rounded me-2 flex-shrink-0"
                      >
                        <img
                          src={
                          BASE_URL_IMG+  reservation.customer.image
                          }
                          alt={reservation.customer.name}
                        />
                      </Link>
                      <div>
                        <h6 className="mb-1 fs-14">
                          <Link
                            to={`/admin-dashboard/customer-details/${reservation.customerId}`}
                          >
                            {reservation.customer.name}
                          </Link>
                        </h6>
                     
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 className="mb-2 fs-16">
                          {reservation.pickupDate
                            ? new Date(reservation.pickupDate).getDate()
                            : ""}
                        </h5>
                        <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                          {reservation.pickupDate
                            ? new Date(
                                reservation.pickupDate
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                              })
                            : ""}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-9 mb-0">
                          {reservation.pickupAddress}
                        </p>
                        <span className="fs-13">{reservation.pickupTime}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 className="mb-2 fs-16">
                          {reservation.dropDate
                            ? new Date(reservation.dropDate).getDate()
                            : ""}
                        </h5>
                        <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                          {reservation.dropDate
                            ? new Date(
                                reservation.dropDate
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                              })
                            : ""}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-9 mb-0">
                          {reservation.dropAddress}
                        </p>
                        <span className="fs-13">{reservation.dropTime}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`badge  ${
                        reservation.status ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-icon btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end p-2">
                        <li>
                          <Link
                            to={`/admin-dashboard/reservation-details/${reservation._id}`}
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-eye me-1" />
                            View Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/admin-dashboard/edit-reservation/${reservation._id}`}
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-eye me-1" />
                            Edit REservation{" "}
                          </Link>
                        </li>
                        <li>
                          <a
                            className="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            onClick={() => handleDeleteConfirm(reservation)}
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash me-1" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Custom Data Table */}
        <div className="table-footer" />
      </div>
      {/* Footer*/}
      {/* /Footer*/}
      {/* /Page Wrapper */}
      {/* Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Reservation</h4>
              <p className="mb-3">
                Are you sure you want to delete Reservation?
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleDelete}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReservation;

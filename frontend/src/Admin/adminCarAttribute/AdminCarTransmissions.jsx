import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const AdminCarTransmissions = () => {
  const [carTransmission, setCarTransmissions] = useState([]);
  const [newCarTransmission, setnewCarTransmission] = useState("");
  const [editCarTransmission, setEditCarTransmission] = useState(null);
  const [deleteCarTransmission, setDeleteCarTransmission] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllCarTransmissions = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarTransmissions({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setCarTransmissions(res.data.data);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to fetch car transmissions"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCarTransmissions(currentPage, search);
  }, [currentPage, search]);

  const addCarTransmission = async () => {
    if (!newCarTransmission.trim()) {
      toast.error("Please enter a car transmission");
      return;
    }
    try {
      const res = await apiService.addCarTransmission({
        carTransmission: newCarTransmission.trim(),
      });
      toast.success(res.data.message);
      setnewCarTransmission("");
      fetchAllCarTransmissions();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to add car transmission"
      );
    }
  };

  // Update car transmission
  const updateCarTransmissions = async () => {
    if (!editCarTransmission?.carTransmission.trim()) {
      toast.error("Please enter a car transmission");
      return;
    }
    try {
      const res = await apiService.updateCarTransmission(
        editCarTransmission?._id,
        {
          carTransmission: editCarTransmission?.carTransmission.trim(),
          status: editCarTransmission.status,
        }
      );
      toast.success(res.data.message);
      setEditCarTransmission(null);
      fetchAllCarTransmissions(currentPage, search);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to update car transmission"
      );
    }
  };

  // Delete car transmission
  const handleDeleteCarTransmission = async () => {
    if (!deleteCarTransmission) return;
    try {
      const res = await apiService.deleteCarTransmission(
        deleteCarTransmission._id
      );
      toast.success(res.data.message);
      setDeleteCarTransmission(null);
      fetchAllCarTransmissions(currentPage, search);
      document.getElementById("delete_transmission_close")?.click();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to delete car transmission"
      );
    }
  };

  // Pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // ✅ good
  };

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Transmissions</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Transmissions
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#add_transmission"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Transmission
                </a>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
          {/* /Table Header */}
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
                  <th>TRANSMISSION</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
 {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      Loading...
                    </td>
                  </tr>
                ) : carTransmission.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Car Transmission found
                    </td>
                  </tr>
                ) : (
                carTransmission.map((transmission) => (
                  <tr key={transmission._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <h6 className="fw-medium">
                        <a>{transmission?.carTransmission}</a>
                      </h6>
                    </td>
                    <td>
                      <span
                        className={`badge  ${
                          transmission?.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {transmission?.status ? "Active" : "Inactive"}
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
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_transmission"
                              onClick={() =>
                                setEditCarTransmission(transmission)
                              }
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_transmission"
                              onClick={() =>
                                setDeleteCarTransmission(transmission)
                              }
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
              ))
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-3">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Prev
                </button>
              </li>

              {[...Array(totalPages)].map((_, idx) => (
                <li
                  key={idx}
                  className={`page-item ${
                    currentPage === idx + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
          {/* Custom Data Table */}
          <div className="table-footer" />
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add Car Transmission */}
      <div className="modal fade" id="add_transmission">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Transmission</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  Transmission <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newCarTransmission}
                  placeholder="Enter Transmission"
                  onChange={(e) => setnewCarTransmission(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3 "
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={addCarTransmission}
                  type="button"
                  className="btn btn-primary"
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Car Transmission */}
      {/* Edit Car Transmission */}
      <div className="modal fade" id="edit_transmission">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Transmission</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  Transmission <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editCarTransmission?.carTransmission}
                  onChange={(e) =>
                    setEditCarTransmission({
                      ...editCarTransmission,
                      carTransmission: e.target.value,
                    })
                  }
                  placeholder="Enter Transmission"
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="form-check form-check-md form-switch me-2">
                  <label className="form-check-label form-label mt-0 mb-0">
                    <input
                      className="form-check-input form-label me-2"
                      type="checkbox"
                      role="switch"
                      checked={editCarTransmission?.status}
                      onChange={(e) =>
                        setEditCarTransmission({
                          ...editCarTransmission,
                          status: e.target.checked,
                        })
                      }
                    />
                    Status
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={updateCarTransmissions}
                    className="btn btn-primary"
                    disabled={!editCarTransmission}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Car Transmission */}
      {/* Delete Car Transmission */}
      <div className="modal fade" id="delete_transmission">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Transmission</h4>
              <p className="mb-3">
                Are you sure you want to delete transmission?
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  id="delete_transmission_close"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDeleteCarTransmission}
                >
                  Yes, Delete
                </button>
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
      {/* /Delete Car Transmission */}
    </div>
  );
};

export default AdminCarTransmissions;

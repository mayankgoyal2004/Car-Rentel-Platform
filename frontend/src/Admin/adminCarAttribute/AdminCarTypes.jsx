import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const AdminCarTypes = () => {
  const [carType, setCarTypes] = useState([]);
  const [newCarType, setnewCarType] = useState("");
  const [editCarType, setEditCarType] = useState(null);
  const [deleteCarType, setDeleteCarType] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllCarTypes = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarTypes({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setCarTypes(res.data.data);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch car types");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCarTypes(currentPage, search);
  }, [currentPage, search]);

  const addCarTypeFunc = async () => {
    if (!newCarType.trim()) {
      toast.error("Please enter a car type");
      return;
    }
    try {
      const res = await apiService.addCarType({
        carType: newCarType.trim(),
      });
      toast.success(res.data.message);
      setnewCarType("");
      document.getElementById("add_type_close")?.click();

      fetchAllCarTypes();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add car type");
    }
  };

  // Update car type
  const updateCarTypes = async () => {
    if (!editCarType?.carType.trim()) {
      toast.error("Please enter a car type");
      return;
    }
    try {
      const res = await apiService.updateCarType(editCarType?._id, {
        carType: editCarType?.carType.trim(),
        status: editCarType.status,
      });
      toast.success(res.data.message);
      document.getElementById("edit_type_close")?.click();

      setEditCarType(null);
      fetchAllCarTypes(currentPage, search);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update car type");
    }
  };

  // Delete car type
  const handleDeleteCarType = async () => {
    if (!deleteCarType) return;
    try {
      const res = await apiService.deleteCarType(deleteCarType._id);
      toast.success(res.data.message);
      setDeleteCarType(null);
      fetchAllCarTypes(currentPage, search);
      document.getElementById("delete_type_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete car type");
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
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Types</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Types
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#add_type"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Type
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
                  <th>TYPE</th>
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
                ) : carType.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No car Type found
                    </td>
                  </tr>
                ) : (
                  carType.map((type) => (
                    <tr key={type._id}>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <h6 className="fw-medium">
                          <a>{type?.carType}</a>
                        </h6>
                      </td>
                      <td>
                        <span
                          className={`badge badge-md   ${
                            type?.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {type?.status ? "Active" : "Inactive"}
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
                                data-bs-target="#edit_type"
                                onClick={() => setEditCarType(type)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_type"
                                onClick={() => setDeleteCarType(type)}
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
      <div>
        {/* Add Type */}
        <div className="modal fade" id="add_type">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Create Type</h5>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="add_type_close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Type <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newCarType}
                    placeholder="Enter Type"
                    onChange={(e) => setnewCarType(e.target.value)}
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
                    onClick={addCarTypeFunc}
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
        {/* /Add Type */}
        {/* Edit Type */}
        <div className="modal fade" id="edit_type">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="mb-0">Edit Type</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="edit_type_close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Type <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editCarType?.carType}
                    onChange={(e) =>
                      setEditCarType({
                        ...editCarType,
                        carType: e.target.value,
                      })
                    }
                    placeholder="Enter Type"
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
                        checked={editCarType?.status}
                        onChange={(e) =>
                          setEditCarType({
                            ...editCarType,
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
                      onClick={updateCarTypes}
                      className="btn btn-primary"
                      disabled={!editCarType}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Type */}
        {/* Delete Type */}
        <div className="modal fade" id="delete_type">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-26" />
                </span>
                <h4 className="mb-1">Delete Type</h4>
                <p className="mb-3">Are you sure you want to delete type?</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    id="delete_type_close"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleDeleteCarType}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Type */}
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

export default AdminCarTypes;

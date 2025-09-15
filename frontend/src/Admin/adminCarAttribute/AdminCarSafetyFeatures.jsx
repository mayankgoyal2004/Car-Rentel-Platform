import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AdminCarSafetyFeatures = () => {
  const [safetyFeature, setSafetyFeatures] = useState([]);
  const [newsafetyFeature, setnewSafetyFeature] = useState("");
  const [editsafetyFeature, setEditSafetyFeature] = useState(null);
  const [deleteSafetyFeature, setDeleteSafetyFeature] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllSafetyFeatures = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllSafetyFeatures({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setSafetyFeatures(res.data.data);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch pricing");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllSafetyFeatures(currentPage, search);
  }, [currentPage, search]);

  const addSafetyFeature = async () => {
    if (!newsafetyFeature.trim()) {
      toast.error("Please enter a safety feature");
      return;
    }
    try {
      const res = await apiService.addSafetyFeatures({
        safetyFeature: newsafetyFeature.trim(),
      });
      toast.success(res.data.message);
      setnewSafetyFeature("");
      fetchAllSafetyFeatures();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add SafetyFeature");
    }
  };

  // Update pricing
  const updateSafetyFeatures = async () => {
    if (!editsafetyFeature?.safetyFeature.trim()) {
      toast.error("Please enter a safety feature");
      return;
    }
    try {
      const res = await apiService.updateSafetyFeature(editsafetyFeature?._id, {
        safetyFeature: editsafetyFeature?.safetyFeature.trim(),
        status: editsafetyFeature.status,
      });
      toast.success(res.data.message);
      setEditSafetyFeature(null);
      fetchAllSafetyFeatures(currentPage, search);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update pricing");
    }
  };

  // Delete pricing
  const handleDeleteSafetyFeature = async () => {
    if (!deleteSafetyFeature) return;
    try {
      const res = await apiService.deleteSafetyFeatures(
        deleteSafetyFeature._id
      );
      toast.success(res.data.message);
      setDeleteSafetyFeature(null);
      fetchAllSafetyFeatures(currentPage, search);
      document.getElementById("delete_pricing_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete pricing");
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
              <h2 className="mb-1">Safety Features</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Safety Features
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
              <div className="me-2 mb-2">
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
              <div className="mb-2">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#add_safety_feature"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Safety Feature
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
                  <th>SAFETY FEATURE</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {safetyFeature.map((safety) => (
                  <tr key={safety._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <h6 className="fw-medium">
                        <a>{safety.safetyFeature}</a>
                      </h6>
                    </td>
                    <td>
                      <span
                        className={`badge  ${
                          safety.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {safety.status ? "Active" : "Inactive"}
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
                              data-bs-target="#edit_safety_feature"
                              onClick={() => setEditSafetyFeature(safety)}
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_safety_feature"
                              onClick={() => setDeleteSafetyFeature(safety)}
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
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
      {/* Add Safety Feature */}
      <div className="modal fade" id="add_safety_feature">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Safety Feature</h5>
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
                  Safety Feature <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newsafetyFeature}
                  placeholder="Enter Safety Feature"
                  onChange={(e) => setnewSafetyFeature(e.target.value)}
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
                  onClick={addSafetyFeature}
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
      {/* /Add Safety Feature */}
      {/* Edit Safety Feature */}
      <div className="modal fade" id="edit_safety_feature">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Safety Feature</h4>
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
                  Safety Feature <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editsafetyFeature?.safetyFeature}
                  onChange={(e) =>
                    setEditSafetyFeature({
                      ...editsafetyFeature,
                      safetyFeature: e.target.value,
                    })
                  }
                  placeholder="Enter Safety Feature"
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
                      checked={editsafetyFeature?.status}
                      onChange={(e) =>
                        setEditSafetyFeature({
                          ...editsafetyFeature,
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
                    onClick={updateSafetyFeatures}
                    className="btn btn-primary"
                    disabled={!editsafetyFeature}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Safety Feature */}
      {/* Delete Safety Feature */}
      <div className="modal fade" id="delete_safety_feature">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Safety Feature</h4>
              <p className="mb-3">
                Are you sure you want to delete safety feature?
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDeleteSafetyFeature}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Safety Feature */}
    </div>
  );
};

export default AdminCarSafetyFeatures;

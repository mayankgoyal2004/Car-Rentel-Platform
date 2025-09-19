import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AdminCarColor = () => {
  const [carColor, setCarColor] = useState([]);
  const [newCarColor, setnewCarColor] = useState("");
  const [editCarColor, setEditCarColor] = useState(null);
  const [deleteCarColor, setDeleteCarColor] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllCarColor = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarColor({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setCarColor(res.data.data);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch car colors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCarColor(currentPage, search);
  }, [currentPage, search]);

  const addCarColor = async () => {
    if (!newCarColor.trim()) {
      toast.error("Please enter a car color");
      return;
    }
    try {
      const res = await apiService.addCarColor({
        carColor: newCarColor.trim(),
      });
      toast.success(res.data.message);
      setnewCarColor("");
      fetchAllCarColor();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add car color");
    }
  };

  // Update car color
  const updateCarColor = async () => {
    if (!editCarColor?.carColor.trim()) {
      toast.error("Please enter a car color");
      return;
    }
    try {
      const res = await apiService.updateCarColor(editCarColor?._id, {
        carColor: editCarColor?.carColor.trim(),
        status: editCarColor.status,
      });
      toast.success(res.data.message);
      setEditCarColor(null);
      fetchAllCarColor(currentPage, search);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update car color");
    }
  };

  // Delete car color
  const handleDeleteCarColor = async () => {
    if (!deleteCarColor) return;
    try {
      const res = await apiService.deleteCarColor(deleteCarColor._id);
      toast.success(res.data.message);
      setDeleteCarColor(null);
      fetchAllCarColor(currentPage, search);
      document.getElementById("delete_color_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete car color");
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
              <h2 className="mb-1">Color</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Color
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
                  data-bs-target="#add_color"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Color
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
                  <th>COLOR</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {carColor.map((color) => (
                  <tr key={color._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-inline-flex gap-2 align-items-center">
                        <div
                        
                       
                        />
                        <h6 className="fw-medium">
                          <a>{color.carColor}</a>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`badge  ${
                          color.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {color.status ? "Active" : "Inactive"}
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
                              data-bs-target="#edit_color"
                              onClick={() => setEditCarColor(color)}
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_color"
                              onClick={() => setDeleteCarColor(color)}
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
      {/* Add Color */}
      <div className="modal fade" id="add_color">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Color</h5>
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
                  Color <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newCarColor}
                  placeholder="Enter Color"
                  onChange={(e) => setnewCarColor(e.target.value)}
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
                  onClick={addCarColor}
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
      {/* /Add Color */}
      {/* Edit Color */}
      <div className="modal fade" id="edit_color">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Color</h4>
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
                  Color <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editCarColor?.carColor}
                  onChange={(e) =>
                    setEditCarColor({
                      ...editCarColor,
                      carColor: e.target.value,
                    })
                  }
                  placeholder="Enter Color"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Color Value <span className="text-danger">*</span>
                </label>
                <div className="colorbox-container">
                  <input
                    type="color"
                    className="colorbox"
                    value={editCarColor?.colorValue}
                    onChange={(e) =>
                      setEditCarColor({
                        ...editCarColor,
                        colorValue: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="form-control colorhex"
                    value={editCarColor?.colorValue}
                    onChange={(e) =>
                      setEditCarColor({
                        ...editCarColor,
                        colorValue: e.target.value,
                      })
                    }
                  />
                </div>
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
                      checked={editCarColor?.status}
                      onChange={(e) =>
                        setEditCarColor({
                          ...editCarColor,
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
                    onClick={updateCarColor}
                    className="btn btn-primary"
                    disabled={!editCarColor}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Color */}
      {/* Delete Color */}
      <div className="modal fade" id="delete_color">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Color</h4>
              <p className="mb-3">Are you sure you want to delete color?</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  id="delete_color_close"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDeleteCarColor}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Color */}
    </div>
  );
};

export default AdminCarColor;

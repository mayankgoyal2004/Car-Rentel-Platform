import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminCarModels = () => {
  const [models, setModels] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);
  const [newModelName, setNewModelName] = useState("");
  const [newBrandId, setNewBrandId] = useState("");
  const [editModel, setEditModel] = useState(null);
  const [editBrandId, setEditBrandId] = useState("");
  const [deleteModel, setDeleteModel] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllActiveBrands = async () => {
    try {
      const res = await apiService.getAllActiveCarBrands();
      if (res.data.success) {
        setActiveBrands(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch Model");
    }
  };

  const fetchAllCarModels = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarModel({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        const modelsWithBrandName = res.data.data.map((model) => ({
          ...model,
          brandName:
            activeBrands.find((brand) => brand._id === model.carBrand)
              ?.brandName || "Unknown",
        }));
        setModels(modelsWithBrandName);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch car models");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllActiveBrands();
  }, []);

  useEffect(() => {
    fetchAllCarModels(currentPage, search);
  }, [currentPage, search, activeBrands]);

  const addCarModel = async () => {
    if (!newModelName.trim() || !newBrandId) {
      toast.error("Please enter model name and select a brand");
      return;
    }
    try {
      const res = await apiService.addCarModel({
        carModel: newModelName.trim(),
        carBrand_id: newBrandId,
      });
      toast.success(res.data.message);
      setNewModelName("");
      setNewBrandId("");
      fetchAllCarModels();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add car model");
    }
  };

  // Update car model
  const updateCarModel = async () => {
    if (!editModel?.carModel.trim() || !editBrandId) {
      toast.error("Please enter model name and select a brand");
      return;
    }
    try {
      const res = await apiService.updateCarModel(editModel._id, {
        carModel: editModel.carModel.trim(),
        carBrand_id: editBrandId,
        status: editModel.status,
      });
      toast.success(res.data.message);
      setEditModel(null);
      setEditBrandId("");
      fetchAllCarModels(currentPage, search);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update car model");
    }
  };

  // Delete car model
  const handleDeleteCarModel = async () => {
    if (!deleteModel) return;
    try {
      const res = await apiService.deleteCarModel(deleteModel._id);
      toast.success(res.data.message);
      setDeleteModel(null);
      fetchAllCarModels(currentPage, search);
      document.getElementById("delete_model_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete car model");
    }
  };

  // Pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Models</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Models
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#add_model"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Model
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
                  <th>MODEL</th>
                  <th>BRAND</th>

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
                ) : models.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No model found
                    </td>
                  </tr>
                ) : (
                  models?.map((model) => (
                    <tr key={model?._id}>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <h6 className="fw-medium">
                          <a>{model?.carModel}</a>
                        </h6>
                      </td>
                      <td>{model?.brandName}</td>

                      <td>
                        <span
                          className={`badge badge-md   ${
                            model?.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {model?.status ? "Active" : "Inactive"}
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
                                data-bs-target="#edit_model"
                                onClick={() => {
                                  setEditModel(model);
                                  setEditBrandId(model.carBrand);
                                }}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_model"
                                onClick={() => setDeleteModel(model)}
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
        {/* Add Model */}
        <div className="modal fade" id="add_model">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Create Model</h5>
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
                    Model <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newModelName}
                    placeholder="Enter Model"
                    onChange={(e) => setNewModelName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Brand <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    value={newBrandId}
                    onChange={(e) => setNewBrandId(e.target.value)}
                  >
                    <option value="">Select Brand</option>
                    {activeBrands.map((brand) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.brandName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addCarModel}
                    type="button"
                    className="btn btn-primary"
                    disabled={!newModelName.trim() || !newBrandId}
                  >
                    Create New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Model */}
        {/* Edit Model */}
        <div className="modal fade" id="edit_model">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="mb-0">Edit Model</h4>
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
                    Model <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editModel?.carModel || ""}
                    onChange={(e) =>
                      setEditModel({ ...editModel, carModel: e.target.value })
                    }
                    placeholder="Enter Model"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Brand <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    value={editBrandId}
                    onChange={(e) => setEditBrandId(e.target.value)}
                  >
                    <option value="">Select Brand</option>
                    {activeBrands.map((brand) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.brandName}
                      </option>
                    ))}
                  </select>
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
                        checked={editModel?.status || false}
                        onChange={(e) =>
                          setEditModel({
                            ...editModel,
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
                      onClick={updateCarModel}
                      className="btn btn-primary"
                      disabled={!editModel?.carModel.trim() || !editBrandId}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Model */}
        {/* Delete Model */}
        <div className="modal fade" id="delete_model">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-26" />
                </span>
                <h4 className="mb-1">Delete Model</h4>
                <p className="mb-3">Are you sure you want to delete model?</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    id="delete_model_close"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleDeleteCarModel}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Model */}
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

export default AdminCarModels;

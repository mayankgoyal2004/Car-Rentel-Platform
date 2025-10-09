import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { CSVLink } from "react-csv";

const AdminCarExtraFeatures = () => {
  const [extraFeatures, setExtraFeatures] = useState([]);
  const [newExtraFeatures, setNewExtraFeatures] = useState({
    name: "",
    quantity: "",
    price: "",
    type: "",
    description: "",
  });
  const [editExtraFeatures, setEditExtraFeatures] = useState(null);
  const [deleteextraFeatures, setDeleteExtraFeatures] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const fetchExtraFeatures = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllExtraServices({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setExtraFeatures(res.data.data);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add Extra Service");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExtraFeatures(currentPage, search);
  }, [currentPage, search]);
  const addExtraFeatures = async () => {
    try {
      const res = await apiService.addExtraService(newExtraFeatures);
      toast.success(res.data.message);
      setNewExtraFeatures({
        name: "",
        quantity: "",
        price: "",
        type: "",
        description: "",
      });
      if (res.data.success) {
        document.getElementById("add_service_close")?.click();
        fetchExtraFeatures(currentPage, search);
      }
      fetchExtraFeatures();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add Extra Service");
    }
  };

  const updateExtraFeatures = async () => {
    if (!editExtraFeatures) return;
    const { name, quantity, price, type, description, status } =
      editExtraFeatures;
    if (!name || !quantity || !price || !type || !description) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await apiService.updateExtraService(editExtraFeatures?._id, {
        name,
        quantity,
        price,
        type,
        description,
        status,
      });
      toast.success(res.data.message);
      setEditExtraFeatures(null);
      fetchExtraFeatures(currentPage, search);
      document.getElementById("edit_service_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add Extra Service");
    }
  };

  // Delete pricing
  const handleDeleteExtraFeatures = async () => {
    if (!deleteextraFeatures) return;
    try {
      const res = await apiService.deleteExtraService(deleteextraFeatures._id);
      toast.success(res.data.message);
      setDeleteExtraFeatures(null);
      fetchExtraFeatures(currentPage, search);
      document.getElementById("delete_pricing_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add Extra Service");
    }
  };

  const extraFeaturesCsvHeaders = [
    { label: "Name", key: "name" },
    { label: "Quantity", key: "quantity" },
    { label: "Price", key: "price" },
    { label: "Type", key: "type" },
    { label: "Description", key: "description" },
    { label: "Status", key: "status" },
  ];

  const extraFeaturesCsvData = extraFeatures.map((e) => ({
    name: e.name || "",
    quantity: e.quantity || "",
    price: e.price || "",
    type: e.type || "",
    description: e.description || "",
    status: e.status ? "Active" : "Inactive",
  }));

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
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Extra Services</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Extra Services
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <CSVLink
                  data={extraFeaturesCsvData}
                  headers={extraFeaturesCsvHeaders}
                  filename={`extra_services_${new Date().toLocaleDateString()}.csv`}
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export CSV
                </CSVLink>
              </div>

              <div className="mb-2">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#add_extra_service"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Extra Service
                </button>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div className="top-search me-2">
                <div className="top-search-group">
                  <span className="input-icon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Table Header */}

          {/* Custom Data Table */}
          <div className="custom-datatable-filter table-responsive table-overflow-hidden">
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
                  <th>NAME</th>
                  <th>PRICE</th>
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
                ) : extraFeatures.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Extra Service found
                    </td>
                  </tr>
                ) : (
                  extraFeatures.map((e) => (
                    <tr key={e._id}>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <h6 className="fw-medium">
                          <a>{e.name}</a>
                        </h6>
                      </td>
                      <td>${e.price}</td>
                      <td>{e.type}</td>

                      <td>
                        <span
                          className={`badge badge-md ${
                            e.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {e.status ? "Active" : "Inactive"}
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
                              <a
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_extra_services"
                                onClick={() => setEditExtraFeatures(e)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_extra_services"
                                onClick={() => setDeleteExtraFeatures(e)}
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
                )}{" "}
              </tbody>
            </table>
          </div>
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
      {/* Add Extra Service */}
      <div className="modal fade" id="add_extra_service">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Extra Service</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_service_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newExtraFeatures.name}
                  onChange={(e) =>
                    setNewExtraFeatures({
                      ...newExtraFeatures,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3 row">
                <div className="col-lg-6">
                  <label className="form-label">
                    Quantity <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={newExtraFeatures.quantity}
                    onChange={(e) =>
                      setNewExtraFeatures({
                        ...newExtraFeatures,
                        quantity: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-lg-6">
                  <label className="form-label">
                    Price <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={newExtraFeatures.price}
                    onChange={(e) =>
                      setNewExtraFeatures({
                        ...newExtraFeatures,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Type <span className="text-danger">*</span>
                </label>
                <select
                  className="select form-control"
                  value={newExtraFeatures.type}
                  onChange={(e) =>
                    setNewExtraFeatures({
                      ...newExtraFeatures,
                      type: e.target.value,
                    })
                  }
                >
                  <option>Select</option>
                  <option value="one-time">One Time</option>
                  <option value="per-day">Per Day</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  value={newExtraFeatures.description}
                  onChange={(e) =>
                    setNewExtraFeatures({
                      ...newExtraFeatures,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addExtraFeatures}
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Extra Service */}
      {/* Edit Extra Service */}
      <div className="modal fade" id="edit_extra_services">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Service</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="edit_service_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Camping Equipment"
                  value={editExtraFeatures?.name}
                  onChange={(e) =>
                    setEditExtraFeatures({
                      ...editExtraFeatures,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3 row">
                <div className="col-lg-6">
                  <label className="form-label">
                    Quantity <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editExtraFeatures?.quantity}
                    onChange={(e) =>
                      setEditExtraFeatures({
                        ...editExtraFeatures,
                        quantity: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-lg-6">
                  <label className="form-label">
                    Price <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editExtraFeatures?.price}
                    onChange={(e) =>
                      setEditExtraFeatures({
                        ...editExtraFeatures,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Type <span className="text-danger">*</span>
                </label>
                <select
                  className="select form-control"
                  value={editExtraFeatures?.type}
                  onChange={(e) =>
                    setEditExtraFeatures({
                      ...editExtraFeatures,
                      type: e.target.value,
                    })
                  }
                >
                  <option value="one-time">One Time</option>
                  <option value="per-day">Per Day</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  value={editExtraFeatures?.description}
                  onChange={(e) =>
                    setEditExtraFeatures({
                      ...editExtraFeatures,
                      description: e.target.value,
                    })
                  }
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
                      checked={editExtraFeatures?.status}
                      onChange={(e) =>
                        setEditExtraFeatures({
                          ...editExtraFeatures,
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
                    className="btn btn-primary"
                    onClick={updateExtraFeatures}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Extra Service */}
      {/* Delete Extra Service */}
      <div className="modal fade" id="delete_extra_services">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Extra Service</h4>
              <p className="mb-3">
                Are you sure you want to delete extra service?
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleDeleteExtraFeatures}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Extra Service */}
      {/* Cars List */}
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
      {/* /Cars List */}
    </div>
  );
};

export default AdminCarExtraFeatures;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { toast } from "react-toastify";

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
      toast.error(err.response?.data?.message || "Failed to fetch pricing");
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
      fetchExtraFeatures();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add pricing");
    }
  };

  // Update pricing
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
      document.getElementById("edit_pricing_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update pricing");
    }
  };

  // Delete pricing
  const handleDeleteExtraFeatures = async () => {
    if (!deleteextraFeatures) return;
    try {
      const res = await apiService.deleteSeasionalPricing(
        deleteextraFeatures._id
      );
      toast.success(res.data.message);
      setDeleteExtraFeatures(null);
      fetchExtraFeatures(currentPage, search);
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
              <div className="mb-2 me-2">
                <button className="btn btn-white d-flex align-items-center">
                  <i className="ti ti-printer me-2" />
                  Print
                </button>
              </div>
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <button className="btn btn-dark d-inline-flex align-items-center">
                    <i className="ti ti-upload me-1" />
                    Export
                  </button>
                </div>
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
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>TYPE</th>
                  <th>NO OF CARS</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {extraFeatures.map((e) => (
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
                    <td>{e.price}</td>
                    <td>{e.type}</td>
                    <td>
                      <div className="d-inline-flex gap-2 align-items-center">
                        12
                        <a
                          className="btn btn-xs btn-info-light border-info fs-14 py-0 px-1"
                          data-bs-toggle="modal"
                          data-bs-target="#cars_list"
                        >
                          <i className="ti ti-external-link" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`badge badge-md ${
                          e.status ? "badge-soft-success" : "badge-soft-danger"
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
                ))}
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
                    type="text"
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
                    type="text"
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
                  className="select"
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
                  className="select"
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
      <div className="modal fade" id="cars_list">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Cars</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex gap-3">
                <div className="w-100">
                  <div className="top-search">
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
                <div>
                  <div className="dropdown">
                    <a
                      href="#filtercollapsepopup"
                      className="filtercollapse coloumn d-inline-flex align-items-center"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="filtercollapsepopup"
                    >
                      <i className="ti ti-filter me-1" /> Filter{" "}
                      <span className="badge badge-xs rounded-pill bg-danger ms-2">
                        0
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="collapse mt-3" id="filtercollapsepopup">
                <div className="filterbox mb-3 d-flex align-items-center">
                  <h6 className="me-3">Filters</h6>
                  <div className="dropdown me-2">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Select Brand
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Ford
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Ferrari
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Toyota
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          KIA
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Chevrolet
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-2">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Select Type
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Sedan
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Coupe
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Mini Van
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Crossover
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Sports
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-2">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Select Model
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Ford Mustang
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Ford Endeavour
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-3">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Select Color
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Black
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          Red
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item rounded-1"
                        >
                          White
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="javascript:void(0);"
                    className="me-2 text-purple links"
                  >
                    Apply
                  </a>
                  <button
                    href="javascript:void(0);"
                    className="text-danger links"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-01.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Ford Endeavour</h6>
                          <p className="mb-0 fs-13">Sedan</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-02.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Ferrari 458 MM</h6>
                          <p className="mb-0 fs-13">Convertible</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-03.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Ford Mustang </h6>
                          <p className="mb-0 fs-13">Coupe</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-04.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Toyota Tacoma 4</h6>
                          <p className="mb-0 fs-13">Hatchback</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-05.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Chevrolet Pick Truck</h6>
                          <p className="mb-0 fs-13">Mini Van</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-06.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Etios Carmen</h6>
                          <p className="mb-0 fs-13">Hatchback</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-07.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Acura Sport Version</h6>
                          <p className="mb-0 fs-13">Crossover</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-08.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Kia Soul 2016</h6>
                          <p className="mb-0 fs-13">SUV</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-09.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Chevrolet Camaro</h6>
                          <p className="mb-0 fs-13">Sport</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="avatar me-2 flex-shrink-0">
                          <img
                            src="/admin-assets/img/car/car-10.jpg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Toyota Camry SE 350</h6>
                          <p className="mb-0 fs-13">Sedan</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Cars List */}
    </div>
  );
};

export default AdminCarExtraFeatures;

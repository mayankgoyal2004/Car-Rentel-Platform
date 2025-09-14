import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../../Apiservice/apiService";

const AdminCarPricing = () => {
  const [pricing, setPricing] = useState([]);
  const [newPricing, setNewPricing] = useState({
    seasonName: "",
    startDate: "",
    endDate: "",
    dailyRate: "",
    weeklyRate: "",
    monthlyRate: "",
    lateFees: "",
  });
  const [editPricing, setEditPricing] = useState(null);
  const [deletePricing, setDeletePricing] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPricing = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllSeasionalPricing({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setPricing(res.data.data);
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
    fetchPricing(currentPage, search);
  }, [currentPage, search]);
  const addPricing = async () => {
    try {
      const res = await apiService.addSeasionalPricing(newPricing);
      toast.success(res.data.message);
      setNewPricing({
        seasonName: "",
        startDate: "",
        endDate: "",
        dailyRate: "",
        weeklyRate: "",
        monthlyRate: "",
        lateFees: "",
      });
      fetchPricing();
      document.getElementById("add_pricing_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add pricing");
    }
  };

  // Update pricing
  const updatePricing = async () => {
    if (!editPricing) return;
    const {
      seasonName,
      startDate,
      endDate,
      dailyRate,
      weeklyRate,
      monthlyRate,
      lateFees,
      status,
    } = editPricing;
    if (
      !seasonName ||
      !startDate ||
      !endDate ||
      !dailyRate ||
      !weeklyRate ||
      !monthlyRate ||
      !lateFees
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await apiService.updateSeasionalPricing(editPricing?._id, {
        seasonName,
        startDate,
        endDate,
        dailyRate,
        weeklyRate,
        monthlyRate,
        lateFees,
        status,
      });
      toast.success(res.data.message);
      setEditPricing(null);
      fetchPricing(currentPage, search);
      document.getElementById("edit_pricing_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update pricing");
    }
  };

  // Delete pricing
  const handleDeletePricing = async () => {
    if (!deletePricing) return;
    try {
      const res = await apiService.deleteSeasionalPricing(deletePricing._id);
      toast.success(res.data.message);
      setDeletePricing(null);
      fetchPricing(currentPage, search);
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
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Seasonal Pricing</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Seasonal Pricing
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#add_pricing"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Pricing
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
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
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
                  <th>SEASON NAME</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>DAILY RATE</th>
                  <th>WEEKLY RATE</th>
                  <th>MONTHLY RATE</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {pricing.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <a className="fw-semibold" href="#">
                        {p.seasonName}
                      </a>
                    </td>
                    <td>
                      <p className="text-gray-9 mb-0">
                        {new Date(p.startDate).toLocaleDateString()}
                      </p>
                    </td>
                    <td>
                      <p className="text-gray-9 mb-0">
                        {new Date(p.endDate).toLocaleDateString()}
                      </p>
                    </td>
                    <td>
                      <p className="text-gray-9 mb-0">${p.dailyRate}</p>
                    </td>
                    <td>
                      <p className="text-gray-9 mb-0">${p.weeklyRate}</p>
                    </td>
                    <td>
                      <p className="text-gray-9 mb-0">${p.monthlyRate}</p>
                    </td>
                    <td>
                      <span
                        className={`badge badge-md ${
                          p.status ? "badge-soft-success" : "badge-soft-danger"
                        }`}
                      >
                        {p.status ? "Active" : "Inactive"}
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
                              data-bs-target="#edit_pricing"
                              onClick={() => setEditPricing(p)}
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </button>
                          </li>
                          <li>
                            <a
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_pricing"
                              onClick={() => setDeletePricing(p)}
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
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Create Seasonal Pricing */}
      <div className="modal fade" id="add_pricing">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-0">Create Seasonal Pricing</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form action="Car-Pricing">
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Season Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Season Name"
                        className="form-control mb-2"
                        value={newPricing.seasonName}
                        onChange={(e) =>
                          setNewPricing({
                            ...newPricing,
                            seasonName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <input
                          type="date"
                          placeholder="Start Date"
                          className="form-control mb-2"
                          value={newPricing.startDate}
                          onChange={(e) =>
                            setNewPricing({
                              ...newPricing,
                              startDate: e.target.value,
                            })
                          }
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        End Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <input
                          type="date"
                          placeholder="End Date"
                          className="form-control mb-2"
                          value={newPricing.endDate}
                          onChange={(e) =>
                            setNewPricing({
                              ...newPricing,
                              endDate: e.target.value,
                            })
                          }
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Daily Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Daily Rate"
                        className="form-control mb-2"
                        value={newPricing.dailyRate}
                        onChange={(e) =>
                          setNewPricing({
                            ...newPricing,
                            dailyRate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Weekly Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Weekly Rate"
                        className="form-control mb-2"
                        value={newPricing.weeklyRate}
                        onChange={(e) =>
                          setNewPricing({
                            ...newPricing,
                            weeklyRate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Monthly Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Monthly Rate"
                        className="form-control mb-2"
                        value={newPricing.monthlyRate}
                        onChange={(e) =>
                          setNewPricing({
                            ...newPricing,
                            monthlyRate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Late Fees <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Late Fees"
                        className="form-control mb-2"
                        value={newPricing.lateFees}
                        onChange={(e) =>
                          setNewPricing({
                            ...newPricing,
                            lateFees: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addPricing}
                  >
                    Create New
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Create Seasonal Pricing */}
      {/* Edit Seasonal Pricing */}
      <div className="modal fade" id="edit_pricing">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-0">Edit Seasonal Pricing</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form action="Car-Pricing">
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Season Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={editPricing?.seasonName}
                        onChange={(e) =>
                          setEditPricing({
                            ...editPricing,
                            seasonName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <input
                          type="date"
                          className="form-control mb-2"
                          value={editPricing?.startDate?.slice(0, 10)}
                          onChange={(e) =>
                            setEditPricing({
                              ...editPricing,
                              startDate: e.target.value,
                            })
                          }
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        End Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <input
                          type="date"
                          className="form-control mb-2"
                          value={editPricing?.endDate?.slice(0, 10)}
                          onChange={(e) =>
                            setEditPricing({
                              ...editPricing,
                              endDate: e.target.value,
                            })
                          }
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Daily Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control mb-2"
                        value={editPricing?.dailyRate}
                        onChange={(e) =>
                          setEditPricing({
                            ...editPricing,
                            dailyRate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Weekly Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control mb-2"
                        value={editPricing?.weeklyRate}
                        onChange={(e) =>
                          setEditPricing({
                            ...editPricing,
                            weeklyRate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Monthly Rate <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control mb-2"
                        value={editPricing?.monthlyRate}
                        onChange={(e) =>
                          setEditPricing({
                            ...editPricing,
                            monthlyRate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Late Fees <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control mb-2"
                        value={editPricing?.lateFees}
                        onChange={(e) =>
                          setEditPricing({
                            ...editPricing,
                            lateFees: e.target.value,
                          })
                        }
                      />
                    </div>
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
                        checked={editPricing?.status}
                        onChange={(e) =>
                          setEditPricing({
                            ...editPricing,
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
                      className="btn btn-primary"
                      onClick={updatePricing}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Seasonal Pricing */}
      {/* Delete Pricing */}
      <div className="modal fade" id="delete_pricing">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Seasonal Pricing</h4>
              <p className="mb-3">
                Are you sure you want to delete Seasonal Pricing?
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleDeletePricing}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Pricing */}
    </div>
  );
};

export default AdminCarPricing;

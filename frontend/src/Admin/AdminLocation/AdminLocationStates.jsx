import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminLocationStates = () => {
  const [states, setStates] = useState([]);
  const [newState, setNewState] = useState({ stateName: "", country: {} });
  const [editState, setEditState] = useState(null);
  const [deleteState, setDeleteState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [countries, setCountries] = useState([]);

  const fetchAllState = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllState({
        search: searchQuery,
        page,
      });
      setStates(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch states");
    } finally {
      setLoading(false);
    }
  };

  const getAllActiveCountry = async () => {
    try {
      const res = await apiService.getAllActiveCountry();
      if (res.data.success) setCountries(res.data.data || []);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch countries");
    }
  };

  useEffect(() => {
    fetchAllState(search, currentPage);
  }, [currentPage, search]);
  useEffect(() => {
    getAllActiveCountry();
  }, []);

  const addState = async () => {
    if (!newState.stateName.trim() || !newState.country._id) {
      toast.error("Both state name and country are required");
      return;
    }

    try {
      const res = await apiService.addState({
        stateName: newState.stateName.trim(),
        country: newState.country._id,
      });
      toast.success(res.data.message);
      setNewState({ stateName: "", country: {} });
      fetchAllState();
      document.getElementById("add_state_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };
  const updateState = async () => {
    if (!editState?.stateName.trim() || !editState.country?._id) {
      toast.error("Both state name and country are required");
      return;
    }

    try {
      const res = await apiService.updateState(editState?._id, {
        stateName: editState?.stateName.trim(),
        country: editState?.country._id,
        status: editState?.status,
      });
      toast.success(res.data.message);
      setEditState(null);
      fetchAllState(search, currentPage);
      document.getElementById("edit_state_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Delete state
  const handleDeleteState = async () => {
    if (!deleteState) return;
    try {
      const res = await apiService.deleteState(deleteState._id);
      toast.success(res.data.message);
      setDeleteState(null);
      fetchAllState(search, currentPage);
      document.getElementById("delete_state_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Search input
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
              <h2 className="mb-1">States</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Locations
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2 me-2">
                <button
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_state"
                >
                  <i className="ti ti-plus me-2" />
                  Add State
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
          <div className="custom-datatable-filter table-responsive brandstable country-table">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>STATE NAME</th>
                  <th>COUNTRY NAME</th>

                  <th>CREATED DATE </th>
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
                ) : states.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No State found
                    </td>
                  </tr>
                ) : (
                  states.map((s) => (
                    <tr key={s._id}>
                      <td>
                        <p className="text-gray-9">{s.stateName}</p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center flag-image">
                          <p className="text-gray-9">
                            {s.country?.countryName}
                          </p>
                        </div>
                      </td>
                      <td>
                        <span className="text-gray-9">
                          {" "}
                          {new Date(s.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-md ${
                            s.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {s.status ? "Active" : "Inactive"}
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
                                data-bs-target="#edit_state"
                                onClick={() => setEditState(s)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_state"
                                onClick={() => setDeleteState(s)}
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
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add state */}
      <div className="modal fade" id="add_state">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add State</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_state_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  State Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newState.stateName}
                  onChange={(e) =>
                    setNewState({ ...newState, stateName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  value={newState.country._id || ""}
                  onChange={(e) => {
                    const c = countries.find((c) => c._id === e.target.value);
                    setNewState({ ...newState, country: c || {} });
                  }}
                >
                  <option value="">Select</option>
                  {countries.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.countryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={addState}>
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add state */}
      {/* Edit state */}
      <div className="modal fade" id="edit_state">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit State</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="edit_state_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  State Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="California"
                  value={editState?.stateName || ""}
                  onChange={(e) =>
                    setEditState({ ...editState, stateName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  value={editState?.country?._id || ""}
                  onChange={(e) => {
                    const c = countries.find((c) => c._id === e.target.value);
                    setEditState({ ...editState, country: c || {} });
                  }}
                >
                  <option value="">Select</option>
                  {countries.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.countryName}
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
                      checked={editState?.status}
                      onChange={(e) =>
                        setEditState({
                          ...editState,
                          status: e.target.checked,
                        })
                      }
                      role="switch"
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
                  <button onClick={updateState} className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit state */}
      {/* Delete Modal  */}
      <div className="modal fade" id="delete_state">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete State</h4>
              <p className="mb-3">Are you sure you want to delete State?</p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button onClick={handleDeleteState} className="btn btn-primary">
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
      {/* /Delete Modal*/}
    </div>
  );
};

export default AdminLocationStates;

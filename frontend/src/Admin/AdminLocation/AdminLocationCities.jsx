import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminLocationCities = () => {
  const [cityes, setCityes] = useState([]);
  const [newcity, setnewCity] = useState({
    cityName: "",
    country: {},
    state: {},
  });
  const [edityCity, setEditCity] = useState(null);
  const [deleteCity, setDeleteCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const fetchAllCity = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllCity({
        search: searchQuery,
        page,
      });
      setCityes(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cities");
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
  const getAllActiveState = async () => {
    try {
      const res = await apiService.getAllActiveState();
      if (res.data.success) setStates(res.data.data || []);
    } catch (err) {
          toast.error(err.response?.data?.message || "Failed to fetch states");
    }
  };
  useEffect(() => {
    fetchAllCity(search, currentPage);
  }, [currentPage, search]);
  useEffect(() => {
    getAllActiveCountry();
    getAllActiveState();
  }, []);

  const addCity = async () => {
    if (
      !newcity.cityName.trim() ||
      !newcity.country._id ||
      !newcity.state._id
    ) {
      toast.error("Both Fields are required");
      return;
    }

    try {
      const res = await apiService.addCity({
        cityName: newcity.cityName.trim(),
        country: newcity.country._id,
        state: newcity.state._id,
      });
      toast.success(res.data.message);
      setnewCity({ cityName: "", country: {}, state: {} });
      fetchAllCity();
      document.getElementById("add_state_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };
  const updateCity = async () => {
    if (
      !edityCity?.cityName.trim() ||
      !edityCity.country?._id ||
      !edityCity.state?._id
    ) {
      toast.error("Both Fields are required");
      return;
    }

    try {
      const res = await apiService.updateCity(edityCity?._id, {
        cityName: edityCity?.cityName.trim(),
        country: edityCity?.country._id,
        state: edityCity?.state._id,
        status: edityCity?.status,
      });
      toast.success(res.data.message);
      setEditCity(null);
      fetchAllCity(search, currentPage);
      document.getElementById("edit_state_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Delete state
  const handleDeleteCity = async () => {
    if (!deleteCity) return;
    try {
      const res = await apiService.deleteCity(deleteCity._id);
      toast.success(res.data.message);
      setDeleteCity(null);
      fetchAllCity(search, currentPage);
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
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Cities</h2>
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
                  data-bs-target="#add_city"
                >
                  <i className="ti ti-plus me-2" />
                  Add City
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
                  <th>CITY NAME</th>
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
                ) : cityes.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No cities found
                    </td>
                  </tr>
                ) : (
                  cityes?.map((c) => (
                    <tr>
                      <td>
                        <p className="text-gray-9">{c?.cityName}</p>
                      </td>
                      <td>
                        <p className="text-gray-9">{c.state?.stateName}</p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center flag-image">
                          <p className="text-gray-9">{c.country?.countryName}</p>
                        </div>
                      </td>
                      <td>
                        <span className="text-gray-9">
                          {" "}
                          {new Date(c.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-md ${
                            c?.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {c?.status ? "Active" : "Inactive"}
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
                                data-bs-target="#edit_city"
                                onClick={() => setEditCity(c)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_city"
                                onClick={() => setDeleteCity(c)}
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
      {/* Add city */}
      <div className="modal fade" id="add_city">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add City</h5>
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
                  City Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newcity.cityName}
                  onChange={(e) =>
                    setnewCity({ ...newcity, cityName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  State Name <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  value={newcity.state._id || ""}
                  onChange={(e) => {
                    const c = states.find((c) => c._id === e.target.value);
                    setnewCity({ ...newcity, state: c || {} });
                  }}
                >
                  <option value="">Select</option>
                  {states.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.stateName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  value={newcity.country._id || ""}
                  onChange={(e) => {
                    const c = countries.find((c) => c._id === e.target.value);
                    setnewCity({ ...newcity, country: c || {} });
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
                <button className="btn btn-primary" onClick={addCity}>
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add city */}
      {/* Edit city */}
      <div className="modal fade" id="edit_city">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit City</h5>
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
                  City Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Los Angles"
                  value={edityCity?.cityName || ""}
                  onChange={(e) =>
                    setEditCity({ ...edityCity, cityName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  State Name <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  value={edityCity?.state?._id || ""}
                  onChange={(e) => {
                    const c = states.find((c) => c._id === e.target.value);
                    setEditCity({ ...edityCity, state: c || {} });
                  }}
                >
                  <option value="">Select</option>
                  {states.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.stateName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  value={edityCity?.country?._id || ""}
                  onChange={(e) => {
                    const c = countries.find((c) => c._id === e.target.value);
                    setEditCity({ ...edityCity, country: c || {} });
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
                      role="switch"
                      checked={edityCity?.status}
                      onChange={(e) =>
                        setEditCity({
                          ...edityCity,
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
                  <button onClick={updateCity} className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit city */}
      {/* Delete Modal  */}
      <div className="modal fade" id="delete_city">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete City</h4>
              <p className="mb-3">Are you sure you want to delete City?</p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button onClick={handleDeleteCity} className="btn btn-primary">
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

export default AdminLocationCities;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminLocationCountries = () => {
  const [countrys, setCountry] = useState([]);
  const [newCountry, setnewCountry] = useState("");
  const [editCountry, seteditCountry] = useState("");
  const [deleteCountry, setDeleteCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getAllCountry = async (searchQuery = "", page = 1) => {
    try {
      const res = await apiService.getAllCountry({
        search: searchQuery,
        page,
      });
      setCountry(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch countries");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCountry(search, currentPage);
  }, [currentPage, search]);
  const addCountry = async () => {
    if (!newCountry.countryName.trim()) return;

    try {
      // Axios call
      const res = await apiService.addCountry({
        countryName: newCountry.countryName.trim(),
        countryCode: newCountry.countryCode.trim(),
      });

      toast.success(res.data.message);
      document.getElementById("add_country_close")?.click();

      setnewCountry({ countryName: "", countryCode: "" });
      getAllCountry();
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  const updateCountry = async () => {
    if (!editCountry?.countryName.trim() || !editCountry?.countryCode.trim()) {
      toast.error("Both name and code are required");
      return;
    }
    try {
      const res = await apiService.updateCountry(editCountry?._id, {
        countryName: editCountry?.countryName.trim(),
        countryCode: editCountry?.countryCode.trim(),
        status: editCountry?.status,
      });
      toast.success(res.data.message);
      seteditCountry(null);
      getAllCountry(search, currentPage);
      document.getElementById("edit_country_close").click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };
  const handleDeleteCountry = async () => {
    if (!deleteCountry) return;
    try {
      const res = await apiService.deleteCountry(deleteCountry._id);
      toast.success(res.data.message);
      setDeleteCountry(null);
      document.getElementById("delete_country_close").click();
      getAllCountry(search, currentPage);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
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
              <h2 className="mb-1">Countries</h2>
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
                <a
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_countries"
                >
                  <i className="ti ti-plus me-2" />
                  Add Country
                </a>
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
          <div className="custom-datatable-filter table-responsive brandstable country-table table-overflow-hidden ">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Country Name</th>
                  <th>Country Code </th>
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
                ) : countrys.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No country found
                    </td>
                  </tr>
                ) : (
                  countrys.map((country) => (
                    <tr>
                      <td>
                        <div className="d-flex align-items-center flag-image">
                          <p className="text-gray-9">{country.countryName}</p>
                        </div>
                      </td>
                      <td>{country.countryCode}</td>
                      <td>
                        <span className="text-gray-9">
                          {" "}
                          {new Date(country.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-md ${
                            country.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {country.status ? "Active" : "Inactive"}
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
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_country"
                                onClick={() => seteditCountry(country)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_country"
                                onClick={() => setDeleteCountry(country)}
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
      {/* Add countries */}
      <div className="modal fade" id="add_countries">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add Country</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_country_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Country Name"
                  className="form-control mb-2"
                  value={newCountry.countryName}
                  onChange={(e) =>
                    setnewCountry({
                      ...newCountry,
                      countryName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Country Code"
                  className="form-control"
                  value={newCountry.countryCode}
                  onChange={(e) =>
                    setnewCountry({
                      ...newCountry,
                      countryCode: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  id="add_country_close"
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={addCountry}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add countries */}
      {/* Edit countries */}
      <div className="modal fade" id="edit_country">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Country</h4>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                id="edit_country_close"
              />
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editCountry?.countryName}
                  onChange={(e) =>
                    seteditCountry({
                      ...editCountry,
                      countryName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editCountry?.countryCode}
                  onChange={(e) =>
                    seteditCountry({
                      ...editCountry,
                      countryCode: e.target.value,
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
                      className="form-check-input"
                      type="checkbox"
                      checked={editCountry?.status}
                      onChange={(e) =>
                        seteditCountry({
                          ...editCountry,
                          status: e.target.checked,
                        })
                      }
                    />
                    Status
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button className="btn btn-primary" onClick={updateCountry}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit countries */}
      {/* Delete Modal  */}
      <div className="modal fade" id="delete_country">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Country</h4>
              <p className="mb-3">Are you sure you want to delete Country?</p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal"
                id="delete_country_close">
                  Cancel
                </a>
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteCountry}
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
      {/* /Delete Modal*/}
    </div>
  );
};

export default AdminLocationCountries;

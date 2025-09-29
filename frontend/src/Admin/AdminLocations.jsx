import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminLocations = () => {
  const [locations, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    email: "",
    contact: "",
    location: "",
    country_id: "",
    state_id: "",
    city_id: "",
    pincode: "",
    workingDays: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const fetchAllLocation = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllLocation({
        search: searchQuery,
        page,
      });
      setLocation(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };
  const getAllActiveCountry = async () => {
    try {
      const res = await apiService.getAllActiveCountry();
      if (res.data.success) setCountries(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch categories");
    }
  };
  const getStateBycountry = async (countryId) => {
    try {
      const res = await apiService.getStateByCountry(countryId);
      if (res.data.success) setStates(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch categories");
    }
  };
  const getCityByState = async (stateId) => {
    if (!stateId) return;
    try {
      const res = await apiService.getCityByState(stateId);
      if (res.data.success) setCities(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch cities");
    }
  };
  useEffect(() => {
    fetchAllLocation(search, currentPage);
  }, [currentPage, search]);

  useEffect(() => {
    getAllActiveCountry();
  }, []);
  const resetFormData = () => {
    setFormData({
      title: "",
      email: "",
      contact: "",
      location: "",
      country_id: "",
      state_id: "",
      city_id: "",
      pincode: "",
      workingDays: "",
      image: null,
    });
    setImagePreview(null);
    setSelectedLocation(null);
  };
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayMap = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const shortDayMap = ["S", "M", "T", "W", "T", "F", "S"];

  const addLocation = async () => {
    try {
      const userLocation = new FormData();
      userLocation.append("title", formData.title);
      userLocation.append("email", formData.email);
      userLocation.append("contact", formData.contact);
      if (formData.image) userLocation.append("image", formData.image);
      userLocation.append("location", formData.location);
      userLocation.append("country_id", formData.country_id);
      userLocation.append("state_id", formData.state_id);
      userLocation.append("city_id", formData.city_id);
      userLocation.append("pincode", formData.pincode);
      userLocation.append("workingDays", JSON.stringify(formData.workingDays));

      await apiService.addLocation(userLocation);
      fetchAllLocation(search, currentPage);
      resetFormData();
    } catch (err) {
      console.error("Error adding Location:", err);
      alert(
        "Error adding Location: " + (err.response?.data?.message || err.message)
      );
    }
  };
  const updateLocation = async () => {
    if (!selectedLocation?._id) {
      alert("No location selected for update.");
      return;
    }

    try {
      const userLocation = new FormData();
      userLocation.append("title", formData.title);
      userLocation.append("email", formData.email);
      userLocation.append("contact", formData.contact);
      if (formData.image) {
        userLocation.append("image", formData.image);
      }
      userLocation.append("location", formData.location);
      userLocation.append("country_id", formData.country_id);
      userLocation.append("state_id", formData.state_id);
      userLocation.append("city_id", formData.city_id);
      userLocation.append("pincode", formData.pincode);
      userLocation.append("workingDays", JSON.stringify(formData.workingDays));
      userLocation.append("status", formData.status ? "true" : "false");
      await apiService.updateLocation(selectedLocation._id, userLocation);
      fetchAllLocation(search, currentPage);
      resetFormData();
      document.getElementById("edit_user_close").click(); // closes modal
    } catch (err) {
      console.error("Error updating Location:", err);
      alert(
        "Error updating Location: " +
          (err.response?.data?.message || err.message)
      );
    }
  };
  const handleDeleteLocation = async () => {
    try {
      if (!selectedLocation) return;
      await apiService.deleteLocation(selectedLocation._id);
      fetchAllLocation(search, currentPage);
      resetFormData();
    } catch (err) {
      console.error("Error deleting Location:", err);
      alert(
        "Error deleting Location: " +
          (err.response?.data?.message || err.message)
      );
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h4 className="mb-1">Location</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Location
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2 me-2">
                <a className="btn btn-white d-flex align-items-center">
                  <i className="ti ti-printer me-2" />
                  Print
                </a>
              </div>
              <div className="mb-2 me-2">
                <div className="dropdown">
                  <a className="btn btn-dark d-inline-flex align-items-center">
                    <i className="ti ti-upload me-1" />
                    Export
                  </a>
                </div>
              </div>
              <div className="mb-2">
                <a
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_location"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Location
                </a>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="d-flex align-items-center flex-wrap row-gap-3"></div>
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
                    onChange={(e) => setSearch(e.target.value)}
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
                  <th>LOCATION TITLE</th>
                  <th>ADDRESS</th>
                  <th>PHONE</th>
                  <th>WORKING DAYS</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {locations.map((loc) => (
                  <tr key={loc._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a className="avatar rounded-circle me-2 flex-shrink-0">
                          <img
                            src={BASE_URL_IMG + loc.image}
                            className="rounded-circle"
                            alt={loc.title}
                          />
                        </a>
                        <h6 className="fs-14 fw-semibold">
                          <a>{loc.title}</a>
                        </h6>
                      </div>
                    </td>
                    <td>{loc.location}</td>
                    <td>{loc.contact}</td>
                    <td>
                      <div className="working-days">
                        {dayMap.map((day, i) => (
                          <span
                            key={i}
                            className={
                              loc.workingDays?.[day]?.active
                                ? "working"
                                : "non-working"
                            }
                          >
                            {shortDayMap[i]}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`badge badge-md ${
                          loc.status
                            ? "badge-soft-success"
                            : "badge-soft-danger"
                        }`}
                      >
                        {loc.status ? "Active" : "Inactive"}
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
                              data-bs-target="#edit_location"
                              onClick={() => {
                                setSelectedLocation(loc);

                                setFormData({
                                  _id: loc._id,
                                  title: loc.title,
                                  email: loc.email,
                                  contact: loc.contact,
                                  location: loc.location,
                                  country_id: loc.country_id,
                                  state_id: loc.state_id,
                                  city_id: loc.city_id,
                                  pincode: loc.pincode,
                                  workingDays: loc.workingDays,
                                  image: null,
                                  status: loc.status,
                                });
                                setImagePreview(
                                  loc.image ? BASE_URL_IMG + loc.image : null
                                );
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
                              data-bs-target="#delete_location"
                              onClick={() => setSelectedLocation(loc)}
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
          {/* Custom Data Table */}
          <div className="table-footer" />
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add Location */}
      <div className="modal fade" id="add_location">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Location</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addLocation();
              }}
            >
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="mb-3">
                    <label className="form-label">
                      Image <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center flex-wrap row-gap-3">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="rounded-circle"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <i className="ti ti-photo-up text-gray-4 fs-24" />
                        )}
                      </div>
                      <div className="profile-upload">
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-md btn-dark">
                            <i className="ti ti-photo-up fs-14" />
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="fs-14">
                            Upload Image size 180*180, within 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Location Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Location <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.country_id}
                        onChange={(e) => {
                          const countryId = e.target.value;
                          setFormData({
                            ...formData,
                            country_id: countryId,
                            state_id: "",
                            city_id: "",
                          });
                          if (countryId) {
                            getStateBycountry(countryId); // ✅ load states when country changes
                            setStates([]);
                            setCities([]);
                          }
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.state_id}
                        onChange={(e) => {
                          const stateId = e.target.value;
                          setFormData({
                            ...formData,
                            state_id: stateId,
                            city_id: "",
                          });
                          if (stateId) {
                            getCityByState(stateId);
                            setCities([]);
                          }
                        }}
                        disabled={!formData.country_id} // ✅ block until country is selected
                      >
                        <option value="">Select</option>
                        {states.map((s) => (
                          <option key={s._id} value={s._id}>
                            {s.stateName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.city_id}
                        onChange={(e) =>
                          setFormData({ ...formData, city_id: e.target.value })
                        }
                        disabled={!formData.state_id} // ✅ block until state is selected
                      >
                        <option value="">Select</option>
                        {cities.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.cityName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Pincode <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <label className="form-label mb-2">
                    Working Days <span className="text-danger">*</span>
                  </label>

                  {daysOfWeek.map((day) => (
                    <div
                      className="d-flex justify-content-between align-items-center mb-3"
                      key={day}
                    >
                      <div className="form-check form-check-md form-switch me-2">
                        <label className="form-check-label mt-0 mb-0 text-gray-5">
                          <input
                            className="form-check-input form-label me-2"
                            type="checkbox"
                            role="switch"
                            checked={
                              formData.workingDays?.[day.toLowerCase()]
                                ?.active || false
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                workingDays: {
                                  ...formData.workingDays,
                                  [day.toLowerCase()]: {
                                    ...formData.workingDays?.[
                                      day.toLowerCase()
                                    ],
                                    active: e.target.checked,
                                  },
                                },
                              })
                            }
                          />
                          {day}
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <input
                          type="time"
                          className="form-control me-2"
                          value={
                            formData.workingDays?.[day.toLowerCase()]?.from ||
                            ""
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workingDays: {
                                ...formData.workingDays,
                                [day.toLowerCase()]: {
                                  ...formData.workingDays?.[day.toLowerCase()],
                                  from: e.target.value,
                                },
                              },
                            })
                          }
                        />
                        <span className="mx-2">to</span>
                        <input
                          type="time"
                          className="form-control"
                          value={
                            formData.workingDays?.[day.toLowerCase()]?.to || ""
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workingDays: {
                                ...formData.workingDays,
                                [day.toLowerCase()]: {
                                  ...formData.workingDays?.[day.toLowerCase()],
                                  to: e.target.value,
                                },
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <a className="btn btn-light me-3" data-bs-dismiss="modal">
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary">
                    Create New
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Driver */}
      {/* Edit Driver */}
      <div className="modal fade" id="edit_location">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Location</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="edit_user_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateLocation();
              }}
            >
              <div className="modal-body pb-1">
                <div className="row">
                  {/* Image Upload */}
                  <div className="mb-3">
                    <label className="form-label">
                      Image <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center flex-wrap row-gap-3">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                        {imagePreview || formData.imageUrl ? (
                          <img
                            src={imagePreview || formData.imageUrl}
                            alt="Preview"
                            className="rounded-circle"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <i className="ti ti-photo-up text-gray-4 fs-24" />
                        )}
                      </div>
                      <div className="profile-upload">
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-md btn-dark">
                            <i className="ti ti-photo-up fs-14" />
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="fs-14">
                            Upload Image size 180*180, within 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Location Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Location <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Country, State, City */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.country_id}
                        onChange={(e) => {
                          const countryId = e.target.value;
                          setFormData({
                            ...formData,
                            country_id: countryId,
                            state_id: "",
                            city_id: "",
                          });
                          if (countryId) {
                            getStateBycountry(countryId);
                            setStates([]);
                            setCities([]);
                          }
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

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.state_id}
                        onChange={(e) => {
                          const stateId = e.target.value;
                          setFormData({
                            ...formData,
                            state_id: stateId,
                            city_id: "",
                          });
                          if (stateId) {
                            getCityByState(stateId);
                            setCities([]);
                          }
                        }}
                        disabled={!formData.country_id}
                      >
                        <option value="">Select</option>
                        {states.map((s) => (
                          <option key={s._id} value={s._id}>
                            {s.stateName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.city_id}
                        onChange={(e) =>
                          setFormData({ ...formData, city_id: e.target.value })
                        }
                        disabled={!formData.state_id}
                      >
                        <option value="">Select</option>
                        {cities.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.cityName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pincode */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Pincode <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Working Days */}
                  <label className="form-label mb-2">
                    Working Days <span className="text-danger">*</span>
                  </label>
                  {daysOfWeek.map((day) => (
                    <div
                      className="d-flex justify-content-between align-items-center mb-3"
                      key={day}
                    >
                      <div className="form-check form-check-md form-switch me-2">
                        <label className="form-check-label mt-0 mb-0 text-gray-5">
                          <input
                            className="form-check-input form-label me-2"
                            type="checkbox"
                            role="switch"
                            checked={
                              formData.workingDays?.[day.toLowerCase()]
                                ?.active || false
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                workingDays: {
                                  ...formData.workingDays,
                                  [day.toLowerCase()]: {
                                    ...formData.workingDays?.[
                                      day.toLowerCase()
                                    ],
                                    active: e.target.checked,
                                  },
                                },
                              })
                            }
                          />
                          {day}
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <input
                          type="time"
                          className="form-control me-2"
                          value={
                            formData.workingDays?.[day.toLowerCase()]?.from ||
                            ""
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workingDays: {
                                ...formData.workingDays,
                                [day.toLowerCase()]: {
                                  ...formData.workingDays?.[day.toLowerCase()],
                                  from: e.target.value,
                                },
                              },
                            })
                          }
                        />
                        <span className="mx-2">to</span>
                        <input
                          type="time"
                          className="form-control"
                          value={
                            formData.workingDays?.[day.toLowerCase()]?.to || ""
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workingDays: {
                                ...formData.workingDays,
                                [day.toLowerCase()]: {
                                  ...formData.workingDays?.[day.toLowerCase()],
                                  to: e.target.value,
                                },
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label form-label mt-0 mb-0">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        checked={
                          formData.status === true || formData.status === "true"
                        } // Handle both boolean and string
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            status: e.target.checked, // This will be a boolean
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
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* /Edit Driver */}
      {/* Delete  */}
      <div className="modal fade" id="delete_location">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Location</h4>
              <p className="mb-3">Are you sure you want to delete location?</p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  onClick={handleDeleteLocation}
                  className="btn btn-primary"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
    </div>
  );
};

export default AdminLocations;

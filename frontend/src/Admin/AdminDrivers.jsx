import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { CSVLink } from "react-csv";
import { ToastContainer, toast } from "react-toastify";

const AdminDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [deleteDriver, setDeleteDriver] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    licenseNumber: "",
    dateOfIssue: "",
    validTill: "",
    gender: "",
    address: "",
    image: null,
    status: true,
    isActive: true,
    file: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const fetchDriver = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllDriverAdmin({
        search: searchQuery,
        page,
      });
      setDrivers(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      setTotalCount(res.data.pagination?.total || 0);
      setPageSize(res.data.pagination?.limit || 10);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch drivers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDriver(search, currentPage);
  }, [currentPage, search]);

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      licenseNumber: "",
      dateOfIssue: "",
      validTill: "",
      gender: "",
      address: "",
      image: null,
      isActive: true,
      file: null,
    });
    setImagePreview(null);
    setSelectedDriver(null);
    setDeleteDriver(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (name === "image" && file) {
        setImagePreview(URL.createObjectURL(file));
      } else if (name === "image") {
        setImagePreview(null);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddDriver = async () => {
    try {
      const userFormData = new FormData();
      userFormData.append("name", formData.name);
      userFormData.append("email", formData.email);
      userFormData.append("contact", formData.contact);
      userFormData.append("licenseNumber", formData.licenseNumber);
      userFormData.append("dateOfIssue", formData.dateOfIssue);
      userFormData.append("validTill", formData.validTill);
      userFormData.append("gender", formData.gender);
      userFormData.append("address", formData.address);

      if (formData.image) {
        userFormData.append("image", formData.image);
      }

      if (formData.file) {
        userFormData.append("file", formData.file);
      }

      const res = await apiService.addDriver(userFormData);
      if (res.data.success) {
        toast.success("Driver added successfully!");
        document.getElementById("add_driver_close").click();

        fetchDriver(search, currentPage);
        resetFormData();
      }
    } catch (err) {
      toast.error(
        "Error adding driver: " + (err.response?.data?.message || err.message)
      );
    }
  };

  const handleEdit = (driver) => {
    setSelectedDriver(driver);
    setFormData({
      name: driver.name || "",
      email: driver.email || "",
      contact: driver.contact || "",
      licenseNumber: driver.licenseNumber || "",
      dateOfIssue: driver.dateOfIssue || "",
      validTill: driver.validTill || "",
      gender: driver.gender || "",
      address: driver.address || "",
      image: null,
      isActive: driver.isActive,
      file: null,
    });
    setImagePreview(null);
  };

  const handleUpdateDriver = async () => {
    if (!selectedDriver) return;

    try {
      const userFormData = new FormData();
      userFormData.append("name", formData.name);
      userFormData.append("email", formData.email);
      userFormData.append("contact", formData.contact);
      userFormData.append("licenseNumber", formData.licenseNumber);
      userFormData.append("dateOfIssue", formData.dateOfIssue);
      userFormData.append("validTill", formData.validTill);
      userFormData.append("gender", formData.gender);
      userFormData.append("address", formData.address);
      userFormData.append("isActive", formData.isActive);

      if (formData.image) {
        userFormData.append("image", formData.image);
      }

      if (formData.file) {
        userFormData.append("file", formData.file);
      }

      const res = await apiService.updateDriver(
        selectedDriver._id,
        userFormData
      );
      if (res.data.success) {
        toast.success("Driver updated successfully!");
        document.getElementById("close_edit_driver").click();

        fetchDriver(search, currentPage);
        resetFormData();
      }
    } catch (err) {
      toast.error(
        "Error updating Driver: " + (err.response?.data?.message || err.message)
      );
    }
  };

  const driverCsvHeaders = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Contact", key: "contact" },
    { label: "License Number", key: "licenseNumber" },
    { label: "Date of Issue", key: "dateOfIssue" },
    { label: "Valid Till", key: "validTill" },
    { label: "Gender", key: "gender" },
    { label: "Address", key: "address" },
    { label: "Status", key: "isActive" },
  ];

  const csvData = drivers.map((driver) => ({
    name: driver.name,
    email: driver.email,
    contact: driver.contact,
    licenseNumber: driver.licenseNumber,
    dateOfIssue: driver.dateOfIssue
      ? new Date(driver.dateOfIssue).toLocaleDateString()
      : "",
    validTill: driver.validTill
      ? new Date(driver.validTill).toLocaleDateString()
      : "",
    gender: driver.gender,
    address: driver.address,
    isActive: driver.isActive ? "Active" : "Inactive",
  }));

  const handleDeleteConfirm = (driver) => {
    setDeleteDriver(driver);
  };

  const handleDelete = async () => {
    if (!deleteDriver) return;
    try {
      const res = await apiService.deleteDriver(deleteDriver._id);
      if (res.data.success) {
        toast.success("Driver deleted successfully!");

        fetchDriver(search, currentPage);
        setDeleteDriver(null);
      }
    } catch (err) {
      toast.error(
        "Error deleting driver: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h4 className="mb-1">Drivers</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Drivers
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2 me-2">
                <CSVLink
                  data={csvData}
                  headers={driverCsvHeaders}
                  filename="drivers.csv"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export CSV
                </CSVLink>
              </div>
              <div className="mb-2">
                <a
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_driver"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Driver
                </a>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="d-flex align-items-center flex-wrap row-gap-3">
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
                  <th>DRIVERS</th>
                  <th>EMAIL</th>
                  <th>LICENSE NO</th>
                  <th>EXPIRY DATE</th>
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
                ) : drivers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No drivers found
                    </td>
                  </tr>
                ) : (
                  drivers.map((driver) => (
                    <tr key={driver._id}>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar rounded-circle me-2 flex-shrink-0"
                          >
                            <img
                              src={`${BASE_URL_IMG + driver.image}`}
                              className="rounded-circle"
                              alt="img"
                            />
                          </a>
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              <a href="javascript:void(0);">{driver.name}</a>
                            </h6>
                            <p>{driver.contact}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-gray-9">{driver.email}</p>
                      </td>
                      <td>
                        <p className="text-gray-9">{driver.licenseNumber}</p>
                      </td>
                      <td>
                        <p className="text-gray-9">
                          {driver.validTill
                            ? new Date(driver.validTill).toLocaleDateString()
                            : ""}
                        </p>
                      </td>
                      <td>
                        <span
                          className={`badge badge-md  ${
                            driver.isActive
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {driver.isActive ? "Active" : "Inactive"}
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
                                href="javascript:void(0);"
                                onClick={() => handleEdit(driver)}
                                data-bs-toggle="modal"
                                data-bs-target="#edit_driver"
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                onClick={() => handleDeleteConfirm(driver)}
                                data-bs-toggle="modal"
                                data-bs-target="#delete_driver"
                              >
                                <i className="ti ti-trash me-1" />
                                Delete
                              </a>
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
          {/* Custom Data Table */}
          {!loading && totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
              <div className="text-muted mb-2">
                Showing {(currentPage - 1) * pageSize + 1} to{" "}
                {Math.min(currentPage * pageSize, totalCount)} of {totalCount}{" "}
                entries
              </div>
              <nav className="mb-2">
                <ul className="pagination mb-0">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    >
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li
                        key={page}
                        className={`page-item ${
                          currentPage === page ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </a>
                      </li>
                    )
                  )}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          setCurrentPage(currentPage + 1);
                      }}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          <div className="table-footer" />
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add Driver */}
      <div className="modal fade" id="add_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Driver</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_driver_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
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
                          className="rounded-circle w-100 h-100"
                          alt="preview"
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
                            name="image"
                            accept="image/*"
                            onChange={handleInputChange}
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Driver Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
                      className="select form-control"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
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
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Card Number <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Issue <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfIssue"
                      value={formData.dateOfIssue}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Valid Till <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="validTill"
                      value={formData.validTill}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="form-label">Document</label>
                  <div className="document-upload text-center br-3 mb-3">
                    <img
                      src="/admin-assets/img/icons/upload-icon.svg"
                      alt="img"
                      className="mb-2"
                    />
                    <p className="mb-2">
                      Drop your files here or{" "}
                      <span className="text-info text-decoration-underline">
                        Browse
                      </span>
                    </p>
                    <p className="fs-12 mb-0">Maximum size 50mb</p>
                    <input
                      type="file"
                      className="form-control image-sign"
                      name="file"
                      accept=".pdf,.txt,.doc,.docx"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={resetFormData}
                >
                  Cancel
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddDriver}
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Driver */}
      {/* Edit Driver */}
      <div className="modal fade" id="edit_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Driver</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close_edit_driver"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="row">
                <div className="mb-3">
                  <label className="form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames position-relative">
                      {imagePreview || BASE_URL_IMG + selectedDriver?.image ? (
                        <img
                          src={
                            imagePreview || BASE_URL_IMG + selectedDriver?.image
                          }
                          className="img-fluid rounded"
                          alt="img"
                        />
                      ) : (
                        <i className="ti ti-photo-up text-gray-4 fs-24" />
                      )}
                      {BASE_URL_IMG + selectedDriver?.image &&
                        !imagePreview && (
                          <span
                            className="avatar-badge bg-light text-danger m-1"
                            style={{
                              cursor: "pointer",
                              position: "absolute",
                              top: 0,
                              right: 0,
                            }}
                            onClick={() => setImagePreview(null)} // Placeholder for remove, actual remove on save if no image
                          >
                            <i className="ti ti-trash" />
                          </span>
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
                            name="image"
                            accept="image/*"
                            onChange={handleInputChange}
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Driver Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
                      className="select form-control"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
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
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Card Number <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Issue <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfIssue"
                      value={formData.dateOfIssue.split("T")[0]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Valid Till <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="validTill"
                      value={formData.validTill.split("T")[0]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="form-label">Document</label>
                  <div className="document-upload text-center br-3 mb-3">
                    <img
                      src="/admin-assets/img/icons/upload-icon.svg"
                      alt="img"
                      className="mb-2"
                    />
                    <p className="mb-2">
                      Drop your files here or{" "}
                      <span className="text-info text-decoration-underline">
                        Browse
                      </span>
                    </p>
                    <p className="fs-12 mb-0">Maximum size 50mb</p>
                    <input
                      type="file"
                      className="form-control image-sign"
                      name="file"
                      accept=".pdf,.txt,.doc,.docx"
                      onChange={handleInputChange}
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
                      checked={formData.isActive}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          isActive: e.target.checked,
                        }))
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
                    onClick={resetFormData}
                  >
                    Cancel
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdateDriver}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Driver */}
      {/* Delete  */}
      <div className="modal fade" id="delete_driver">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Driver</h4>
              <p className="mb-3">
                Are you sure you want to delete{" "}
                {deleteDriver?.name || "this driver"}?
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDelete}
                  data-bs-dismiss="modal"
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
      {/* /Delete */}
    </div>
  );
};

export default AdminDrivers;

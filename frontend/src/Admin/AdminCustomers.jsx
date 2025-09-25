import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useSelector } from "react-redux";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deleteCustomer, setDeleteCustomer] = useState(null);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    licenseNumber: "",
    dateOfIssue: "",
    validTill: "",
    language: "",
    address: "",
    gender: "",
    dateOfBirth: "",
    image: null,
    file: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const fetchCustomers = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      let res;
      if (userType === 1) {
        res = await apiService.getAllcustomerSuperAdmin({
          page,
          search: searchQuery,
        });
      } else {
        res = await apiService.getAllCustomerAdmin({
          page,
          search: searchQuery,
        });
      }
      setCustomers(res.data.data);
      setTotalPages(res.data.pagination?.totalPages);

      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      console.error("Error fetching Customers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(search, currentPage);
  }, [currentPage, search]);

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      licenseNumber: "",
      dateOfIssue: "",
      validTill: "",
      language: "",
      address: "",
      gender: "",
      dateOfBirth: "",
      image: null,

      file: null,
    });
    setImagePreview(null);
    setSelectedCustomer(null);
    setDeleteCustomer(null);
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

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleAddCustomer = async () => {
    try {
      const userFormData = new FormData();
      userFormData.append("name", formData.name);
      userFormData.append("email", formData.email);
      userFormData.append("contact", formData.contact);
      userFormData.append("licenseNumber", formData.licenseNumber);
      userFormData.append("dateOfIssue", formData.dateOfIssue);
      userFormData.append("validTill", formData.validTill);
      userFormData.append("language", formData.language);
      userFormData.append("address", formData.address);
      userFormData.append("gender", formData.gender);
      userFormData.append("dateOfBirth", formData.dateOfBirth);

      if (formData.image) {
        userFormData.append("image", formData.image);
      }

      if (formData.file) {
        userFormData.append("file", formData.file);
      }

      await apiService.addCustomer(userFormData);
      fetchCustomers(search, currentPage);
      resetFormData();
    } catch (err) {
      console.error("Error adding Customer:", err);
      alert(
        "Error adding customer: " + (err.response?.data?.message || err.message)
      );
    }
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setFormData({
      name: customer.name || "",
      email: customer.email || "",
      contact: customer.contact || "",
      licenseNumber: customer.licenseNumber || "",
      dateOfIssue: customer.dateOfIssue || "",
      validTill: customer.validTill || "",
      language: customer.language || "",
      address: customer.address || "",
      gender: customer.gender || "",
      dateOfBirth: customer.dateOfBirth || "",
      image: null,
      file: null,
    });
    setImagePreview(null);
  };

  const handleUpdateCustomer = async () => {
    if (!selectedCustomer) return;
    try {
      const userFormData = new FormData();
      userFormData.append("name", formData.name);
      userFormData.append("email", formData.email);
      userFormData.append("contact", formData.contact);
      userFormData.append("licenseNumber", formData.licenseNumber);
      userFormData.append("dateOfIssue", formData.dateOfIssue);
      userFormData.append("validTill", formData.validTill);
      userFormData.append("language", formData.language);
      userFormData.append("address", formData.address);
      userFormData.append("gender", formData.gender);
      userFormData.append("dateOfBirth", formData.dateOfBirth);

      if (formData.image) {
        userFormData.append("image", formData.image);
      }

      if (formData.file) {
        userFormData.append("file", formData.file);
      }

      await apiService.updateCustomer(selectedCustomer._id, userFormData);
      fetchCustomers(search, currentPage);
      resetFormData();
    } catch (err) {
      console.error("Error updating Customer:", err);
      alert(
        "Error updating customer: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  const handleDeleteConfirm = (customer) => {
    setDeleteCustomer(customer);
  };
  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleDelete = async () => {
    if (!deleteCustomer) return;
    try {
      await apiService.deleteCustomer(deleteCustomer._id);
      fetchCustomers(search, currentPage);
      setDeleteCustomer(null);
    } catch (err) {
      console.error("Error deleting Customer:", err);
      alert(
        "Error deleting customer: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Customers</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dash-board">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Customers
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
                data-bs-target="#add_client"
              >
                <i className="ti ti-plus me-2" />
                Add New Client
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
                <th>CUSTOMER</th>
                <th>EMAIL</th>
                <th>LICENSE NO</th>
                <th>EXPIRY DATE</th>

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
              ) : customers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No customers found
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr key={customer._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={`/admin-dashboard/customer-details/${customer._id}`}
                          className="avatar rounded-circle me-2 flex-shrink-0"
                        >
                          <img
                            src={`${BASE_URL_IMG + customer.image}`}
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div>
                          <h6 className="fs-14 fw-semibold">
                            <Link
                              to={`/admin-dashboard/customer-details/${customer._id}`}
                            >
                              {customer.name}
                            </Link>
                          </h6>
                          <p>{customer.contact}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-gray-9">{customer.email}</p>
                    </td>
                    <td>
                      <p className="text-gray-9">{customer.licenseNumber}</p>
                    </td>
                    <td>
                      <p className="text-gray-9">
                        {customer.validTill
                          ? new Date(customer.validTill).toLocaleDateString()
                          : ""}
                      </p>
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
                            <Link
                              to={`/admin-dashboard/customer-details/${customer._id}`}
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item rounded-1"
                              onClick={() => handleEdit(customer)}
                              data-bs-toggle="modal"
                              data-bs-target="#edit_client"
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item rounded-1"
                              onClick={() => handleDeleteConfirm(customer)}
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
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
        </div>
        {/* Custom Data Table */}

        <div className="table-footer" />
      </div>

      {/* Add Client */}
      <div className="modal fade" id="add_client">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Customer</h5>
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
                      Customer Name <span className="text-danger">*</span>
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
                      className="select"
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Language <span className="text-danger">*</span>
                    </label>
                    <select
                      className="select"
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                  </div>
                </div>
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      License Number <span className="text-danger">*</span>
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
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={resetFormData}
                >
                  Cancel
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddCustomer}
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Client */}

      {/* Edit Client */}
      <div className="modal fade" id="edit_client">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Customer</h5>
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
              <div className="row">
                <div className="mb-3">
                  <label className="form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames position-relative">
                      {imagePreview || selectedCustomer?.image ? (
                        <img
                          src={
                            imagePreview ||
                            BASE_URL_IMG + selectedCustomer?.image
                          }
                          className="img-fluid rounded"
                          alt="img"
                        />
                      ) : (
                        <i className="ti ti-photo-up text-gray-4 fs-24" />
                      )}
                      {BASE_URL_IMG + selectedCustomer?.image &&
                        !imagePreview && (
                          <span
                            className="avatar-badge bg-light text-danger m-1"
                            onClick={handleRemoveImage}
                            style={{
                              cursor: "pointer",
                              position: "absolute",
                              top: 0,
                              right: 0,
                            }}
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
                      Customer Name <span className="text-danger">*</span>
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
                      className="select"
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Language <span className="text-danger">*</span>
                    </label>
                    <select
                      className="select"
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                  </div>
                </div>
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      License Number <span className="text-danger">*</span>
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
                <div className="col-md-3">
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
                <div className="col-md-3">
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
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    onClick={resetFormData}
                  >
                    Cancel
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdateCustomer}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Client */}

      {/* Delete Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Customer</h4>
              <p className="mb-3">
                Are you sure you want to delete{" "}
                {deleteCustomer?.name || "this customer"}?
              </p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
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
      {/* /Delete Modal */}
    </div>
  );
};

export default AdminCustomers;

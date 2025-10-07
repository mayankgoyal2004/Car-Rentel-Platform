import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminAllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [roles, setRoles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    contact: "",
    role_id: "",
    password: "",
    confirmPassword: "",
    image: null,
    status: true,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [editImage, setEditImage] = useState(null);

  // Fetch users data
  const fetchUserData = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getUserByAdmin({
        search: searchQuery,
        page,
      });
      setUsers(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const getAllActiveRoles = async () => {
    try {
      const res = await apiService.getAllActiveRole();
      setRoles(res.data.data || []);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch roles");
    }
  };

  useEffect(() => {
    fetchUserData(search, currentPage);
  }, [currentPage, search]);

  useEffect(() => {
    getAllActiveRoles();
  }, []);

  // Handle input changes for form
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle edit image change
  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditImage(file);
      setFormData({ ...formData, image: file });
    }
  };

  // Reset form data
  const resetFormData = () => {
    setFormData({
      userName: "",
      email: "",
      contact: "",
      role: "",
      password: "",
      confirmPassword: "",
      image: null,
      status: true,
    });
    setImagePreview(null);
    setEditImage(null);
  };

  // Add new user
  const handleAddUser = async () => {
    try {
      const userFormData = new FormData();
      userFormData.append("name", formData.userName);
      userFormData.append("email", formData.email);
      userFormData.append("contact", formData.contact);
      userFormData.append("role_id", formData.role_id);
      userFormData.append("password", formData.password);
      userFormData.append("confirmPassword", formData.confirmPassword);
      if (formData.image) {
        userFormData.append("image", formData.image);
      }

      const res = await apiService.addUserByAdmin(userFormData);
      if (res.data.success) {
        toast.success("user deleted successfully!");
        fetchUserData(search, currentPage);
        resetFormData();
      }

      document.getElementById("add_user_close").click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      userName: user.userName,
      email: user.email,
      contact: user.contact,
      role_id: user.role_id,
      password: "",
      confirmPassword: "",
      image: null,
      status: user.status,
    });
    setEditImage(null);
  };

  // Update user
  const handleUpdateUser = async () => {
    try {
      // Check if passwords match if they are provided
      if (formData.password && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Create FormData object for file upload
      const userFormData = new FormData();
      userFormData.append("name", formData.userName);
      userFormData.append("email", formData.email);
      userFormData.append("contact", formData.contact);
      userFormData.append("role_id", formData.role_id);
      userFormData.append("status", formData.status);
      userFormData.append("_id", selectedUser._id);

      if (formData.password) {
        userFormData.append("password", formData.password);
      }
      if (formData.confirmPassword) {
        userFormData.append("confirmPassword", formData.confirmPassword);
      }

      if (formData.image) {
        userFormData.append("image", formData.image);
      }

      const res = await apiService.updateUserByAdmin(userFormData);
      if (res.data.success) {
        toast.success("user updated successfully!");
        fetchUserData(search, currentPage);

        document.getElementById("edit_user_close").click();
      }
    } catch (err) {
      console.error("Error updating user:", err);
      alert(
        "Error updating user: " + (err.response?.data?.message || err.message)
      );
    }
  };

  // Delete user
  const handleDeleteUser = async () => {
    try {
      const res = await apiService.deleteUserByAdmin(selectedUser._id);

      if (res.data.success) {
        toast.success("user deleted successfully!");
        fetchUserData(search, currentPage);

        // Close modal
        document.getElementById("delete_user_close").click();
      }
    } catch (err) {
      toast.error(
        "Error deleting user: " + (err.response?.data?.message || err.message)
      );
    }
  };

  // Handle page change
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
              <h4 className="mb-1">Users</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Users
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <button
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_user"
                  onClick={resetFormData}
                >
                  <i className="ti ti-plus me-2" />
                  Add User
                </button>
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
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>USER</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              user.image
                                ? BASE_URL_IMG + user.image
                                : "/admin-assets/img/profiles/avatar-20.jpg"
                            }
                            className="rounded-circle me-2"
                            alt="user"
                            width={40}
                            height={40}
                            onError={(e) => {
                              e.target.src =
                                "/admin-assets/img/profiles/avatar-20.jpg";
                            }}
                          />
                          <h6 className="mb-0">{user?.userName}</h6>
                        </div>
                      </td>
                      <td>{user?.contact}</td>
                      <td>{user?.email}</td>
                      <td>{user.role?.name}</td>
                      <td>
                        <span
                          className={`badge badge-md   ${
                            user?.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {user?.status ? "Active" : "Inactive"}
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
                                data-bs-target="#edit_user"
                                onClick={() => handleEditClick(user)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                                onClick={() => setSelectedUser(user)}
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
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No users found
                    </td>
                  </tr>
                )}
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
      {/* /Main Wrapper */}
      {/* Add User Modal */}
      <div className="modal fade" id="add_user">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create User</h5>
              <button
                id="add_user_close"
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
                          className="img-fluid rounded"
                          alt="preview"
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
                            onChange={handleImageChange}
                            accept="image/*"
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
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="User Name"
                      className="form-control mb-2"
                      name="userName"
                      value={formData.userName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Role <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-control mb-2"
                      name="role_id"
                      value={formData.role_id}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Role</option>
                      {roles.map((r) => (
                        <option key={r._id} value={r._id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control mb-2"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control mb-2"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        className="pass-inputs form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <span className="ti toggle-passwords ti-eye-off" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        className="form-control pass-inputa"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                      <span className="ti toggle-passworda ti-eye-off" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddUser}
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add User Modal */}

      {/* Edit User Modal */}
      <div className="modal fade" id="edit_user">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit User</h5>
              <button
                id="edit_user_close"
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
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                      {editImage ? (
                        <img
                          src={URL.createObjectURL(editImage)}
                          className="img-fluid rounded"
                          alt="edit preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : selectedUser?.image ? (
                        <img
                          src={BASE_URL_IMG + selectedUser.image}
                          className="img-fluid rounded"
                          alt="current"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            e.target.src =
                              "/admin-assets/img/profiles/avatar-20.jpg";
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
                            onChange={handleEditImageChange}
                            accept="image/*"
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
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="userName"
                      value={formData.userName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Role <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-control"
                      name="role_id"
                      value={formData.role_id}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Role</option>
                      {roles.map((r) => (
                        <option key={r._id} value={r._id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
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
                    <label className="form-label">New Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="pass-inputs form-control"
                        placeholder="Leave blank to keep current"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <span className="ti toggle-passwords ti-eye-off" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-inputa"
                        placeholder="Confirm new password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                      <span className="ti toggle-passworda ti-eye-off" />
                    </div>
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
                      name="status"
                      checked={formData.status}
                      onChange={handleInputChange}
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
                    onClick={handleUpdateUser}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit User Modal */}

      {/* Delete Confirmation Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Customer</h4>
              <p className="mb-3">Are you sure you want to delete </p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDeleteUser}
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
      {/* /Delete Confirmation Modal */}
    </div>
  );
};

export default AdminAllUser;

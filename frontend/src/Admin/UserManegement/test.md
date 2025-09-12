import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";

const AdminAllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [roles, setRoles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // for edit/delete
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    contact: "",
    role: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  // Fetch users
  const fetchUserData = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getUserByAdmin({ search: searchQuery, page });
      setUsers(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (res.data.pagination?.currentPage) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch roles
  const getAllActiveRoles = async () => {
    try {
      const res = await apiService.getAllActiveRole();
      setRoles(res.data.data || []);
    } catch (err) {
      console.error("Error fetching roles:", err);
    }
  };

  useEffect(() => {
    fetchUserData(search, currentPage);
  }, [currentPage, search]);

  useEffect(() => {
    getAllActiveRoles();
  }, []);

  // Add user
  const handleAddUser = async () => {
    try {
      await apiService.addUserByAdmin(formData);
      fetchUserData(search, currentPage);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // Update user
  const handleUpdateUser = async () => {
    try {
      await apiService.updateUserByAdmin(selectedUser._id, formData);
      fetchUserData(search, currentPage);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // Delete user
  const handleDeleteUser = async () => {
    try {
      await apiService.deleteUserByAdmin(selectedUser._id);
      fetchUserData(search, currentPage);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
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
              <a
                href="javascript:void(0);"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_user"
              >
                <i className="ti ti-plus me-2" />
                Add User
              </a>
            </div>
          </div>
        </div>

        {/* Search */}
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

        {/* Table */}
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
                users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={BASE_URL_IMG + user.image}
                          className="rounded-circle me-2"
                          alt="user"
                          width={40}
                          height={40}
                        />
                        <h6 className="mb-0">{user.userName}</h6>
                      </div>
                    </td>
                    <td>{user.contact}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {user.status ? "active" : "inactive"}
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-sm"
                          type="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_user"
                              onClick={() => setSelectedUser(user)}
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-danger"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_user"
                              onClick={() => setSelectedUser(user)}
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
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-3">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
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

      {/* Add User Modal */}
      <div className="modal fade" id="add_user">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Create User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="User Name"
                className="form-control mb-2"
                value={formData.userName}
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control mb-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                className="form-control mb-2"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
              <select
                className="form-control mb-2"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="">Select Role</option>
                {roles.map((r) => (
                  <option key={r._id} value={r.roleName}>
                    {r.roleName}
                  </option>
                ))}
              </select>
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-2"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control mb-2"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-light" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleAddUser}
              >
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      <div className="modal fade" id="edit_user">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Edit User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              {selectedUser && (
                <>
                  <input
                    type="text"
                    className="form-control mb-2"
                    defaultValue={selectedUser.userName}
                    onChange={(e) =>
                      setFormData({ ...formData, userName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    defaultValue={selectedUser.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    defaultValue={selectedUser.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                  />
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-light" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdateUser}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="delete_user">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content text-center p-3">
            <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
              <i className="ti ti-trash-x fs-26" />
            </span>
            <h4>Delete User</h4>
            <p>Are you sure you want to delete user?</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-light me-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleDeleteUser}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllUser;

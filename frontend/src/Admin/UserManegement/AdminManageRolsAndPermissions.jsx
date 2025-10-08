import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminManageRolesAndPermissions = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // States for Add/Edit/Delete
  const [newRole, setNewRole] = useState("");
  const [editRole, setEditRole] = useState(null);
  const [deleteRole, setDeleteRole] = useState(null);

  // Fetch roles from API
  const fetchRoles = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllRole({ search: searchQuery, page });
      setRoles(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles(search, currentPage);
  }, [search, currentPage]);

  // Create Role
  const handleCreateRole = async () => {
    if (!newRole.trim()) return toast.error("Role name is required");
    try {
      const res = await apiService.addRole({ name: newRole.trim() });
      toast.success(res.data.message);
      setNewRole("");
      document.getElementById("add_role_close").click();
      fetchRoles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Update Role
  const handleUpdateRole = async () => {
    if (!editRole?.name.trim()) return toast.error("Role name is required");
    try {
      const res = await apiService.updateRole({
        _id: editRole._id,
        name: editRole.name.trim(),
        status: editRole.status,
      });
      toast.success(res.data.message);
      setEditRole(null);
      document.getElementById("edit_role_close").click();

      fetchRoles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Delete Role
  const handleDeleteRole = async () => {
    if (!deleteRole) return;
    try {
      const res = await apiService.deleteRole(deleteRole._id);
      toast.success(res.data.message || "Role deleted successfully");
      setDeleteRole(null);
      fetchRoles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Roles</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Roles
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2">
              <button
                data-bs-toggle="modal"
                data-bs-target="#add_role"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add Role
              </button>
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
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="custom-datatable-filter table-responsive">
          <table className="table datatable">
            <thead className="thead-light">
              <tr>
                <th>ROLE</th>
                <th>CREATED DATE</th>
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
              ) : roles.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No roles found
                  </td>
                </tr>
              ) : (
                roles.map((role) => (
                  <tr key={role._id}>
                    <td>{role.name}</td>
                    <td>{new Date(role?.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`badge badge-md  ${
                          role.status
                            ? "badge-soft-success"
                            : "badge-soft-danger"
                        }`}
                      >
                        {role?.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-sm "
                          type="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_role"
                              onClick={() => setEditRole(role)}
                            >
                              <i className="ti ti-edit me-1" /> Edit
                            </button>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item rounded-1"
                              to={`/admin-dashboard/admin-permissions/${role?._id}`}
                            >
                              <i className="ti ti-shield me-1" /> Permissions
                            </Link>
                          </li>
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_role"
                              onClick={() => setDeleteRole(role)}
                            >
                              <i className="ti ti-trash me-1" /> Delete
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
      </div>

      {/* Add Role Modal */}
      <div className="modal fade" id="add_role">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add Role</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_role_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <label className="form-label">
                Role <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter role name"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3 "
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateRole}
                  type="button"
                  className="btn btn-primary"
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Role Modal */}
      <div className="modal fade" id="edit_role">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Role</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="edit_role_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <label className="form-label">
                Role <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={editRole?.name || ""}
                onChange={(e) =>
                  setEditRole({ ...editRole, name: e.target.value })
                }
              />

              <div className="form-check form-switch mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={editRole?.status || false}
                  onChange={(e) =>
                    setEditRole({ ...editRole, status: e.target.checked })
                  }
                />
                <label className="form-check-label">Active</label>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3 "
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateRole}
                  type="button"
                  className="btn btn-primary"
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Role Modal */}
      <div className="modal fade" id="delete_role">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash fs-26" />
              </span>
              <h4 className="mb-1">Delete Role</h4>
              <p className="mb-3">Are you sure you want to delete Role?</p>
              <strong>{deleteRole?.name}</strong>
              <div className="d-flex justify-content-center mt-2">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => setDeleteRole(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleDeleteRole}
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
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
  );
};

export default AdminManageRolesAndPermissions;

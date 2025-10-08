import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const AdminBlogsTags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // States for Add/Edit/Delete
  const [newTag, setNewTag] = useState("");
  const [editTag, setEditTag] = useState(null);
  const [deleteTag, setDeleteTag] = useState(null);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; // superadmin = 1, admin/staff = 2/3

  const fetchTags = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      let res;
      if (userType === 1) {
        res = await apiService.getAllBlogTagSuperAdmin({
          search: searchQuery,
          page,
        });
      } else {
        res = await apiService.getAllBlogTag({ search: searchQuery, page });
      }
      setTags(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch customers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags(search, currentPage);
  }, [currentPage, search]);

  // Add new tag
  const handleCreateTag = async () => {
    if (!newTag.trim()) return;

    try {
      const res = await apiService.addblogstag({ TagName: newTag.trim() });

      toast.success(res.data.message);
      setNewTag("");
      fetchTags();
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleUpdateTag = async () => {
    if (!editTag || !editTag.TagName.trim()) return;
    try {
      const res = await apiService.updateblogtag({
        _id: editTag._id,
        TagName: editTag.TagName.trim(),
        status: editTag.status,
      });
      toast.success(res.data.message);
      setEditTag(null);
      fetchTags();
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleDeleteTag = async () => {
    if (!deleteTag) return;
    try {
      const res = await apiService.deleteblogtag(deleteTag._id);
      toast.success(res.data.message);

      setDeleteTag(null);
      fetchTags();
    } catch (err) {
      // Error response (HTTP 4xx/5xx)
      if (err.response && err.response.data) {
        // Use backend message like "Tag already exists"
        toast.error(err.response.data.message);
      } else {
        // Network or unexpected error
        toast.error("Something went wrong!");
      }
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
              <h4 className="mb-1">Blog Tags</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Tags
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#add_Category"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add Tag
                </button>
              </div>
            </div>
          </div>

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
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="custom-datatable-filter table-responsive table-overflow-hidden">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>TAGS</th>
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
                ) : tags.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No tags found
                    </td>
                  </tr>
                ) : (
                  tags.map((tag) => (
                    <tr key={tag._id}>
                      <td>
                        <a className="fw-medium">{tag.TagName}</a>
                      </td>
                      <td>
                        <span className="text-gray-9">
                          {new Date(tag.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-md  ${
                            tag.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {tag.status ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                            aria-expanded="false"
                          >
                            <i className="ti ti-dots-vertical" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_Category"
                                onClick={() => setEditTag(tag)}
                              >
                                <i className="ti ti-edit me-1" /> Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_Category"
                                onClick={() => setDeleteTag(tag)}
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
      </div>

      {/* Add Tag Modal */}
      <div className="modal fade" id="add_Category">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add Tag</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <label className="form-label">
                  Tag <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={newTag}
                  placeholder="Enter tag name"
                  onChange={(e) => setNewTag(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-light" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCreateTag}
                data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Tag Modal */}
      <div className="modal fad  " id="edit_Category">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Tag</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body ">
              <div className="mb-3">
                <label className="form-label">
                  Tag <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={editTag?.TagName || ""}
                  onChange={(e) =>
                    setEditTag({ ...editTag, TagName: e.target.value })
                  }
                  placeholder="Enter tag name"
                />
              </div>

              <div className="form-check form-switch mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={editTag?.status || false}
                  onChange={(e) =>
                    setEditTag({ ...editTag, status: e.target.checked })
                  }
                />
                <label className="form-check-label">Active</label>
              </div>
            </div>
            <div className="modal-footer p-1">
              <button className="btn btn-light me-3" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleUpdateTag}
                data-bs-dismiss="modal"
                disabled={!editTag}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Tag Modal */}
      <div className="modal fade" id="delete_Category">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash fs-26" />
              </span>
              <h4 className="mb-1">Delete Tag</h4>
              <p className="mb-3">Are you sure you want to delete Tag?</p>
              <strong>{deleteTag?.TagName}</strong>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => setDeleteTag(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleDeleteTag}
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
    </div>
  );
};

export default AdminBlogsTags;

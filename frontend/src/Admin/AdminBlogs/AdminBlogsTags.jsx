import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";

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

  // Fetch tags from API
  const fetchTags = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllBlogTag({ search: searchQuery, page });
      setTags(res.data.data || []);
      setCurrentPage(res.data.pagination?.currentPage || page);
      setTotalPages(res.data.pagination?.totalPages || 1);
    } catch (err) {
      console.error("Error fetching tags:", err);
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
      await apiService.addblogstag({ TagName: newTag.trim() });
      setNewTag("");
      fetchTags();
    } catch (err) {
      console.error("Error adding tag:", err);
    }
  };

  const handleUpdateTag = async () => {
    if (!editTag || !editTag.TagName.trim()) return;
    try {
      await apiService.updateblogtag({
        _id: editTag._id,
        TagName: editTag.TagName.trim(),
        status: editTag.status,
      });
      setEditTag(null);
      fetchTags();
    } catch (err) {
      console.error("Error updating tag:", err);
    }
  };

  const handleDeleteTag = async () => {
    if (!deleteTag) return;
    try {
      await apiService.deleteblogtag(deleteTag._id);
      setDeleteTag(null);
      fetchTags();
    } catch (err) {
      console.error("Error deleting tag:", err);
    }
  };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
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
          <div className="custom-datatable-filter table-responsive">
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
                {tags.map((tag) => (
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
                        className={`badge ${
                          tag.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {tag.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-sm dropdown-toggle"
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
                ))}
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
      <div className="modal fade" id="edit_Category">
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
            <div className="modal-body">
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

              <div className="form-check">
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
            <div className="modal-footer">
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
    </div>
  );
};

export default AdminBlogsTags;

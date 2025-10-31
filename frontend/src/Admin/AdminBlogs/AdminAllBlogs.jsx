import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType;

  // ✅ Fetch Blogs
  const fetchBlog = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      let res;
      if (userType === 1) {
        res = await apiService.getAllBlogSuperAdmin({
          search: searchQuery,
          page,
        });
      } else {
        res = await apiService.getAllBlog({ search: searchQuery, page });
      }

      setBlogs(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      setCurrentPage(res.data.pagination?.currentPage || 1);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog(search, 1);
  }, [search]);

  // ✅ Delete Blog
  const handleDeleteBlog = async () => {
    if (!deleteId) return;
    try {
      const res = await apiService.deleteblog(deleteId);
      toast.success(res.data.message);
      setDeleteId(null);
      fetchBlog(search, currentPage);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    fetchBlog(search, page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="page-wrapper">
      <div className="content me-0 me-md-0 me-lg-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Blogs</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashBoard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blogs
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div className="mb-2">
              {userType !== 1 && (
                <Link
                  to="/admin-dashboard/add-blog"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add Blog
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}

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
                placeholder="Search by title"
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
                <th>Image</th>
                <th>Title</th>
                <th>Created By</th>
                <th>Created Date</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No blogs found
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>
                      <img
                        src={`${BASE_URL_IMG}${blog.image}`}
                        alt={blog.title}
                        style={{
                          width: "60px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    </td>
                    <td className="fw-medium">
                      <Link to={`/admin-dashboard/admin-blog-details/${blog._id}`}>
                        {" "}
                        {blog.title}
                      </Link>
                    </td>
                    {userType !== 1 && (
                      <td>{blog.createdBy?.userName || "N/A"}</td>
                    )}
                    {userType === 1 && <td>{blog.admin?.userName || "N/A"}</td>}
                    <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`badge badge-md  ${
                          blog.status
                            ? "badge-soft-success"
                            : "badge-soft-danger"
                        }`}
                      >
                        {blog.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="text-end">
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
                         { userType !== 1 &&( <li>
                            <Link
                              to={`/admin-dashboard/edit-blog/${blog._id}`}
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-edit me-1" /> Edit
                            </Link>
                          </li>)}
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_blogs"
                              onClick={() => setDeleteId(blog._id)}
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

      {/* Delete Blogs Modal */}
      <div className="modal fade" id="delete_blogs">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash fs-26" />
              </span>
              <h4 className="mb-1">Delete Blog</h4>
              <p className="mb-3">Are you sure you want to delete this blog?</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => setDeleteId(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleDeleteBlog}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default AdminAllBlogs;

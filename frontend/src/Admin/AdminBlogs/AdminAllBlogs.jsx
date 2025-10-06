import React from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
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

      setBlogs(res.data.data);

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

  const handleDeleteBlog = async () => {
    if (!deleteId) return;
    try {
      const res = await apiService.deleteblog(deleteId);
      toast.success(res.data.message);

      setDeleteId(null);
      fetchBlog();
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
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
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2">
              {userType !== 1 && (
                <Link
                  to="/admin-dashboard/add-blog"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add Blogs
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
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
        {/* Blogs */}
        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <div className="row blogs-cover">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog._id}>
                <div className="card blog-item-1">
                  <div className="card-body p-0">
                    <div className="blog-img">
                      <Link
                        to={`/admin-dashboard/admin-blog-details/${blog._id}`}
                      >
                        <img
                          src={
                            blog.image
                              ? `${BASE_URL_IMG}${blog.image}`
                              : "/admin-assets/img/blog/default.jpg"
                          }
                          alt={blog.title}
                        />
                      </Link>
                      <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          {userType !== 1 && (
                            <Link
                              to={`/admin-dashboard/edit-blog/${blog._id}`}
                              className="blog-edit me-2"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                          )}
                          <a
                            className="blog-delete"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_blogs"
                            onClick={() => setDeleteId(blog._id)}
                          >
                            <i className="ti ti-trash" />
                          </a>
                        </div>
                        {blog.category && (
                          <span className="badge badge-info badge-md">
                            {blog.category.categoryName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <img
                            src="/admin-assets/img/customer/customer-01.jpg"
                            alt="author"
                            className="avatar avatar-sm rounded-circle me-1"
                          />
                          <span className="fs-16">
                            {blog.createdBy?.userName}
                          </span>
                        </div>
                        <span className="d-flex align-items-center fs-16">
                          <i className="ti ti-calendar me-1" />
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h5>
                        <Link
                          to={`/admin-dashboard/admin-blog-details/${blog._id}`}
                        >
                          {blog.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="d-flex align-items-center justify-content-center">
              {currentPage < totalPages && (
                <button
                  className="load-btn btn btn-light"
                  onClick={() => {
                    const nextPage = currentPage + 1;
                    setCurrentPage(nextPage);
                    fetchBlog(search, nextPage, true); // ✅ append instead of replace
                  }}
                >
                  <i className="ti ti-loader me-1" /> Load More
                </button>
              )}
            </div>
          </div>
        )}
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
      {/* /Delete Blogs */}
    </div>
  );
};

export default AdminAllBlogs;

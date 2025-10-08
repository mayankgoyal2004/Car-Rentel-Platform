import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";

const AdminBlogsComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const fetchComments = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllCommentsAdmin({
        search: searchQuery,
        page,
      });
      setComments(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.deleteblogComment(id);
      const res = fetchComments(search, currentPage);
      if (res.status.success) {
        toast.success("Contact deleted successfully");
      }

      // Close modal
    }catch (err) {
          toast.error(err.response?.data?.message || "Failed to fetch blog commnets");
    }
  };

  useEffect(() => {
    fetchComments(search, currentPage);
  }, [currentPage, search]);

  return (
    <div>
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Blog Comments</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Comments
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
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
          <div className="custom-datatable-filter table-responsive table-overflow-hidden">
            <table className="table datatable custom-blog-table">
              <thead className="thead-light">
                <tr>
                  <th>REVIEW</th>
                  <th>CREATED DATE</th>
                  <th>BLOG</th>
                  <th>CUSTOMER</th>

                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Loading comments...
                    </td>
                  </tr>
                ) : comments.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No comments found.
                    </td>
                  </tr>
                ) : (
                  comments.map((comment) => (
                    <tr key={comment._id}>
                      <td>
                        <p className="text-gray-9 text-truncate">
                          {comment.message}
                        </p>
                      </td>
                      <td>
                        <p className="text-gray-9">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                      </td>
                      <td>
                        <p className="text-gray-9 text-truncate">
                          {comment.blog.title || "Unknown Blog"}
                        </p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a className="avatar avatar-rounded me-2 flex-shrink-0">
                            <img
                              src={BASE_URL_IMG + comment?.createdBy?.image}
                              alt="image"
                            />
                          </a>
                          <div>
                            <h6 className="fw-semibold">
                              <a>
                                {comment?.createdBy?.userName || "Anonymous"}
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>

                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => setSelectedId(comment._id)}
                          data-bs-toggle="modal"
                          data-bs-target="#delete_page"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-3">
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
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
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Delete Modal  */}
      <div className="modal fade" id="delete_page">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Page</h4>
              <p className="mb-3">Are you sure you want to delete page?</p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(selectedId)}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal*/}
    </div>
  );
};

export default AdminBlogsComments;

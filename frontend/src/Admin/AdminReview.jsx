import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { CSVLink } from "react-csv";

const AdminReview = () => {
  const [reveiw, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch all contacts
  const fetchCarReview = async (searchQuery = "", page = 1) => {
    try {
      setLoading(true);
      const res = await apiService.getCarReviewAdmin({
        search: searchQuery,
        page,
      });
      if (res.data.success) {
        setReview(res.data.data);
        setTotalPages(res.data.pagination?.totalPages || 1);
        if (
          res.data.pagination?.currentPage &&
          res.data.pagination.currentPage !== currentPage
        ) {
          setCurrentPage(res.data.pagination.currentPage);
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch review");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedId) return;
      const res = await apiService.deleteCarReviewAdmin(selectedId);
      if (res.data.success) {
        toast.success("Review deleted successfully");
        setReview(reveiw.filter((c) => c._id !== selectedId));
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete review");
    }
  };

  useEffect(() => {
    fetchCarReview(search, currentPage);
  }, [currentPage, search]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const reviewCsvHeaders = [
    { label: "Author Name", key: "authorName" },
    { label: "Author Email", key: "authorEmail" },
    { label: "Review Date", key: "reviewDate" },
    { label: "Ratings", key: "ratings" },
    { label: "Review Comment", key: "comment" },
  ];

  // CSV data mapping
  const reviewCsvData = reveiw.map((r) => ({
    authorName: r.user?.userName || "Unknown",
    authorEmail: r.user?.email || "Unknown",
    reviewDate: new Date(r.createdAt).toLocaleDateString(),
    ratings: r.carReview || 0,
    comment: r.comment || "",
  }));
  // Search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // ✅ good
  };
  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Reviews</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Reviews
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2 me-2">
                <CSVLink
                  data={reviewCsvData}
                  headers={reviewCsvHeaders}
                  filename={`car_reviews_${new Date().toLocaleDateString()}.csv`}
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export CSV
                </CSVLink>
              </div>
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
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Custom Data Table */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable quotations-table">
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
                  <th>AUTHOR</th>
                  <th>REVIEW DATE</th>
                  <th>RATINGS</th>
                  <th>REVIEW</th>
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
                ) : reveiw.length > 0 ? (
                  reveiw.map((re) => (
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a className="avatar me-2 flex-shrink-0">
                            <img
                              className="rounded-circle"
                              src={BASE_URL_IMG + re.user.image}
                              alt
                            />
                          </a>
                          <div>
                            <a className="fw-semibold d-block">
                              {re.user.userName}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-gray-9 mb-0">
                          {new Date(re.createdAt).toDateString()}
                        </p>
                      </td>
                      <td>
                        <div>
                          {Array.from({ length: re.carReview }).map((_, i) => (
                            <i
                              key={i}
                              className="ti ti-star-filled text-warning"
                            />
                          ))}
                        </div>
                      </td>
                      <td>
                        <p className="text-gray-9 mb-0">{re.comment}</p>
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
                                onClick={() => setSelectedId(re._id)}
                                data-bs-toggle="modal"
                                data-bs-target="#delete_review"
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
                      No contacts found
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

      <div className="modal fade" id="delete_review">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Review</h4>
              <p className="mb-3">Are you sure you want to delete Review?</p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button
                  onClick={handleDelete}
                  className="btn btn-primary"
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
      {/* /Delete Maintenance */}
    </div>
  );
};

export default AdminReview;

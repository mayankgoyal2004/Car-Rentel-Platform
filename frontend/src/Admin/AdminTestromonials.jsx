import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    _id: "",
    customer: "",
    rating: "",
    review: "",
    image: null,
    status: true,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType;

  const fetchAllTestimonials = async (searchQuery = "", page = 1) => {
    if (userType === 1) {
      setLoading(true);
      try {
        const res = await apiService.getAlltestimonial({
          search: searchQuery,
          page,
        });
        setTestimonials(res.data.testimonials || []);
        setTotalPages(res.data.pagination?.totalPages || 1);
        if (
          res.data.pagination?.currentPage &&
          res.data.pagination.currentPage !== currentPage
        ) {
          setCurrentPage(res.data.pagination.currentPage);
        }
      } catch (err) {
        toast.error(
          err.response?.data?.message || "Failed to fetch testimonials"
        );
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchAllTestimonials(search, currentPage);
  }, [currentPage, search]);

  // 🔹 Reset form
  const resetFormData = () => {
    setFormData({
      _id: "",
      customer: "",
      rating: "",
      review: "",
      image: null,
      status: true,
    });
    setImagePreview(null);
    setSelectedTestimonial(null);
  };

  // 🔹 Add new testimonial
  const addTestimonial = async () => {
    try {
      const userTestimonial = new FormData();
      userTestimonial.append("customer", formData.customer);
      userTestimonial.append("rating", formData.rating);
      userTestimonial.append("review", formData.review);
      if (formData.image) userTestimonial.append("image", formData.image);
      userTestimonial.append("status", formData.status);

      await apiService.addtestimonial(userTestimonial);
      toast.success("Testimonial added successfully");
      fetchAllTestimonials(search, currentPage);
      resetFormData();
      document.getElementById("add_user_close").click();
    } catch (err) {
      toast.error(
        "Error adding testimonial: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  // 🔹 Update testimonial
  const updateTestimonial = async () => {
    try {
      const userTestimonial = new FormData();

      userTestimonial.append("customer", formData.customer);
      userTestimonial.append("rating", formData.rating);
      userTestimonial.append("review", formData.review);
      userTestimonial.append("status", formData.status); // ensure string
      if (formData.image) {
        userTestimonial.append("image", formData.image);
      }

      await apiService.updatetestimonial(
        selectedTestimonial._id,
        userTestimonial
      );
      toast.success("Testimonial updated successfully");
      fetchAllTestimonials(search, currentPage);
      resetFormData();
      document.getElementById("edit_user_close").click();
    } catch (err) {
      toast.error(
        "Error updating Testimonial: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  // 🔹 Delete testimonial
  const handleDeleteTestimonial = async () => {
    try {
      if (!selectedTestimonial) return;
      await apiService.deletetestimonial(selectedTestimonial._id);
      fetchAllTestimonials(search, currentPage);
      toast.success("Testimonial deleted successfully!");
      resetFormData();
      document.getElementById("delete_user_close").click();
    } catch (err) {
      toast.error(
        "Error deleting Testimonial: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  // 🔹 Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
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
            <h2 className="mb-1">Testimonials</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Testimonials
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div className="mb-2">
              <button
                data-bs-toggle="modal"
                data-bs-target="#add_testimonial"
                onClick={resetFormData}
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add Testimonial
              </button>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="d-flex align-items-center mb-3">
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
                <th>Customer</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Created at</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : testimonials.length > 0 ? (
                testimonials.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-rounded me-2 flex-shrink-0">
                          <img
                            src={BASE_URL_IMG + item.image}
                            alt={item.customer}
                          />
                        </div>
                        <div className="fw-semibold">{item.customer}</div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {[...Array(item.rating)].map((_, i) => (
                          <i
                            key={i}
                            className="ti ti-star-filled text-warning me-1"
                          />
                        ))}
                        <span>({item.rating})</span>
                      </div>
                    </td>
                    <td>{item.review}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`badge badge-md ${
                          item.status
                            ? "badge-soft-success"
                            : "badge-soft-danger"
                        }`}
                      >
                        {item.status ? "Published" : "Unpublished"}
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
                              className="dropdown-item rounded-1"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_testimonial"
                              onClick={() => {
                                setSelectedTestimonial(item);

                                setFormData({
                                  _id: item._id,
                                  customer: item.customer,
                                  rating: item.rating,
                                  review: item.review,
                                  image: null, // don’t preload old image file
                                  status: item.status,
                                });
                                setImagePreview(
                                  item.image ? BASE_URL_IMG + item.image : null
                                );
                              }}
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item rounded-1"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_testimonials"
                              onClick={() => setSelectedTestimonial(item)}
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
                    No testimonials found
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

        {/* ---------------- Add Testimonial Modal ---------------- */}
        <div className="modal fade" id="add_testimonial">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Add Testimonial</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  id="add_user_close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Customer"
                  value={formData.customer}
                  onChange={(e) =>
                    setFormData({ ...formData, customer: e.target.value })
                  }
                />
                <select
                  className="form-control mb-2"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                >
                  <option value="">Select Rating</option>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
                <textarea
                  className="form-control mb-2"
                  placeholder="Review"
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                />
                <input
                  type="file"
                  className="form-control mb-2"
                  onChange={handleFileChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="img-fluid mt-2"
                  />
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={addTestimonial}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Edit Testimonial Modal ---------------- */}
        <div className="modal fade" id="edit_testimonial">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Edit Testimonial</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  id="edit_user_close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Customer"
                  value={formData.customer}
                  onChange={(e) =>
                    setFormData({ ...formData, customer: e.target.value })
                  }
                />
                <select
                  className="form-control mb-2"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                >
                  <option value="">Select Rating</option>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
                <textarea
                  className="form-control mb-2"
                  placeholder="Review"
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                />
                <input
                  type="file"
                  className="form-control mb-2"
                  onChange={handleFileChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="img-fluid mt-2"
                  />
                )}
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.checked })
                    }
                  />
                  <label className="form-check-label">Active</label>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={updateTestimonial}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Delete Testimonial Modal ---------------- */}
        <div className="modal fade" id="delete_testimonials">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h4>Delete Testimonial?</h4>
                <p>Are you sure you want to delete this testimonial?</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    id="delete_user_close"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleDeleteTestimonial}
                  >
                    Yes, Delete
                  </button>
                </div>
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

export default AdminTestimonials;

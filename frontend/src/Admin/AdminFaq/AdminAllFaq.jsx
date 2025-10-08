import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const AdminAllFaq = () => {
  const [faq, setFaq] = useState([]);
  const [newFaqQuestion, setNewFaqQuestion] = useState("");
  const [newFaqAnswer, setNewFaqAnswer] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editFaq, setEditFaq] = useState(null);
  const [deleteFaq, setDeleteFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType;

  const getAllFaq = async (searchQuery = "", page = 1) => {
    if (userType === 1) {
      setLoading(true);
      try {
        const res = await apiService.getAllFaq({
          search: searchQuery,
          page,
        });
        setFaq(res.data.faqs);
        setTotalPages(res.data.pagination?.totalPages || 1);
        setCurrentPage(res.data.pagination?.currentPage || page);
      } catch (err) {
        console.error("Error fetching FAQ:", err);
        toast.error("Failed to fetch FAQ");
      } finally {
        setLoading(false);
      }
    }
  };
  const getAllacitveCategory = async () => {
    if (userType === 1) {
      setLoading(true);
      try {
        const res = await apiService.getAllFaqCategoryActive();
        setCategories(res.data.data);
      } catch (err) {
        console.error("Error fetching FAQ:", err);
        toast.error("Failed to fetch FAQ");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getAllFaq(search, currentPage);
    getAllacitveCategory(); // fetch active categories
  }, [currentPage, search]);

  // ✅ Add FAQ
  const addFaq = async () => {
    if (!newFaqQuestion.trim() || !newFaqAnswer.trim() || !newCategory) return;

    try {
      const res = await apiService.addFaq({
        question: newFaqQuestion.trim(),
        answer: newFaqAnswer.trim(),
        category_id: newCategory,
      });
      toast.success(res.data.message);
      setNewFaqAnswer("");
      setNewFaqQuestion("");
      setNewCategory("");
      getAllFaq(search, currentPage);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const updateFaq = async () => {
    if (!editFaq || !editFaq.question?.trim()) return;
    try {
      const res = await apiService.updateFaq(editFaq._id, {
        question: editFaq.question.trim(),
        answer: editFaq.answer.trim(),
        category_id: editFaq.category_id,
        status: editFaq.status,
      });
      toast.success(res.data.message);
      setEditFaq(null);
      document.querySelector("#edit_FAQ .btn-close")?.click();

      getAllFaq(search, currentPage);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const deleteFaqHandler = async () => {
    if (!deleteFaq) return;
    try {
      const res = await apiService.deleteFaq(deleteFaq._id);
      toast.success(res.data.message);
      setDeleteFaq(null);
      getAllFaq(search, currentPage);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Pagination
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Search
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
              <h4 className="mb-1">FAQ</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQ
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#add_FAQ"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add FAQ
                </a>
              </div>
            </div>
          </div>

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

          {/* Data Table */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>QUESTION</th>
                  <th>ANSWER</th>
                  <th>CATEGORY</th>
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
                ) : faq.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Faq found
                    </td>
                  </tr>
                ) : (
                  faq.map((f) => (
                    <tr key={f._id}>
                      <td>{f.question}</td>
                      <td>{f.answer}</td>
                      <td>{f.category?.categoryName || "N/A"}</td>
                      <td>
                        <span
                          className={`badge badge-md ${
                            f.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {f.status ? "Published" : "Unpublished"}
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
                              <a
                                className="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_FAQ"
                                onClick={() => setEditFaq(f)}
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
                                data-bs-target="#delete_FAQ"
                                onClick={() => setDeleteFaq(f)}
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
                )}{" "}
              </tbody>
            </table>
          </div>

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

      {/* Add FAQ Modal */}
      <div className="modal fade" id="add_FAQ">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add FAQ</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-control"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Question</label>
                <input
                  type="text"
                  className="form-control"
                  value={newFaqQuestion}
                  onChange={(e) => setNewFaqQuestion(e.target.value)}
                />
              </div>
              <div className="mb-0">
                <label className="form-label">Answer</label>
                <textarea
                  className="form-control"
                  value={newFaqAnswer}
                  onChange={(e) => setNewFaqAnswer(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={addFaq}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit FAQ Modal */}
      {/* Edit FAQ Modal */}
      <div className="modal fade" id="edit_FAQ">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit FAQ</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>

            {editFaq && (
              <div className="modal-body">
                {/* Category */}
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    value={editFaq?.category_id?._id || ""}
                    onChange={(e) =>
                      setEditFaq({
                        ...editFaq,
                        category_id: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Question */}
                <div className="mb-3">
                  <label className="form-label">Question</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editFaq.question}
                    onChange={(e) =>
                      setEditFaq({ ...editFaq, question: e.target.value })
                    }
                  />
                </div>

                {/* Answer */}
                <div className="mb-3">
                  <label className="form-label">Answer</label>
                  <textarea
                    className="form-control"
                    value={editFaq.answer}
                    onChange={(e) =>
                      setEditFaq({ ...editFaq, answer: e.target.value })
                    }
                  />
                </div>

                {/* Status Checkbox */}
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked={Boolean(editFaq.status)} // ensures true/false
                    onChange={(e) =>
                      setEditFaq({ ...editFaq, status: e.target.checked })
                    }
                    id="faqStatusSwitch"
                  />
                  <label className="form-check-label" htmlFor="faqStatusSwitch">
                    Status
                  </label>
                </div>
              </div>
            )}

            <div className="modal-footer">
              <div className="d-flex justify-content-end w-100">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  onClick={updateFaq}
                  disabled={!editFaq}
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete FAQ Modal */}
      <div className="modal fade" id="delete_FAQ">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h4 className="mb-1">Delete FAQ</h4>
              <p className="mb-3">Are you sure you want to delete </p>
              <div className="d-flex justify-content-center">
                <button
                  onClick={deleteFaqHandler}
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
    </div>
  );
};

export default AdminAllFaq;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminFaqCategories = () => {
  const [faqCategory, setFaqCategory] = useState([]);
  const [newFaqCategory, setNewFaqCategory] = useState("");
  const [editfaqCategory, setEditFaqCategory] = useState("");
  const [deleteCategory, setDeleteCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //

  const getAllFaqCategory = async (searchQuery = "", page = 1) => {
    if (userType === 1) {
      try {
        const res = await apiService.getAllFaqCategory({
          search: searchQuery,
          page,
        });
        setFaqCategory(res.data.data);
        setTotalPages(res.data.pagination?.totalPages || 1);
        if (
          res.data.pagination?.currentPage &&
          res.data.pagination.currentPage !== currentPage
        ) {
          setCurrentPage(res.data.pagination.currentPage);
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch Faq");
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    getAllFaqCategory(search, currentPage);
  }, [currentPage, search]);

  const addFaqCategory = async () => {
    if (!newFaqCategory.trim()) return;

    try {
      // Axios call
      const res = await apiService.addFaqCategory({
        categoryName: newFaqCategory.trim(),
      });

      toast.success(res.data.message);
      if (res.data.success) {
        setNewFaqCategory("");
        document.querySelector("#add_Category .btn-close")?.click();

        getAllFaqCategory();
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  const updateFaqCategory = async () => {
    if (!editfaqCategory || !editfaqCategory.categoryName.trim()) return;
    try {
      const res = await apiService.updateFaqCategory(editfaqCategory._id, {
        categoryName: editfaqCategory.categoryName.trim(),
        status: editfaqCategory.status,
      });
      toast.success(res.data.message);
      setEditFaqCategory(null);
      document.querySelector("#edit_Category .btn-close")?.click();

      getAllFaqCategory();
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  const deleteFaqCategory = async () => {
    if (!deleteCategory) return;
    try {
      const res = await apiService.deleteFaqCategory(deleteCategory._id);
      toast.success(res.data.message);

      setDeleteCategory(null);

      getAllFaqCategory(search, currentPage);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
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
      {/* Page Wrapper */}
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
                  data-bs-target="#add_Category"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add Category
                </a>
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
          {/* /Table Header */}

          {/* Custom Data Table */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>CATEGORY</th>
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
                ) : faqCategory.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Faq found
                    </td>
                  </tr>
                ) : (
                  faqCategory.map((faq) => (
                    <tr>
                      <td>
                        <a className="fw-medium">{faq.categoryName}</a>
                      </td>
                      <td>
                        <span className="text-gray-9">
                          {" "}
                          {new Date(faq.createdAt).toLocaleDateString()}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`badge badge-md ${
                            faq.status
                              ? "badge-soft-success"
                              : "badge-soft-danger"
                          }`}
                        >
                          {faq.status ? "Active" : "Inactive"}
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
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_Category"
                                onClick={() => setEditFaqCategory(faq)}
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_Category"
                                onClick={() => setDeleteCategory(faq)}
                              >
                                <i className="ti ti-trash me-1" />
                                Delete
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
          </div>
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
          {/* Custom Data Table */}
          <div className="table-footer" />
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add Category */}
      <div className="modal fade" id="add_Category">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add Category</h5>
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
              <div>
                <label className="form-label">
                  Category <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newFaqCategory}
                  placeholder="Enter Faq Category Name"
                  onChange={(e) => setNewFaqCategory(e.target.value)}
                />
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
                  onClick={addFaqCategory}
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
      {/* /Add Category */}
      {/* Edit Category */}
      <div className="modal fade" id="edit_Category">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Category</h4>
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
              <div>
                <label className="form-label">
                  Category <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Rental Policies"
                  value={editfaqCategory?.categoryName || " "}
                  onChange={(e) =>
                    setEditFaqCategory({
                      ...editfaqCategory,
                      categoryName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="form-check form-check-md form-switch me-2">
                  <label className="form-check-label form-label mt-0 mb-0">
                    <input
                      className="form-check-input form-label me-2"
                      type="checkbox"
                      role="switch"
                      checked={editfaqCategory?.status || false}
                      onChange={(e) =>
                        setEditFaqCategory({
                          ...editfaqCategory,
                          status: e.target.checked,
                        })
                      }
                    />
                    Status
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <a className="btn btn-light me-3" data-bs-dismiss="modal">
                    Cancel
                  </a>
                  <button
                    onClick={updateFaqCategory}
                    disabled={!editfaqCategory}
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Category */}
      {/* Delete Category */}
      <div className="modal fade" id="delete_Category">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash fs-26" />
              </span>
              <h4 className="mb-1">Delete Category</h4>
              <strong>{deleteCategory?.categoryName}</strong>
              <p className="mb-3">Are you sure you want to delete category?</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => setDeleteCategory(null)}
                >
                  Cancel
                </button>
                <button
                  onClick={deleteFaqCategory}
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
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
      {/* /Delete Category */}
    </div>
  );
};

export default AdminFaqCategories;

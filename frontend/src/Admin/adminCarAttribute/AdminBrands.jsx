import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";
import { toast } from "react-toastify";

const AdminBrands = () => {
  const [brands, setBrands] = useState([]);
  const [newBrandName, setNewBrandName] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [editBrand, setEditBrand] = useState(null);
  const [editImage, setEditImage] = useState(null);
  const [deleteBrand, setDeleteBrand] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllBrands = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiService.getAllCarBrands({
        page,
        search: searchQuery,
      });
      if (res.data.success) {
        setBrands(res.data.data);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch brands");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBrands(currentPage, search);
  }, [currentPage, search]);

  const addCarBrand = async () => {
    if (!newBrandName.trim() || !newImage) {
      toast.error("Please enter brand name and select an image");
      return;
    }
    const formData = new FormData();
    formData.append("brandName", newBrandName.trim());
    formData.append("image", newImage);
    try {
      const res = await apiService.addCarBrand(formData);
      toast.success(res.data.message);
      setNewBrandName("");
      setNewImage(null);
      fetchAllBrands();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add brand");
    }
  };

  // Update car brand
  const updateCarBrand = async () => {
    if (!editBrand?.brandName.trim()) {
      toast.error("Please enter a brand name");
      return;
    }
    const formData = new FormData();
    formData.append("brandName", editBrand.brandName.trim());
    formData.append("status", editBrand.status);
    if (editImage) {
      formData.append("image", editImage);
    }
    try {
      const res = await apiService.updateCarBrand(editBrand._id, formData);
      toast.success(res.data.message);
      setEditBrand(null);
      setEditImage(null);
      fetchAllBrands(currentPage, search);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update brand");
    }
  };

  // Delete car brand
  const handleDeleteBrand = async () => {
    if (!deleteBrand) return;
    try {
      const res = await apiService.deleteCarBrand(deleteBrand._id);
      toast.success(res.data.message);
      setDeleteBrand(null);
      fetchAllBrands(currentPage, search);
      document.getElementById("delete_brand_close")?.click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete brand");
    }
  };

  // Pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleNewImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleEditImageChange = (e) => {
    setEditImage(e.target.files[0]);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h4 className="mb-1">Brands</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Brands
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2 me-2">
                <a
                  href="javascript:void(0);"
                  className="btn btn-white d-flex align-items-center"
                >
                  <i className="ti ti-printer me-2" />
                  Print
                </a>
              </div>
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-dark d-inline-flex align-items-center"
                  >
                    <i className="ti ti-upload me-1" />
                    Export
                  </a>
                </div>
              </div>
              <div className="mb-2">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#add_brand"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Brand
                </a>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
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
          {/* /Table Header */}
          {/* Custom Data Table */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
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
                  <th>NAME</th>
                  <th>TOTAL CARS</th>
                  <th>STATUS</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {brands.map((brand) => (
                  <tr key={brand._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center file-name-icon">
                        <a
                          href="javascript:void(0);"
                          className="avatar avatar-lg border"
                        >
                          <img
                            src={`${BASE_URL_IMG + brand.image}`}
                            className="img-fluid"
                            alt="brands"
                          />
                        </a>
                        <div className="ms-2">
                          <h6 className="fw-medium">
                            <a href="javascript:void(0);">{brand.brandName}</a>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0</td>
                    <td>
                      <span
                        className={`badge  ${
                          brand.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {brand.status ? "Active" : "Inactive"}
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
                              data-bs-target="#edit_brand"
                              onClick={() => setEditBrand(brand)}
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_brand"
                              onClick={() => setDeleteBrand(brand)}
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
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
          {/* Custom Data Table */}
          <div className="table-footer" />
        </div>
      </div>
      <div>
        {/* Add Brand */}
        <div className="modal fade" id="add_brand">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Create Brand</h5>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Brand Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames position-relative">
                      {previewImage ? (
                        <>
                          <img
                            src={previewImage}
                            className="upload-img img-fluid"
                            alt="preview"
                          />
                        </>
                      ) : (
                        <i className="ti ti-photo-up text-gray-4 fs-24" />
                      )}
                    </div>
                    <div className="profile-upload">
                      <div className="profile-uploader d-flex align-items-center">
                        <div className="drag-upload-btn btn btn-md btn-dark">
                          <i className="ti ti-photo-up fs-14" /> Upload
                          <input
                            type="file"
                            className="form-control image-sign"
                            onChange={handleNewImageChange}
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="fs-14">
                          Upload Image size 180*180, within 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Brand Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newBrandName}
                    placeholder="Enter Brand Name"
                    onChange={(e) => setNewBrandName(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addCarBrand}
                    type="button"
                    className="btn btn-primary"
                    disabled={!newBrandName.trim() || !newImage}
                  >
                    Create New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Brand */}
        {/* Edit Brand */}
        <div className="modal fade" id="edit_brand">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="mb-0">Edit Brand</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Brand Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                      {editBrand?.image ? (
                        <>
                          <img
                            src={`${BASE_URL_IMG + editBrand.image}`}
                            className="upload-img img-fluid"
                            alt="brands"
                          />
                          <a
                            href="javascript:void(0);"
                            className="upload-img-trash btn btn-sm btn-danger-light rounded-circle"
                            onClick={() =>
                              setEditBrand({ ...editBrand, image: null })
                            }
                          >
                            <i className="ti ti-trash fs-12" />
                          </a>
                        </>
                      ) : (
                        <i className="ti ti-photo-up text-gray-4 fs-24" />
                      )}
                    </div>
                    <div className="profile-upload">
                      <div className="profile-uploader d-flex align-items-center">
                        <div className="drag-upload-btn btn btn-md btn-dark">
                          <i className="ti ti-photo-up fs-14" />
                          Upload
                          <input
                            type="file"
                            className="form-control image-sign"
                            onChange={handleEditImageChange}
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="fs-14">
                          Upload Image size 180*180, within 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Brand Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editBrand?.brandName || ""}
                    onChange={(e) =>
                      setEditBrand({ ...editBrand, brandName: e.target.value })
                    }
                    placeholder="Enter Brand Name"
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
                        checked={editBrand?.status || false}
                        onChange={(e) =>
                          setEditBrand({
                            ...editBrand,
                            status: e.target.checked,
                          })
                        }
                      />
                      Status
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={updateCarBrand}
                      className="btn btn-primary"
                      disabled={!editBrand?.brandName.trim()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Brand */}
        {/* Delete Brand */}
        <div className="modal fade" id="delete_brand">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-26" />
                </span>
                <h4 className="mb-1">Delete Brand</h4>
                <p className="mb-3">Are you sure you want to delete brand?</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    id="delete_brand_close"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleDeleteBrand}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Brand */}
      </div>
    </div>
  );
};

export default AdminBrands;

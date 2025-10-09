import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const SignatureSetting = () => {
  const [signatures, setSignatures] = useState([]);
  const [newSignature, setNewSignature] = useState({
    name: "",
    image: null,
    isDefault: false,
  });
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const [editingSignature, setEditingSignature] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fetchSignatures = async () => {
    try {
      const res = await apiService.getAllSignature();
      setSignatures(res.data.data || []);
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchSignatures();
  }, []);

  const handleAddSignature = async (e) => {
    e.preventDefault();
    if (!newSignature.name || !newSignature.image) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newSignature.name);
      formData.append("image", newSignature.image);
      formData.append("isDefault", newSignature.isDefault);

      await apiService.addSignature(formData);
      toast.success("Signature added successfully");
      setNewSignature({ name: "", image: null, isDefault: false });
      setImagePreview(null);
      document.getElementById("add_signatures_close").click();
      fetchSignatures();
    } catch (err) {
      toast.error("Failed to add signature" + err.message);
    }
  };

  const handleUpdateSignature = async (e) => {
    e.preventDefault();
    if (!editingSignature.name) {
      toast.error("Signature name is required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", editingSignature.name);
      if (editingSignature.image instanceof File) {
        formData.append("image", editingSignature.image);
      }
      formData.append("isDefault", editingSignature.isDefault);
      formData.append("status", editingSignature.status);

      await apiService.updateSignature(editingSignature._id, formData);
      toast.success("Signature updated successfully");
      setEditingSignature(null);
      document.getElementById("edit_signature_close").click();
      fetchSignatures();
    } catch (err) {
      toast.error("Failed to update signature" + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.deleteSignature(id);
      toast.success("Signature deleted successfully");
      document.getElementById("delete_signature_close").click();
      fetchSignatures();
    } catch (err) {
      toast.error("Failed to delete signature" + err.message);
    }
  };

  const handleImageChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image type
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }

      if (isEdit) {
        setEditingSignature({
          ...editingSignature,
          image: file,
        });
      } else {
        setNewSignature({
          ...newSignature,
          image: file,
        });
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isEdit) {
          // For edit mode, we'll handle preview differently
        } else {
          setImagePreview(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const startEdit = (signature) => {
    setEditingSignature({ ...signature });
  };

  const resetAddForm = () => {
    setNewSignature({ name: "", image: null, isDefault: false });
    setImagePreview(null);
  };

  return (
    <div className="page-wrapper">
      <div className="content me-0 pb-0 me-lg-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Settings</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Settings
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Settings Prefix */}
        <div className="row">
          <div className="col-lg-3">
            {/* inner sidebar - unchanged */}
            <div className="settings-sidebar slimscroll">
              <div className="sidebar-menu">
                <ul>
                  {/* Account Setting */}
                  <li className="menu-title">
                    <span>ACCOUNT SETTING</span>
                  </li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <Link to="/admin-dashboard/profile-setting">
                        <i className="ti ti-user-edit me-2" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin-dashboard/security-setting">
                        <i className="ti ti-lock me-2" />
                        Security
                      </Link>
                    </li>
                  </ul>

                  {/* Website Setting */}
                  <li className="menu-title">
                    <span>WEBSITE SETTING</span>
                  </li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/login-setting">
                          <i className="ti ti-lock-bolt me-2"></i>
                          <span>Login & Register</span>
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/company-setting">
                          <i className="ti ti-building me-2" />
                          <span>Company Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/email-setting">
                          <i className="ti ti-mail me-2" />
                          <span>Email Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="/admin-dashboard/language-setting">
                        <i className="ti ti-language me-2" />

                        <span> Language Settings</span>
                      </Link>
                    </li>
                    {userType === 1 && (
                      <li>
                        <a href="language-setting.html">
                          <i className="ti ti-language me-2" />
                          <span>Language</span>
                        </a>
                      </li>
                    )}

                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/invoice-setting">
                          <i className="ti ti-file-invoice me-2" />
                          <span>Invoice Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li className="active">
                        <Link to="/admin-dashboard/signature-setting">
                          <i className="ti ti-signature me-2" />
                          <span>Signatures</span>
                        </Link>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/bank-account-setting">
                          <i className="ti ti-file-dollar me-2" />
                          <span>Bank Accounts</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card">
              <div className="card-header">
                <h5 className="fw-bold">Invoice Settings</h5>
              </div>
              <div className="card-body">
                <h6 className="fw-bold mb-3">Signatures</h6>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3"></div>
                  <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#add_signatures"
                      className="btn btn-primary d-flex align-items-center"
                      onClick={resetAddForm}
                    >
                      <i className="ti ti-plus me-2" />
                      Add New Signature
                    </a>
                  </div>
                </div>
                <div className="custom-datatable-filter table-responsive table-overflow-hidden">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>SIGNATURE NAME</th>
                        <th>SIGNATURE</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {signatures.map((signature) => (
                        <tr key={signature._id}>
                          <td>
                            <h6 className="fw-medium">
                              <a>{signature.name}</a>
                              {signature.isDefault && (
                                <span className="ms-2 badge badge-soft-purple">
                                  Default
                                </span>
                              )}
                            </h6>
                          </td>
                          <td>
                            <img
                              src={
                                signature.image
                                  ? `${BASE_URL_IMG}${signature.image}`
                                  : "assets/img/icons/sign.svg"
                              }
                              alt={signature.name}
                              style={{ maxWidth: "100px", maxHeight: "50px" }}
                            />
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                signature.status
                                  ? "badge-success-transparent"
                                  : "badge-danger-transparent"
                              } d-inline-flex align-items-center badge-sm`}
                            >
                              <i className="ti ti-point-filled me-1" />
                              {signature.status ? "Active" : "Inactive"}
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
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_signature"
                                    onClick={() => startEdit(signature)}
                                  >
                                    <i className="ti ti-edit me-1" />
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item rounded-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_signature"
                                    onClick={() =>
                                      setEditingSignature(signature)
                                    }
                                  >
                                    <i className="ti ti-trash me-1" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Signature Modal */}
      <div className="modal fade" id="add_signatures">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Signature</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_signatures_close"
                onClick={resetAddForm}
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form onSubmit={handleAddSignature}>
              <div className="modal-body">
                <div className="row">
                  <div className="mb-3">
                    <label className="form-label">
                      Image <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="img-fluid rounded object-fit-contain"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                          />
                        ) : (
                          <i className="ti ti-photo-up text-gray-4 fs-24" />
                        )}
                      </div>
                      <div className="profile-upload">
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-md btn-dark position-relative">
                            <i className="ti ti-photo-up fs-14" />
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign position-absolute top-0 start-0 w-100 h-100 opacity-0"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, false)}
                              required
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
                  <label className="form-check-label form-label mb-3">
                    <input
                      className="form-check-input form-label"
                      type="checkbox"
                      role="switch"
                      checked={newSignature.isDefault}
                      onChange={(e) =>
                        setNewSignature({
                          ...newSignature,
                          isDefault: e.target.checked,
                        })
                      }
                    />
                    Mark as Default
                  </label>
                  <div className="mb-0">
                    <label className="form-label">
                      Signature Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={newSignature.name}
                      onChange={(e) =>
                        setNewSignature({
                          ...newSignature,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    onClick={resetAddForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create New
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Signature Modal */}
      <div className="modal fade" id="edit_signature">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Signature</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="edit_signature_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            {editingSignature && (
              <form onSubmit={handleUpdateSignature}>
                <div className="modal-body">
                  <div className="row">
                    <div className="mb-3">
                      <label className="form-label">
                        Image <span className="text-danger">*</span>
                      </label>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames position-relative">
                          <img
                            src={`${BASE_URL_IMG}${editingSignature.image}`}
                            className="img-fluid rounded object-fit-contain"
                            alt="img"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                          />
                          <span
                            className="avatar-badge bg-light text-danger m-1 cursor-pointer"
                            onClick={() =>
                              setEditingSignature({
                                ...editingSignature,
                                image: null,
                              })
                            }
                          >
                            <i className="ti ti-trash" />
                          </span>
                        </div>
                        <div className="profile-upload">
                          <div className="profile-uploader d-flex align-items-center">
                            <div className="drag-upload-btn btn btn-md btn-dark position-relative">
                              <i className="ti ti-photo-up fs-14" />
                              Upload
                              <input
                                type="file"
                                className="form-control image-sign position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, true)}
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
                    <label className="form-check-label form-label mb-3">
                      <input
                        className="form-check-input form-label"
                        type="checkbox"
                        role="switch"
                        checked={editingSignature.isDefault}
                        onChange={(e) =>
                          setEditingSignature({
                            ...editingSignature,
                            isDefault: e.target.checked,
                          })
                        }
                      />
                      Mark as Default
                    </label>
                    <div className="mb-0">
                      <label className="form-label">
                        Signature Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={editingSignature.name}
                        onChange={(e) =>
                          setEditingSignature({
                            ...editingSignature,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label form-label mt-0 mb-0">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        checked={editingSignature.status}
                        onChange={(e) =>
                          setEditingSignature({
                            ...editingSignature,
                            status: e.target.checked,
                          })
                        }
                      />
                      Status
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="delete_signature">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div>
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-26" />
                </span>
                <h4 className="mb-1">Delete Signature</h4>
                <p className="mb-3">
                  Are you sure you want to delete this signature?
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    id="delete_signature_close"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      editingSignature && handleDelete(editingSignature._id)
                    }
                  >
                    Yes, Delete
                  </button>
                </div>
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

export default SignatureSetting;

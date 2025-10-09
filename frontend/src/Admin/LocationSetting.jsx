import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";


const LocationSetting = () => {
  const [countrys, setCountry] = useState([]);
  const [newCountry, setnewCountry] = useState({ countryName: "" });
  const [editCountry, seteditCountry] = useState(null);
  const [deleteCountry, setDeleteCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const getAllCountry = async (searchQuery = "", page = 1) => {
    try {
      const res = await apiService.getAllLocationSetting({
        search: searchQuery,
        page,
      });
      setCountry(res.data.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch location");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCountry();
  }, []);
  const addLocation = async (e) => {
    e.preventDefault();
    if (!newCountry.countryName.trim()) return;

    try {
      const res = await apiService.addLocationSetting({
        countryName: newCountry.countryName.trim(),
      });

      toast.success(res.data.message);

      setnewCountry({ countryName: "" });
      document.getElementById("add_setting_close")?.click();

      getAllCountry();
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  const updateLocation = async (e) => {
    e.preventDefault();
    if (!editCountry?.countryName?.trim()) {
      toast.error("city Name is required");
      return;
    }

    try {
      const res = await apiService.updateLocationSetting(editCountry._id, {
        countryName: editCountry.countryName.trim(),
        status: editCountry.status,
      });

      toast.success(res.data.message);

      document.getElementById("edit_location_close").click();

      seteditCountry(null);
      getAllCountry();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleDeleteLocation = async (id) => {
    if (!deleteCountry) return;
    try {
      const res = await apiService.deleteLocationSetting(id);
      toast.success(res.data.message);
      setDeleteCountry(null);
      getAllCountry();
      document.getElementById("delete_location_close").click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
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
                    {userType === 1 && (
                      <li className="active">
                        <Link to="/admin-dashboard/location-setting">
                          <i className="ti ti-settings-2 me-2" />
                          <span>Location Setting</span>
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="/admin-dashboard/language-setting">
                        <i className="ti ti-language me-2" />

                        <span> Language Settings</span>
                      </Link>
                    </li>

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
                <h5 className="fw-bold">App Settings</h5>
              </div>
              <div className="card-body">
                <h6 className="fw-bold mb-3">Location</h6>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3"></div>
                  <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#add_signatures"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <i className="ti ti-plus me-2" />
                      Add New City
                    </a>
                  </div>
                </div>
                <div className="custom-datatable-filter table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>City NAME</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="7" className="text-center py-4">
                            Loading...
                          </td>
                        </tr>
                      ) : countrys.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="text-center py-4">
                            No location found
                          </td>
                        </tr>
                      ) : (
                        countrys.map((loc) => (
                          <tr key={loc._id}>
                            <td>
                              <h6 className="fw-medium">
                                <a>{loc.countryName}</a>
                              </h6>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  loc.status
                                    ? "badge-success-transparent"
                                    : "badge-danger-transparent"
                                } d-inline-flex align-items-center badge-sm`}
                              >
                                <i className="ti ti-point-filled me-1" />
                                {loc.status ? "Active" : "Inactive"}
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
                                      onClick={() => seteditCountry(loc)}
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
                                      onClick={() => setDeleteCountry(loc)}
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
                      )}
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
              <h5 className="mb-0">Create Location</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="add_setting_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form onSubmit={addLocation}>
              <div className="modal-body">
                <div className="row">
                  <div className="mb-0">
                    <label className="form-label">
                      City Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={newCountry.countryName}
                      onChange={(e) =>
                        setnewCountry({
                          ...newCountry,
                          countryName: e.target.value,
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
              <h5 className="mb-0">Edit Location</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="edit_location_close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            {editCountry && (
              <form onSubmit={updateLocation}>
                <div className="modal-body">
                  <div className="row">
                    <div className="mb-0">
                      <label className="form-label">
                        City Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={editCountry.countryName}
                        onChange={(e) =>
                          seteditCountry({
                            ...editCountry,
                            countryName: e.target.value,
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
                        checked={editCountry.status}
                        onChange={(e) =>
                          seteditCountry({
                            ...editCountry,
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
                <h4 className="mb-1">Delete City</h4>
                <p className="mb-3">
                  Are you sure you want to delete this City?
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    id="delete_location_close"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      deleteCountry && handleDeleteLocation(deleteCountry._id)
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

export default LocationSetting;

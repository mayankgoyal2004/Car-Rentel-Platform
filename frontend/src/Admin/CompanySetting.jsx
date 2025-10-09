import React, { useEffect, useState } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanySetting = () => {
  const [companySetting, setCompanySetting] = useState({
    organizationName: "",
    ownerName: "",
    email: "",
    phone: "",
    addressLine: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const [loading, setLoading] = useState(false);

  const fetchCompanySetting = async () => {
    try {
      const res = await apiService.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
        if (res.data.data.profilePhoto) {
          setImagePreview(res.data.data.profilePhoto);
        }
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to fetch company Setting"
      );
    }
  };

  useEffect(() => {
    fetchCompanySetting();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("organizationName", companySetting.organizationName);
      formData.append("ownerName", companySetting.ownerName);
      formData.append("email", companySetting.email);
      formData.append("phone", companySetting.phone);
      formData.append("addressLine", companySetting.addressLine);
      formData.append("country", companySetting.country);
      formData.append("state", companySetting.state);
      formData.append("city", companySetting.city);
      formData.append("postalCode", companySetting.postalCode);

      if (image instanceof File) {
        formData.append("image", image);
      }

      await apiService.addCompanySetting(formData);

      toast.success("Company settings updated successfully!");
      fetchCompanySetting();
    } catch (err) {
      toast.error(
        "Error saving company setting : " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanySetting((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
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
                  <Link t0="/admin-dashboard">Home</Link>
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
                      <li className="active">
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
                      <li>
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
                      <li>
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
          <div className="col-xl-9">
            <div className="card">
              <div className="card-header">
                <h5>Website Settings</h5>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="localization-content mb-3">
                    <div>
                      <h6 className="mb-3">Company Settings</h6>
                      <div className="mb-3">
                        <p className="fw-medium mb-0 text-gray-9 mb-1">
                          Profile Photo
                        </p>
                        <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl  me-3 flex-shrink-0 text-dark frames">
                            {imagePreview ? (
                              <img
                                src={BASE_URL_IMG + imagePreview}
                                className="rounded-circle"
                                alt="Company Logo"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain", 
                                
                                  borderRadius: "50%",
                                }}
                              />
                            ) : (
                              <i className="ti ti-building text-gray-4 fs-24" />
                            )}
                            {imagePreview && (
                              <span
                                className="avatar-badge avatar-badge-end bg-white p-1 cursor-pointer"
                                onClick={removeImage}
                              >
                                <i className="ti ti-trash text-danger fs-12" />
                              </span>
                            )}
                          </div>
                          <div className="profile-upload">
                            <div className="profile-uploader d-flex align-items-center">
                              <div className="drag-upload-btn btn btn-md btn-dark position-relative">
                                <i className="ti ti-photo-up fs-14" />
                                {imagePreview ? "Change" : "Upload"}
                                <input
                                  type="file"
                                  className="form-control image-sign position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="fs-14">
                                Recommended size is 500px x 500px, Max 5MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="localization-content mb-3">
                    <h6 className="mb-3">Basic Information</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Organization Name{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="organizationName"
                            value={companySetting.organizationName || ""}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Owner Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="ownerName"
                            value={companySetting.ownerName || ""}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={companySetting.email || ""}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={companySetting.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="localization-content mb-3">
                    <h6 className="mb-3">Address Information</h6>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Address Line</label>
                          <input
                            type="text"
                            className="form-control"
                            name="addressLine"
                            value={companySetting.addressLine || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Country</label>
                          <select
                            className="form-select"
                            name="country"
                            value={companySetting.country || ""}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Germany">Germany</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">State</label>
                          <select
                            className="form-select"
                            name="state"
                            value={companySetting.state || ""}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="California">California</option>
                            <option value="New York">New York</option>
                            <option value="Texas">Texas</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">City</label>
                          <select
                            className="form-select"
                            name="city"
                            value={companySetting.city || ""}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York City">New York City</option>
                            <option value="Houston">Houston</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="postalCode"
                            value={companySetting.postalCode || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      className="btn btn-light me-2"
                      onClick={() => fetchCompanySetting()} // Reset form
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </div>
              </form>
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

export default CompanySetting;

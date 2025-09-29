import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";
import { addUser } from "../../utils/userSlice";
import { Link } from "react-router-dom";

const AdminProfileSetting = () => {
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const res = await apiService.getUerDetails();
      const { user } = res.data;
      setFirstName(user?.firstName || "");
      setLastName(user?.lastName || "");
      setUserName(user?.userName || "");
      setEmail(user?.email || "");
      setPhone(user?.contact || "");
      setAddress(user?.address || "");

      const img = user?.image || null;
      setImage(img);
      if (img) {
        setImagePreview(
          typeof img === "string"
            ? BASE_URL_IMG + img
            : URL.createObjectURL(img)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Submit updated user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("contact", phone);
      formData.append("address", address);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);

      if (image instanceof File) {
        formData.append("image", image);
      } else if (typeof image === "string" && image !== "") {
        formData.append("image", image);
      }

      const res = await apiService.updateAdmin(formData);

      alert("Profile updated!");
      dispatch(addUser(res?.data?.admin)); // update Redux with backend response
      fetchUser(); // reload updated data
    } catch (err) {
      console.error(err);
      alert("Error saving profile");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="page-wrapper">
      <div className="content me-0 pb-0">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Settings</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
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
            {/* inner sidebar */}
            <div className="settings-sidebar slimscroll">
              <div className="sidebar-menu">
                <ul>
                  <li className="menu-title">
                    <span>ACCOUNT SETTING</span>
                  </li>
                  <li>
                    <ul className="sidebar-links pb-3 mb-3 border-bottom">
                      <li className="active">
                        <a href="profile-setting.html">
                          <i className="ti ti-user-edit me-2" />
                          Profile
                        </a>
                      </li>
                      <li>
                        <Link to="/admin-dashboard/security-setting">
                          <i className="ti ti-lock me-2" />
                          Security
                        </Link>
                      </li>
                    </ul>
                    <li className="menu-title">
                      <span>WEBSITE SETTING</span>
                    </li>
                    <li>
                      <ul className="sidebar-links pb-3 mb-3 border-bottom">
                        <li>
                          <a href="company-setting.html">
                            <i className="ti ti-building me-2" />
                            <span>Company Settings</span>
                            <span className="track-icon" />
                          </a>
                        </li>
                        <li>
                          <a href="localization-setting.html">
                            <i className="ti ti-settings-2 me-2" />
                            <span>Localization</span>
                          </a>
                        </li>

                        <li>
                          <a href="language-setting.html">
                            <i className="ti ti-language me-2" />
                            <span>Language</span>
                          </a>
                        </li>
                        <li>
                          <Link to="/admin-dashboard/invoice-setting">
                            <i className="ti ti-file-invoice me-2" />
                            <span>Invoice Settings</span>
                            <span className="track-icon" />
                          </Link>
                        </li>
                        <li>
                          <a href="signatures-setting.html">
                            <i className="ti ti-signature me-2" />
                            <span>Signatures</span>
                          </a>
                        </li>
                        <li>
                          <Link to="bank-account-setting">
                            <i class="ti ti-file-dollar me-2" />
                            <span>Bank Accounts</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            {/* /inner sidebar */}
          </div>
          <div className="col-lg-9">
            <div className="card profile-setting-section">
              <div className="card-header">
                <h5 className="fw-bold">Account Settings</h5>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="card-body pb-1">
                  <h6 className="fw-bold mb-3">Basic Information</h6>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Profile Photo</label>
                          <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 text-dark frames">
                              {imagePreview && (
                                <img
                                  src={imagePreview}
                                  className="img-fluid"
                                  alt="Profile"
                                />
                              )}
                            </div>
                            <div className="profile-upload">
                              <div className="profile-uploader d-flex align-items-center">
                                <div className="drag-upload-btn btn btn-md btn-dark">
                                  <i className="ti ti-photo-up fs-14" />
                                  Change
                                  <input
                                    type="file"
                                    className="form-control image-sign"
                                    onChange={handleImageChange}
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <p className="fs-14">
                                  Recommended size is 500px x 500px
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            User Name{" "}
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last Name<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Email Address
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="fw-bold mb-3">Address Information</h6>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Address Line</label>
                        <textarea
                          className="form-control"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={fetchUser}
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
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
        {/* /Settings Prefix */}
      </div>
    </div>
  );
};

export default AdminProfileSetting;

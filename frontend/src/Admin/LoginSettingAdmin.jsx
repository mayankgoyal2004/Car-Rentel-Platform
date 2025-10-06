import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const LoginSettingAdmin = () => {
  const [captchaSetting, setCaptchaSetting] = useState({
    status: false,
    siteKey: "",
    secretKey: "",
  });
  const [loading, setLoading] = useState(false);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType;
  const getLoginSetting = async () => {
    try {
      setLoading(true);
      const res = await apiService.getCaptchaSetting();
      if (res.data.data) {
        setCaptchaSetting({
          status: res.data.data.status || false,
          siteKey: res.data.data.siteKey || "",
          secretKey: res.data.data.secretKey || "",
        });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to fetch captcha setting"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoginSetting();
  }, []);

  const updateCaptchaSetting = async (e) => {
    e.preventDefault();

    try {
      if (
        captchaSetting.status &&
        (!captchaSetting.siteKey || !captchaSetting.secretKey)
      ) {
        toast.error(
          "Site Key and Secret Key are required when captcha is enabled"
        );
        return;
      }

      await apiService.updatecaptchaSetting(captchaSetting);
      toast.success("Captcha settings updated successfully");
    } catch (err) {
      toast.error("Failed to update captcha settings" + err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCaptchaSetting((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleCaptchaStatus = async (newStatus) => {
    try {
      const updatedSettings = {
        ...captchaSetting,
        status: newStatus,
      };

      if (!newStatus || (captchaSetting.siteKey && captchaSetting.secretKey)) {
        await apiService.updatecaptchaSetting(updatedSettings);
        setCaptchaSetting(updatedSettings);
        toast.success(
          `Captcha ${newStatus ? "enabled" : "disabled"} successfully`
        );
      } else {
        document.getElementById("configureCaptcha").click();
      }
    } catch (err) {
      toast.error("Failed to update captcha status" + err.message);
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
                      <li className="active">
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
                      <li>
                        <Link to="/admin-dashboard/location-setting">
                          <i className="ti ti-settings-2 me-2" />
                          <span>Location Setting</span>
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="/admin-dashboard/localization-setting">
                        <i className="ti ti-language me-2" />

                        <span>Localization</span>
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
          <div className="col-lg-9">
            <div className="card">
              <div className="card-header">
                <h5 className="fw-bold">Website Settings</h5>
              </div>
              <div className="card-body pb-0">
                <h6 className="fw-bold mb-3">Login &amp; Register</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                          <div className="d-flex align-items-center">
                            <a
                              className="p-2 bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#google_login"
                              id="configureCaptcha"
                            >
                              <img
                                src="/admin-assets/img/brands/google.svg"
                                alt="Google reCAPTCHA"
                                width="20"
                                height="20"
                              />
                            </a>
                            <a
                              className="fs-13"
                              data-bs-toggle="modal"
                              data-bs-target="#google_login"
                            >
                              Google reCAPTCHA
                            </a>
                          </div>
                          <span
                            className={`badge ${
                              captchaSetting.status
                                ? "badge-success-transparent"
                                : "badge-danger-transparent"
                            } d-inline-flex align-items-center fs-12`}
                          >
                            <i
                              className={`ti ti-point-filled me-1 ${
                                captchaSetting.status
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                            />
                            {captchaSetting.status ? "Enabled" : "Disabled"}
                          </span>
                        </div>
                        <p className="fs-14">
                          {captchaSetting.status
                            ? "Google reCAPTCHA is enabled for secure login and registration."
                            : "Enable Google reCAPTCHA to protect your forms from spam and abuse."}
                        </p>
                      </div>
                      <div className="card-footer py-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            className="d-flex align-items-center fw-medium"
                            data-bs-toggle="modal"
                            data-bs-target="#google_login"
                          >
                            <i className="ti ti-settings me-1" />
                            Configure
                          </a>
                          <div className="form-check form-check-md form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={captchaSetting.status}
                              onChange={(e) =>
                                toggleCaptchaStatus(e.target.checked)
                              }
                              disabled={loading}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google reCAPTCHA Configuration Modal */}
        <div className="modal fade" id="google_login">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Google reCAPTCHA Settings</h5>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="modalClose"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <form onSubmit={updateCaptchaSetting}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">
                      Site Key <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="siteKey"
                      value={captchaSetting.siteKey}
                      onChange={handleInputChange}
                      placeholder="Enter your reCAPTCHA site key"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Secret Key{" "}
                      {captchaSetting.status && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                    <input
                      type="test"
                      className="form-control"
                      name="secretKey"
                      value={captchaSetting.secretKey}
                      onChange={handleInputChange}
                      placeholder="Enter your reCAPTCHA secret key"
                    />
                  </div>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      name="status"
                      checked={captchaSetting.status}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label fw-medium">
                      Enable Google reCAPTCHA
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="d-flex justify-content-center w-100">
                    <button
                      type="button"
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Settings
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

export default LoginSettingAdmin;

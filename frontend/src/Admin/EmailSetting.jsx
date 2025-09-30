import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const EmailSetting = () => {
  const [emailSetting, setEmailSetting] = useState({
    status: false,
    fromEmail: "",
    smtpPassword: "",
    smtpHost: "",
    smtpPort: "",
  });

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const [loading, setLoading] = useState(false);
  const getSmtpSetting = async () => {
    try {
      setLoading(true);
      const res = await apiService.getSmtpSetting();
      if (res.data.data) {
        setEmailSetting({
          status: res.data.data.status || false,
          fromEmail: res.data.data.fromEmail || "",
          smtpPassword: res.data.data.smtpPassword || "",
          smtpHost: res.data.data.smtpHost || "",
          smtpPort: res.data.data.smtpPort || "",
        });
      }
    } catch (err) {
      toast.error("Failed to load email settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSmtpSetting();
  }, []);
  const updateSMTPSetting = async (e) => {
    e.preventDefault();

    try {
      if (
        emailSetting.status &&
        (!emailSetting.fromEmail ||
          !emailSetting.smtpPassword ||
          !emailSetting.smtpHost ||
          !emailSetting.smtpPort)
      ) {
        toast.error("All Fields are required for enable email settings");
        return;
      }

      await apiService.updatesmtpSetting(emailSetting);
      toast.success("SMTP settings updated successfully");
    } catch (err) {
      toast.error("Failed to update SMTP settings");
    }
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmailSetting((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toogleEmailStaus = async (newStatus) => {
    try {
      const updatedSettings = {
        ...emailSetting,
        status: newStatus,
      };

      await apiService.updatesmtpSetting(updatedSettings);
      setEmailSetting(updatedSettings);
      toast.success(`SMTP ${newStatus ? "enabled" : "disabled"} successfully`);
    } catch (err) {
      toast.error("Failed to update SMTP status");
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
                      <li  className="active">
                        <Link to="/admin-dashboard/email-setting">
                          <i className="ti ti-mail me-2" />
                          <span>Email Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <a href="localization-setting.html">
                          <i className="ti ti-settings-2 me-2" />
                          <span>Localization</span>
                        </a>
                      </li>
                    )}
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
                <h5>System Settings</h5>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="mb-3">Email Settings</h6>
                  <a
                    className="btn btn-primary mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#sendgrid"
                  >
                    <i className="ti ti-send me-1" />
                    Send Test Email
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="card flex-fill">
                      <div className="card-body">
                        <div className="border-bottom mb-3">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-lg bg-light me-2 p-2">
                                <img
                                  src="/admin-assets/img/settings/smtp.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </span>
                              <p className="text-gray-9">SMTP</p>
                            </div>

                            <span
                              className={`badge ${
                                emailSetting.status
                                  ? "badge-success-transparent"
                                  : "badge-danger-transparent"
                              } d-inline-flex align-items-center fs-12`}
                            >
                              <i
                                className={`ti ti-point-filled me-1 ${
                                  emailSetting.status
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                              />
                              {emailSetting.status ? "Enabled" : "Disabled"}
                            </span>
                          </div>
                          <p className="fs-13 mb-3">
                            SMTP is used to send, relay or forward messages from
                            a mail client.
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <a
                            className="fw-medium text-gray-9 d-flex align-items-center mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#smtpsettings"
                          >
                            <i className="ti ti-settings me-1" />
                            Configure
                          </a>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={emailSetting.status}
                              onChange={(e) =>
                                toogleEmailStaus(e.target.checked)
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
      </div>
      <div className="modal fade" id="smtpsettings">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">SMTP</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form onSubmit={updateSMTPSetting}>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        From Email Address{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fromEmail"
                        value={emailSetting.fromEmail}
                        onChange={handleInputChange}
                        placeholder="Enter your Email "
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        SMTP Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="smtpPassword"
                        value={emailSetting.smtpPassword}
                        onChange={handleInputChange}
                        placeholder="Enter your Email "
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        SMTP Host <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="smtpHost"
                        value={emailSetting.smtpHost}
                        onChange={handleInputChange}
                        placeholder="Enter your Email "
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        SMTP Port <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="smtpPort"
                        value={emailSetting.smtpPort}
                        onChange={handleInputChange}
                        placeholder="Enter your Email "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-light border me-3"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal fade" id="sendgrid">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Test Mail</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Enter Email Address{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-light border me-3"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
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

export default EmailSetting;

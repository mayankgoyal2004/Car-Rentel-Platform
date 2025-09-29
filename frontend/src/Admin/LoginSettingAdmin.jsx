import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSettingAdmin = () => {
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
                  <li className="menu-title">
                    <span>ACCOUNT SETTING</span>
                  </li>
                  <li>
                    <ul className="sidebar-links pb-3 mb-3 border-bottom">
                      <li>
                        <a href="profile-setting.html">
                          <i className="ti ti-user-edit me-2" />
                          <span>Profile</span>
                          <span className="track-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="security-setting.html">
                          <i className="ti ti-lock me-2" />
                          <span>Security</span>
                        </a>
                      </li>
                    </ul>
                  </li>
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
                        <Link className="active">
                          <i className="ti ti-signature me-2" />
                          <span>Signatures</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>SYSTEM SETTINGS</span>
                  </li>
                  <li>
                    <ul className="sidebar-links pb-3 mb-3 border-bottom">
                      <li>
                        <a href="email-setting.html">
                          <i className="ti ti-mail me-2" />
                          <span>Email Settings</span>
                          <span className="track-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="email-templates.html">
                          <i className="ti ti-mail-fast me-2" />
                          <span>Email Templates</span>
                          <span className="track-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="sms-gateways.html">
                          <i className="ti ti-messages me-2" />
                          <span>SMS Gateways</span>
                          <span className="track-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-cookies.html">
                          <i className="ti ti-cookie me-2" />
                          <span>GDPR Cookies</span>
                          <span className="track-icon" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>FINANCE SETTINGS</span>
                  </li>
                  <li>
                    <ul className="sidebar-links pb-3 mb-3 border-bottom">
                      <li>
                        <a href="bank-accounts.html">
                          <i className="ti ti-file-dollar me-2" />
                          <span>Bank Accounts</span>
                        </a>
                      </li>
                      <li className="active">
                        <Link>
                          <i class="ti ti-lock-bolt me-2"></i>
                          <span>Login & Register</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
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
                            >
                              <img
                                src="/admin-assets/img/brands/google.svg"
                                alt="img"
                              />
                            </a>
                            <a
                              className="fs-13"
                              data-bs-toggle="modal"
                              data-bs-target="#google_login"
                            >
                              Google
                            </a>
                          </div>
                          <span className="badge badge-dark-transparent d-inline-flex align-items-center fs-12">
                            <i className="ti ti-point-filled text-success" />
                            Connected
                          </span>
                        </div>
                        <p className="fs-14">
                          Streamline your access using your Google Captcha for
                          secure and efficient login.
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
                              className="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              defaultChecked
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

        <div className="modal fade" id="google_login">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Google Login Settings</h5>
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
                  <label className="form-label">
                    Client ID<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Client Secret Key<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Login Redirect URL
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <a href="javascript:void(0);" className="btn btn-primary">
                    Submit
                  </a>
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

export default LoginSettingAdmin;

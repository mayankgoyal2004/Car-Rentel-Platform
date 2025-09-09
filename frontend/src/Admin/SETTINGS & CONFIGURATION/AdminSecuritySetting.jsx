import React from 'react'

const AdminSecuritySetting = () => {
  return (
   <div>
  <div className="page-wrapper">
    <div className="content me-4 pb-0">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Settings</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="row">
        <div className="col-xl-3">
          {/* inner sidebar */}
          <div className="settings-sidebar slimscroll">
            <div className="sidebar-menu">
              <ul>
                <li className="menu-title"><span>ACCOUNT SETTING</span></li>
                <li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <a href="profile-setting.html">
                        <i className="ti ti-user-edit me-2" /><span>Profile</span><span className="track-icon" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="security-setting.html">
                        <i className="ti ti-lock me-2" /><span>Security</span>
                      </a>
                    </li>
                    <li>
                      <a href="notifications-setting.html">
                        <i className="ti ti-bell me-2" /><span>Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="integrations-settings.html">
                        <i className="ti ti-device-nintendo me-2" /><span>Integrations</span>
                      </a>
                    </li>
                    <li>
                      <a href="tracker-setting.html">
                        <i className="ti ti-brand-stackshare me-2" /><span>Tracker</span>
                      </a>
                    </li>
                  </ul>							
                </li>
                <li className="menu-title"><span>WEBSITE SETTING</span></li>
                <li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <a href="company-setting.html">
                        <i className="ti ti-building me-2" /><span>Company Settings</span><span className="track-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="localization-setting.html">
                        <i className="ti ti-settings-2 me-2" /><span>Localization</span>
                      </a>
                    </li>
                    <li>
                      <a href="prefixes.html">
                        <i className="ti ti-corner-up-left-double me-2" /><span>Prefixes</span>
                      </a>
                    </li>
                    <li>
                      <a href="seo-setup.html">
                        <i className="ti ti-seo me-2" /><span>SEO Setup</span>
                      </a>
                    </li>
                    <li>
                      <a href="language-setting.html">
                        <i className="ti ti-language me-2" /><span>Language</span>
                      </a>
                    </li>
                    <li>
                      <a href="maintenance-mode.html">
                        <i className="ti ti-color-filter me-2" /><span>Maintenance Mode</span>
                      </a>
                    </li>
                    <li>
                      <a href="login-setting.html">
                        <i className="ti ti-lock-bolt me-2" /><span>Login &amp; Register</span>
                      </a>
                    </li>
                    <li>
                      <a href="ai-configuration.html">
                        <i className="ti ti-grain me-2" /><span>AI Configuration</span>
                      </a>
                    </li>
                    <li>
                      <a href="plugin-managers.html">
                        <i className="ti ti-car-crash me-2" /><span>Plugin Managers</span>
                      </a>
                    </li>
                  </ul>							
                </li>
                <li className="menu-title"><span>RENTAL SETTINGS</span></li>
                <li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <a href="rental-setting.html">
                        <i className="ti ti-file-invoice me-2" /><span>Rental</span><span className="track-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="insurance-setting.html">
                        <i className="ti ti-file-delta me-2" /><span>Insurance</span>
                      </a>
                    </li>
                  </ul>							
                </li>
                <li className="menu-title"><span>APP SETTINGS</span></li>
                <li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <a href="invoice-setting.html">
                        <i className="ti ti-file-invoice me-2" /><span>Invoice Settings</span><span className="track-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="invoice-template.html">
                        <i className="ti ti-template me-2" /><span>Invoice Templates</span>
                      </a>
                    </li>
                    <li>
                      <a href="signatures-setting.html">
                        <i className="ti ti-signature me-2" /><span>Signatures</span>
                      </a>
                    </li>
                    <li>
                      <a href="custom-fields.html">
                        <i className="ti ti-forms me-2" /><span>Custom Fields</span>
                      </a>
                    </li>
                  </ul>							
                </li>
                <li className="menu-title"><span>SYSTEM SETTINGS</span></li>
                <li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <a href="email-setting.html">
                        <i className="ti ti-mail me-2" /><span>Email Settings</span><span className="track-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="email-templates.html">
                        <i className="ti ti-mail-fast me-2" /><span>Email Templates</span><span className="track-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="sms-gateways.html">
                        <i className="ti ti-messages me-2" /><span>SMS Gateways</span><span className="track-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="gdpr-cookies.html">
                        <i className="ti ti-cookie me-2" /><span>GDPR Cookies</span><span className="track-icon" />
                      </a>
                    </li>
                  </ul>							
                </li>
                <li className="menu-title"><span>FINANCE SETTINGS</span></li>
                <li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <a href="payment-methods.html">
                        <i className="ti ti-currency-dollar me-2" /><span>Payment Methods</span>
                      </a>
                    </li>
                    <li>
                      <a href="bank-accounts.html">
                        <i className="ti ti-file-dollar me-2" /><span>Bank Accounts</span>
                      </a>
                    </li>
                    <li>
                      <a href="tax-rates.html">
                        <i className="ti ti-file-percent me-2" /><span>Tax Rates</span>
                      </a>
                    </li>
                    <li>
                      <a href="currencies.html">
                        <i className="ti ti-world-dollar me-2" /><span>Currencies</span>
                      </a>
                    </li>
                  </ul>							
                </li>
                <li className="menu-title"><span>OTHER SETTINGS</span></li>
                <li>
                  <ul className="sidebar-links">
                    <li>
                      <a href="sitemap.html">
                        <i className="ti ti-map me-2" /><span>Sitemap</span>
                      </a>
                    </li>
                    <li>
                      <a href="clear-cache.html">
                        <i className="ti ti-database-x me-2" /><span>Clear Cache</span>
                      </a>
                    </li>
                    <li>
                      <a href="storage.html">
                        <i className="ti ti-database me-2" /><span>Storage</span>
                      </a>
                    </li>
                    <li>
                      <a href="cronjob.html">
                        <i className="ti ti-clock-cog me-2" /><span>Cronjob</span>
                      </a>
                    </li>
                    <li>
                      <a href="system-backup.html">
                        <i className="ti ti-file-check me-2" /><span>System Backup</span>
                      </a>
                    </li>
                    <li>
                      <a href="database-backup.html">
                        <i className="ti ti-file-database me-2" /><span>Database Backup</span>
                      </a>
                    </li>
                    <li>
                      <a href="system-update.html">
                        <i className="ti ti-refresh-dot me-2" /><span>System Update</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* /inner sidebar */}
        </div>
        <div className="col-xl-9">
          <div className="card">
            <div className="card-header">
              <h5>Account Settings</h5>
            </div>
            <div className="card-body">
              <div className="security-content">
                <h6 className="mb-3">Security</h6>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row gy-3 align-items-center">
                      <div className="col-lg-9">
                        <div className="row gy-3 align-items-center">
                          <div className="col-md-6">
                            <div>
                              <h6 className="fs-14 fw-medium">Password</h6>
                              <p className="fs-13">Set a unique password to secure the account</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <p><i className="ti ti-circle-check-filled text-success me-1" />Last Changed 22 Jan 2025, 10:30 AM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#change_password">Change</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row gy-3 align-items-center">
                      <div className="col-lg-9">
                        <div className="row gy-3 align-items-center">
                          <div className="col-md-6">
                            <div>
                              <h6 className="fs-14 fw-medium">Google Authentication</h6>
                              <p className="fs-13">Connect to Google</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <span className="badge badge-outline d-inline-flex align-items-center badge-sm"> <i className="ti ti-point-filled text-success" />Connected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-end">
                          <div className="form-check form-check-md form-switch">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row gy-3 align-items-center">
                      <div className="col-lg-9">
                        <div className="row gy-3 align-items-center">
                          <div className="col-md-6">
                            <div>
                              <h6 className="fs-14 fw-medium">Phone Number Verification</h6>
                              <p className="fs-13">Connect to Google</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <p><i className="ti ti-circle-check-filled text-success me-1" />Verified Mobile Number : +1 648 349 1782</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" className="btn btn-light me-2">Remove</a>
                          <a href="javascript:void(0);" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#change_phonenumber">Change</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row gy-3 align-items-center">
                      <div className="col-lg-9">
                        <div className="row gy-3 align-items-center">
                          <div className="col-md-6">
                            <div>
                              <h6 className="fs-14 fw-medium">Email Verification</h6>
                              <p className="fs-13">The Email associated with the account</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <p><i className="ti ti-circle-check-filled text-success me-1" />Verified Email : <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bfd6d1d9d0ffdac7ded2cfd3da91dcd0d2">[email&nbsp;protected]</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" className="btn btn-light me-2">Remove</a>
                          <a href="javascript:void(0);" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#change_email">Change</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row gy-3 align-items-center">
                      <div className="col-lg-9">
                        <div>
                          <h6 className="fs-14 fw-medium">Deactivate Account</h6>
                          <p className="fs-13">This will shutdown your account. Your account will be reactive when you sign in again</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" className="btn btn-dark">Deactivate</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row gy-3 align-items-center">
                      <div className="col-lg-9">
                        <div>
                          <h6 className="fs-14 fw-medium">Delete Account</h6>
                          <p className="fs-13">Your account will be permanently deleted</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-lg-end">
                          <a href="javascript:void(0);" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#delete_account">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="row gy-3 align-items-center">
                        <div className="col-lg-9">
                          <div>
                            <h6 className="fs-14 fw-medium">Browsers &amp; Devices</h6>
                            <p className="fs-13">The browsers &amp; devices associated with the account</p>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="d-flex justify-content-lg-end">
                            <a href="javascript:void(0);" className="btn btn-dark">Sign out from all</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-datatable-filter table-responsive brandstable security-table">
                      <table className="table datatable">
                        <thead className="thead-light">
                          <tr>
                            <th>DEVICE</th>
                            <th>DATE</th>
                            <th>IP ADDRESS</th>
                            <th>LOCATION</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6 className="fs-14">Chrome - Windows</h6>
                            </td>
                            <td>
                              <p className="text-gray-9">24 Jan 2025, 10:00 AM</p>
                            </td>
                            <td>
                              <p className="text-gray-9">232.222.12.72</p>
                            </td>
                            <td>
                              <p className="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div className="action-btn">
                                <a href="javascript:void(0);" className="p-1"><i className="ti ti-logout text-dark" /></a>
                              </div>
                            </td>
                          </tr>                                                                                                  
                          <tr>
                            <td>
                              <h6 className="fs-14">Safari Macos</h6>
                            </td>
                            <td>
                              <p className="text-gray-9">19 Dec 2024, 09:30 AM</p>
                            </td>
                            <td>
                              <p className="text-gray-9">224.111.12.75</p>
                            </td>
                            <td>
                              <p className="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div className="action-btn">
                                <a href="javascript:void(0);" className="p-1"><i className="ti ti-logout text-dark" /></a>
                              </div>
                            </td>
                          </tr>                                                                                                  
                          <tr>
                            <td>
                              <h6 className="fs-14">Firefox Windows</h6>
                            </td>
                            <td>
                              <p className="text-gray-9">11 Dec 2024, 05:20 PM</p>
                            </td>
                            <td>
                              <p className="text-gray-9">111.222.13.28</p>
                            </td>
                            <td>
                              <p className="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div className="action-btn">
                                <a href="javascript:void(0);" className="p-1"><i className="ti ti-logout text-dark" /></a>
                              </div>
                            </td>
                          </tr>                                                                                                  
                          <tr>
                            <td>
                              <h6 className="fs-14">Safari Macos</h6>
                            </td>
                            <td>
                              <p className="text-gray-9">29 Nov 2024, 04:45 PM</p>
                            </td>
                            <td>
                              <p className="text-gray-9">333.555.10.54</p>
                            </td>
                            <td>
                              <p className="text-gray-9">New York / USA</p>
                            </td>
                            <td>
                              <div className="action-btn">
                                <a href="javascript:void(0);" className="p-1"><i className="ti ti-logout text-dark" /></a>
                              </div>
                            </td>
                          </tr>                                                                                                  
                        </tbody>
                      </table>
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
  {/* /Page Wrapper */}
  {/* Change-password */}
  <div className="modal fade" id="change_password">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Change Password</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Current Password <span className="text-danger">*</span></label>
            <div className="pass-group">
              <input type="password" className="pass-inputs form-control" />
              <span className="ti toggle-passwords ti-eye-off" />
            </div>
          </div>
          <div className="input-block mb-3">
            <div className="mb-3">
              <label className="form-label">New Password <span className="text-danger">*</span></label>
              <div className="pass-group" id="passwordInput">
                <input type="password" className="form-control pass-input" />
                <span className="ti toggle-password ti-eye-off" />
              </div>
            </div>
            <div className="password-strength d-flex" id="passwordStrength">
              <span id="poor" />
              <span id="weak" />
              <span id="strong" />
              <span id="heavy" />
            </div>
            <div id="passwordInfo" className="mb-2" />
            <p className="fs-12">Use 8 or more characters with a mix of letters, numbers &amp;
              symbols.</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
            <div className="pass-group">
              <input type="password" className="pass-inputa form-control" />
              <span className="ti toggle-passworda ti-eye-off" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="security-setting.html" className="btn btn-primary">Save Changes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change-password */}
  {/* Change-phone-number */}
  <div className="modal fade" id="change_phonenumber">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Change Phone Number</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Current Phone Number<span className="text-danger">*</span></label>
            <div>
              <input type="password" className="form-control" id="phone" />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-3">
              <label className="form-label">New Phone Number <span className="text-danger">*</span></label>
              <div>
                <input type="password" className="form-control" id="phone2" />
              </div>
            </div>
            <p className="d-flex align-items-center"><i className="ti ti-info-circle me-1" />New phone number only updated once you verified </p>
          </div>
          <div className="mb-3">
            <label className="form-label">Current Password <span className="text-danger">*</span></label>
            <div className="pass-group">
              <input type="password" className="pass-inputa form-control" />
              <span className="ti toggle-passworda ti-eye-off" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="security-setting.html" className="btn btn-primary">Save Changes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change-phone-number */}
  {/* Change-email */}
  <div className="modal fade" id="change_email">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Change Email Address</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Current Email Address <span className="text-danger">*</span></label>
            <div>
              <input type="password" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-3">
              <label className="form-label">New Email Address <span className="text-danger">*</span></label>
              <div>
                <input type="password" className="form-control" />
              </div>
            </div>
            <p className="d-flex align-items-center"><i className="ti ti-info-circle me-1" />New email address only updated once you verified </p>
          </div>
          <div className="mb-3">
            <label className="form-label">Current Password <span className="text-danger">*</span></label>
            <div className="pass-group">
              <input type="password" className="pass-inputa form-control" />
              <span className="ti toggle-passworda ti-eye-off" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="security-setting.html" className="btn btn-primary">Save Changes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change-email */}
  {/* Delete Account */}
  <div className="modal fade" id="delete_account">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Delete Account</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <p className="text-gray-9 fw-medium mb-0">Why Are You Deleting Your Account?</p>
            <span className="fs-13">We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</span>
          </div>
          <label className="d-flex align-items-center mb-3 form-check-label">
            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p className="text-gray-9 fw-medium mb-0">No longer using the service</p>
              <span className="fs-13">I no longer need this service and won’t be using it in the future.</span>
            </div>
          </label>
          <label className="d-flex align-items-center mb-3 form-check-label">
            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p className="text-gray-9 fw-medium mb-0">Privacy concerns</p>
              <span className="fs-13">I am concerned about how my data is handled and want to remove</span>
            </div>
          </label>
          <label className="d-flex align-items-center mb-3 form-check-label">
            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p className="text-gray-9 fw-medium mb-0">Too many notifications/emails</p>
              <span className="fs-13">I’m overwhelmed by the volume of notifications or emails</span>
            </div>
          </label>
          <label className="d-flex align-items-center mb-3 form-check-label">
            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p className="text-gray-9 fw-medium mb-0">Poor user experience</p>
              <span className="fs-13">I’ve had difficulty using the platform, and it didn’t meet my expectations</span>
            </div>
          </label>
          <label className="d-flex align-items-center mb-3 form-check-label">
            <input className="form-check-input mt-0 me-2" type="radio" name="flexRadioDefault" />
            <div>
              <p className="text-gray-9 fw-medium mb-0">Other (Please specify)</p>
            </div>
          </label>
          <div className="mb-0">
            <label className="form-label">Reason<span className="text-danger ms-1">*</span></label>
            <textarea className="form-control" rows={3} defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Confirm &amp; Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Account */}
</div>

  )
}

export default AdminSecuritySetting
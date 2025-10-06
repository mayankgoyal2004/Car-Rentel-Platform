import React from "react";
import { Link, Outlet } from "react-router-dom";
import { User } from "react-feather";

const UserSetting = () => {
  return (
    <div className="content">
      <div className="container">
        {/* Content Header */}
        <div className="content-header content-settings-header">
          <h4>Settings</h4>
        </div>
        {/* /Content Header */}
        <div className="row">
          {/* Settings Menu */}
          <div className="col-lg-3 theiaStickySidebar">
            <div className="settings-widget">
              <div className="settings-menu">
                <ul>
                  <li>
                    <Link to="" className="active">
                      <User size={20} />  Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Settings Menu */}
          {/* Settings Details */}
          <Outlet />
          {/* /Settings Details */}
        </div>
      </div>
      <div>
        {/* Change Password Modal */}
        {/* <div
          className="modal new-modal fade"
          id="change_password"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Change Password</h4>
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="modal-form-group">
                        <label>
                          Old Password <span className="text-danger">*</span>
                        </label>
                        <div className="pass-group">
                          <input
                            type="password"
                            className="form-control pass-input-three"
                            placeholder="............."
                          />
                          <span className="feather-eye-off toggle-password-three" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="modal-form-group">
                        <label>
                          New Password <span className="text-danger">*</span>
                        </label>
                        <div className="pass-group">
                          <input
                            type="password"
                            className="form-control pass-input-four"
                            placeholder="............."
                          />
                          <span className="feather-eye-off toggle-password-four" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="modal-form-group">
                        <label>
                          Confirm Password
                          <span className="text-danger">*</span>
                        </label>
                        <div className="pass-group">
                          <input
                            type="password"
                            className="form-control pass-input-five"
                            placeholder="............."
                          />
                          <span className="feather-eye-off toggle-password-five" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-btn modal-btn-sm">
                    <button type="submit" className="btn btn-secondary">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        {/* /Change Password Modal */}
        {/* Change Phone Number Modal */}
        {/* /Change Phone Number Modal */}
        {/* /OTP Verification Modal */}
        {/* Verification Success Modal */}
        {/* /Verification Success Modal */}
        {/* /Change Email Modal */}
        {/* Email Verification Modal */}
        {/* /Email Verification Modal */}
        {/* Email Verification Success Modal */}
        {/* /Email Verification Success Modal */}
        {/* Deactive Account Modal */}\{/* /Deactive Account Modal */}
        {/* Delete Modal */}
        {/* /Delete Modal */}
        {/* Delete Modal */}
        <div
          className="modal new-modal fade"
          id="delete_account"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="delete-action">
                  <div className="delete-header">
                    <h4>Delete Account</h4>
                    <p>Are you sure want to delete?</p>
                  </div>
                  <div className="modal-btn">
                    <div className="row">
                      <div className="col-6">
                        <a
                          href="javascript:void(0);"
                          data-bs-dismiss="modal"
                          className="btn btn-secondary w-100"
                        >
                          Delete
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          href="javascript:void(0);"
                          data-bs-dismiss="modal"
                          className="btn btn-primary w-100"
                        >
                          Cancel
                        </a>
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
  );
};

export default UserSetting;

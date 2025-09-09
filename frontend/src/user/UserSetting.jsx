import React from 'react'
import { Link, Outlet } from 'react-router-dom'

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
                  <i className="feather-user" /> Profile
                </Link>
              </li>
              <li>
                <Link to="user-profile-setting" >
                  <i className="feather-shield" /> Security
                </Link>
              </li>
              <li>
                <Link to="user-preference" >
                  <i className="feather-star" /> Preferences
                </Link>
              </li>
              <li>
                <Link to="user-notification">
                  <i className="feather-bell" /> Notifications
                </Link>
              </li>
              <li>
                <Link to="user-integration" >
                  <i className="feather-git-merge" /> Integration
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
  <div className="modal new-modal fade" id="change_password" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Change Password</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="row">
              <div className="col-md-12">
                <div className="modal-form-group">
                  <label>Old Password <span className="text-danger">*</span></label>
                  <div className="pass-group">
                    <input type="password" className="form-control pass-input-three" placeholder="............." />
                    <span className="feather-eye-off toggle-password-three" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="modal-form-group">
                  <label>New Password <span className="text-danger">*</span></label>
                  <div className="pass-group">
                    <input type="password" className="form-control pass-input-four" placeholder="............." />
                    <span className="feather-eye-off toggle-password-four" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="modal-form-group">
                  <label>Confirm Password
                    <span className="text-danger">*</span></label>
                  <div className="pass-group">
                    <input type="password" className="form-control pass-input-five" placeholder="............." />
                    <span className="feather-eye-off toggle-password-five" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-btn modal-btn-sm">
              <button type="submit" className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Change Password Modal */}
  {/* Change Phone Number Modal */}
  <div className="modal new-modal multi-step fade" id="change_phone_number" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Change Phone Number</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="modal-form-group">
              <label>Current Phone Number
                <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-form-group">
              <label>New Phone Number <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-form-group">
              <p>
                <i className="feather-alert-circle" /> New Phone Number Only
                Updated Once You Verified
              </p>
            </div>
          </form>
          <div className="modal-btn modal-btn-sm">
            <a href="javascript:void(0);" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </a>
            <a href="javascript:void(0);" className="btn btn-primary" data-bs-target="#otp_verification" data-bs-toggle="modal" data-bs-dismiss="modal">
              Change Number
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change Phone Number Modal */}
  {/* OTP Verification Modal */}
  <div className="modal new-modal multi-step fade" id="otp_verification" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header justify-content-center">
          <h4 className="modal-title">OTP Verification</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="otp-number">
            <p>
              Enter OTP Send to your Mobile number
              <span>+1 454445 45544</span>
            </p>
          </div>
          <form method="get" className="digit-group login-form-control" data-group-name="digits" data-autosubmit="false" autoComplete="off" action="#">
            <div className="otp-box">
              <input type="text" id="digit-1" name="digit-1" data-next="digit-2" maxLength={1} />
              <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxLength={1} />
              <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength={1} />
              <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength={1} />
            </div>
            <div className="otp-resend">
              <a href="javascript:void(0);">Resend Again</a>
              <p>Remaining 00:30s</p>
            </div>
          </form>
          <div className="modal-btn modal-btn-group">
            <div className="row">
              <div className="col-6">
                <a href="javascript:void(0);" className="btn btn-secondary w-100" data-bs-dismiss="modal">
                  Cancel
                </a>
              </div>
              <div className="col-6">
                <a href="javascript:void(0);" className="btn btn-primary w-100" data-bs-dismiss="modal" data-bs-target="#verification_success" data-bs-toggle="modal">
                  Verify
                </a>
              </div>
            </div>
          </div>
          <div className="verified-box">
            <p>
              <i className="feather-check" /> Your Phone Number has been
              Successfully Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /OTP Verification Modal */}
  {/* Verification Success Modal */}
  <div className="modal new-modal verification-success-modal fade" id="verification_success" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="order-success-info">
            <span className="order-success-icon">
              <img src="user-assets/img/icons/check-icon.svg" alt="Icon" />
            </span>
            <h4>Successful</h4>
            <p>You Phone number has been successfully Verified.</p>
            <div className="modal-btn">
              <a href="user-security.html" className="btn btn-secondary">
                Back to Settings <i className="feather-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Verification Success Modal */}
  {/* Change Email Modal */}
  <div className="modal new-modal multi-step fade" id="change_email" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Change Email Address</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="modal-form-group">
              <label>Current Email Address
                <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-form-group">
              <label>New Email Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-form-group">
              <p>
                <i className="feather-alert-circle" /> New Email Address Only
                Updated Once You Verified
              </p>
            </div>
          </form>
          <div className="modal-btn modal-btn-sm">
            <a href="javascript:void(0);" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </a>
            <a href="javascript:void(0);" className="btn btn-primary" data-bs-target="#email_verification" data-bs-toggle="modal" data-bs-dismiss="modal">
              Change Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change Email Modal */}
  {/* Email Verification Modal */}
  <div className="modal new-modal multi-step fade" id="email_verification" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header justify-content-center">
          <h4 className="modal-title">Email Verification</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="otp-number">
            <p>
              Please click the verification link send to your email address
              <span><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ecb89e8588889f89df9bac89948d819c8089c28f8381">[email&nbsp;protected]</a></span>
            </p>
          </div>
          <div className="otp-resend">
            <a href="javascript:void(0);">Resend Again</a>
          </div>
          <div className="modal-btn">
            <div className="row">
              <div className="col-6">
                <a href="javascript:void(0);" className="btn btn-secondary w-100" data-bs-dismiss="modal">
                  Close
                </a>
              </div>
              <div className="col-6">
                <a href="javascript:void(0);" className="btn btn-primary w-100" data-bs-dismiss="modal" data-bs-target="#email_verification_success" data-bs-toggle="modal">
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Email Verification Modal */}
  {/* Email Verification Success Modal */}
  <div className="modal new-modal verification-success-modal fade" id="email_verification_success" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="order-success-info">
            <span className="order-success-icon">
              <img src="user-assets/img/icons/check-icon.svg" alt="Icon" />
            </span>
            <h4>Successful</h4>
            <p>You Email has been successfully Verified.</p>
            <div className="modal-btn">
              <a href="user-security.html" className="btn btn-secondary">
                Back to Settings <i className="feather-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Email Verification Success Modal */}
  {/* Deactive Account Modal */}
  <div className="modal new-modal fade" id="deactive_account" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Deactivate Account</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal">
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="deactive-content">
            <p>
              Are you sureyou want to delete This Account? To delete your
              account, Type your password.
            </p>
          </div>
          <form action="#">
            <div className="modal-form-group">
              <label>Password <span className="text-danger">*</span></label>
              <div className="pass-group">
                <input type="password" className="form-control pass-input-six" placeholder="............." />
                <span className="feather-eye-off toggle-password-six" />
              </div>
            </div>
            <div className="modal-btn modal-btn-sm">
              <button type="submit" className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Deactive Account Modal */}
  {/* Delete Modal */}
  <div className="modal new-modal fade" id="delete_two_factor" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="delete-action">
            <div className="delete-header">
              <h4>Delete Two Factor</h4>
              <p>Are you sure want to delete?</p>
            </div>
            <div className="modal-btn">
              <div className="row">
                <div className="col-6">
                  <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-secondary w-100">
                    Delete
                  </a>
                </div>
                <div className="col-6">
                  <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary w-100">
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
  {/* /Delete Modal */}
  {/* Delete Modal */}
  <div className="modal new-modal fade" id="delete_account" data-keyboard="false" data-backdrop="static">
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
                  <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-secondary w-100">
                    Delete
                  </a>
                </div>
                <div className="col-6">
                  <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary w-100">
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

  )
}

export default UserSetting
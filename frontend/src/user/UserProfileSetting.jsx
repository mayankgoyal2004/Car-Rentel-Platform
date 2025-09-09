import React from 'react'

const UserProfileSetting = () => {
  return (
  
   
   
      
     
      <div className="col-lg-9">
        <div className="settings-info">
          <div className="settings-sub-heading">
            <h4>Security</h4>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Google Authenticator</h5>
                  <div className="status-toggle">
                    <input id="google_authenticator" className="check" type="checkbox" defaultChecked />
                    <label htmlFor="google_authenticator" className="checktoggle">checkbox</label>
                  </div>
                </div>
                <div className="security-content">
                  <p>Google Authenticator adds an extra layer of security to your online accounts by adding a second step of verification when you sign in.</p>
                  <span className="badge badge-light-success">Connected</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Password</h5>
                </div>
                <div className="security-content">
                  <p>Last Changed 15 Oct 2023, 09:00 AM</p>
                </div>
                <div className="security-btn security-btn-info">
                  <a href="javascript:void(0)" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#change_password">
                    Change
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Two Factor</h5>
                  <div className="status-toggle">
                    <input id="two_factor" className="check" type="checkbox" defaultChecked />
                    <label htmlFor="two_factor" className="checktoggle">checkbox</label>
                  </div>
                </div>
                <div className="security-content">
                  <p>Receive codes via SMS or email every time you login</p>
                </div>
                <div className="security-btn security-btn-info">
                  <a href="javascript:void(0)" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete_two_factor">Delete</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Phone Number Verification</h5>
                </div>
                <div className="security-content">
                  <p className="text-success-light">Verified Mobile Number : 7261937185</p>
                </div>
                <div className="security-btn">
                  <a href="javascript:void(0)" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#change_phone_number">Change</a>
                  <a href="javascript:void(0)" className="btn btn-remove">Remove</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Email Verification</h5>
                </div>
                <div className="security-content">
                  <p className="text-success-light">Verified Email : <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5f363139301f3a273e322f333a713c3032">[email&nbsp;protected]</a></p>
                </div>
                <div className="security-btn">
                  <a href="javascript:void(0)" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#change_email">Change</a>
                  <a href="javascript:void(0)" className="btn btn-remove">Remove</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Device Management</h5>
                </div>
                <div className="security-content">
                  <p>Last Changed 18 Oct 2023, 11:15 AM</p>
                </div>
                <div className="security-btn">
                  <a href="javascript:void(0)" className="btn btn-secondary">Manage</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Account Activity</h5>
                </div>
                <div className="security-content">
                  <p>Last Changed 04 Nov 2023, 04:30 PM</p>
                </div>
                <div className="security-btn">
                  <a href="javascript:void(0)" className="btn btn-secondary">View</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Deactive Account</h5>
                </div>
                <div className="security-content">
                  <p>Last Changed 16 Nov 2023, 02:00 PM</p>
                </div>
                <div className="security-btn">
                  <a href="javascript:void(0)" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#deactive_account">Deactive</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="security-grid flex-fill">
                <div className="security-heading">
                  <h5>Delete Account</h5>
                </div>
                <div className="security-content">
                  <p>Last Changed 30 Dec 2023, 08:40 PM</p>
                </div>
                <div className="security-btn">
                  <a href="javascript:void(0)" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete_account">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
 

  )
}

export default UserProfileSetting
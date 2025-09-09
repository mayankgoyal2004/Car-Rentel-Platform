import React from 'react'

const UserProfile = () => {
  return (
  <div className="col-lg-9">
        <div className="settings-info">
          <div className="settings-sub-heading">
            <h4>Profile</h4>
          </div>
          <form action="#">
            {/* Basic Info */}
            <div className="profile-info-grid">
              <div className="profile-info-header">
                <h5>Basic Information</h5>
                <p>Information about user</p>
              </div>
              <div className="profile-inner">
                <div className="profile-info-pic">
                  <div className="profile-info-img">
                    <img src="/user-assets/img/profiles/avatar-15.jpg" alt="Profile" />
                    <div className="profile-edit-info">
                      <a href="javascript:void(0)">
                        <i className="feather-edit" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="feather-trash-2" />
                      </a>
                    </div>
                  </div>
                  <div className="profile-info-content">
                    <h6>Profile picture</h6>
                    <p>PNG, JPEG under 15 MB</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-form-group">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter First Name" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="profile-form-group">
                      <label>Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter Last Name" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="profile-form-group">
                      <label>User Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter User Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-form-group">
                      <label>Phone Number <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="+ 1 65656565656" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter Email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Basic Info */}
            {/* Address Info */}
            <div className="profile-info-grid">
              <div className="profile-info-header">
                <h5>Address Information</h5>
                <p>Information about address of user</p>
              </div>
              <div className="profile-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-form-group">
                      <label>Address <span className="text-danger">*</span></label>
                      <textarea className="form-control" placeholder="Enter Address" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-form-group">
                      <label>Country <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter Country" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-form-group">
                      <label>State <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter State" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-form-group">
                      <label>City <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter City" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-form-group">
                      <label>Pincode <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter Pincode" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Address Info */}
            {/* Profile Submit */}
            <div className="profile-submit-btn">
              <button type="submit" className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
            {/* /Profile Submit */}
          </form>
        </div>
      </div>
  )
}

export default UserProfile
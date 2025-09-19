import React from "react";

const AdminProfileSetting = () => {
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
                        <a href="security-setting.html">
                          <i className="ti ti-lock me-2" />
                          Security
                        </a>
                      </li>
                    </ul>
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
              <form action="profile-setting.html">
                <div className="card-body pb-1">
                  <h6 className="fw-bold mb-3">Basic Information</h6>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Profile Photo</label>
                          <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 text-dark frames">
                              <img
                                src="/admin-assets/img/customer/customer-01.jpg"
                                className="img-fluid"
                                alt="brands"
                              />
                              <a
                                href="javascript:void(0);"
                                className="upload-img-trash btn btn-sm rounded-circle"
                              >
                                <i className="ti ti-trash fs-12" />
                              </a>
                            </div>
                            <div className="profile-upload">
                              <div className="profile-uploader d-flex align-items-center">
                                <div className="drag-upload-btn btn btn-md btn-dark">
                                  <i className="ti ti-photo-up fs-14" />
                                  Change
                                  <input
                                    type="file"
                                    className="form-control image-sign"
                                    multiple
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
                            First Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last Name<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Email Address
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
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
                            id="phone"
                            name="name"
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
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Country</label>
                        <select className="select">
                          <option>Select</option>
                          <option>USA</option>
                          <option>Canada</option>
                          <option>UK</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">State</label>
                        <select className="select">
                          <option>Select</option>
                          <option>California</option>
                          <option>New York</option>
                          <option>Florida</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <select className="select">
                          <option>Select</option>
                          <option>Los Angeles</option>
                          <option>San Diego</option>
                          <option>Fresno</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Postal Code</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-end">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
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

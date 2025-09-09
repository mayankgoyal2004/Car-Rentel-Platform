import React from 'react'
import { Link } from 'react-router-dom'

const AdminResetPassword = () => {
  return (
  <div className="main-wrapper">
  <div className="container-fuild">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div className="col-lg-5 mx-auto">
          <form action="/admin-dashboard" className="p-4">
            <div className="mx-auto mb-5 text-center">
              <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </div>
            <div className="card authentication-card mb-0">
              <div className="card-body">
                <div className="login-icon bg-dark d-flex align-items-center justify-content-center mx-auto mb-4">
                  <i className="ti ti-lock-star fs-24" />
                </div>
                <div className="text-center mb-3">
                  <h4 className="mb-1">Reset Password</h4>
                  <p className="mb-0">Enter New Password</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password <span className="text-danger">*</span></label>
                  <div className="pass-group">
                    <input type="password" className="pass-input form-control" />
                    <span className="ti toggle-password ti-eye-off" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                  <div className="pass-group">
                    <input type="password" className="pass-input form-control" />
                    <span className="ti toggle-password ti-eye-off" />
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-dark w-100">Reset Password</button>
                </div>
                <p className="text-center mt-4">Return to <Link to="/admin-dashboard"  className="text-secondary text-decoration-underline">Sign In</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="login-bg">
    <img src="assets/img/bg/login-bg-01.png" alt="img" className="login-bg-01" />
    <img src="assets/img/bg/login-bg-02.png" alt="img" className="login-bg-02" />
  </div>
</div>

  )
}

export default AdminResetPassword
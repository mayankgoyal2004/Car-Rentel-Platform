import React from 'react'
import { Link } from 'react-router-dom'

const AdminForgotPassword = () => {
  return (
   <div className="main-wrapper">
  <div className="container-fuild">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div className="col-lg-5 mx-auto">
          <form action="admin-otp" className="p-4">
            <div className="mx-auto mb-5 text-center">
              <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </div>
            <div className="card authentication-card mb-0">
              <div className="card-body">
                <div className="login-icon bg-dark d-flex align-items-center justify-content-center mx-auto mb-4">
                  <i className="ti ti-lock-bolt fs-24" />
                </div>
                <div className="text-center mb-3">
                  <h4 className="mb-1">Forgot Password</h4>
                  <p className="mb-0">If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <input type="email" className="form-control border-end-0" />
                    <span className="input-group-text border-start-0">
                      <i className="ti ti-mail" />
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-dark w-100">Reset Password</button>
                </div>
                <div className="mt-3 text-center">
                  <p>Return to <Link to="/admin-dashboard" className="link-secondary text-decoration-underline">Sign In</Link></p>
                </div>
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

export default AdminForgotPassword
import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className="main-wrapper">
  <div className="container-fuild">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div className="col-lg-5 mx-auto">
          <form action="/admin-dashboard" className="p-4">
            <div className="mx-auto mb-5 text-center">
              <img src="/admin-assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </div>
            <div className="card authentication-card mb-0">
              <div className="card-body">
                <div className="login-icon bg-dark d-flex align-items-center justify-content-center mx-auto mb-4">
                  <i className="ti ti-login fs-24" />
                </div>
                <div className="text-center mb-3">
                  <h4 className="mb-1">Welcome Back</h4>
                  <p className="mb-0">Please enter your details to sign in</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email / Username <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <input type="text" defaultValue className="form-control border-end-0" />
                    <span className="input-group-text border-start-0">
                      <i className="ti ti-user-circle" />
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password <span className="text-danger">*</span></label>
                  <div className="pass-group">
                    <input type="password" className="pass-input form-control" />
                    <span className="ti toggle-password ti-eye-off" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md mb-0">
                      <input className="form-check-input" id="remember_me" type="checkbox" />
                      <label htmlFor="remember_me" className="form-check-label mt-0">Remember Me</label>
                    </div>
                  </div>
                  <div className="text-end">
                    <Link to="admin-resetPassword"  className="link-default text-decoration-underline">Forgot Password</Link>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-dark w-100">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="login-bg">
    <img src="/admin-assets/img/bg/login-bg-01.png" alt="img" className="login-bg-01" />
    <img src="/admin-assets/img/bg/login-bg-02.png" alt="img" className="login-bg-02" />
  </div>
</div>

  )
}

export default AdminLogin
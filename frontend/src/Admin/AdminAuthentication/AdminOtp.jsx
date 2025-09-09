import React from 'react'

const AdminOtp = () => {
  return (
    <div className="main-wrapper">
  <div className="container-fuild">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div className="col-lg-5 mx-auto">
          <form action="admin-resetPassword" className="digit-group p-4">
            <div className="mx-auto mb-5 text-center">
              <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </div>
            <div className="card authentication-card mb-0">
              <div className="card-body">
                <div className="login-icon bg-dark d-flex align-items-center justify-content-center mx-auto mb-4">
                  <i className="ti ti-mail fs-24" />
                </div>
                <div className="text-center mb-3">
                  <h4 className="mb-1">Verify Your Email</h4>
                  <p className="mb-0">We have Sent OTP to <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b3daddd5dcf3d6cbd2dec3dfd69dd0dcde">[email&nbsp;protected]</a> to verify your 
                    email address and activate your account entering the OTP</p>
                </div>
                <div className="text-center otp-input">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <input type="text" className="form-control" id="digit-1" name="digit-1" data-next="digit-2" maxLength={1} />
                    <input type="text" className="form-control" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxLength={1} />
                    <input type="text" className="form-control" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength={1} />
                    <input type="text" className="form-control" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength={1} />
                  </div>
                  <div>
                    <div className="badge bg-danger-transparent mb-3">
                      <p className="d-flex align-items-center "><i className="ti ti-clock me-1" />00:55</p>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                      <a href="javascript:void(0);" className="text-secondary text-decoration-underline">Resend OTP</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-dark w-100">Reset Password</button>
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

export default AdminOtp
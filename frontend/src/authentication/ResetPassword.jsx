import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CornerDownLeft } from "react-feather";
import ReCAPTCHA from "react-google-recaptcha";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [companySetting, setCompanySetting] = useState({});
  const [captchaSetting, setCaptchaSetting] = useState({
    status: false,
    siteKey: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaSetting.status && !recaptchaToken) {
      toast.error("Please complete the reCAPTCHA!");
      return;
    }
    setLoading(true);
    setMessage(null);

    try {
      const data = {
        email,
        otp,
        newPassword,
      };
      if (captchaSetting.status) data.recaptchaToken = recaptchaToken;
      const res = await apiService.resetpassword(data);
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          nav("/login");
        }, 1000);
      }

      setMessage({ type: "success", text: res.data.message });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchgoogleCaptcha = async () => {
    try {
      const res = await apiService.getCaptchaFrontend();
      if (res.data.data) setCaptchaSetting(res.data.data);
    } catch (err) {
      toast.error("Failed to load settings" + err.message);
    }
  };

  const fetchCompanySetting = async () => {
    try {
      const res = await apiService.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load company settings" + err.message);
    }
  };

  useEffect(() => {
    fetchCompanySetting();
    fetchgoogleCaptcha();
  }, []);

  return (
    <div className="main-wrapper login-body  custom-padding-1">
      {/* Header */}
      <header className="log-header">
        <Link to="/">
          <img
            className="img-fluid logo-dark"
            src={BASE_URL_IMG + companySetting?.profilePhoto}
            alt="Logo"
          />
        </Link>
      </header>
      {/* /Header */}
      <div className="login-wrapper">
        <div className="loginbox">
          <div className="login-auth">
            <div className="login-auth-wrap">
              <div className="sign-group">
                <Link to="/" className="btn sign-up">
                  <span>
                    <CornerDownLeft size={24} color="#000" />
                  </span>{" "}
                  Back To Home
                </Link>
              </div>
              <h1>Reset Password</h1>
              <p className="account-subtitle">
                Your new password must be different from previous used
                passwords.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div className="pass-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="fas fa-eye-slash toggle-password" />
                  </div>
                </div>
                <div className="input-block">
                  <label className="form-label">
                    OTP<span className="text-danger">*</span>
                  </label>
                  <div className="pass-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <span className="fas fa-eye-slash toggle-password" />
                  </div>
                </div>
                <div className="input-block">
                  <label className="form-label">
                    New Password <span className="text-danger">*</span>
                  </label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <span className="fas fa-eye-slash toggle-password-two" />
                  </div>
                </div>
                <div className="my-3">
                  {captchaSetting.status && captchaSetting.siteKey && (
                    <div className="my-3">
                      <ReCAPTCHA
                        sitekey={captchaSetting.siteKey}
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                      />
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-light w-100 btn-size text-light"
                  disabled={
                    loading || (captchaSetting.status && !recaptchaToken)
                  }
                >
                  {loading ? "Saving..." : "Save Changes"}{" "}
                </button>
              </form>
              {message && (
                <p
                  style={{
                    marginTop: "10px",
                    color: message.type === "success" ? "green" : "red",
                  }}
                >
                  {message.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="log-footer">
        <div className="container-fluid">
          {/* Copyright */}
          <div className="copyright">
            <div className="copyright-text">
              <p> © 2025 Vibrantick Infotech Solutions. All Right reserved.</p>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </footer>
      {/* /Footer */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ResetPassword;

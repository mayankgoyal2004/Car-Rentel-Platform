import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { CornerDownLeft } from "react-feather";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [companySetting, setCompanySetting] = useState({});
  const [captchaSetting, setCaptchaSetting] = useState({
    status: false,
    siteKey: "",
  });
  const handleFormSubmit = async (e) => {
    if (captchaSetting.status && !recaptchaToken) {
      toast.error("Please complete the reCAPTCHA!");
      return;
    }
    e.preventDefault();

    setLoading(true);

    try {
      const payload = { email };
    if (captchaSetting.status) {
      payload.recaptchaToken = recaptchaToken;
    }
      const res = await apiService.forgotPassword(payload);

      if (res.data.success) {
        toast.success("Reset link has been sent to your email!");
        nav("/reset-password");
        sessionStorage.setItem("email", email);
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const fetchCompanySetting = async () => {
    try {
      const res = await apiService.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load company settings");
    }
  };

  const fetchgoogleCaptcha = async () => {
    try {
      const res = await apiService.getCaptchaFrontend();
      if (res.data.data) setCaptchaSetting(res.data.data);
    } catch (err) {
      toast.error("Failed to load settings");
    }
  };
  useEffect(() => {
    fetchCompanySetting();
    fetchgoogleCaptcha();
  }, []);

  return (
    <div className="main-wrapper login-body">
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
              <h1>Forgot Password</h1>
              <p className="account-subtitle">
                Enter your email and we will send you a link to reset your
                password.
              </p>
              <form onSubmit={handleFormSubmit}>
                <div className="input-block">
                  <label className="form-label">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="form-control"
                  />
                </div>
                {captchaSetting.status && captchaSetting.siteKey && (
                  <div className="my-3">
                    <ReCAPTCHA
                      sitekey={captchaSetting.siteKey}
                      onChange={(token) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-outline-light w-100 btn-size text-light

"
                  disabled={
                    loading || (captchaSetting.status && !recaptchaToken)
                  }
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
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
              <p>© 2025 Vibrantick Inc All Rights Reserved.</p>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </footer>
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

export default ForgotPassword;

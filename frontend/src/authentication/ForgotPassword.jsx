import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { CornerDownLeft } from "react-feather";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleFormSubmit = async (e) => {
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA!");
      return;
    }
    e.preventDefault();

    setLoading(true);

    try {
      const res = await apiService.forgotPassword({ email, recaptchaToken });

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

  return (
    <div className="main-wrapper login-body">
      {/* Header */}
      <header className="log-header">
        <Link to="/">
          <img
            className="img-fluid logo-dark"
            src="/user-assets/img/logo.svg"
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
                <div className="my-3">
                  <ReCAPTCHA
                    sitekey="6LcdLNMrAAAAAIQiqcyFmZiRANaY6NdRUaxSMjJL
" //
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-light w-100 btn-size"
                  disabled={loading || !recaptchaToken}
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

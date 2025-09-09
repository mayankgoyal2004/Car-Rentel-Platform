import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { CornerDownLeft } from "react-feather";

const ForgotPassword = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await apiService.forgotPassword({email});

      if (res.data.success) {
        setMessage("Reset link has been sent to your email!");
        nav("/reset-password")
 sessionStorage.setItem("email", email);
      } else {
        setError(res.data.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
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
                    <CornerDownLeft size={24}  color="#000"/>
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
                <button
                  type="submit"
                  className="btn btn-outline-light w-100 btn-size"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
              {message && <p className="text-success mt-2">{message}</p>}
              {error && <p className="text-danger mt-2">{error}</p>}
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
              <p>© 2024 Dreams Rent. All Rights Reserved.</p>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </footer>
      {/* /Footer */}
    </div>
  );
};

export default ForgotPassword;

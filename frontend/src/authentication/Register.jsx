import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiServices from "../../Apiservice/apiService"; // 👈 your API helper
import { CornerDownLeft } from "react-feather";

const Register = () => {
  const navigate = useNavigate();

  // form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 state for toggle

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await apiServices.register(formData);
      if (res.data.success) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
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

              <h1>Sign Up</h1>
              <p className="account-subtitle">
                We'll send a confirmation code to your email.
              </p>

              {/* Register Form */}
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label className="form-label">
                    Username <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="input-block">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      autoComplete="email"
                  />
                </div>

                <div className="input-block">
                  <label className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="pass-group" style={{ position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"} // 👈 toggle type
                      name="password"
                      className="form-control pass-input"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      autoComplete="new-password" 
                    />
                    <span
                      className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} toggle-password`}
                      onClick={() => setShowPassword(!showPassword)} // 👈 toggle state
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-light w-100 btn-size mt-1"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Sign Up"}
                </button>
              </form>

              {/* Feedback */}
              {error && <p className="text-danger mt-2">{error}</p>}
              {success && <p className="text-success mt-2">{success}</p>}

              <div className="login-or">
                <span className="or-line" />
                <span className="span-or">
                  Or, Create an account with your email
                </span>
              </div>

              {/* Social Login */}
              <div className="social-login">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center input-block btn google-login w-100"
                >
                  <span>
                    <img
                      src="/user-assets/img/icons/google.svg"
                      className="img-fluid"
                      alt="Google"
                    />
                  </span>
                  Log in with Google
                </a>
              </div>

              <div className="social-login">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center input-block btn google-login w-100"
                >
                  <span>
                    <img
                      src="/user-assets/img/icons/facebook.svg"
                      className="img-fluid"
                      alt="Facebook"
                    />
                  </span>
                  Log in with Facebook
                </a>
              </div>

              <div className="text-center dont-have">
                Already have an Account? <Link to="/login">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="log-footer">
        <div className="container-fluid">
          <div className="copyright">
            <div className="copyright-text">
              <p>© 2024 Dreams Rent. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;

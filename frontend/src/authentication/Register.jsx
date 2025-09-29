import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiServices, { BASE_URL_IMG } from "../../Apiservice/apiService"; // 👈 your API helper
import { CornerDownLeft } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
const Register = () => {
  const navigate = useNavigate();

  // form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [companySetting, setCompanySetting] = useState({});
  const fetchCompanySetting = async () => {
    try {
      const res = await apiServices.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load company settings");
    }
  };

  useEffect(() => {
    fetchCompanySetting();
  }, []);

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 chars, one uppercase, one lowercase, one number, one special char
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("User name is required");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!validatePassword(formData.password)) {
      toast.error(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA!");
      return;
    }
    setLoading(true);

    try {
      const res = await apiServices.register({ ...formData, recaptchaToken });
      toast.success(res.data.message);

      if (res.data.success) {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

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

      <div className="login-wrapper">
        <div className="loginbox">
          <div className="login-auth">
            <div className="login-auth-wrap">
              <div className="sign-group  d-flex justify-content-between align-items-center">
                <Link to="/" className="btn sign-up">
                  <span>
                    <CornerDownLeft size={24} color="#000" />
                  </span>{" "}
                  Back To Home
                </Link>
                <Link
                  to="/business-register"
                  className="btn btn-outline-primary ms-2"
                >
                  Business Owner Register
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
                      className={`fas ${
                        showPassword ? "fa-eye" : "fa-eye-slash"
                      } toggle-password`}
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
                  className="btn btn-outline-light w-100 btn-size mt-1"
                  disabled={loading || !recaptchaToken}
                >
                  {loading ? "Registering..." : "Sign Up"}
                </button>
              </form>

              <div className="login-or">
                <span className="or-line" />
                <span className="span-or">
                  Or, Create an account with your email
                </span>
              </div>

              {/* Social Login */}
              {/* <div className="social-login">
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
              </div> */}

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
              <p>© 2025 Vibrantick Inc All Rights Reserved.</p>
            </div>
          </div>
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

export default Register;

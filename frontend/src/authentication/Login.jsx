import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiServices, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { CornerDownLeft } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companySetting, setCompanySetting] = useState([]);

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA!");
      return;
    }
    setLoading(true);
    setLoading(true);

    try {
      const data = { email, password, recaptchaToken };
      const res = await apiServices.login(data);
      toast.success(res.data.message);

      if (res.data.success) {
        dispatch(addUser(res.data.data));

        sessionStorage.setItem("role", res.data.data.role);
        sessionStorage.setItem("userType", res.data.data.userType);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("_id", res.data.data._id);
        if (
          res.data.data.userType === 1 ||
          res.data.data.userType === 2 ||
          res.data.data.userType === 3
        ) {
          setTimeout(() => {
            navigate("/admin-dashboard");
          }, 1000);
        } else if (
          res.data.data.userType === 4 &&
          res.data.data.status === true
        ) {
          navigate("/user-dashboard");
        }
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper login-body ">
      {/* Header */}
      <header className="log-header ">
        <Link to="/">
          <img
            className="img-fluid logo-dark"
            src={ BASE_URL_IMG+  companySetting?.profilePhoto}
            alt="Logo"
          />
        </Link>
      </header>

      {/* Login Wrapper */}
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

              <h1>Sign In</h1>
              <p className="account-subtitle">
                Enter your email & password to continue
              </p>

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-block">
                  <label className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="pass-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control pass-input"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      className={`fas ${
                        showPassword ? "fa-eye" : "fa-eye-slash"
                      } toggle-password`}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>

                <div className="input-block">
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot Password ?
                  </Link>
                </div>
                <div className="my-3">
                  <ReCAPTCHA
                    sitekey="6LcdLNMrAAAAAIQiqcyFmZiRANaY6NdRUaxSMjJL" //
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-light w-100 btn-size mt-1"
                  disabled={loading || !recaptchaToken}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Social Login */}
              {/* <div className="login-or">
                <span className="or-line" />
                <span className="span-or-log">Or, log in with</span>
              </div>

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
              </div> */}

              {/* Register Link */}
              <div className="text-center dont-have">
                Don't have an account yet? <Link to="/register">Register</Link>
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
      <div>
        {/* Your existing JSX */}

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
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    address: "",
    image: null,
  });
  const [companySetting, setCompanySetting] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
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

  useEffect(() => {
    fetchCompanySetting();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiService.adminRegister(formData);
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
    <div className="main-wrapper">
      <div className="container-fuild">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div className="col-lg-6 mx-auto">
              <form onSubmit={handleSubmit} className="p-4">
                <div className="mx-auto mb-4 text-center">
                  <img
                    src={  BASE_URL_IMG+ companySetting?.profilePhoto}
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>

                <div className="card authentication-card mb-0">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <h4 className="mb-1">Register Your Business</h4>
                      <p className="mb-0">
                        Please fill in the details to create your account
                      </p>
                    </div>

                    {/* Owner Name */}
                    <div className="mb-3">
                      <label className="form-label">
                        Owner Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        className="form-control"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Contact */}
                    <div className="mb-3">
                      <label className="form-label">
                        Contact Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        className="form-control"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                      <label className="form-label">
                        Address <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-3">
                      <label className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Upload Logo */}
                    <div className="mb-3">
                      <label className="form-label">Image</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mt-3">
                      <button type="submit" className="btn btn-dark w-100">
                        Register
                      </button>
                    </div>

                    <div className="text-center mt-3">
                      Already have an account?
                      <Link to="/login">Login</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="login-bg">
        <img
          src="/admin-assets/img/bg/login-bg-01.png"
          alt="img"
          className="login-bg-01"
        />
        <img
          src="/admin-assets/img/bg/login-bg-02.png"
          alt="img"
          className="login-bg-02"
        />
      </div>
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

export default AdminRegister;

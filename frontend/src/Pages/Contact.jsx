import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Clock } from "react-feather";
import apiService from "../../Apiservice/apiService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await apiService.addcontact(formData); // 👈 your backend route
      if (res.data.success) {
        setMessage("✅ Enquiry sent successfully!");
        setFormData({ name: "", email: "", phone: "", comments: "" }); // reset
      }
    } catch (err) {
      setMessage("❌ Failed to send enquiry, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Contact us</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb Section */}

        {/* Contact us */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-info-area">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="single-contact-info flex-fill">
                    <PhoneCall size={24} />
                    <h3>Phone Number</h3>
                    <a href="tel:(888)888-8888">(888) 888-8888</a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="single-contact-info flex-fill">
                    <Mail size={24} />
                    <h3>Email Address</h3>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="single-contact-info flex-fill">
                    <MapPin size={24} />
                    <h3>Location</h3>
                    <a href="javascript:void(0);">367 Hillcrest Lane, USA</a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="single-contact-info flex-fill">
                    <Clock size={24} />
                    <h3>Opening Hours</h3>
                    <a href="javascript:void(0);">
                      Mon - Sat (10.00AM - 05.30PM)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-info-area">
              <div className="row">
                <div className="col-lg-6 d-flex">
                  <img
                    src="/user-assets/img/contact-info.jpg"
                    className="img-fluid"
                    alt="Contact"
                  />
                </div>
                <div className="col-lg-6">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <h1>Get in touch!</h1>
                      <div className="col-md-12">
                        <div className="input-block">
                          <label>
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-block">
                          <label>
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-block">
                          <label>
                            Phone number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-block">
                          <label>
                            Comments <span className="text-danger">*</span>
                          </label>
                          <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            className="form-control"
                            rows={4}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn contact-btn"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Enquiry"}
                    </button>
                    {message && <p className="mt-3">{message}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Contact us */}
      </div>
    </div>
  );
};

export default Contact;

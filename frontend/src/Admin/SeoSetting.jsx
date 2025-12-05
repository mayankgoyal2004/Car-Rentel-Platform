import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { toast } from "react-toastify";

const SeoSetting = () => {
  const [formData, setFormData] = useState({
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSEOSettings = async () => {
    try {
      setLoading(true);
      const res = await apiService.getSeoSetting();

      if (res.data.Seo) {
        const seoData = res.data.Seo;
        setFormData({
          metaTitle: seoData.metaTitle || "",
          metaDescription: seoData.metaDescription || "",
          keywords: seoData.keywords || "",
          image: null,
        });

        if (seoData.ogImage) {
          setPreviewImage(BASE_URL_IMG + seoData.ogImage);
        }
      }
    } catch (err) {
      toast.error("Failed to load SEO settings: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSEOSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const updateSEOSettings = async (e) => {
    e.preventDefault();

    const { metaTitle, metaDescription, keywords } = formData;
    if (!metaTitle || !metaDescription || !keywords) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const sendData = new FormData();
      sendData.append("metaTitle", metaTitle);
      sendData.append("metaDescription", metaDescription);
      sendData.append("keywords", keywords);
      if (formData.image) sendData.append("image", formData.image);

      await apiService.updateSeoSetting(sendData);
      toast.success("SEO settings updated successfully");
    } catch (err) {
      toast.error("Failed to update SEO settings: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType;

  return (
    <div className="page-wrapper pt-0">
      <div className="container-fluid py-4">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Settings</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Settings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="settings-sidebar slimscroll">
              <div className="sidebar-menu">
                <ul>
                  {/* Account Setting */}
                  <li className="menu-title">
                    <span>ACCOUNT SETTING</span>
                  </li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <Link to="/admin-dashboard/profile-setting">
                        <i className="ti ti-user-edit me-2" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin-dashboard/security-setting">
                        <i className="ti ti-lock me-2" />
                        Security
                      </Link>
                    </li>
                  </ul>

                  {/* Website Setting */}
                  <li className="menu-title">
                    <span>WEBSITE SETTING</span>
                  </li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/login-setting">
                          <i className="ti ti-lock-bolt me-2"></i>
                          <span>Login & Register</span>
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/company-setting">
                          <i className="ti ti-building me-2" />
                          <span>Company Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/email-setting">
                          <i className="ti ti-mail me-2" />
                          <span>Email Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/location-setting">
                          <i className="ti ti-settings-2 me-2" />
                          <span>Location Setting</span>
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="/admin-dashboard/language-setting">
                        <i className="ti ti-language me-2" />

                        <span> Language Settings</span>
                      </Link>
                    </li>

                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/invoice-setting">
                          <i className="ti ti-file-invoice me-2" />
                          <span>Invoice Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/signature-setting">
                          <i className="ti ti-signature me-2" />
                          <span>Signatures</span>
                        </Link>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/bank-account-setting">
                          <i className="ti ti-file-dollar me-2" />
                          <span>Bank Accounts</span>
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li className="active">
                        <Link to="/admin-dashboard/seo-setting">
                          <i className="ti ti-file-dollar me-2" />
                          <span>Seo Setting</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Panel */}
          <div className="col-xl-9 col-lg-8">
            <div className="card shadow-sm rounded-3">
              <div className="card-body">
                <h5 className="fw-semibold border-bottom pb-3 mb-4">
                  SEO Settings
                </h5>

                <form onSubmit={updateSEOSettings}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Meta Title</label>
                    <input
                      type="text"
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter Meta Title"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Meta Description
                    </label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleInputChange}
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Meta Keywords
                    </label>
                    <textarea
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleInputChange}
                      className="form-control"
                      rows="2"
                    ></textarea>
                  </div>

                  {/* Image */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Meta Image</label>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="border rounded"
                        style={{
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#f8f9fa",
                          overflow: "hidden",
                        }}
                      >
                        {previewImage ? (
                          <img
                            src={previewImage}
                            alt="img"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <i className="ti ti-photo fs-2 text-secondary" />
                        )}
                      </div>

                      <div>
                        <label className="btn btn-outline-primary btn-sm">
                          Upload Image
                          <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>

                        {previewImage && (
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm ms-2"
                            onClick={() => {
                              setPreviewImage(null);
                              setFormData({ ...formData, image: null });
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Keep your Modals here — they still work with Bootstrap 5 */}
      </div>
    </div>
  );
};

export default SeoSetting;

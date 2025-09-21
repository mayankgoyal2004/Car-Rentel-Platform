import React, { useState } from "react";
import { useSelector } from "react-redux";
import apiService from "../../../Apiservice/apiService";

const AdminSecuritySetting = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user); // get current admin info

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      return alert("All fields are required!");
    }

    if (newPassword !== confirmPassword) {
      return alert("New password and confirm password do not match!");
    }

    setLoading(true);

    try {
      const res = await apiService.updateAdminPassword({
        currentPassword,
        newPassword,
      });

      if (res.data.success) {
        alert("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(res.message || "Failed to update password");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4 pb-0">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Settings</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3">
            {/* Sidebar */}
            <div className="settings-sidebar slimscroll">
              <div className="sidebar-menu">
                <ul>
                  <li className="menu-title">ACCOUNT SETTING</li>
                  <li>
                    <ul className="sidebar-links pb-3 mb-3 border-bottom">
                      <li>
                        <a href="/admin-dashboard/profile-setting">
                          Profile
                        </a>
                      </li>
                      <li className="active">
                        Security
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="card">
              <div className="card-header">
                <h5>Change Password</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      Current Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      New Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSecuritySetting;

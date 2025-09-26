import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../../Apiservice/apiService";

const MODULES = [
  "Reservations",
  "Calendar",
  "Blog",
  "Enquiries",
  "Customers",
  "Driver",
  "Permissions",
  "Message",
  "Settings",
];

const AdminPermissions = () => {
  const { roleId } = useParams();
  const [role, setRole] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const normalizePermissions = (permissions = []) => {
    return MODULES.map((m) => {
      const existing = permissions.find((p) => p.module === m);
      return (
        existing || {
          module: m,
          actions: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            allowAll: false,
          },
        }
      );
    });
  };

  // Fetch role & permissions
  const fetchRole = async () => {
    try {
      const res = await apiService.getroleById(roleId);
      const roleData = res.data.data;

      // Normalize every time → ensures UI shows new modules
      roleData.permissions = normalizePermissions(roleData.permissions);

      setRole(roleData);
      setPermissions(roleData.permissions);
    } catch (err) {
      toast.error("Failed to fetch role");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRole();
  }, [roleId]);

  // Toggle a single checkbox
  const toggleAction = (moduleIndex, action) => {
    const updated = [...permissions];
    updated[moduleIndex].actions[action] =
      !updated[moduleIndex].actions[action];

    // if allowAll toggled → sync all actions
    if (action === "allowAll") {
      const newVal = updated[moduleIndex].actions.allowAll;
      updated[moduleIndex].actions = {
        create: newVal,
        edit: newVal,
        delete: newVal,
        view: newVal,
        allowAll: newVal,
      };
    }

    setPermissions(updated);
  };

  // Save permissions
  const handleSubmit = async () => {
    try {
      const normalized = normalizePermissions(permissions); // ensure always full set
      const res = await apiService.updatePermission(roleId, {
        permissions: normalized,
      });

      toast.success(res.data.message || "Permissions updated successfully!");
      fetchRole();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to update permissions"
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!role) return <p>Role not found</p>;

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="my-auto mb-3 pb-1">
          <Link
            to="/admin-dashboard/roles-permissions"
            className="mb-1 text-gray-9 fw-medium"
          >
            <i className="ti ti-arrow-left me-1" />
            Back to List
          </Link>
        </div>

        {/* Role Info */}
        <div className="filterbox mb-3 d-flex align-items-center mb-3">
          <span className="avatar avatar-lg bg-white text-secondary rounded-2 me-2">
            <i className="ti ti-user-shield fs-25 fw-normal" />
          </span>
          <div>
            <p className="mb-0">Role</p>
            <h6 className="fw-medium">{role.name}</h6>
          </div>
        </div>

        {/* Permissions Table */}
        <div className="card mb-3">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>MODULE</th>
                    <th>CREATE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    <th>VIEW</th>
                    <th>ALLOW ALL</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((perm, i) => (
                    <tr key={i}>
                      <td>
                        <p className="text-gray-9 fw-medium">{perm.module}</p>
                      </td>
                      {["create", "edit", "delete", "view", "allowAll"].map(
                        (action) => (
                          <td key={action}>
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={perm.actions[action]}
                                onChange={() => toggleAction(i, action)}
                              />
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="card mb-0">
          <div className="card-body py-2 my-1">
            <div className="d-flex justify-content-end align-items-center">
              <div className="action-footer">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={fetchRole}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn-submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPermissions;

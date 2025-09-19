import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService";
import { toast } from "react-toastify";

const AdminLocationCountries = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState({
    countryName: "",
    countryCode: "",
  });
  const [editCountry, setEditCountry] = useState(null);
  const [deleteCountry, setDeleteCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 🔹 Fetch countries
  const getAllCountry = async (searchQuery = "", page = 1) => {
    try {
      setLoading(true);
      const res = await apiService.getAllCountry({ search: searchQuery, page });
      setCountries(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      setCurrentPage(res.data.pagination?.currentPage || 1);
    } catch (err) {
      toast.error("Error fetching countries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCountry(search, currentPage);
  }, [currentPage, search]);

  // 🔹 Add Country
  const addCountry = async () => {
    if (!newCountry.countryName.trim() || !newCountry.countryCode.trim()) {
      toast.error("Both name and code are required");
      return;
    }
    try {
      const res = await apiService.addCountry({
        countryName: newCountry.countryName.trim(),
        countryCode: newCountry.countryCode.trim(),
      });
      toast.success(res.data.message);
      setNewCountry({ countryName: "", countryCode: "" });
      getAllCountry(search, currentPage);
      document.getElementById("add_country_close").click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // 🔹 Update Country
  const updateCountry = async () => {
    if (!editCountry?.countryName.trim() || !editCountry?.countryCode.trim()) {
      toast.error("Both name and code are required");
      return;
    }
    try {
      const res = await apiService.updateCountry(editCountry._id, {
        countryName: editCountry.countryName.trim(),
        countryCode: editCountry.countryCode.trim(),
        status: editCountry.status,
      });
      toast.success(res.data.message);
      setEditCountry(null);
      getAllCountry(search, currentPage);
      document.getElementById("edit_country_close").click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // 🔹 Delete Country
  const handleDeleteCountry = async () => {
    if (!deleteCountry) return;
    try {
      const res = await apiService.deleteCountry(deleteCountry._id);
      toast.success(res.data.message);
      setDeleteCountry(null);
      getAllCountry(search, currentPage);
      document.getElementById("delete_country_close").click();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // 🔹 Handle pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Header */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <h2>Countries</h2>
          <div>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_country"
            >
              <i className="ti ti-plus me-2" /> Add Country
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Country</th>
                <th>Code</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading && countries.length > 0 ? (
                countries.map((c) => (
                  <tr key={c._id}>
                    <td>{c.countryName}</td>
                    <td>{c.countryCode}</td>
                    <td>
                      {c.status ? (
                        <span className="badge bg-success">Active</span>
                      ) : (
                        <span className="badge bg-danger">Inactive</span>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_country"
                        onClick={() => setEditCountry(c)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_country"
                        onClick={() => setDeleteCountry(c)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    {loading ? "Loading..." : "No countries found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-secondary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Add Country Modal */}
      <div className="modal fade" id="add_country">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Add Country</h5>
              <button className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Country Name"
                className="form-control mb-2"
                value={newCountry.countryName}
                onChange={(e) =>
                  setNewCountry({ ...newCountry, countryName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Country Code"
                className="form-control"
                value={newCountry.countryCode}
                onChange={(e) =>
                  setNewCountry({ ...newCountry, countryCode: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="add_country_close"
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={addCountry}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Country Modal */}
      {editCountry && (
        <div className="modal fade" id="edit_country">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Edit Country</h5>
                <button
                  className="btn-close"
                  data-bs-dismiss="modal"
                  id="edit_country_close"
                />
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editCountry.countryName}
                  onChange={(e) =>
                    setEditCountry({
                      ...editCountry,
                      countryName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editCountry.countryCode}
                  onChange={(e) =>
                    setEditCountry({
                      ...editCountry,
                      countryCode: e.target.value,
                    })
                  }
                />
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={editCountry.status}
                    onChange={(e) =>
                      setEditCountry({
                        ...editCountry,
                        status: e.target.checked,
                      })
                    }
                  />
                  <label className="form-check-label">Status</label>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={updateCountry}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Country Modal */}
      {deleteCountry && (
        <div className="modal fade" id="delete_country">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p>
                  Are you sure you want to delete {deleteCountry.countryName}?
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                    id="delete_country_close"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleDeleteCountry}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLocationCountries;

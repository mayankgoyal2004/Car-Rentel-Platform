import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const AdminOwners = () => {
  const [onwers, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [deleteowner, SetdeleteOwner] = useState(null);

  const fetchCustomers = async (searchQuery = "", page = 1) => {
    setLoading(true);
    try {
      const res = await apiService.getAllOwnerAdmin({
        search: searchQuery,
        page,
      });
      setOwners(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
      setTotalCount(res.data.pagination?.total || 0);
      setPageSize(res.data.pagination?.limit || 10);
      if (
        res.data.pagination?.currentPage &&
        res.data.pagination.currentPage !== currentPage
      ) {
        setCurrentPage(res.data.pagination.currentPage);
      }
    } catch (err) {
      console.error("Error fetching Customers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(search, currentPage);
  }, [currentPage, search]);

  const handleDelete = async () => {
    try {
      await apiService.deleteOwner(deleteowner._id);
      fetchCustomers(search, currentPage);
      SetdeleteOwner("");
    } catch (error) {
      console.error("Error deleting owner:", error);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Owners</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dash-board">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Owners
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <a className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </a>
            </div>
            <div className="mb-2 me-2">
              <div className="dropdown">
                <a className="btn btn-dark d-inline-flex align-items-center">
                  <i className="ti ti-upload me-1" />
                  Export
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3"></div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}

        {/* Custom Data Table */}
        <div className="custom-datatable-filter table-responsive">
          <table className="table datatable">
            <thead className="thead-light">
              <tr>
                <th className="no-sort">
                  <div className="form-check form-check-md">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="select-all"
                    />
                  </div>
                </th>
                <th>Owner</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>STATUS</th>

                <th />
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : onwers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No owner found
                  </td>
                </tr>
              ) : (
                onwers.map((own) => (
                  <tr key={onwers._id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={`/admin-dashboard/customer-details/${own._id}`}
                          className="avatar rounded-circle me-2 flex-shrink-0"
                        >
                          <img
                            src={`${BASE_URL_IMG + own.image}`}
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div>
                          <h6 className="fs-14 fw-semibold">
                            <Link
                              to={`/admin-dashboard/customer-details/${own._id}`}
                            >
                              {own.name}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-gray-9">{own.email}</p>
                    </td>
                    <td>
                      <p className="text-gray-9">{own.contact}</p>
                    </td>
                    <td>
                      <p className={`badge  ${
                          own.status ? "bg-success" : "bg-danger"
                        }`}>
                        {own.status ? "Active" : "Inactive"}
                      </p>
                    </td>

                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-sm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button
                              className="dropdown-item rounded-1"
                              onClick={() => SetdeleteOwner(own)}
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Custom Data Table */}
        {!loading && totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
            <div className="text-muted mb-2">
              Showing {(currentPage - 1) * pageSize + 1} to{" "}
              {Math.min(currentPage * pageSize, totalCount)} of {totalCount}{" "}
              entries
            </div>
            <nav className="mb-2">
              <ul className="pagination mb-0">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                  >
                    Previous
                  </a>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </a>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        setCurrentPage(currentPage + 1);
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className="table-footer" />
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Customer</h4>
              <p className="mb-3">
                Are you sure you want to delete{" "}
                {deleteowner?.name || "this customer"}?
              </p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDelete}
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </div>
  );
};

export default AdminOwners;

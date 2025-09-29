import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const AdminInvoice = () => {
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [deleteinvoceId, setDeleteInvoiceId] = useState(null);

  const fetchInvoce = async (searchQuery = "", page = 1) => {
    setLoading(true);

    try {
      const res = await apiService.getAllInvoice({ search: searchQuery, page });
      setInvoice(res.data.data);
      setTotalPages(res.data.pagination?.totalPages || 1);

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
  fetchInvoce(search, currentPage); 
}, [currentPage, search]);
  const handleDelete = async () => {
    if (!deleteinvoceId) return;
    try {
      await apiService.deleteInvoice(deleteinvoceId);
      fetchInvoce(search, currentPage);
      setDeleteInvoiceId(null);
    } catch (err) {
      console.error("Error deleting Invoice:", err);
      alert(
        "Error deleting Invoice: " +
          (err.response?.data?.message || err.message)
      );
    }
  };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // ✅ good
  };
  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h4 className="mb-1">Invoices</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invoices
                  </li>
                </ol>
              </nav>
            </div>
            <div>
              <Link
                to="/admin-dashboard/add-invoice"
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <i className="ti ti-plus me-1" />
                Add Invoice
              </Link>
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
                    onChange={handleSearchChange}
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
                  <th>INVOICE NO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>CREATED DATE</th>
                  <th>DUE DATE</th>
                  <th>INVOICE AMOUNT</th>
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
                ) : invoice.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Invoice found
                    </td>
                  </tr>
                ) : (
                  invoice.map((inv) => (
                    <tr key={inv._id}>
                      <td>
                        <Link
                          to={"/admin-dashboard/invoice-details/" + inv._id}
                          className="fs-12 fw-medium"
                        >
                          #{inv.invoiceNumber}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={
                              "/admin-dashboard/customer-details/" +
                              inv.customer._id
                            }
                            className="avatar avatar-rounded me-2 flex-shrink-0"
                          >
                            <img
                              src={BASE_URL_IMG + inv.customer.image}
                              alt="User Img"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14">
                              <Link
                                to={
                                  "/admin-dashboard/customer-details/" +
                                  inv.customer._id
                                }
                              >
                                {inv.customer.name}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href={"mailto:" + inv.customer.email}
                          className="__cf_email__"
                          data-cfemail="c6a7a8a2b4a3b186a3bea7abb6aaa3e8a5a9ab"
                        >
                          {inv.customer.email}
                        </a>
                      </td>
                      <td>
                        <div>
                          <p className="mb-0">
                            {new Date(inv.fromDate).toDateString()}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="mb-0">
                            {new Date(inv.dueDate).toDateString()}
                          </p>
                        </div>
                      </td>
                      <td>${inv.totalAmount.toFixed(2)}</td>
                      <td>
                        <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                          <i className="ti ti-point-filled me-1" />
                          {inv.status}
                        </span>
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
                            {/* <li>
                              <Link
                                to={"/admin-dashboard/edit-invoice/" + inv._id}
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </Link>
                            </li> */}
                            <li>
                              <button
                                className="dropdown-item rounded-1"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal_invoice"
                                onClick={() => setDeleteInvoiceId(inv?._id)}
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
            <nav aria-label="Page navigation" className="mt-3">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Prev
                  </button>
                </li>

                {[...Array(totalPages)].map((_, idx) => (
                  <li
                    key={idx}
                    className={`page-item ${
                      currentPage === idx + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/* Custom Data Table */}
          <div className="table-footer" />
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Delete Modal  */}
      <div className="modal fade" id="delete_modal_invoice">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Invoice</h4>
              <p className="mb-3">Are you sure you want to delete Invoice?</p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal*/}
    </div>
  );
};

export default AdminInvoice;

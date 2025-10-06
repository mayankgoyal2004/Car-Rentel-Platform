import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { CSVLink } from "react-csv";

const AdminEnquiries = () => {
  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch all contacts
  const fetchEnquiry = async (searchQuery = "", page = 1) => {
    try {
      setLoading(true);
      const res = await apiService.getEnquiry({
        search: searchQuery,
        page,
      });
      if (res.data.success) {
        setEnquiry(res.data.data);
        setTotalPages(res.data.pagination?.totalPages || 1);
        if (
          res.data.pagination?.currentPage &&
          res.data.pagination.currentPage !== currentPage
        ) {
          setCurrentPage(res.data.pagination.currentPage);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedId) return;
      const res = await apiService.deleteEnquiry(selectedId); // <-- your DELETE route
      if (res.data.success) {
        toast.success("Contact deleted successfully");
        setEnquiry(enquiry.filter((c) => c._id !== selectedId));
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete contact");
    }
  };

  useEffect(() => {
    fetchEnquiry(search, currentPage);
  }, [currentPage, search]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // CSV headers
  const csvHeaders = [
    { label: "Car Name", key: "carName" },
    { label: "Car Type", key: "carType" },
    { label: "Customer Name", key: "customerName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phoneNumber" },
    { label: "Date", key: "createdAt" },
    { label: "Enquiry Message", key: "message" },
  ];

  // CSV data
  const csvData = enquiry.map((enq) => ({
    carName: enq.car?.carName,
    carType: enq.car?.carType?.carType,
    customerName: enq.customer?.name,
    email: enq.email,
    phoneNumber: enq.phoneNumber,
    createdAt: enq.createdAt
      ? new Date(enq.createdAt).toLocaleDateString()
      : "",
    message: enq.message || "No message",
  }));

  // Search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // ✅ good
  };
  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Enquiries</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Enquiries
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <CSVLink
                data={csvData}
                headers={csvHeaders}
                filename={"enquiries.csv"}
                className="btn btn-dark d-inline-flex align-items-center"
              >
                <i className="ti ti-upload me-1" />
                Export
              </CSVLink>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
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
          <table className="table datatable quotations-table">
            <thead className="thead-light">
              <tr>
                <th>CAR</th>
                <th>CUSTOMER</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>DATE</th>
                <th>ENQUIRY</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : enquiry.length > 0 ? (
                enquiry.map((enquiry) => (
                  <tr key={enquiry._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={`/admin-dashboard/car-details/${enquiry.car._id}`}
                          className="avatar me-2 flex-shrink-0"
                        >
                          <img src={BASE_URL_IMG + enquiry.car.image} alt />
                        </Link>
                        <div>
                          <Link
                            to="/admin-dashboard/car-details"
                            className="fw-semibold d-block"
                          >
                            {enquiry.car.carName}
                          </Link>
                          <span className="fs-13">
                            {enquiry.car.carType.carType}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={`/admin-dashboard/customer-details/${enquiry?.customer?._id}`}
                          className="d-block fw-semibold"
                        >
                          {enquiry.customer?.name}
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a className="me-2">
                          <span
                            className="__cf_email__"
                            data-cfemail="4537203027202b2e20202b05203d24283529206b262a28"
                          >
                            {enquiry.email}
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>{enquiry.phoneNumber}</td>
                    <td>
                      <div>
                        <p className="text-gray-9 mb-0">
                          {new Date(enquiry.createdAt).toDateString()}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-sm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-message text-gray-9 fs-18" />
                        </button>
                        <ul
                          className="dropdown-menu p-3"
                          style={{ minWidth: "250px" }}
                        >
                          <li>
                            <p className="mb-0 text-start text-wrap">
                              {enquiry.message || "No message"}
                            </p>
                          </li>
                        </ul>
                      </div>
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
                            <a
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_enquiries"
                              onClick={() => setSelectedId(enquiry._id)}
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No contacts found
                  </td>
                </tr>
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

      <div className="modal fade" id="delete_enquiries">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Enquiry</h4>
              <p className="mb-3">
                Are you sure you want to delete this Enquiry?
              </p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-light me-3" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEnquiries;

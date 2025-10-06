import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminCustomersDetails = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fettchcustomer = async () => {
    try {
      const res = await apiService.getCustomerById(id);
      if (res.data.success) {
        setCustomer(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to customers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fettchcustomer();
    }
  }, [id]);

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-0">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {loading ? (
                <div className="text-center my-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : customer ? (
                <>
                  <div className="mb-3">
                    <Link
                      to="/admin-dashboard/all-customers"
                      className="d-inline-flex align-items-center fw-medium"
                    >
                      <i className="ti ti-arrow-left me-1" />
                      Client
                    </Link>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-3 pb-3">
                        <h5>Basic Details</h5>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-3">
                            <img
                              src={BASE_URL_IMG + customer.image}
                              alt="img"
                            />
                          </span>
                          <div>
                            <h6 className="mb-1">{customer.name}</h6>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-2">
                                Added On:{" "}
                                {new Date(
                                  customer.createdAt
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <span className="badge badge-md bg-info-transparent">
                            License Number: {customer.licenseNumber}
                          </span>
                          {customer.validTill && (
                            <span className="badge badge-md bg-orange-transparent">
                              Valid Till:{" "}
                              {new Date(
                                customer.validTill
                              ).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overview and Documents Section */}
                  <div className="card mb-4 mb-xl-0">
                    <div className="card-header py-0">
                      <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#car-info"
                            data-bs-toggle="tab"
                          >
                            Overview
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="car-info"
                        >
                          {/* Customer Details */}
                          <div className="border-bottom mb-3 pb-3">
                            <div className="row">
                              <div className="col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Date of Birth
                                  </h6>
                                  <p className="fs-13">
                                    {new Date(
                                      customer.dateOfBirth
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Gender
                                  </h6>
                                  <p className="fs-13">{customer.gender}</p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Language
                                  </h6>
                                  <p className="fs-13">{customer.language}</p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Phone Number
                                  </h6>
                                  <p className="fs-13">{customer.contact}</p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Email
                                  </h6>
                                  <p className="fs-13">
                                    <a
                                      href={`mailto:${customer.email}`}
                                      className="text-blue-600 hover:underline"
                                    >
                                      {customer.email}
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Address
                                  </h6>
                                  <p className="fs-13">{customer.address}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Documents */}
                          <div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                              <h6>Documents</h6>
                            </div>
                            <div className="d-flex align-items-start flex-column gap-3">
                              {customer.file && (
                                <a
                                  href={`${BASE_URL_IMG}${customer.file}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Download File
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-center my-5">Customer not found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
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
  );
};

export default AdminCustomersDetails;

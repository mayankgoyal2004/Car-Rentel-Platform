import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

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
      console.error("Error fetching blog:", err);
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
                        <img src={BASE_URL_IMG + customer?.image} alt="img" />
                      </span>
                      <div>
                        <h6 className="mb-1">Adrian Mathews</h6>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 me-2">
                            Added On :{" "}
                            {new Date(customer?.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      <span className="badge badge-md bg-info-transparent">
                        License Number : {customer?.licenseNumber}
                      </span>
                      <span className="badge badge-md bg-orange-transparent">
                        Valid Till : {new Date(customer?.validTill).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#car-price"
                        data-bs-toggle="tab"
                      >
                        Recent Rents
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#car-service"
                        data-bs-toggle="tab"
                      >
                        History
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    {/* Overview */}
                    <div className="tab-pane fade active show" id="car-info">
                      <div className="border-bottom mb-3 pb-3">
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">
                                Date of Birth
                              </h6>
                              <p className="fs-13">{new Date(customer?.dateOfBirth).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">Gender</h6>
                              <p className="fs-13">{customer?.gender}</p>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">
                                {customer?.language}
                              </h6>
                              <p className="fs-13">English, French</p>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">
                                Phone Number
                              </h6>
                              <p className="fs-13">{customer?.contact}</p>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">Email</h6>
                              <p className="fs-13">
                                <a
                                  href={`mailto:${customer?.email}`}
                                  className="text-blue-600 hover:underline"
                                >
                                  {customer?.email}
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">
                                Address
                              </h6>
                              <p className="fs-13">{customer?.address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                          <h6>Documents</h6>
                        </div>
                        <div className="d-flex align-items-start flex-column gap-3">
                          {customer?.file && (
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
                    {/* /Overview */}
                    {/* Recent Rents */}
                    <div className="tab-pane fade" id="car-price">
                      <div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-9">
                                <div className="row gy-3 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar flex-shrink-0 me-2">
                                        <img
                                          src="/admin-assets/img/car/car-06.jpg"
                                          alt
                                        />
                                      </span>
                                      <div>
                                        <Link
                                          to="car-details"
                                          className="text-info"
                                        >
                                          #BR3466
                                        </Link>
                                        <h6 className="fs-14">Etios Carmen</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Booked on</h6>
                                      <p>15 Jan 2025, 05:30 PM</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Amount</h6>
                                      <p>$145</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="d-flex align-items-center icon-list justify-content-end">
                                  <Link
                                    to="invoice-details"
                                    className="edit-icon me-2"
                                  >
                                    <i className="ti ti-eye" />
                                  </Link>
                                  <a href="#" className="edit-icon">
                                    <i className="ti ti-download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-9">
                                <div className="row gy-3 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar flex-shrink-0 me-2">
                                        <img
                                          src="/admin-assets/img/car/car-02.jpg"
                                          alt
                                        />
                                      </span>
                                      <div>
                                        <Link
                                          to="car-details"
                                          className="text-info"
                                        >
                                          #BR3467
                                        </Link>
                                        <h6 className="fs-14">
                                          Ferrari 458 MM
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Booked on</h6>
                                      <p>25 Jan 2025, 02:00 PM</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Amount</h6>
                                      <p>$800</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="d-flex align-items-center icon-list justify-content-end">
                                  <Link
                                    to="invoice-details"
                                    className="edit-icon me-2"
                                  >
                                    <i className="ti ti-eye" />
                                  </Link>
                                  <a href="#" className="edit-icon">
                                    <i className="ti ti-download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-9">
                                <div className="row gy-3 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar flex-shrink-0 me-2">
                                        <img
                                          src="/admin-assets/img/car/car-04.jpg"
                                          alt
                                        />
                                      </span>
                                      <div>
                                        <Link
                                          to="car-details"
                                          className="text-info"
                                        >
                                          #BR3468
                                        </Link>
                                        <h6 className="fs-14">
                                          Toyota Tacoma 4
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Booked on</h6>
                                      <p>31 Jan 2025, 04:00 PM</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Amount</h6>
                                      <p>$145</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="d-flex align-items-center icon-list justify-content-end">
                                  <Link
                                    to="invoice-details"
                                    className="edit-icon me-2"
                                  >
                                    <i className="ti ti-eye" />
                                  </Link>
                                  <a href="#" className="edit-icon">
                                    <i className="ti ti-download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-9">
                                <div className="row gy-3 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar flex-shrink-0 me-2">
                                        <img
                                          src="/admin-assets/img/car/car-05.jpg"
                                          alt
                                        />
                                      </span>
                                      <div>
                                        <Link
                                          to="car-details"
                                          className="text-info"
                                        >
                                          #BR3469
                                        </Link>
                                        <h6 className="fs-14">
                                          Chevrolet Truck
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Booked on</h6>
                                      <p>25 Dec 2024, 06:00 PM</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Amount</h6>
                                      <p>$145</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="d-flex align-items-center icon-list justify-content-end">
                                  <Link
                                    to="invoice-details"
                                    className="edit-icon me-2"
                                  >
                                    <i className="ti ti-eye" />
                                  </Link>
                                  <a href="#" className="edit-icon">
                                    <i className="ti ti-download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-9">
                                <div className="row gy-3 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar flex-shrink-0 me-2">
                                        <img
                                          src="/admin-assets/img/car/car-10.jpg"
                                          alt
                                        />
                                      </span>
                                      <div>
                                        <Link
                                          to="car-details"
                                          className="text-info"
                                        >
                                          #BR3470
                                        </Link>
                                        <h6 className="fs-14">Toyota Camry</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Booked on</h6>
                                      <p>15 Jan 2025, 05:30 PM</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Amount</h6>
                                      <p>$145</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="d-flex align-items-center icon-list justify-content-end">
                                  <Link
                                    to="invoice-details"
                                    className="edit-icon me-2"
                                  >
                                    <i className="ti ti-eye" />
                                  </Link>
                                  <a href="#" className="edit-icon">
                                    <i className="ti ti-download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Recent Rents */}
                    {/* History */}
                    <div className="tab-pane fade" id="car-service">
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">24</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Return Day</h6>
                            <span className="fs-13">12:45 PM</span>
                          </div>
                          <span className="fs-13">
                            Return of keys and completion of the return process.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">24</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Return Day</h6>
                            <span className="fs-13">12:30 PM</span>
                          </div>
                          <span className="fs-13">
                            Fuel check and final inspection.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">24</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Return Day</h6>
                            <span className="fs-13">12:15 PM</span>
                          </div>
                          <span className="fs-13">
                            Vehicle inspection for any damages or missing items.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">24</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Return Day</h6>
                            <span className="fs-13">12:00 PM</span>
                          </div>
                          <span className="fs-13">
                            Customer arrives at Cityville Airport, 567 Airport
                            Rd, Cityville for car return.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">23</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                            <span className="fs-13">9:45 AM</span>
                          </div>
                          <span className="fs-13">
                            Departure from rental location.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">23</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                            <span className="fs-13">9:30 AM</span>
                          </div>
                          <span className="fs-13">
                            Customer receives the keys for a Toyota Corolla,
                            completes payment for the rental.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">23</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                            <span className="fs-13">9:15 AM</span>
                          </div>
                          <span className="fs-13">
                            Vehicle inspection and contract signing.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap row-gap-3">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">23</h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            Feb, 2025
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                            <span className="fs-13">9:00 AM</span>
                          </div>
                          <span className="fs-13">
                            Customer arrives at Downtown Rental Center, 123 Main
                            St, Cityville.
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* /History */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </div>
  );
};

export default AdminCustomersDetails;

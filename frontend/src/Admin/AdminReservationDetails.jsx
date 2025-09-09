import React from 'react'
import { Link } from 'react-router-dom'

const AdminReservationDetails = () => {
  return (
  <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="mb-3">
            <Link to="all-reservation"  className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-narrow-left me-2" />Reservation</Link>
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5>Reservation Details</h5>
              <span className="badge bg-orange-transparent">Requested</span>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs nav-tabs-solid custom-nav-tabs mb-3" role="tablist">
                <li className="nav-item" role="presentation"><a className="nav-link active" href="#solid-tab1" data-bs-toggle="tab" aria-selected="true" role="tab">Reservation Info</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#solid-tab2" data-bs-toggle="tab" aria-selected="false" role="tab">History</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active show" id="solid-tab1" role="tabpanel">
                  <div className="border rounded p-3 bg-light mb-3">
                    <div className="row">
                      <div className="col-8">
                        <div className="d-flex align-items-center">
                          <span className="avatar flex-shrink-0 me-2">
                            <img src="/admin-assets/img/car/car-07.jpg" alt />
                          </span>
                          <div>
                            <p className="mb-1">Sedan</p>
                            <h6 className="fs-14">Acura Sport </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-end">
                          <p className="mb-1">Price</p>
                          <h6 className="fs-14">$60<span className="text-gray-5 fw-normal">/day</span></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium fs-14">Start Date</h6>
                      <p>10 Feb 2025, 12:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium fs-14">End Date</h6>
                      <p>11 Feb 2025, 01:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium fs-14">Rental Period</h6>
                      <p>2 Days</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium fs-14">Driving Type</h6>
                      <p>Self</p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div className="bg-light p-3 rounded flex-fill mb-3">
                            <h6 className="mb-1 fs-14 fw-medium">Pickup Location</h6>
                            <p>2nd Avenue, Lasvegas</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-light p-3 rounded mb-3">
                          <h6 className="mb-1 fs-14 fw-medium">Return Location</h6>
                          <p>4th Street, Newyork</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a href="javascript:void(0);" className="text-decoration-underline text-violet">Edit</a>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <div className="mb-3">
                            <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">Customer<a href="javascript:void(0);" className="ms-2"><i className="ti ti-edit" /></a></h6>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-rounded flex-shrink-0 me-2">
                              <img src="/admin-assets/img/customer/customer-02.jpg" alt />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium mb-1">Andrew Simons</h6>
                              <p>+1 56598 98956</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <div className="mb-3">
                            <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">Driver<a href="javascript:void(0);" className="ms-2"><i className="ti ti-edit" /></a></h6>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-rounded flex-shrink-0 me-2">
                              <img src="/admin-assets/img/customer/customer-01.jpg" alt />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium mb-1">Reuben Keen</h6>
                              <p>+1 56598 98956</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-3 pb-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium fs-14">Pricing of Car</h6>
                      <p>$120</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium d-flex align-items-center fs-14">3 Extra Services 
                        <a href="javascript:void(0);" className="me-2 ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Navigation, USB Charger, Dash Cam"><i className="ti ti-info-circle-filled" /></a>
                        <a href="javascript:void(0);"><i className="ti ti-edit" /></a>
                      </h6>
                      <p>$30</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium d-flex align-items-center fs-14">Security Deposit
                        <a href="javascript:void(0);" className="ms-2"><i className="ti ti-edit" /></a>
                      </h6>
                      <p>$150</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="fw-medium d-flex align-items-center fs-14">Driver Price
                        <a href="javascript:void(0);" className="ms-2"><i className="ti ti-edit" /></a>
                      </h6>
                      <p>$180</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <h6>Total Price</h6>
                    <h6>$300</h6>
                  </div>
                </div>
                <div className="tab-pane" id="solid-tab2" role="tabpanel">
                  <div className="border rounded p-3 bg-light mb-3">
                    <div className="row">
                      <div className="col-8">
                        <div className="d-flex align-items-center">
                          <span className="avatar flex-shrink-0 me-2">
                            <img src="/admin-assets/img/car/car-07.jpg" alt />
                          </span>
                          <div>
                            <p className="mb-1">Sedan</p>
                            <h6 className="fs-14">Acura Sport </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-end">
                          <p className="mb-1">Price</p>
                          <h6 className="fs-14">$60<span className="text-gray-5 fw-normal">/day</span></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3">Histrory</h6>
                    <div className="d-flex align-items-center mb-3">
                      <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 className="mb-2">23</h5>
                        <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                      </div>
                      <div>
                        <h6 className="fs-14 mb-1">Reservation created</h6>
                        <span className="fs-13">01:30 PM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 className="mb-2">23</h5>
                        <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                      </div>
                      <div>
                        <h6 className="fs-14 mb-1">Updated: status changed to confirmed</h6>
                        <span className="fs-13">02:45 PM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 className="mb-2">24</h5>
                        <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                      </div>
                      <div>
                        <h6 className="fs-14 mb-1">Deposit Amount Done</h6>
                        <span className="fs-13">04:25 PM</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                        <h5 className="mb-2">25</h5>
                        <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                      </div>
                      <div>
                        <h6 className="fs-14 mb-1">Check in completed</h6>
                        <span className="fs-13">04:35 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-wrap row-gap-3">
            <Link to="/admin-dashboard/invoice-details" className="btn btn-primary me-3"><i className="ti ti-files me-1" />View Invoice</Link>
            <a href="javascript:void(0);" className="btn btn-dark me-3"><i className="ti ti-calendar me-1" />Reschedule</a>
            <a href="javascript:void(0);" className="btn btn-danger"><i className="ti ti-x me-1" />Cancel Booking</a>
          </div>
        </div>
      </div>
    </div>			
  </div>
  {/* /Page Wrapper */}
  <div className="modal fade" id="reservation_completed">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <form action="add-reservation">
            <span className="avatar avatar-lg bg-transparent-success rounded-circle text-success mb-3">
              <i className="ti ti-check fs-26" />
            </span>
            <h4 className="mb-1">Created Successful</h4>
            <p className="mb-3">Reservation created for the <span className="text-gray-9">“Ford Fiesta” </span> on <span className="text-gray-9">“24 Feb 2025”</span></p>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-100">View Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>	
</div>

  )
}

export default AdminReservationDetails
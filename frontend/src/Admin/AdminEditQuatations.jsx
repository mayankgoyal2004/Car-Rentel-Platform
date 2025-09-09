import React from 'react'

const AdminEditQuatations = () => {
  return (
<div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      <div className="mb-3">
        <a href="quotations.html" className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-narrow-left me-2" />Quotations</a>
      </div>
      <div className="wizard-form">
        <fieldset id="first-field">
          <div className="row">
            <div className="col-lg-12">
              <form action="add-quotations.html">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="reservation-wizard mb-4">
                      <ul className="d-flex align-items-center flex-wrap row-gap-2">
                        <li className="d-flex align-items-center active me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-calendar" /></span>
                          <h6>Car &amp; Dates Info</h6>
                        </li>
                        <li className="d-flex align-items-center me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-user-check" /></span>
                          <h6>Customer</h6>
                        </li>
                        <li className="d-flex align-items-center me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-float-center" /></span>
                          <h6>Extra Services</h6>
                        </li>
                        <li className="d-flex align-items-center me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-file-invoice" /></span>
                          <h6>Billing Details</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="card card-bg">
                      <div className="card-body">
                        <h4 className="d-flex align-items-center"><i className="ti ti-info-circle me-2 text-secondary fs-24" />Basic Info</h4>
                      </div>
                    </div>
                    <div>
                      <div className="border-bottom mb-3 pb-3">
                        <div className="row gx-3">
                          <div className="col-lg-3 col-sm-12">
                            <div>
                              <h5 className="mb-1">Date &amp; Time Of Travel</h5>
                              <p>Add Information on Date of Travel</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-sm-12">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Tarrif</label>
                                  <select className="select">
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Driving Type</label>
                                  <select className="select">
                                    <option>Self-Drive</option>
                                    <option>Chauffeur-Driven</option>
                                    <option>One-Way Rental</option>
                                    <option>Long-Term Lease</option>
                                    <option>Hourly Rental</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">No of Passengers</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="row gx-3">
                                  <div className="col-md-7">
                                    <div className="mb-3">
                                      <label className="form-label">Start Date <span className="text-danger"> *</span> </label>
                                      <div className="input-icon-end position-relative">
                                        <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-calendar" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <div className="mb-3">
                                      <label className="form-label">Time <span className="text-danger"> *</span> </label>
                                      <div className="d-flex align-items-center">
                                        <div className="input-icon-end position-relative flex-fill">
                                          <input type="text" className="form-control timepicker" placeholder />
                                          <span className="input-icon-addon">
                                            <i className="ti ti-clock" />
                                          </span>
                                        </div>
                                        <span className="avatar avatar-sm flex-shrink-0 bg-success fs-14 rounded-circle ms-3"><i className="ti ti-chevron-right" /></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="row gx-3">
                                  <div className="col-md-8">
                                    <div className="mb-3">
                                      <label className="form-label">End Date <span className="text-danger"> *</span> </label>
                                      <div className="input-icon-end position-relative">
                                        <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-calendar" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <label className="form-label">Time <span className="text-danger"> *</span> </label>
                                      <div className="input-icon-end position-relative">
                                        <input type="text" className="form-control timepicker" placeholder />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Pickup Location <span className="text-danger">*</span></label>
                                  <select className="select">
                                    <option>Select</option>
                                    <option>Los Angles</option>
                                    <option>New York City</option>
                                    <option>Houston</option>
                                    <option>Munich</option>
                                    <option>Montreal</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Return Location <span className="text-danger">*</span></label>
                                  <select className="select">
                                    <option>Select</option>
                                    <option>Los Angles</option>
                                    <option>New York City</option>
                                    <option>Houston</option>
                                    <option>Munich</option>
                                    <option>Montreal</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Security Deposit </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <label className="d-flex align-items-center">
                                <input className="form-check-input m-0 me-2" type="checkbox" />Return Same Location
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-lg-3 col-sm-12">
                          <div>
                            <h5 className="mb-1">Select Vehicle</h5>
                            <p>Select Vehicle for your rental</p>
                          </div>
                        </div>
                        <div className="col-lg-9 col-sm-12">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="d-flex align-items-center mb-3">
                                <div className="dropdown me-2">
                                  <a href="#filtercollapse" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="filtercollapse">
                                    <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                                  </a>
                                </div>
                                <div className="top-search me-2  w-100">
                                  <div className="top-search-group">
                                    <span className="input-icon">
                                      <i className="ti ti-search" />
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                  </div>
                                </div>
                                <div>
                                  <a href="add-car.html" className="btn btn-dark d-inline-flex min-width-100 align-items-center">
                                    <i className="ti ti-plus me-1" />Add New
                                  </a>
                                </div>
                              </div>
                              <div className="collapse" id="filtercollapse">
                                <div className="filterbox mb-3 px-3">
                                  <div className="row align-items-center">
                                    <div className="col-lg-10">
                                      <div className=" d-flex align-items-center flex-wrap row-gap-3">
                                        <div className="dropdown me-2">
                                          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            Select Brand
                                          </a>
                                          <ul className="dropdown-menu dropdown-menu-lg p-2">
                                            <li>
                                              <div className="top-search m-2">
                                                <div className="top-search-group">
                                                  <span className="input-icon">
                                                    <i className="ti ti-search" />
                                                  </span>
                                                  <input type="text" className="form-control" placeholder="Search" />
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Toyota
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Honda
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Ford
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Chevrolet
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />BMW
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="dropdown me-2">
                                          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            Select Type
                                          </a>
                                          <ul className="dropdown-menu dropdown-menu-lg p-2">
                                            <li>
                                              <div className="top-search m-2">
                                                <div className="top-search-group">
                                                  <span className="input-icon">
                                                    <i className="ti ti-search" />
                                                  </span>
                                                  <input type="text" className="form-control" placeholder="Search" />
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Economy
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Compact
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Sedan
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />SUV
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Luxury
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="dropdown me-2">
                                          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <i className="ti ti-badge me-1" />Select Model
                                          </a>
                                          <ul className="dropdown-menu dropdown-menu-lg p-2">
                                            <li>
                                              <div className="top-search m-2">
                                                <div className="top-search-group">
                                                  <span className="input-icon">
                                                    <i className="ti ti-search" />
                                                  </span>
                                                  <input type="text" className="form-control" placeholder="Search" />
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Urban Cruiser
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Fortuner
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />V8
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Q3
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Huracan
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <i className="ti ti-badge me-1" />Select Color
                                          </a>
                                          <ul className="dropdown-menu dropdown-menu-lg p-2">
                                            <li>
                                              <div className="top-search m-2">
                                                <div className="top-search-group">
                                                  <span className="input-icon">
                                                    <i className="ti ti-search" />
                                                  </span>
                                                  <input type="text" className="form-control" placeholder="Search" />
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />White
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Black
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Silver
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Gray
                                              </label>
                                            </li>
                                            <li>
                                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                                <input className="form-check-input m-0 me-2" type="checkbox" />Blue
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-2">
                                      <div className="d-flex align-items-center justify-content-end">
                                        <a href="javascript:void(0);" className="me-3 text-purple links">Apply</a>
                                        <a href="javascript:void(0);" className="text-danger links">Clear All</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="d-flex align-items-center">
                                        <div className="form-check form-check-md me-3">
                                          <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <span className="avatar flex-shrink-0 me-2">
                                          <img src="/admin-assets/img/car/car-01.jpg" alt />
                                        </span>
                                        <div>
                                          <p className="mb-1">Sedan</p>
                                          <h6 className="fs-14">Ford Endeavour</h6>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="row">
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Color</p>
                                            <h6 className="fs-14 d-inline-flex align-items-center"><i className="ti ti-square-filled text-warning me-1" />Yellow</h6>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Year</p>
                                            <h6 className="fs-14">2003</h6>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Price</p>
                                            <h6 className="fs-14">$800<span className="text-gray-5">/day</span></h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-3">
                                      <div className="float-md-end">
                                        <span className="badge bg-orange-transparent d-inline-flex align-items-center badge-sm mb-1">
                                          <i className="ti ti-point-filled me-1" />Requested
                                        </span>
                                        <h6 className="fs-14">2881 Jarvis Street</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="d-flex align-items-center">
                                        <div className="form-check form-check-md me-3">
                                          <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <span className="avatar flex-shrink-0 me-2">
                                          <img src="/admin-assets/img/car/car-02.jpg" alt />
                                        </span>
                                        <div>
                                          <p className="mb-1">Sports</p>
                                          <h6 className="fs-14">Ferrari 458 MM</h6>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="row">
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Color</p>
                                            <h6 className="fs-14 d-inline-flex align-items-center"><i className="ti ti-square-filled text-danger me-1" />Red</h6>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Year</p>
                                            <h6 className="fs-14">2003</h6>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Price</p>
                                            <h6 className="fs-14">$120<span className="text-gray-5">/day</span></h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-3">
                                      <div className="float-md-end">
                                        <span className="badge bg-pink-transparent d-inline-flex align-items-center badge-sm mb-1">
                                          <i className="ti ti-point-filled me-1" />Reserved
                                        </span>
                                        <h6 className="fs-14">2881 Jarvis Street</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="d-flex align-items-center">
                                        <div className="form-check form-check-md me-3">
                                          <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <span className="avatar flex-shrink-0 me-2">
                                          <img src="/admin-assets/img/car/car-03.jpg" alt />
                                        </span>
                                        <div>
                                          <p className="mb-1">Sedan</p>
                                          <h6 className="fs-14">Acura Sport </h6>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="row">
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Color</p>
                                            <h6 className="fs-14 d-inline-flex align-items-center"><i className="ti ti-square-filled text-info me-1" />Blue</h6>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Year</p>
                                            <h6 className="fs-14">2003</h6>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div>
                                            <p className="mb-1">Price</p>
                                            <h6 className="fs-14">$60<span className="text-gray-5">/day</span></h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-3">
                                      <div className="float-md-end">
                                        <span className="badge bg-success-transparent d-inline-flex align-items-center badge-sm mb-1">
                                          <i className="ti ti-point-filled me-1" />Available
                                        </span>
                                        <h6 className="fs-14">2881 Jarvis Street</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="field-btns">
                          <button className="btn btn-light me-2" type="button"><i className="ti ti-chevron-left me-1" />Cancel</button>
                        </div> 
                        <div className="field-btns">
                          <button className="btn btn-primary wizard-next-btn" type="button">Add Customer <i className="ti ti-chevron-right ms-1" /></button>
                        </div>  
                      </div> 
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="row">
            <div className="col-lg-12">
              <form action="add-quotations.html">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="reservation-wizard mb-4">
                      <ul className="d-flex align-items-center flex-wrap row-gap-2">
                        <li className="d-flex align-items-center activated me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-calendar" /></span>
                          <span className="active-check me-2"><i className="ti ti-check" /></span>
                          <h6>Car &amp; Dates Info</h6>
                        </li>
                        <li className="d-flex align-items-center active me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-user-check" /></span>
                          <h6>Customer</h6>
                        </li>
                        <li className="d-flex align-items-center me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-float-center" /></span>
                          <h6>Extra Services</h6>
                        </li>
                        <li className="d-flex align-items-center me-2">
                          <span className="me-2 wizard-icon"><i className="ti ti-file-invoice" /></span>
                          <h6>Billing Details</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="card card-bg">
                      <div className="card-body">
                        <h4 className="d-flex align-items-center"><i className="ti ti-user-check me-2 text-secondary fs-24" />Customer</h4>
                      </div>
                    </div>
                    <div className="border-bottom mb-3">
                      <div className="row">
                        <div className="col-lg-3 col-sm-12">
                          <div className="mb-3">
                            <h6 className="mb-1">Select Customer </h6>
                            <p>Add Information of Customer</p>
                          </div>
                        </div>
                        <div className="col-lg-9 col-sm-12">
                          <div className="mb-3">
                            <label className="form-label">Customer <span className="text-danger">*</span></label>
                            <div className="d-flex align-items-center">
                              <div className="flex-fill ">
                                <select className="select">
                                  <option>Select</option>
                                  <option>Reuben Keen</option>
                                  <option>William Jones</option>
                                  <option>Leonard Jandreau</option>
                                  <option>Adam Bolden</option>
                                </select>
                              </div>
                              <div className="ms-4">
                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_client" className="btn btn-dark d-inline-flex align-items-center">
                                  <i className="ti ti-plus me-1" />Add New
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card bg-light">
                            <div className="card-body">
                              <div className="row align-items-center">
                                <div className="col-md-11">
                                  <div className="row gx-2">
                                    <div className="col-md-4">
                                      <div className="d-flex align-items-center">
                                        <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                          <img src="/admin-assets/img/customer/customer-03.jpg" alt />
                                        </span>
                                        <div>
                                          <h6 className="fs-14 mb-1">Andrew Simons</h6>
                                          <span className="badge bg-info-transparent">15 Bookings</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <h6 className="fs-14 mb-1">Phone</h6>
                                        <p>+1 58514 45546</p>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <h6 className="fs-14 mb-1">Email</h6>
                                        <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3f5e515b4d5a480c0b7f5a475e524f535a115c5052">[email&nbsp;protected]</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1">
                                  <div className="d-flex align-items-center justify-content-end">
                                    <a href="javascript:void(0);" className="me-2"><i className="ti ti-eye" /></a>
                                    <a href="javascript:void(0);"><i className="ti ti-trash" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <div className="mb-3">
                          <h6 className="mb-1">Select Driver </h6>
                          <p>Add Information of Driver</p>
                        </div>
                      </div>  
                      <div className="col-lg-9 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Driver <span className="text-danger">*</span></label>
                          <div className="d-flex align-items-center">
                            <div className="flex-fill ">
                              <select className="select">
                                <option>Select</option>
                                <option>Reuben Keen</option>
                                <option>William Jones</option>
                                <option>Leonard Jandreau</option>
                                <option>Adam Bolden</option>
                              </select>
                            </div>
                            <div className="ms-4">
                              <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_driver" className="btn btn-dark d-inline-flex align-items-center">
                                <i className="ti ti-plus me-1" />Add New
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end mb-3">
                          <a href="javascript:void(0);" className="text-purple text-decoration-underline fw-medium" data-bs-toggle="modal" data-bs-target="#edit_price">Edit Price</a>
                        </div>
                        <div className="card bg-light">
                          <div className="card-body">
                            <div className="row align-items-center">
                              <div className="col-md-11">
                                <div className="row gx-2">
                                  <div className="col-md-5">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check form-check-md me-3">
                                        <input className="form-check-input" type="checkbox" />
                                      </div>
                                      <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="/admin-assets/img/customer/customer-01.jpg" alt />
                                      </span>
                                      <div>
                                        <h6 className="fs-14 mb-1">Reuben Keen</h6>
                                        <span className="badge bg-violet-transparent">50 Rides</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Phone</h6>
                                      <p>+1 58514 45546</p>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <h6 className="fs-14 mb-1">Price</h6>
                                      <p>$18 </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-1">
                                <div className="d-flex align-items-center justify-content-end">
                                  <a href="javascript:void(0);" className="me-2"><i className="ti ti-eye" /></a>
                                  <a href="javascript:void(0);"><i className="ti ti-trash" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="field-btns">
                          <button className="btn btn-light wizard-prev-btn me-2" type="button"><i className="ti ti-chevron-left me-1" />Back to Info</button>
                        </div> 
                        <div className="field-btns">
                          <button className="btn btn-primary wizard-next-btn" type="button">Add Extra Services<i className="ti ti-chevron-right ms-1" /></button>
                        </div>  
                      </div> 
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <form action="add-quotations.html">
            <div className="card mb-0">
              <div className="card-body">
                <div className="reservation-wizard mb-4">
                  <ul className="d-flex align-items-center flex-wrap row-gap-2">
                    <li className="d-flex align-items-center activated me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-calendar" /></span>
                      <span className="active-check me-2"><i className="ti ti-check" /></span>
                      <h6>Car &amp; Dates Info</h6>
                    </li>
                    <li className="d-flex align-items-center activated  me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-user-check" /></span>
                      <span className="active-check me-2"><i className="ti ti-check" /></span>
                      <h6>Customer</h6>
                    </li>
                    <li className="d-flex align-items-center active me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-float-center" /></span>
                      <h6>Extra Services</h6>
                    </li>
                    <li className="d-flex align-items-center me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-file-invoice" /></span>
                      <h6>Billing Details</h6>
                    </li>
                  </ul>
                </div>
                <div className="card card-bg">
                  <div className="card-body">
                    <h4 className="d-flex align-items-center"><i className="ti ti-float-center me-2 text-secondary fs-24" />Extra Service</h4>
                  </div>
                </div>
                <div className="row border-bottom mb-3">
                  <div className="col-lg-12 col-sm-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Select Extra Services</h6>
                        <p>Add extra services for your rental</p>
                      </div>
                      <a href="javascript:void(0);" className="text-purple text-decoration-underline fw-medium" data-bs-toggle="modal" data-bs-target="#edit_price1">Edit Price</a>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="custom-checkbox active">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-1" defaultChecked />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-1">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Navigation</span>
                              <span className="d-block">Using GPS while travel</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-2" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-2">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Wi-Fi Hotspot</span>
                              <span className="d-block">Constant portable internet</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-3" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-3">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Fuel Pre-Purchase</span>
                              <span className="d-block">Full tank, return hassle-free</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">One Time</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-4" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-4">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Satellite Radio</span>
                              <span className="d-block"> Unlimited premium music</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-5" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-5">
                              <span className="fw-semibold text-gray-9 d-block mb-1">USB Charger</span>
                              <span className="d-block">Fast charging for devices</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-6" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-6">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Toll Pass</span>
                              <span className="d-block">Skip toll booth lines</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">One Time</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-7" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-7">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Dash Cam</span>
                              <span className="d-block">Records trips extra security</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Express Check-in/out</span>
                              <span className="d-block">Fast pickup &amp; return process</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox active">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-9" defaultChecked />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-9">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Child Safety Seats</span>
                              <span className="d-block">Secure infant/toddler car seat</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="custom-check-10" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4" htmlFor="custom-check-10">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Roadside Assistance</span>
                              <span className="d-block">24/7 emergency car support</span>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Per Day</p>
                              <h6>$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-0 pb-0">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="field-btns">
                      <button className="btn btn-light wizard-prev-btn me-2" type="button"><i className="ti ti-chevron-left me-1" />Back to Info</button>
                    </div> 
                    <div className="field-btns">
                      <button className="btn btn-primary wizard-next-btn" type="button">Add Extra Services<i className="ti ti-chevron-right ms-1" /></button>
                    </div>  
                  </div> 
                </div>
              </div>
            </div>
          </form>
        </fieldset>
        <fieldset>
          <form action="quotations.html">
            <div className="card mb-0">
              <div className="card-body">
                <div className="reservation-wizard mb-4">
                  <ul className="d-flex align-items-center flex-wrap row-gap-2">
                    <li className="d-flex align-items-center activated me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-calendar" /></span>
                      <span className="active-check me-2"><i className="ti ti-check" /></span>
                      <h6>Car &amp; Dates Info</h6>
                    </li>
                    <li className="d-flex align-items-center activated  me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-user-check" /></span>
                      <span className="active-check me-2"><i className="ti ti-check" /></span>
                      <h6>Customer</h6>
                    </li>
                    <li className="d-flex align-items-center activated me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-float-center" /></span>
                      <span className="active-check me-2"><i className="ti ti-check" /></span>
                      <h6>Extra Services</h6>
                    </li>
                    <li className="d-flex align-items-center active me-2">
                      <span className="me-2 wizard-icon"><i className="ti ti-file-invoice" /></span>
                      <h6>Billing Details</h6>
                    </li>
                  </ul>
                </div>
                <div className="card card-bg">
                  <div className="card-body">
                    <h4 className="d-flex align-items-center"><i className="ti ti-file-invoice me-2 text-secondary fs-24" />Billing Details</h4>
                  </div>
                </div>
                <div className="row border-bottom mb-3">
                  <div className="col-lg-3 col-sm-12">
                    <div className="mb-3">
                      <h6 className="mb-1">Rent &amp; Service Billing</h6>
                      <p>Add extra services for your rental</p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Base Kilometers (Per Day)</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Kilometers Extra Price</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Expenses</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Delivery price</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom mb-3">
                  <div className="col-lg-3 col-sm-12">
                    <div className="d-flex">
                      <div className="form-check form-check-md form-switch me-2">
                        <label className="form-check-label form-label mt-0 mb-0">
                          <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                        </label>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1">Insurance</h6>
                        <p>Add Insurance of Your Ride</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Full Premium Insurance</span>
                              <a href="javascript:void(0);" className="d-block text-info">+4 Benefits <i className="ti ti-info-small rounded-circle bg-gray-500 text-white" /></a>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Onetime Ride</p>
                              <h6>$200</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-checkbox">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-check-label ms-2 ps-4">
                              <span className="fw-semibold text-gray-9 d-block mb-1">Satellite Radio</span>
                              <a href="javascript:void(0);" className="d-block text-info">+6 Benefits <i className="ti ti-info-small rounded-circle bg-gray-500 text-white" /></a>
                            </label>
                            <div className="text-end">
                              <p className="mb-1">Onetime Ride</p>
                              <h6>$250</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-3 col-sm-12">
                    <div className="d-flex">
                      <div className="form-check form-check-md form-switch me-2">
                        <label className="form-check-label form-label mt-0 mb-0">
                          <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                        </label>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1">Invoice Settings</h6>
                        <p>Add Invoice Settings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Tax Type <span className="text-danger">*</span></label>
                          <select className="select">
                            <option selected>%</option>
                            <option>Direct</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Add Tax Value <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-0 pb-0">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="field-btns">
                      <button className="btn btn-light wizard-prev-btn me-2" type="button"><i className="ti ti-chevron-left me-1" />Back to Info</button>
                    </div> 
                    <div className="field-btns">
                      <button className="btn btn-primary wizard-next-btn" type="submit">Finish &amp; Save<i className="ti ti-chevron-right ms-1" /></button>
                    </div>  
                  </div> 
                </div>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Edit Pricing */}
  <div className="modal fade" id="edit_price1">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Pricing</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="add-quotations.html">
          <div className="modal-body pb-1">
            <table className="table custom-table1">
              <thead className="thead-white">
                <tr>
                  <th className="py-0">Extra Features</th>
                  <th className="py-0">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium text-gray-9">Navigation</td>
                  <td>		
                    <div className="d-flex align-items-center">								
                      <select className="select">
                        <option>One Time</option>
                        <option>Per Day</option>
                      </select>
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input type="text" className="form-control" defaultValue={90} />
                      </div>
                    </div>	
                  </td>
                </tr>	
                <tr>
                  <td className="fw-medium text-gray-9">Satellite Radio</td>
                  <td>		
                    <div className="d-flex align-items-center">								
                      <select className="select">
                        <option>One Time</option>
                        <option selected>Per Day</option>
                      </select>
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input type="text" className="form-control" defaultValue={25} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Roadside Assistance</td>
                  <td>		
                    <div className="d-flex align-items-center">								
                      <select className="select">
                        <option>One Time</option>
                        <option selected>Per Day</option>
                      </select>
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input type="text" className="form-control" defaultValue={47} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Express Check-in/out</td>
                  <td>		
                    <div className="d-flex align-items-center">								
                      <select className="select">
                        <option>One Time</option>
                        <option selected>Per Day</option>
                      </select>
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input type="text" className="form-control" defaultValue={75} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Child Safety Seats</td>
                  <td>		
                    <div className="d-flex align-items-center">								
                      <select className="select">
                        <option>One Time</option>
                        <option selected>Per Day</option>
                      </select>
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input type="text" className="form-control" defaultValue={22} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Roadside Assistance</td>
                  <td>		
                    <div className="d-flex align-items-center">								
                      <select className="select">
                        <option>One Time</option>
                        <option selected>Per Day</option>
                      </select>
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input type="text" className="form-control" defaultValue={48} />
                      </div>
                    </div>	
                  </td>
                </tr>								
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Pricing */}
  {/* Edit Pricing */}
  <div className="modal fade" id="edit_price">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Pricing</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="add-quotations.html">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Drivers <span className="text-danger">*</span></label>
                  <div className="d-flex align-items-center mt-2">
                    <a href="javascript:void(0);" className="avatar avatar-sm avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-05.jpg" alt /></a>
                    <div>
                      <a className="d-block fw-semibold" href="#">Reuben Keen</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Pricing <span className="text-danger">*</span></label>
                  <input type="text" defaultValue="$ 90" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Pricing */}
  {/* Add Driver */}
  <div className="modal fade" id="add_driver">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Driver</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                  <i className="ti ti-photo-up text-gray-4 fs-24" />
                </div>                                              
                <div className="profile-upload">
                  <div className="profile-uploader d-flex align-items-center">
                    <div className="drag-upload-btn btn btn-md btn-dark">
                      <i className="ti ti-photo-up fs-14" />
                      Upload
                      <input type="file" className="form-control image-sign" multiple />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Driver Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Gender <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone" name="phone" className="form-control" />
              </div>
            </div>            
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <h6 className="fs-16 fw-medium mb-2">License Details</h6>   
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Card Number <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Date of Issue <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>    
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Valid Date <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>  
            <div className="col-md-12">
              <label className="form-label"> Document</label>
              <div className="document-upload text-center br-3 mb-3">
                <img src="/admin-assets/img/icons/upload-icon.svg" alt="img" className="mb-2" />
                <p className="mb-2">Drop your files here or <span className="text-info text-decoration-underline">Browse</span></p>
                <p className="fs-12 mb-0">Maximum size 50mb</p>
                <input type="file" className="form-control image-sign" multiple accept=".pdf, .txt, .doc, .docx" />
              </div>  
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" className="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Driver */}
  {/* Add Client */}
  <div className="modal fade" id="add_client">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Client</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                  <i className="ti ti-photo-up text-gray-4 fs-24" />
                </div>                                              
                <div className="profile-upload">
                  <div className="profile-uploader d-flex align-items-center">
                    <div className="drag-upload-btn btn btn-md btn-dark">
                      <i className="ti ti-photo-up fs-14" />
                      Upload
                      <input type="file" className="form-control image-sign" multiple />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Client Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Date of Birth <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>     
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Gender <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>            
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Language <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>English</option>
                  <option>German</option>
                  <option>Frence</option>
                </select>
              </div>
            </div>            
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="phone1" name="phone" />
              </div>
            </div>            
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>            
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <h6 className="fs-16 fw-medium mb-2">License Details</h6>     
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Card Number <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Date of Issue <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>    
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Valid Date <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>  
            <div className="col-md-12">
              <label className="form-label"> Document</label>
              <div className="document-upload text-center br-3 mb-3">
                <img src="/admin-assets/img/icons/upload-icon.svg" alt="img" className="mb-2" />
                <p className="mb-2">Drop your files here or <span className="text-info text-decoration-underline">Browse</span></p>
                <p className="fs-12 mb-0">Maximum size 50mb</p>
                <input type="file" className="form-control image-sign" multiple accept=".pdf, .txt, .doc, .docx" />
              </div>  
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" className="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Client */}
</div>

  )
}

export default AdminEditQuatations
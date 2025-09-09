import React from 'react'
import { Link } from 'react-router-dom'

const AdminCoupons = () => {
  return (
   <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Coupons</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Coupons</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2 me-2">
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_coupons"><i className="ti ti-plus me-2" />Add Coupon</a>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Coupons tabs */}
      <div className="coupons-tabs">
        <ul className="nav nav-pills mb-3" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page" href="#all-coupons" aria-selected="true">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#active-coupons" aria-selected="false">Active Coupons</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#completed-coupons" aria-selected="false">Completed Coupons</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane show active" id="all-coupons" role="tabpanel">
            {/* Table Header */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
              <div className="d-flex align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-filter me-1" /> Sort By : Latest
                  </a>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Latest</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Ascending</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Desending</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Last Month</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Last 7 Days</a>
                    </li>
                  </ul>
                </div>                    
                <div className="dropdown">
                  <a href="#filtercollapse" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse">
                    <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                  </a>
                </div>                    
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="top-search me-2">
                  <div className="top-search-group">
                    <span className="input-icon">
                      <i className="ti ti-search" />
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>  
                <div className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-layout-board me-1" /> Columns
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg p-2">
                    <ul>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />COUPON NAME</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />CODE</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DESCRIPTION</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DISCOUNT TYPE</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DISCOUNT</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />LIMIT</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />VALID</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />STATUS</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>                      
              </div>
            </div>
            {/* /Table Header */}
            <div className="collapse" id="filtercollapse">
              <div className="filterbox mb-3 d-flex align-items-center">
                <h6 className="me-3">Filters</h6>
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Discount Type
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
                        <input className="form-check-input m-0 me-2" type="checkbox" />Percentage
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item d-flex align-items-center rounded-1">
                        <input className="form-check-input m-0 me-2" type="checkbox" />Fixed Amount
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Status
                  </a>
                  <ul className="dropdown-menu dropdown-menu-lg p-2">
                    <li className="dropdown-item d-flex align-items-center rounded-1">
                      Active
                    </li>
                    <li className="dropdown-item d-flex align-items-center rounded-1">
                      Inactive
                    </li>
                  </ul>
                </div>
                <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
                <a href="javascript:void(0);" className="text-danger links">Clear All</a>
              </div>
            </div>
            {/* Custom Data Table */}
            <div className="custom-datatable-filter table-responsive brandstable country-table">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th>COUPON NAME</th>
                    <th>CODE</th>
                    <th>DESCRIPTION</th>
                    <th>DISCOUNT TYPE</th>
                    <th>DISCOUNT</th>
                    <th>LIMIT</th>
                    <th>VALID</th>
                    <th>STATUS</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Summer Sale 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">SUMMER2024</span>
                    </td>
                    <td>
                      <p>20% off on all rentals in July</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>20%</p>
                    </td>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>24 Jan 2025</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>                                                                                                  
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Fall Savings</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">FALL15</span>
                    </td>
                    <td>
                      <p>15% off for long-term rentals</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>15%</p>
                    </td>
                    <td>
                      <p>03</p>
                    </td>
                    <td>
                      <p>19 Dec 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Weekend Discount</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">WEEKEND10</span>
                    </td>
                    <td>
                      <p>10% off on weekend rentals</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>10%</p>
                    </td>
                    <td>
                      <p>08</p>
                    </td>
                    <td>
                      <p>11 Dec 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">First Timer Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">FIRSTTIME20</span>
                    </td>
                    <td>
                      <p>20% off for first-time customers</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>20%</p>
                    </td>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>29 Nov 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Holiday Cheer 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">HOLIDAY2024</span>
                    </td>
                    <td>
                      <p>25% off during the holiday season</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>05</p>
                    </td>
                    <td>
                      <p>03 Nov 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">VIP Discount</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">VIPCUSTOMER25</span>
                    </td>
                    <td>
                      <p>Exclusive 25% discount for VIP users</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>18</p>
                    </td>
                    <td>
                      <p>31 Oct 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">SUV Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">SUV50</span>
                    </td>
                    <td>
                      <p>$50 off on SUV rentals for 7+ days</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$50</p>
                    </td>
                    <td>
                      <p>04</p>
                    </td>
                    <td>
                      <p>15 Oct 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">New Year 2025</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">NEWYEAR2025</span>
                    </td>
                    <td>
                      <p>25% off for New Year bookings</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>26 Sep 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Weekend Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">WEEKEND50</span>
                    </td>
                    <td>
                      <p>Save $50 on weekend rentals.</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$50</p>
                    </td>
                    <td>
                      <p>09</p>
                    </td>
                    <td>
                      <p>01 Sep 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Refer a Friend</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">REFERFRIEND10</span>
                    </td>
                    <td>
                      <p>Get $10 off for referring a friend</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$10</p>
                    </td>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>15 Aug 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>                                                                                            
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane" id="active-coupons" role="tabpanel">
            {/* Table Header */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
              <div className="d-flex align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-filter me-1" /> Sort By : Latest
                  </a>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Latest</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Ascending</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Desending</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Last Month</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Last 7 Days</a>
                    </li>
                  </ul>
                </div>                    
                <div className="dropdown">
                  <a href="#filtercollapse2" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse2">
                    <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                  </a>
                </div>                    
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="top-search me-2">
                  <div className="top-search-group">
                    <span className="input-icon">
                      <i className="ti ti-search" />
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>  
                <div className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-layout-board me-1" /> Columns
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg p-2">
                    <ul>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />COUPON NAME</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />CODE</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DESCRIPTION</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DISCOUNT TYPE</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DISCOUNT</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />LIMIT</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />VALID</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />STATUS</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>                      
              </div>
            </div>
            {/* /Table Header */}
            <div className="collapse" id="filtercollapse2">
              <div className="filterbox mb-3 d-flex align-items-center">
                <h6 className="me-3">Filters</h6>
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Discount Type
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
                        <input className="form-check-input m-0 me-2" type="checkbox" />Percentage
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item d-flex align-items-center rounded-1">
                        <input className="form-check-input m-0 me-2" type="checkbox" />Fixed Amount
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Status
                  </a>
                  <ul className="dropdown-menu dropdown-menu-lg p-2">
                    <li className="dropdown-item d-flex align-items-center rounded-1">
                      Active
                    </li>
                    <li className="dropdown-item d-flex align-items-center rounded-1">
                      Active
                    </li>
                  </ul>
                </div>
                <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
                <a href="javascript:void(0);" className="text-danger links">Clear All</a>
              </div>
            </div>
            {/* Custom Data Table */}
            <div className="custom-datatable-filter table-responsive brandstable country-table">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th>COUPON NAME</th>
                    <th>CODE</th>
                    <th>DESCRIPTION</th>
                    <th>DISCOUNT TYPE</th>
                    <th>DISCOUNT</th>
                    <th>LIMIT</th>
                    <th>VALID</th>
                    <th>STATUS</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Summer Sale 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">SUMMER2024</span>
                    </td>
                    <td>
                      <p>20% off on all rentals in July</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>20%</p>
                    </td>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>24 Jan 2025</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>                                                                                                  
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Fall Savings</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">FALL15</span>
                    </td>
                    <td>
                      <p>15% off for long-term rentals</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>15%</p>
                    </td>
                    <td>
                      <p>03</p>
                    </td>
                    <td>
                      <p>19 Dec 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Weekend Discount</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">WEEKEND10</span>
                    </td>
                    <td>
                      <p>10% off on weekend rentals</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>10%</p>
                    </td>
                    <td>
                      <p>08</p>
                    </td>
                    <td>
                      <p>11 Dec 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">First Timer Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">FIRSTTIME20</span>
                    </td>
                    <td>
                      <p>20% off for first-time customers</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>20%</p>
                    </td>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>29 Nov 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Holiday Cheer 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">HOLIDAY2024</span>
                    </td>
                    <td>
                      <p>25% off during the holiday season</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>05</p>
                    </td>
                    <td>
                      <p>03 Nov 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">VIP Discount</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">VIPCUSTOMER25</span>
                    </td>
                    <td>
                      <p>Exclusive 25% discount for VIP users</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>18</p>
                    </td>
                    <td>
                      <p>31 Oct 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">SUV Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">SUV50</span>
                    </td>
                    <td>
                      <p>$50 off on SUV rentals for 7+ days</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$50</p>
                    </td>
                    <td>
                      <p>04</p>
                    </td>
                    <td>
                      <p>15 Oct 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">New Year 2025</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">NEWYEAR2025</span>
                    </td>
                    <td>
                      <p>25% off for New Year bookings</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>26 Sep 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Weekend Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">WEEKEND50</span>
                    </td>
                    <td>
                      <p>Save $50 on weekend rentals.</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$50</p>
                    </td>
                    <td>
                      <p>09</p>
                    </td>
                    <td>
                      <p>01 Sep 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Refer a Friend</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">REFERFRIEND10</span>
                    </td>
                    <td>
                      <p>Get $10 off for referring a friend</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$10</p>
                    </td>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>15 Aug 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-success" />Active</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>                                                                                            
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane" id="completed-coupons" role="tabpanel">
            {/* Table Header */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
              <div className="d-flex align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-filter me-1" /> Sort By : Latest
                  </a>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Latest</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Ascending</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Desending</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Last Month</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Last 7 Days</a>
                    </li>
                  </ul>
                </div>                    
                <div className="dropdown">
                  <a href="#filtercollapse3" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse3">
                    <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                  </a>
                </div>                    
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="top-search me-2">
                  <div className="top-search-group">
                    <span className="input-icon">
                      <i className="ti ti-search" />
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>  
                <div className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-layout-board me-1" /> Columns
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg p-2">
                    <ul>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />COUPON NAME</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />CODE</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DESCRIPTION</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DISCOUNT TYPE</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />DISCOUNT</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />LIMIT</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />VALID</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                          <span><i className="ti ti-grip-vertical me-1" />STATUS</span>
                          <div className="form-check form-check-sm form-switch mb-0">
                            <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>                      
              </div>
            </div>
            {/* /Table Header */}
            <div className="collapse" id="filtercollapse3">
              <div className="filterbox mb-3 d-flex align-items-center">
                <h6 className="me-3">Filters</h6>
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Discount Type
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
                        <input className="form-check-input m-0 me-2" type="checkbox" />Percentage
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item d-flex align-items-center rounded-1">
                        <input className="form-check-input m-0 me-2" type="checkbox" />Fixed Amount
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Status
                  </a>
                  <ul className="dropdown-menu dropdown-menu-lg p-2">
                    <li className="dropdown-item d-flex align-items-center rounded-1">
                      Active
                    </li>
                    <li className="dropdown-item d-flex align-items-center rounded-1">
                      Inactive
                    </li>
                  </ul>
                </div>
                <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
                <a href="javascript:void(0);" className="text-danger links">Clear All</a>
              </div>
            </div>
            {/* Custom Data Table */}
            <div className="custom-datatable-filter table-responsive brandstable country-table">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th>COUPON NAME</th>
                    <th>CODE</th>
                    <th>DESCRIPTION</th>
                    <th>DISCOUNT TYPE</th>
                    <th>DISCOUNT</th>
                    <th>LIMIT</th>
                    <th>VALID</th>
                    <th>STATUS</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Summer Sale 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">SUMMER2024</span>
                    </td>
                    <td>
                      <p>20% off on all rentals in July</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>20%</p>
                    </td>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>24 Jan 2025</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>                                                                                                  
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Fall Savings</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">FALL15</span>
                    </td>
                    <td>
                      <p>15% off for long-term rentals</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>15%</p>
                    </td>
                    <td>
                      <p>03</p>
                    </td>
                    <td>
                      <p>19 Dec 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Weekend Discount</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">WEEKEND10</span>
                    </td>
                    <td>
                      <p>10% off on weekend rentals</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>10%</p>
                    </td>
                    <td>
                      <p>08</p>
                    </td>
                    <td>
                      <p>11 Dec 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">First Timer Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">FIRSTTIME20</span>
                    </td>
                    <td>
                      <p>20% off for first-time customers</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>20%</p>
                    </td>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>29 Nov 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Holiday Cheer 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">HOLIDAY2024</span>
                    </td>
                    <td>
                      <p>25% off during the holiday season</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>05</p>
                    </td>
                    <td>
                      <p>03 Nov 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">VIP Discount</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">VIPCUSTOMER25</span>
                    </td>
                    <td>
                      <p>Exclusive 25% discount for VIP users</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>18</p>
                    </td>
                    <td>
                      <p>31 Oct 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">SUV Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">SUV50</span>
                    </td>
                    <td>
                      <p>$50 off on SUV rentals for 7+ days</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$50</p>
                    </td>
                    <td>
                      <p>04</p>
                    </td>
                    <td>
                      <p>15 Oct 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">New Year 2025</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">NEWYEAR2025</span>
                    </td>
                    <td>
                      <p>25% off for New Year bookings</p>
                    </td>
                    <td>
                      <p>Percentage</p>
                    </td>
                    <td>
                      <p>25%</p>
                    </td>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>26 Sep 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Weekend Special</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">WEEKEND50</span>
                    </td>
                    <td>
                      <p>Save $50 on weekend rentals.</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$50</p>
                    </td>
                    <td>
                      <p>09</p>
                    </td>
                    <td>
                      <p>01 Sep 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr> 
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-semibold">Refer a Friend</p>
                    </td>
                    <td>
                      <span className="badge badge-soft-violet border">REFERFRIEND10</span>
                    </td>
                    <td>
                      <p>Get $10 off for referring a friend</p>
                    </td>
                    <td>
                      <p>Fixed Amount</p>
                    </td>
                    <td>
                      <p>$10</p>
                    </td>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>15 Aug 2024</p>
                    </td>
                    <td>
                      <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_coupons"><i className="ti ti-edit me-1" />Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_coupons"><i className="ti ti-trash me-1" />Delete</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>                                                                                            
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Coupons tabs */}
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Add Coupons */}
  <div className="modal fade" id="add_coupons">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Coupon</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Coupon Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Coupon Code <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Type <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Percentage</option>
                  <option>Fixed</option>
                </select>
              </div> 
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Discount Value <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
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
            <div className="col-md-6 col-sm-12">
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
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Applicable To <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>New Customers</option>
                  <option>Weekly Rentals</option>
                  <option>VIP Members</option>
                  <option>Luxury Cars</option>
                  <option>Long Rentals</option>
                </select>
              </div> 
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Limit <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
                <span className="text-gray-5 fs-13 mt-1">Enter 0 for unlimited</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-0">
                <label className="form-label">Description </label>
                <div className="editor" />
                <p className="mt-2 fs-14">Maximum 60 Words</p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Coupons */}
  {/* Edit Coupons */}
  <div className="modal fade" id="edit_coupons">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Coupon</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Coupon Name <span className="text-danger">*</span></label>
                <input type="text" defaultValue="Summer Sale 2025" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Coupon Code <span className="text-danger">*</span></label>
                <input type="text" defaultValue="SUMMER2024" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Type <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>Percentage</option>
                  <option>Fixed</option>
                </select>
              </div> 
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Discount Value <span className="text-danger">*</span></label>
                <input type="text" defaultValue="25%" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
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
            <div className="col-md-6 col-sm-12">
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
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Applicable To <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>New Customers</option>
                  <option>Weekly Rentals</option>
                  <option>VIP Members</option>
                  <option>Luxury Cars</option>
                  <option>Long Rentals</option>
                </select>
              </div> 
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">Limit <span className="text-danger">*</span></label>
                <input type="text" defaultValue={15} className="form-control" />
                <span className="text-gray-5 fs-13 mt-1">Enter 0 for unlimited</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-0">
                <label className="form-label">Description </label>
                <div className="editor">20% off on all rentals in January to March.</div>
                <p className="mt-2 fs-14">Maximum 60 Words</p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary">Save Changes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Coupons */}
  {/* Delete Modal  */}
  <div className="modal fade" id="delete_coupons">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Coupon</h4>
          <p className="mb-3">Are you sure you want to delete Coupon?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal*/}
</div>

  )
}

export default AdminCoupons
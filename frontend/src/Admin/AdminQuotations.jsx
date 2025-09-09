import React from 'react'
import { Link } from 'react-router-dom'

const AdminQuotations = () => {
  return (
   <div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Quotations</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link  to="/admin-dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Quotations</li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="mb-2 me-2">
          <a href="javascript:void(0);" className="btn btn-white d-flex align-items-center"><i className="ti ti-printer me-2" />Print</a>
        </div>
        <div className="mb-2 me-2">
          <div className="dropdown">
            <a href="javascript:void(0);" className="btn btn-dark d-inline-flex align-items-center">
              <i className="ti ti-upload me-1" />Export
            </a>
          </div>
        </div>
        <div className="mb-2">
          <Link to="/admin-dashboard/add-quotations"  className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Quotation</Link>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
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
        <div className="me-2">
          <div className="input-icon-start position-relative topdatepicker">
            <span className="input-icon-addon">
              <i className="ti ti-calendar" />
            </span>
            <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
          </div>
        </div>                      
        <div className="dropdown">
          <a href="#filtercollapse" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse">
            <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
          </a>
        </div>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
            <i className="ti ti-edit me-1" /> Bulk Actions
          </a>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <a href="javascript:void(0);" className="dropdown-item rounded-1">Delete</a>
            </li>
          </ul>
        </div>
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
                  <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />CUSTOMER</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />CAR</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />PICK UP  DETAILS</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />DROP OFF  DETAILS</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />PASSENGERS</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />PRICE</span>
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
            Pick Up Location
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Los Angles
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />New York City
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Houston
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Munich
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Montreal
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Drop Off Location
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Los Angles
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />New York City
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Houston
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Munich
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Montreal
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-3">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            <i className="ti ti-badge me-1" />Status
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Completed
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Confirmed
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />In Rental
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Rejected
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />In Progress
              </label>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
        <a href="javascript:void(0);" className="text-danger links">Clear All</a>
      </div>
    </div>
    {/* Custom Data Table */}
    <div className="custom-datatable-filter table-responsive">
      <table className="table datatable quotations-table">
        <thead className="thead-light">
          <tr>
            <th className="no-sort">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" id="select-all" />
              </div>
            </th>
            <th>CUSTOMER</th>
            <th>CAR</th>
            <th>PICK UP  DETAILS</th>
            <th>DROP OFF  DETAILS</th>
            <th>PASSENGERS</th>
            <th>PRICE</th>
            <th>STATUS</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-01.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Reuben Keen</Link>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="fw-semibold d-block">Ford Endeavour</Link>
                  <span className="fs-13">Sedan</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">12</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">13</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">02</p></td>
            <td><p className="text-gray-9 mb-0">$120</p></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1"><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1"  to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="company-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-02.jpg" alt /></Link>
                <div>
                  <Link to="company-details" className="d-block fw-semibold" >William Jones</Link>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-02.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Ferrari 458 MM</Link>
                  <span className="fs-13">Convertible</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">12</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">13</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">03</p></td>
            <td><p className="text-gray-9 mb-0">$140</p></td>
            <td>
              <span className="badge badge-soft-success  d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1"><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1"  to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="company-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-03.jpg" alt /></Link>
                <div>
                  <Link to="company-details" className="d-block fw-semibold" >Leonard Jandreau</Link>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-03.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Ford Mustang </Link>
                  <span className="fs-13">Coupe</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">14</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Los Angeles</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">15</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">04</p></td>
            <td><p className="text-gray-9 mb-0">$200</p></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1"  to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-04.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold">Adam Bolden</Link>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Toyota Tacoma 4</Link>
                  <span className="fs-13">Hatchback</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">14</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Houston</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">14</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">02</p></td>
            <td><p className="text-gray-9 mb-0">$210</p></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1"><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1" to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="company-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-05.jpg" alt /></Link>
                <div>
                  <Link to="company-details" className="d-block fw-semibold">Harvey Jimenez</Link>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-05.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Chevrolet Truck	</Link>
                  <span className="fs-13">Sedan</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">14</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Phoenix</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">15</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">04</p></td>
            <td><p className="text-gray-9 mb-0">$180</p></td>
            <td>
              <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Rejected	
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link  to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-06.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >William Ward</Link>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Etios Carmen	</Link>
                  <span className="fs-13">Hatchback</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">14</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Philadelphia</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">15</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">02</p></td>
            <td><p className="text-gray-9 mb-0">$160</p></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link  to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-07.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Norman Coleman</Link>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details"a className="d-block fw-semibold" >Acura Sport </Link>
                  <span className="fs-13">Crossover</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">14</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Philadelphia</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">15</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">01</p></td>
            <td><p className="text-gray-9 mb-0">$150</p></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1"><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="company-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-08.jpg" alt /></Link>
                <div>
                  <Link to="company-details" className="d-block fw-semibold" >Jay Beckman</Link>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details"  className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-08.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Kia Soul 2016</Link>
                  <span className="fs-13">Delivery</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">04</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Philadelphia</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">06</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">02</p></td>
            <td><p className="text-gray-9 mb-0">$200</p></td>
            <td>
              <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Rejected
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1"  to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-09.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Francis Harris</Link>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-09.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Camaro</Link>
                  <span className="fs-13">Station Wagon</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">04</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Philadelphia</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">06</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">04</p></td>
            <td><p className="text-gray-9 mb-0">$140</p></td>
            <td>
              <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Rejected
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1"><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1"  to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="company-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-10.jpg" alt /></Link>
                <div>
                  <Link to="company-details" className="d-block fw-semibold" >Renaldo Labarre</Link>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-10.jpg" alt /></Link>
                <div>
                  <Link Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Toyota Camry</Link>
                  <span className="fs-13">Mini Van</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">04</h5>
                  <span className="fw-medium fs-12 bg-light p-1 rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Philadelphia</p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                  <h5 className="mb-2">06</h5>
                  <span className="fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                </div>
                <div>
                  <p className="text-gray-9 mb-0">Newyork </p>
                  <span className="fs-13">01:00 PM</span>
                </div>
              </div>
            </td>
            <td><p className="text-gray-9 mb-0">03</p></td>
            <td><p className="text-gray-9 mb-0">$170</p></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Approved
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/quotation-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View </Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-quotations" className="dropdown-item rounded-1"><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_quotation"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-1" to="/admin-dashboard/add-reservation"><i className="ti ti-calendar me-1" />Convert to Bookings</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-send me-1" />Send</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-download me-1" />Download</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
        </tbody>
      </table>
    </div>
    {/* Custom Data Table */}
    <div className="table-footer" />			
  </div>
</div>

  )
}

export default AdminQuotations
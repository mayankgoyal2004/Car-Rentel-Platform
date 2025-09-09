import React from 'react'
import { Link } from 'react-router-dom'

const EarningReports = () => {
  return (
<div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Earnings Reports</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard" >Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Reports</li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="mb-2 me-2">
          <a href="javascript:void(0);" className="btn btn-white d-flex align-items-center"><i className="ti ti-printer me-2" />Print</a>
        </div>
        <div className="mb-2">
          <div className="dropdown">
            <a href="javascript:void(0);" className="btn btn-dark d-inline-flex align-items-center">
              <i className="ti ti-upload me-1" />Export
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Charts */}
    <div className="row">
      {/* Total Earnings */}
      <div className="col-xl-12 d-flex">
        <div className="row flex-fill earnings-report">
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                  <div>
                    <span className="fs-14 fw-normal text-truncate mb-1">Total Earnings</span>
                    <h5>$45,000</h5>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-orange border border-primary">
                    <span className="text-primary"><i className="ti ti-currency-dollar text-white" /></span>
                  </a>
                </div>
                <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                  <span className="text-success fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />+12%
                  </span> from Last Month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                  <div>
                    <span className="fs-14 fw-normal text-truncate mb-1">Revenue Breakdown</span>
                    <h5>$11,000</h5>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-success border border-success">
                    <span className="text-primary"><i className="ti ti-chart-donut-4 text-white" /></span>
                  </a>
                </div>
                <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                  <span className="text-success fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />+21.99%
                  </span> from Last Month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                  <div>
                    <span className="fs-14 fw-normal text-truncate mb-1">Net Profit</span>
                    <h5>$34,000</h5>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-info border border-info">
                    <span className="text-primary"><i className="ti ti-stairs-up text-white" /></span>
                  </a>
                </div>
                <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                  <span className="text-success fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />+19.26%
                  </span> from Last Month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                  <div>
                    <span className="fs-14 fw-normal text-truncate mb-1">Top Performing Vehicles</span>
                    <h5>Tesla: $950</h5>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-danger border border-danger">
                    <span className="text-primary"><i className="ti ti-car text-white" /></span>
                  </a>
                </div>
                <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                  <span className="text-success fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />+19.26%
                  </span> from Last Month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
      {/* Total Earnings */}
      <div className="col-xl-8 d-flex">
        <div className="card flex-fill earnings-chart">
          <div className="card-header border-0 pb-0">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center ">
                <span className="avatar avatar-md avatar-rounded bg-orange-transparent border-orange me-2"><i className="ti ti-currency-dollar text-orange" /></span>
                <h5>Total Earnings </h5>
              </div>
              <div className="earning-square d-flex align-items-center">
                <span className="me-2" />
                <p className="fs-12 text-gray-5">Earnings</p>
              </div>
            </div>
          </div>
          <div className="card-body py-0">
            <div id="expense-analysis" />
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
      {/* Total Earnings */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill earnings-chart">
          <div className="card-header border-0 pb-0">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center ">
                <span className="avatar avatar-md avatar-rounded bg-success-transparent border-success me-2"><i className="ti ti-currency-dollar text-success" /></span>
                <h5>Earnings Breakdown</h5>
              </div>
            </div>
          </div>
          <div className="card-body py-0">
            <div id="project-report" />
            <div>
              <ul className="breakdown-reports">
                <li>
                  <p className="text-gray-9 fs-10 d-flex align-items-center mb-0"><i className="ti ti-point-filled text-purple" />Rental Charges</p>
                  <span className="fs-10 text-gray-5">$11,000</span>
                </li>
                <li>
                  <p className="text-gray-9 fs-10 d-flex align-items-center mb-0"><i className="ti ti-point-filled text-orange" />Late Fees &amp; Extras</p>
                  <span className="fs-10 text-gray-5">$2,500</span>
                </li>
                <li>
                  <p className="text-gray-9 fs-10 d-flex align-items-center mb-0"><i className="ti ti-point-filled text-teal" />Maintenance Charges Collected</p>
                  <span className="fs-10 text-gray-5">$1,500</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
    </div>
    {/* /Charts */}
    {/* Table Header */}
    <div>
      <h5 className="mb-3">Earnings</h5>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />INVOICE NO</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />NAME</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />AMOUNT</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />PAYMENT METHOD</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />DATE</span>
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
    </div>
    {/* /Table Header */}
    <div className="collapse" id="filtercollapse">
      <div className="filterbox mb-3 d-flex align-items-center">
        <h6 className="me-3">Filters</h6>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Payment Method
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Credit Card
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Debit Card
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />PayPal
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Bank Transfer
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Digital Payment
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Status
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Pending
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Refunded
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Failed
              </label>
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
            <th>INVOICE NO</th>
            <th>NAME</th>
            <th>AMOUNT</th>
            <th>PAYMENT METHOD</th>
            <th>DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12345</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-20.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Andrew Simons </Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$120.00</p>
            </td>
            <td>
              <p className="text-gray-9">Credit Card</p>
            </td>
            <td>
              <p className="text-gray-9">24 Jan 2025</p>
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12346</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-21.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >David Steiger</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$85.00</p>
            </td>
            <td>
              <p className="text-gray-9">Debit Card</p>
            </td>
            <td>
              <p className="text-gray-9">19 Dec 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-info" />Pending</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details" href="invoice-details.html">#INV12347</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-12.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Virginia Phu</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$250.00</p>
            </td>
            <td>
              <p className="text-gray-9">PayPal</p>
            </td>
            <td>
              <p className="text-gray-9">11 Dec 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12348</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-22.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Walter Hartmann</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$175.00</p>
            </td>
            <td>
              <p className="text-gray-9">Bank Transfer</p>
            </td>
            <td>
              <p className="text-gray-9">29 Nov 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-purple d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-purple" />Refunded</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12349</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-07.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Andrea Jermaine</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$200.00</p>
            </td>
            <td>
              <p className="text-gray-9">Digital Payment</p>
            </td>
            <td>
              <p className="text-gray-9">03 Nov 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12350</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-05.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Dennis Eckhardt</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$90.00</p>
            </td>
            <td>
              <p className="text-gray-9">Credit Card</p>
            </td>
            <td>
              <p className="text-gray-9">31 Oct 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-info" />Pending</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12351</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-25.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Lan Adams</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$160.00</p>
            </td>
            <td>
              <p className="text-gray-9">Debit Card</p>
            </td>
            <td>
              <p className="text-gray-9">15 Oct 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12352</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-08.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Ann Crump</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$180.00</p>
            </td>
            <td>
              <p className="text-gray-9">PayPal</p>
            </td>
            <td>
              <p className="text-gray-9">26 Sep 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-danger" />Failed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12353</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-07.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Julie Black</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$230.00</p>
            </td>
            <td>
              <p className="text-gray-9">Bank Transfer</p>
            </td>
            <td>
              <p className="text-gray-9">01 Sep 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <Link to="/admin-dashboard/invoice-details">#INV12354</Link>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-16.jpg" alt /></Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details" >Jean Walker</Link></h6>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9">$300.00</p>
            </td>
            <td>
              <p className="text-gray-9">Digital Payment</p>
            </td>
            <td>
              <p className="text-gray-9">15 Aug 2024</p>
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
        </tbody>
      </table>
    </div>
  </div>			
</div>

  )
}

export default EarningReports
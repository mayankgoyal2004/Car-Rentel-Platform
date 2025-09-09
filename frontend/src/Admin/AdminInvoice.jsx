import React from 'react'
import { Link } from 'react-router-dom'

const AdminInvoice = () => {
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
              <li className="breadcrumb-item active" aria-current="page">Invoices</li>
            </ol>
          </nav>
        </div>
        <div>
          <Link to="add-invoice" className="btn btn-primary d-inline-flex align-items-center"><i className="ti ti-plus me-1" />Add Invoice</Link>
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
          <div className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-badge me-1" /> Status
            </a>
            <ul className="dropdown-menu  dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Paid</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Pending</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Overdue</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Unpaid</a>
              </li>
            </ul>
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
                    <span><i className="ti ti-grip-vertical me-1" />EMAIL</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CREATED DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />DUE DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />INVOICE AMOUNT</span>
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
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12345</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-20.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Andrew Simons</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c6a7a8a2b4a3b186a3bea7abb6aaa3e8a5a9ab">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">24 Jan 2025</p>
                  <span className="text-gray-5">01:00 PM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">24 Jan 2025</p>
                  <span className="text-gray-5">01:00 PM</span>
                </div>
              </td>
              <td>$120.00</td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Paid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12346</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-21.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">David Steiger</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7f1b1e09161b3f1a071e120f131a511c1012">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">19 Dec 2024</p>
                  <span className="text-gray-5">10:00 AM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">19 Dec 2024</p>
                  <span className="text-gray-5">10:00 AM</span>
                </div>
              </td>
              <td>$85.00</td>
              <td>
                <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Pending
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12347</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-12.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Virginia Phu</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="aedec6dbeecbd6cfc3dec2cb80cdc1c3">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">11 Dec 2024</p>
                  <span className="text-gray-5">08:30 AM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">11 Dec 2024</p>
                  <span className="text-gray-5">08:30 AM</span>
                </div>
              </td>
              <td>$120.00</td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Paid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12348</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-22.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Walter Hartmann</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9aedfbf6eeffe8daffe2fbf7eaf6ffb4f9f5f7">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">29 Nov 2024</p>
                  <span className="text-gray-5">03:15 PM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">29 Nov 2024</p>
                  <span className="text-gray-5">03:15 PM</span>
                </div>
              </td>
              <td>$175.00</td>
              <td>
                <span className="badge bg-violet-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Overdue
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12349</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-08.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Andrea Jermaine</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ef858a9d828e86818aaf8a978e829f838ac18c8082">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">03 Nov 2024</p>
                  <span className="text-gray-5">04:10 PM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">03 Nov 2024</p>
                  <span className="text-gray-5">04:10 PM</span>
                </div>
              </td>
              <td>$200.00</td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Paid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12350</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-05.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Dennis Eckhardt</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bedadbd0d0d7cdfedbc6dfd3ced2db90ddd1d3">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">31 Oct 2024</p>
                  <span className="text-gray-5">11:00 AM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">31 Oct 2024</p>
                  <span className="text-gray-5">11:00 AM</span>
                </div>
              </td>
              <td>$90.00</td>
              <td>
                <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Pending
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12351</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-25.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Lan Adams</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="58343936183d20393528343d763b3735">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">15 Oct 2024</p>
                  <span className="text-gray-5">09:40 AM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">15 Oct 2024</p>
                  <span className="text-gray-5">09:40 AM</span>
                </div>
              </td>
              <td>$160.00</td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Paid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12352</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-17.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Ann Crump</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b7d4c5c2dac7f7d2cfd6dac7dbd299d4d8da">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">26 Sep 2024</p>
                  <span className="text-gray-5">02:30 PM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">26 Sep 2024</p>
                  <span className="text-gray-5">02:30 PM</span>
                </div>
              </td>
              <td>$180.00</td>
              <td>
                <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Unpaid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12353</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-07.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Julie Black</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8fe5fae3e6eacfeaf7eee2ffe3eaa1ece0e2">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">01 Sep 2024</p>
                  <span className="text-gray-5">05:20 PM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">01 Sep 2024</p>
                  <span className="text-gray-5">05:20 PM</span>
                </div>
              </td>
              <td>$230.00</td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Paid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td><Link to= "/admin-dashboard/invoice-details" className="fs-12 fw-medium">#INV12354</Link></td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to= "/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-26.jpg" alt="User Img" /></Link>
                  <div>
                    <h6 className="fs-14"><Link to= "/admin-dashboard/customer-details">Jean Walker</Link></h6>
                  </div>
                </div>
              </td>
              <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="335956525d73564b525e435f561d505c5e">[email&nbsp;protected]</a></td>
              <td>
                <div>
                  <p className="mb-0">15 Aug 2024</p>
                  <span className="text-gray-5">09:30 AM</span>
                </div>
              </td>
              <td>
                <div>
                  <p className="mb-0">15 Aug 2024</p>
                  <span className="text-gray-5">09:30 AM</span>
                </div>
              </td>
              <td>$300.00</td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Paid
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link to="/admin-dashboard/edit-invoice" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* /Page Wrapper */}
  {/* Delete Modal  */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Invoice</h4>
          <p className="mb-3">Are you sure you want to delete Invoice?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/all-invoice"  className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal*/}
</div>

  )
}

export default AdminInvoice
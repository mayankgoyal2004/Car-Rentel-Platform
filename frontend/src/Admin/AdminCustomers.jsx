import React from 'react'
import { Link } from 'react-router-dom'

const AdminCustomers = () => {
  return (
 <div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">Customers</h4>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashBoard">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Customers</li>
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
          <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_client"><i className="ti ti-plus me-2" />Add New Client</a>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    <div className="d-flex align-items-center mb-4">
      <a href="all-customers" className="btn bg-secondary-transparent me-3"><i className="ti ti-user me-1" />Clients</a>
      <Link to="/admin-dashboard/customer-companies" className="btn btn-white"><i className="ti ti-building me-1" />Companies</Link>
    </div>
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
            <i className="ti ti-filter me-1" /> Filter<span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
          </a>
        </div>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
            <i className="ti ti-edit-circle me-1" /> Bulk Actions
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
                  <span><i className="ti ti-grip-vertical me-1" />EMAIL</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />LANGUAGE</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />DOCUMENTS</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />RENTS</span>
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
            Language
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
                <input className="form-check-input m-0 me-2" type="checkbox" />English
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Italian
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />French
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />German
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Hindi
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Bengali
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Chinese
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Arabic
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Japanese
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Russian
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
      <table className="table datatable">
        <thead className="thead-light">
          <tr>
            <th className="no-sort">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" id="select-all" />
              </div>
            </th>
            <th>CUSTOMER</th>
            <th>EMAIL</th>
            <th>LANGUAGE</th>
            <th>DOCUMENTS</th>
            <th>RENTS</th>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-11.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Andrew Simons</Link></h6>
                  <p>+1 56598 98956</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e5848b81978092968c888a8b96a5809d8488958980cb868a88">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/gb.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">English</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p className="text-info">Show Documents</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-car" /></span>
                <p className="text-violet">Recent Rents</p>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1"><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-12.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">David Steiger</Link></h6>
                  <p>+1 24558 56599</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="234742554a475057464a44465163465b424e534f460d404c4e">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/it-flag.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">Italian</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p className="text-info">Show Documents</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-car" /></span>
                <p className="text-violet">Recent Rents</p>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-13.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Darin Mabry</Link></h6>
                  <p>+1 24558 56599</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="31555043585f5c50534348715449505c415d541f525e5c">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/fr-flag.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">French</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p>No Documents</p>
              </div>
            </td>
            <td />
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-14.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Mark Neiman</Link></h6>
                  <p>+1 56598 98956</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d5b8b4a7bebbb0bcb8b4bb95b0adb4b8a5b9b0fbb6bab8">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/gb.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">English</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p className="text-info">Show Documents</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-car" /></span>
                <p className="text-violet">Recent Rents</p>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-15.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Jacob Johnson</Link></h6>
                  <p>+1 56598 98956</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e18b80828e838b8e898f928e8fa18499808c918d84cf828e8c">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/de.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">German</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p>No Documents</p>
              </div>
            </td>
            <td />
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-16.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Walter Hartmann</Link></h6>
                  <p>+1 24558 56599</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="156274796170677d74676178747b7b55706d74786579703b767a78">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/it-flag.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">Italian</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p className="text-info">Show Documents</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-car" /></span>
                <p className="text-violet">Recent Rents</p>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-17.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Andrea Jermaine</Link></h6>
                  <p>+1 12488 14457</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="43222d273126222926312e222a2d2603263b222e332f266d202c2e">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/gb.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">English</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p>No Documents</p>
              </div>
            </td>
            <td> </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-18.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Dennis Eckhardt</Link></h6>
                  <p>+1 32569 15458</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b8dcddd6d6d1cbdddbd3d0d9cadcccf8ddc0d9d5c8d4dd96dbd7d5">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/it-flag.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">Italian</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p className="text-info">Show Documents</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-car" /></span>
                <p className="text-violet">Recent Rents</p>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details" className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-19.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Lan Adams</Link></h6>
                  <p>+1 14782 14578</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0f636e616e6b6e627c4f6a776e627f636a216c6062">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/fr-flag.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">French</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p>No Documents</p>
              </div>
            </td>
            <td>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/customer-details"  className="avatar rounded-circle me-2 flex-shrink-0">
                  <img src="/admin-assets/img/customer/customer-20.jpg" className="rounded-circle" alt="img" />
                </Link>
                <div>
                  <h6 className="fs-14 fw-semibold"><Link to="/admin-dashboard/customer-details">Julie Black</Link></h6>
                  <p>+1 12124 14255</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="107a657c7975727c71737b507568717d607c753e737f7d">[email&nbsp;protected]</a></p>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                  <img src="/admin-assets/img/flags/gb.svg" className="rounded-circle" alt="img" />
                </a>
                <p className="text-gray-9">English</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-file-text" /></span>
                <p className="text-info">Show Documents</p>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="table-icon me-2"><i className="ti ti-car" /></span>
                <p className="text-violet">Recent Rents</p>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/customer-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="ti ti-edit me-1" />Edit</a>
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

  )
}

export default AdminCustomers
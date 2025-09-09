import React from 'react'
import { Link } from 'react-router-dom'

const AdminCustomersCumpanies = () => {
  return (
   <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Customers</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
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
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_company"><i className="ti ti-plus me-2" />Add New Company</a>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="d-flex align-items-center mb-4">
        <a href="customers.html" className="btn btn-white me-3"><i className="ti ti-user me-1" />Clients</a>
        <a href="customers-companies.html" className="btn bg-secondary-transparent"><i className="ti ti-building me-1" />Companies</a>
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
              <th>COMPANY</th>
              <th>CONTACT DETAILS</th>
              <th>EMAIL</th>
              <th>LANGUAGE</th>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-1.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Elite Solutions</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-11.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Andrew Simons</a></h6>
                    <p>+1 56598 98956</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0f6e616b7d6a787c666260617c4f6a776e627f636a216c6062">[email&nbsp;protected]</a> </p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-2.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Violet Photography</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-12.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">David Steiger</a></h6>
                    <p>+1 24558 56599</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4b0b5a2bdb0a7a0b1bdb3b1a694b1acb5b9a4b8b1fab7bbb9">[email&nbsp;protected]</a></p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-3.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Dynasty</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-13.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Darin Mabry</a></h6>
                    <p>+1 24558 56599</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c080d1e0502010d0e1e152c09140d011c0009420f0301">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                    <img src="/admin-assets/img/flags/fr-flag.svg" className="rounded-circle" alt="img" />
                  </a>
                  <p className="text-gray-9">French</p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-4.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Flame Quill</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-14.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Mark Neiman</a></h6>
                    <p>+1 56598 98956</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d707c6f76737874707c735d78657c706d7178337e7270">[email&nbsp;protected]</a></p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-5.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Quill Pen Finance</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-15.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Jacob Johnson</a></h6>
                    <p>+1 56598 98956</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddb7bcbeb2bfb7b2b5b3aeb2b39db8a5bcb0adb1b8f3beb2b0">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                    <img src="/admin-assets/img/flags/de-flag.svg" className="rounded-circle" alt="img" />
                  </a>
                  <p className="text-gray-9">German</p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-6.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Heavenly Flow</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-16.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Walter Hartmann</a></h6>
                    <p>+1 24558 56599</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="740315180011061c15060019151a1a34110c15190418115a171b19">[email&nbsp;protected]</a></p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-7.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Butterfly Creative</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-17.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Andrea Jermaine</a></h6>
                    <p>+1 12488 14457</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bbdad5dfc9dedad1dec9d6dad2d5defbdec3dad6cbd7de95d8d4d6">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-xxs rounded-circle me-1 flex-shrink-0">
                    <img src="/admin-assets/img/flags/gb.svg" className="rounded-circle" alt="img" />
                  </a>
                  <p className="text-gray-9">English</p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-8.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Sand Studios</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-18.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Dennis Eckhardt</a></h6>
                    <p>+1 32569 15458</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f397969d9d9a809690989b92819787b3968b929e839f96dd909c9e">[email&nbsp;protected]</a></p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-9.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Colibri Solutions</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-19.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Lan Adams</a></h6>
                    <p>+1 14782 14578</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e38f828d8287828e90a3869b828e938f86cd808c8e">[email&nbsp;protected]</a></p>
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
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
                  <a href="company-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/companies/company-10.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="company-details.html">Bishu Infotech</a></h6>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="customer-details.html" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/customer/customer-20.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="customer-details.html">Julie Black</a></h6>
                    <p>+1 12124 14255</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d0baa5bcb9b5b2bcb1b3bb90b5a8b1bda0bcb5feb3bfbd">[email&nbsp;protected]</a></p>
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
                      <a className="dropdown-item rounded-1" href="company-details.html"><i className="ti ti-eye me-1" />View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_company"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="add-reservation.html"><i className="ti ti-calendar me-1" />Book a Car</a>
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
  {/* /Main Wrapper */}
  {/* Add Company */}
  <div className="modal fade" id="add_company">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Company</h5>
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
                <label className="form-label">Company Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Contact Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
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
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Website <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea className="form-control" defaultValue={""} />
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
  {/* /Add Company */}
  {/* Edit Company */}
  <div className="modal fade" id="edit_company">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Company</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                  <img src="/admin-assets/img/companies/Toyota.jpg" className="img-fluid rounded" alt="img" />
                  <span className="avatar-badge bg-light text-danger m-1"><i className="ti ti-trash" /></span>
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
                <label className="form-label">Company Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="TechNova Solutions" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Contact Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Andrew Simons" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone2" name="phone2" className="form-control" defaultValue="+1 56598 98956" />
              </div>
            </div>            
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="andr72@example.com" />
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Language <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>English</option>
                  <option>German</option>
                  <option>Frence</option>
                </select>
              </div>
            </div>          
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Website <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="https://www.example.com" />
              </div>
            </div>   
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="2881 Jarvis Street" />
              </div>
            </div>   
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea className="form-control" defaultValue={""} />
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
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Company */}
  {/* Delete  */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Client</h4>
          <p className="mb-3">Are you sure you want to delete Client?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/customer-companies" className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdminCustomersCumpanies
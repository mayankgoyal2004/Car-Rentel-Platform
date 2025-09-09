import React from 'react'
import { Link } from 'react-router-dom'

const AdminAllUser = () => {
  return (
  <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Users</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Users</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2">
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_user"><i className="ti ti-plus me-2" />Add User</a>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />USER</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />PHONE</span>
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
                    <span><i className="ti ti-grip-vertical me-1" />ROLE</span>
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
              <span className="badge badge-xs rounded-pill bg-success me-2">3</span>Roles
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
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />Admin
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />Manager
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Accountant
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />Customer
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Inspector
                </label>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Status
            </a>
            <ul className="dropdown-menu dropdown-menu-md p-2">
              <li className="dropdown-item">
                Active
              </li>
              <li className="dropdown-item">
                Inactive
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
              <th>USER</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-20.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details"  className="fs-14 fw-semibold">Andrew Simons</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+1 555 123 4567</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1a7b747e687f6d5a7f627b776a767f34797577">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Admin</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-21.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">David Steiger</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+44 7911 123456</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="533732253a3713362b323e233f367d303c3e">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Manager</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-12.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Virginia Phu</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+33 612 345678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2858405d684d50494558444d064b4745">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Customer</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-22.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Walter Hartmann</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+61 412 345 678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="493e28253d2c3b092c31282439252c672a2624">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Accountant</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-27.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Andrea Jermaine</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+91 98765 43210</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c6aca3b4aba7afa8a386a3bea7abb6aaa3e8a5a9ab">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Inspector</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-05.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Dennis Eckhardt</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+49 171 2345678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ed89888383849ead88958c809d8188c38e8280">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Admin</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-25.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Lan Adams</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+81 90 1234 5678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="98f4f9f6d8fde0f9f5e8f4fdb6fbf7f5">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Manager</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-28.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Ann Crump</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+34 612 345678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a2c1d0d7cfd2e2c7dac3cfd2cec78cc1cdcf">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Customer</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-07.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Julie Black</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+55 1987654321</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0a607f66636f4a6f726b677a666f24696567">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Accountant</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt />
                  </Link>
                  <h6><Link to="/admin-dashboard/customer-details" className="fs-14 fw-semibold">Jean Walker</Link></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+27 82 12364567</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b5dfd0d4dbf5d0cdd4d8c5d9d09bd6dad8">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">Inspector</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Add User */}
  <div className="modal fade" id="add_user">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create User</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3">                                                
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
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">User <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Role <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Customer</option>
                  <option>Inspector</option>
                </select>
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone" name="phone" className="form-control" />
              </div>
            </div> 
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Current Password <span className="text-danger">*</span></label>
                <div className="pass-group">
                  <input type="password" className="pass-inputs form-control" />
                  <span className="ti toggle-passwords ti-eye-off" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Confirm New Password <span className="text-danger">*</span></label>
                <div className="pass-group">
                  <input type="password" className="form-control pass-inputa" />
                  <span className="ti toggle-passworda ti-eye-off" />
                </div>
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
  {/* /Add User */}
  {/* Edit User */}
  <div className="modal fade" id="edit_user">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit User</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3">                                                
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                  <img src="/admin-assets/img/profiles/avatar-20.jpg" className="img-fluid rounded" alt="img" />
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
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">User <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Andrew Simmons" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Role <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>Admin</option>
                  <option>Manager</option>
                  <option>Customer</option>
                  <option>Inspector</option>
                </select>
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="andrew@example.com" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone2" name="phone2" className="form-control" defaultValue="+1 555 123 4567" />
              </div>
            </div> 
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Current Password <span className="text-danger">*</span></label>
                <div className="pass-group">
                  <input type="password" className="pass-inputs form-control" defaultValue={12345678} />
                  <span className="ti toggle-passwords ti-eye-off" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Confirm New Password <span className="text-danger">*</span></label>
                <div className="pass-group">
                  <input type="password" className="form-control pass-inputa" defaultValue={12345678} />
                  <span className="ti toggle-passworda ti-eye-off" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="form-check form-check-md form-switch me-2">
              <label className="form-check-label form-label mt-0 mb-0">
                <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                Status
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-primary">Save Changes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit User */}
  {/* Delete  */}
  <div className="modal fade" id="delete_user">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
          <i className="ti ti-trash-x fs-26" />
        </span>
        <h4 className="mb-1">Delete User</h4>
        <p className="mb-3">Are you sure you want to delete user?</p>
        <div className="d-flex justify-content-center">
          <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
          <Link to="all-user" className="btn btn-primary">Yes, Delete</Link>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>

  )
}

export default AdminAllUser